'use strict';
// 사진·파일 1개를 받아 Vercel Blob에 저장한다. (본문 한도 4.5MB: 사진은 화면에서 줄여서 보낸다)
const { put } = require('@vercel/blob');
const L = require('./_lib');

const TYPES = {
  'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif',
  'application/pdf': 'pdf',
  'application/msword': 'doc', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
  'application/vnd.ms-excel': 'xls', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
  'application/vnd.ms-powerpoint': 'ppt', 'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
  'application/x-hwp': 'hwp', 'application/haansofthwp': 'hwp', 'text/plain': 'txt'
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') return L.send(res, 405, { ok: false });
  const s = L.sessionFrom(req);
  if (!s) return L.send(res, 401, { ok: false, error: 'login' });
  if (L.limited('up:' + s.e, 90, 60 * 60 * 1000)) return L.send(res, 429, { ok: false, error: 'too_many' });
  const ct = String(req.headers['content-type'] || '').split(';')[0].trim().toLowerCase();
  let ext = TYPES[ct];
  const url = new URL(req.url, 'http://x');
  const name = L.clean(url.searchParams.get('name') || 'file', 80).replace(/[^\w.\-가-힣 ]/g, '_');
  if (!ext && /\.hwpx?$/i.test(name)) ext = name.split('.').pop().toLowerCase();
  if (!ext) return L.send(res, 415, { ok: false, error: 'type' });
  let buf;
  try { buf = await L.readBody(req, 4.4 * 1024 * 1024); } catch (e) { return L.send(res, 413, { ok: false, error: 'too_large' }); }
  if (!buf.length) return L.send(res, 400, { ok: false, error: 'empty' });
  const base = name.replace(/\.[^.]+$/, '') || 'file';
  const path = 'uploads/' + new Date().getUTCFullYear() + '/' + L.rid() + '-' + base + '.' + ext;
  try {
    const r = await put(path, buf, { access: 'public', contentType: ct || 'application/octet-stream', addRandomSuffix: false });
    return L.send(res, 200, { ok: true, url: r.url, name: base + '.' + ext });
  } catch (e) { return L.send(res, 500, { ok: false, error: 'storage' }); }
};
