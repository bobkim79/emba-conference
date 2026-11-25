'use strict';
// GET: 올라온 글 목록 (공개, 이메일은 내보내지 않음) · ?mine=1 (로그인) 은 내 글 id 표시
// DELETE: ?id=… 본인 글 또는 관리자만 삭제
const { list, del } = require('@vercel/blob');
const L = require('./_lib');

async function all() {
  const out = [];
  const r = await list({ prefix: 'posts/', limit: 120 });
  await Promise.all(r.blobs.map(async b => {
    try { const j = await (await fetch(b.url)).json(); j._u = b.url; out.push(j); } catch (e) {}
  }));
  out.sort((a, b) => b.at - a.at);
  return out;
}

module.exports = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const url = new URL(req.url, 'http://x');
      const s = url.searchParams.get('mine') ? L.sessionFrom(req) : null;
      const posts = await all();
      if (s) {
        const mine = posts.filter(p => p.by === s.e || s.adm).map(p => ({ id: p.id, type: p.type, t: p.t, at: p.at }));
        return L.send(res, 200, { ok: true, mine });
      }
      const pub = posts.map(p => { const { by, _u, ...rest } = p; return rest; });
      return L.send(res, 200, { ok: true, posts: pub }, 'public, s-maxage=30, stale-while-revalidate=300');
    }
    if (req.method === 'DELETE') {
      const s = L.sessionFrom(req);
      if (!s) return L.send(res, 401, { ok: false, error: 'login' });
      const id = String(new URL(req.url, 'http://x').searchParams.get('id') || '').replace(/[^a-f0-9]/g, '');
      if (!id) return L.send(res, 400, { ok: false });
      const p = (await all()).find(x => x.id === id);
      if (!p) return L.send(res, 404, { ok: false });
      if (p.by !== s.e && !s.adm) return L.send(res, 403, { ok: false });
      const urls = [p._u].concat((p.p || []).flatMap(x => [x.u, x.t])).concat((p.f || []).map(x => x.u));
      if (p.url && L.blobUrl(p.url)) urls.push(p.url);
      await del(Array.from(new Set(urls)).filter(Boolean));
      return L.send(res, 200, { ok: true });
    }
    return L.send(res, 405, { ok: false });
  } catch (e) { return L.send(res, 500, { ok: false, error: 'server' }); }
};
