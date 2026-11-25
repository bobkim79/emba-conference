'use strict';
// 명단 이메일 인증번호(기존 Apps Script)를 그대로 사용하고, 올릴 권한이 있는지 여기서 한 번 더 확인한다.
const L = require('./_lib');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return L.send(res, 405, { ok: false });
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'ip';
  if (L.limited('auth:' + ip, 20, 10 * 60 * 1000)) return L.send(res, 429, { ok: false, error: 'too_many' });
  const b = await L.readJson(req, 4 * 1024);
  const email = L.clean(b.email, 120).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return L.send(res, 400, { ok: false, error: 'bad_email' });

  try {
    if (b.action === 'send') {
      const d = await L.rosterPost({ action: 'send', email });
      return L.send(res, 200, { ok: !!d.ok, error: d.error });
    }
    if (b.action === 'verify') {
      // 서버 설정이 빠져 있으면 인증번호를 쓰기 전에 알려 준다 (번호가 소진되지 않게)
      if (!process.env.SESSION_SECRET) return L.send(res, 200, { ok: false, error: 'no_secret' });
      const d = await L.rosterPost({ action: 'verify', email, code: L.clean(b.code, 8) });
      if (!d || !d.ok) return L.send(res, 200, { ok: false, error: d && d.error, left: d && d.left });
      // 명단에서 이 이메일의 행(기수·직책·이름)을 찾는다. (공개 명단과 비공개 명단은 같은 순서)
      const pub = await L.rosterPublic();
      const priv = d.members || [];
      let idx = -1;
      for (let i = 0; i < priv.length; i++) {
        const p = priv[i];
        if (p && String(p.email || '').trim().toLowerCase() === email) { idx = i; break; }
      }
      const m = idx >= 0 ? pub[idx] : null;
      if (!L.canPost(m, email)) return L.send(res, 200, { ok: false, error: 'not_allowed' });
      const info = { email, name: (m && m.n) || '관리자', gen: (m && m.g) || '', role: (m && m.r) || '' };
      return L.send(res, 200, { ok: true, token: L.newSession(info), name: info.name, gen: info.gen, role: info.role, admin: L.ADMINS.includes(email) });
    }
    return L.send(res, 400, { ok: false });
  } catch (e) {
    console.error('auth error', e && e.message);
    return L.send(res, 500, { ok: false, error: 'server' });
  }
};
