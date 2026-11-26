'use strict';
// 미리보기를 확인한 내용을 사이트에 올린다. 이력 업데이트는 로그인한 본인 이메일의 명단 행만 고친다.
const { put } = require('@vercel/blob');
const L = require('./_lib');

const WRITER = process.env.PROFILE_WRITER_URL || '';
const WRITER_SECRET = process.env.PROFILE_WRITER_SECRET || '';

module.exports = async (req, res) => {
  if (req.method !== 'POST') return L.send(res, 405, { ok: false });
  const s = L.sessionFrom(req);
  if (!s) return L.send(res, 401, { ok: false, error: 'login' });
  if (L.limited('pub:' + s.e, 30, 60 * 60 * 1000)) return L.send(res, 429, { ok: false, error: 'too_many' });
  const b = await L.readJson(req, 60 * 1024);
  const type = String(b.type || ''), d = b.data || {};

  try {
    if (type === 'profile') {
      if (!WRITER || !WRITER_SECRET) return L.send(res, 500, { ok: false, error: 'no_writer' });
      const f = { co: L.clean(d.co, 60), job: L.clean(d.job, 40), desc: L.clean(d.desc, 120), web: L.okUrl(d.web) || L.clean(d.web, 100) };
      const fields = {}; ['co', 'job', 'desc', 'web'].forEach(k => { if (f[k]) fields[k] = f[k]; });
      if (!Object.keys(fields).length) return L.send(res, 400, { ok: false, error: 'empty' });
      // 이메일은 로그인 세션에서만 가져온다. 화면에서 받은 이메일은 쓰지 않는다 → 본인 행만 수정 가능
      const r = await fetch(WRITER, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, redirect: 'follow',
        body: JSON.stringify({ secret: WRITER_SECRET, email: s.e, fields, by: s.n }) });
      const j = await r.json();
      if (!j.ok) return L.send(res, 200, { ok: false, error: j.error || 'writer' });
      return L.send(res, 200, { ok: true, updated: j.updated || Object.keys(fields) });
    }

    const id = L.rid();
    const now = Date.now();
    const rec = { id, type, by: s.e, byName: s.n, at: now };
    if (type === 'care') {
      rec.k = d.k === 'sad' ? 'sad' : 'ok';
      rec.gen = /^\d{1,2}기$/.test(String(d.gen || '')) ? d.gen : (s.g || '');
      rec.name = L.clean(d.name, 12) || s.n;
      rec.t = L.clean(d.t, 16);
      rec.rows = (Array.isArray(d.rows) ? d.rows : []).slice(0, 4).map(r => [L.clean(r[0], 8), L.clean(r[1], 80)]).filter(r => r[0] && r[1]);
      rec.note = L.clean(d.note, 60);
      const files = (Array.isArray(b.files) ? b.files : []).slice(0, 5).map(x => ({ u: L.blobUrl(x.u), n: L.clean(x.n, 60) })).filter(x => x.u);
      rec.url = L.okUrl(d.url) || (files[0] && files[0].u) || '';
      rec.cta = rec.url ? (L.clean(d.cta, 12) || (files[0] ? '첨부 파일' : '자세히 보기')) : '';
      if (!rec.t) return L.send(res, 400, { ok: false, error: 'empty' });
    } else if (type === 'gallery') {
      rec.t = L.clean(d.t, 40);
      rec.d = /^\d{4}\.\d{2}\.\d{2}$/.test(String(d.d || '')) ? d.d : new Date(now + 9 * 3600e3).toISOString().slice(0, 10).replace(/-/g, '.');
      rec.s = L.clean(d.s, 200);
      rec.h = /동문회/.test(String(d.h || '')) || /동문회\s*(가\s*)?주관/.test(rec.s) ? '동문회' : (function (x) { x = String(x || '').replace(/\s*(대|기)(\s*학회)?(\s*주관)?$/, '').trim(); return L.genAtDate(rec.d) || (/^\d{1,2}$/.test(x) ? x + '대' : '') })(d.h);
      const caps = Array.isArray(d.captions) ? d.captions : [];
      rec.p = (Array.isArray(b.photos) ? b.photos : []).slice(0, 20).map((x, i) => ({ u: L.blobUrl(x.u), t: L.blobUrl(x.t) || L.blobUrl(x.u), c: L.clean(caps[i], 40) })).filter(x => x.u);
      rec.f = (Array.isArray(b.files) ? b.files : []).slice(0, 5).map(x => ({ u: L.blobUrl(x.u), n: L.clean(x.n, 60) })).filter(x => x.u);
      if (!rec.t || !rec.p.length) return L.send(res, 400, { ok: false, error: 'empty' });
    } else return L.send(res, 400, { ok: false });

    // 새 글이 위로 오도록 시간 역순 이름을 쓴다
    const path = 'posts/' + String(9999999999999 - now).padStart(13, '0') + '-' + id + '.json';
    await put(path, JSON.stringify(rec), { access: 'public', contentType: 'application/json', addRandomSuffix: false });
    return L.send(res, 200, { ok: true, id });
  } catch (e) { return L.send(res, 500, { ok: false, error: 'server' }); }
};
