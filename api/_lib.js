'use strict';
const crypto = require('crypto');

// ── 설정 ────────────────────────────────────────────────
const ROSTER_API = process.env.ROSTER_API ||
  'https://script.google.com/macros/s/AKfycbzpy6zsDu75rY2ZqlUvMX9I2NDML0OWYTS59Lzd0Utpn73Lejrw_L11hZAX0fJ7cq5M/exec';
const SECRET = process.env.SESSION_SECRET || '';
const ADMINS = list(process.env.ADMIN_EMAILS || 'bob@khu.ac.kr,ethereumlab@gmail.com');
const EXTRA = list(process.env.EXTRA_EMAILS || '');
const SESSION_MS = 2 * 60 * 60 * 1000;

function list(s) { return String(s).split(',').map(x => x.trim().toLowerCase()).filter(Boolean); }

// 현재 3학기 기수: 2026년 2학기(9월~) = 23기. 학기 시작(3월·9월)마다 1씩 올라간다.
// 환경변수 CURRENT_GEN 이 있으면 그 값을 우선한다.
function currentGen(now) {
  if (process.env.CURRENT_GEN) return parseInt(process.env.CURRENT_GEN, 10);
  const d = now || new Date(Date.now() + 9 * 3600 * 1000); // KST
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1;
  const sem = 2 * y + (m >= 9 ? 1 : (m >= 3 ? 0 : -1));
  return 23 + (sem - (2 * 2026 + 1));
}

// 날짜(YYYY.MM.DD)로 그때의 주관 기수를 추정: 6개월(3월·9월)마다 기수가 바뀐다. 2026.09~2027.02 = 23기
function genAtDate(d) {
  const m = String(d || '').match(/^(\d{4})[.\-\/](\d{1,2})/);
  if (!m) return '';
  const y = +m[1], mo = +m[2], sem = 2 * y + (mo >= 9 ? 1 : (mo >= 3 ? 0 : -1));
  const g = 23 + (sem - (2 * 2026 + 1));
  return g > 0 ? g + '기' : '';
}

// 허용 규칙: 현재 3학기 기수 전원 + 다음 기수의 회장·부회장·사무총장 (+ 관리자·추가 허용 이메일)
function canPost(member, email) {
  email = String(email || '').toLowerCase();
  if (ADMINS.includes(email) || EXTRA.includes(email)) return true;
  if (!member) return false;
  const g = parseInt(member.g, 10), cur = currentGen();
  if (!g) return false;
  if (g === cur) return true;
  if (g === cur + 1 && /(회장|사무총장|사무국장)/.test(String(member.r || ''))) return true;
  return false;
}

// ── 세션 토큰 (HMAC) ─────────────────────────────────────
function b64u(b) { return Buffer.from(b).toString('base64url'); }
function sign(payload) {
  if (!SECRET) throw new Error('no_secret');
  const body = b64u(JSON.stringify(payload));
  const sig = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
  return body + '.' + sig;
}
function verify(token) {
  try {
    if (!SECRET || !token) return null;
    const [body, sig] = String(token).split('.');
    const ok = crypto.createHmac('sha256', SECRET).update(body).digest('base64url');
    if (!sig || sig.length !== ok.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(ok))) return null;
    const p = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
    if (!p.exp || p.exp < Date.now()) return null;
    return p;
  } catch (e) { return null; }
}
function newSession(info) {
  return sign({ e: info.email, n: info.name, g: info.gen, r: info.role, adm: ADMINS.includes(info.email) ? 1 : 0, exp: Date.now() + SESSION_MS });
}
function sessionFrom(req) {
  const h = req.headers['authorization'] || '';
  return verify(h.replace(/^Bearer\s+/i, ''));
}

// ── 공통 입출력 ──────────────────────────────────────────
function send(res, code, obj, cache) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', cache || 'no-store');
  res.end(JSON.stringify(obj));
}
function readBody(req, max) {
  return new Promise((resolve, reject) => {
    const chunks = []; let n = 0;
    req.on('data', c => { n += c.length; if (n > max) { reject(new Error('too_large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
async function readJson(req, max) {
  const b = await readBody(req, max || 200 * 1024);
  try { return JSON.parse(b.toString('utf8') || '{}'); } catch (e) { return {}; }
}

// ── 간단한 요청 제한(인스턴스 메모리, 보조 수단) ─────────────
const hits = new Map();
function limited(key, max, ms) {
  const now = Date.now(), a = (hits.get(key) || []).filter(t => now - t < ms);
  a.push(now); hits.set(key, a);
  return a.length > max;
}

// ── 명단(구글 Apps Script) ───────────────────────────────
async function rosterPost(body) {
  const r = await fetch(ROSTER_API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), redirect: 'follow' });
  return r.json();
}
async function rosterPublic() {
  const r = await fetch(ROSTER_API, { redirect: 'follow' });
  const d = await r.json();
  return d && d.members ? d.members : [];
}

// ── 문자열 정리 ──────────────────────────────────────────
function clean(s, max) { return String(s == null ? '' : s).replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max || 200); }
function cleanLong(s, max) { return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim().slice(0, max || 1000); }
function okUrl(u) { try { const x = new URL(String(u)); return (x.protocol === 'https:' || x.protocol === 'http:') ? x.toString().slice(0, 500) : ''; } catch (e) { return ''; } }
function blobUrl(u) { const x = okUrl(u); return /^https:\/\/[a-z0-9-]+\.public\.blob\.vercel-storage\.com\//.test(x) ? x : ''; }
function rid() { return crypto.randomBytes(5).toString('hex'); }

module.exports = { genAtDate, ROSTER_API, ADMINS, currentGen, canPost, newSession, sessionFrom, verify, send, readBody, readJson, limited, rosterPost, rosterPublic, clean, cleanLong, okUrl, blobUrl, rid };
