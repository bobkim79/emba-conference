/**
 * EMBA 명단 - 본인 이력 수정용 웹 앱 (기존 인증 스크립트와 별도로 새로 배포)
 *
 * 하는 일: e-mba.io 서버가 보낸 요청에서 "로그인한 본인 이메일"과 같은 행의
 *          회사명 · 업종/직책 · 회사소개 · 회사홈페이지 칸만 덮어쓴다.
 *          그 외 행·칸은 건드리지 않는다. 바뀐 내용은 '변경기록' 시트에 남긴다.
 *
 * 설정 (스크립트 편집기 왼쪽 ⚙ 프로젝트 설정 → 스크립트 속성):
 *   PROFILE_SECRET = e-mba.io 서버(Vercel)의 PROFILE_WRITER_SECRET 과 같은 긴 문자열
 */
var SHEET_ID = '1Loy94oatHv1IpJWbgB7OXxWh-pOKDE1pygnOzv7UDXI';
var SHEET_NAME = '';            // 비워 두면 '이메일'·'이름'·'회사명' 머리글이 있는 시트를 자동으로 찾는다
var HEADER_SCAN_ROWS = 5;       // 머리글을 찾아볼 위쪽 줄 수

var COLS = {                    // 보낼 항목 → 머리글에 들어 있는 글자
  co:   '회사명',
  job:  '업종',
  desc: '회사소개',
  web:  '홈페이지'
};

function doPost(e) {
  var out = function (o) {
    return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
  };
  var lock = LockService.getScriptLock();
  try {
    var req = JSON.parse((e.postData && e.postData.contents) || '{}');
    var secret = PropertiesService.getScriptProperties().getProperty('PROFILE_SECRET');
    if (!secret || req.secret !== secret) return out({ ok: false, error: 'forbidden' });

    var email = String(req.email || '').trim().toLowerCase();
    var fields = req.fields || {};
    if (!email || !Object.keys(fields).length) return out({ ok: false, error: 'bad_request' });

    lock.waitLock(20000);
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var found = findSheet_(ss);
    if (!found) return out({ ok: false, error: 'no_sheet' });
    var sh = found.sheet, hr = found.headerRow, col = found.col;

    var last = sh.getLastRow();
    if (last <= hr) return out({ ok: false, error: 'not_found' });
    var emails = sh.getRange(hr + 1, col.email, last - hr, 1).getValues();
    var rows = [];
    for (var i = 0; i < emails.length; i++) {
      if (String(emails[i][0]).trim().toLowerCase() === email) rows.push(hr + 1 + i);
    }
    if (rows.length === 0) return out({ ok: false, error: 'not_found' });
    if (rows.length > 1) return out({ ok: false, error: 'ambiguous' });   // 같은 이메일이 2행 이상이면 고치지 않는다

    var row = rows[0], updated = [], log = [];
    Object.keys(COLS).forEach(function (k) {
      if (!(k in fields) || !col[k]) return;
      var v = String(fields[k] == null ? '' : fields[k]).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 300);
      if (!v) return;
      if (/^[=+\-@]/.test(v)) v = "'" + v;                                    // 수식으로 해석되지 않게
      var cell = sh.getRange(row, col[k]);
      var before = String(cell.getValue());
      cell.setValue(v);
      updated.push(k);
      log.push([new Date(), email, row, k, before, v, String(req.by || '')]);
    });
    if (log.length) {
      var ls = ss.getSheetByName('변경기록') || ss.insertSheet('변경기록');
      if (ls.getLastRow() === 0) ls.appendRow(['시각', '이메일', '행', '항목', '이전 값', '새 값', '요청자']);
      ls.getRange(ls.getLastRow() + 1, 1, log.length, 7).setValues(log);
    }
    return out({ ok: true, updated: updated });
  } catch (err) {
    return out({ ok: false, error: 'server' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

function findSheet_(ss) {
  var sheets = SHEET_NAME ? [ss.getSheetByName(SHEET_NAME)] : ss.getSheets();
  for (var s = 0; s < sheets.length; s++) {
    var sh = sheets[s];
    if (!sh) continue;
    var lastCol = Math.max(sh.getLastColumn(), 1);
    for (var r = 1; r <= HEADER_SCAN_ROWS; r++) {
      var hdr = sh.getRange(r, 1, 1, lastCol).getValues()[0].map(function (h) { return String(h).replace(/\s/g, ''); });
      var email = idx_(hdr, '이메일');
      if (!email || !idx_(hdr, '이름') || !idx_(hdr, '회사명')) continue;
      var col = { email: email };
      Object.keys(COLS).forEach(function (k) { col[k] = idx_(hdr, COLS[k]); });
      return { sheet: sh, headerRow: r, col: col };
    }
  }
  return null;
}
function idx_(hdr, word) {
  for (var i = 0; i < hdr.length; i++) if (hdr[i].indexOf(word) >= 0) return i + 1;
  return 0;
}
