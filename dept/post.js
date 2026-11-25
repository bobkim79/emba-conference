/* 소식 전하기: 이메일 인증 → 종류 선택 → 대충 적기 + 사진·파일 → AI 정리 미리보기 → 올리기
   올릴 수 있는 사람은 서버(/api/auth)가 정한다: 현재 3학기 기수 전원 + 다음 기수 회장·부회장·사무총장 */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] }) }
  function ssGet(k) { try { return sessionStorage.getItem(k) || '' } catch (e) { return '' } }
  function ssSet(k, v) { try { v ? sessionStorage.setItem(k, v) : sessionStorage.removeItem(k) } catch (e) {} }

  var TOKEN = ssGet('emba_post'), ME = null, EMAIL = '', TYPE = '', ITEMS = [], DRAFT = null, BUSY = false, TEXT = '';
  var MAX = 20, TYPES = {
    care: { name: '경조사', desc: '결혼·부고·돌잔치 등 기쁜 일과 슬픈 일', ph: '예) 23기 홍길동 모친상, 12월 3일 발인, 서울아산병원 장례식장 5호실\n모바일 부고장 https://…' },
    gallery: { name: 'EMBA 갤러리 (학과 소식)', desc: '행사·모임 사진과 소식', ph: '예) 11월 20일 23기 송년 골프모임, 20명 참석, 즐거운 시간이었습니다' },
    profile: { name: '본인 이력 업데이트', desc: '내 회사·직책·소개·홈페이지 (명단에 바로 반영)', ph: '예) 회사 이름이 ㈜가나다로 바뀌었고 대표이사로 취임했어요. 홈페이지는 www.ganada.co.kr' }
  };

  function api(path, body, method) {
    var o = { method: method || 'POST', headers: { 'Content-Type': 'application/json' } };
    if (TOKEN) o.headers.Authorization = 'Bearer ' + TOKEN;
    if (body && o.method !== 'GET') o.body = JSON.stringify(body);
    return fetch(path, o).then(function (r) { return r.json().catch(function () { return { ok: false } }).then(function (j) { j._s = r.status; return j }) });
  }

  // ── 모달 ──
  var M = document.createElement('div');
  M.className = 'modal'; M.id = 'postModal'; M.setAttribute('role', 'dialog'); M.setAttribute('aria-modal', 'true');
  M.innerHTML = '<div class="in pm"><h3 id="pmT">소식 전하기</h3><div id="pmB"></div><div class="act"><button class="btn-lg pm-x" type="button">닫기</button></div></div>';
  document.body.appendChild(M);
  function body(h, title) { $('#pmB').innerHTML = h; $('#pmT').textContent = title || '소식 전하기'; var f = $('#pmB input,#pmB textarea'); if (f) setTimeout(function () { f.focus() }, 50) }
  function open() { M.classList.add('on'); document.body.style.overflow = 'hidden'; TOKEN && ME ? stepType() : (TOKEN ? check() : stepEmail()) }
  function close() { if (BUSY && !confirm('올리는 중입니다. 닫으면 중단됩니다. 닫을까요?')) return; M.classList.remove('on'); document.body.style.overflow = '' }
  M.addEventListener('click', function (e) { if (e.target === M || e.target.closest('.pm-x')) close() });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && M.classList.contains('on')) close() });
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-post]'); if (b) { e.preventDefault(); open() } });
  window.addEventListener('pagehide', function () { ssSet('emba_post', '') });

  // ── 로그인 ──
  function check() { // 새로고침 뒤 세션이 남아 있으면 내 글 요청으로 유효성 확인
    api('/api/posts?mine=1', null, 'GET').then(function (d) { if (d.ok) { ME = ME || { name: '', gen: '' }; stepType() } else { TOKEN = ''; ssSet('emba_post', ''); stepEmail() } });
  }
  function stepEmail(msg) {
    body((msg ? '<p class="lmsg">' + msg + '</p>' : '') + '<p>현재 3학기 원우(23기)와 다음 기수 임원(회장·부회장·사무총장)만 소식을 올릴 수 있습니다. 명단에 등록된 이메일을 입력해 주세요.</p>' +
      '<form class="lf" id="pmE"><input type="email" id="pmEmail" required autocomplete="email" placeholder="example@naver.com" value="' + esc(EMAIL) + '"><button class="btn-lg" type="submit">인증번호 받기</button></form>');
  }
  function stepCode(msg) {
    body((msg ? '<p class="lmsg">' + msg + '</p>' : '') + '<p><b>' + esc(EMAIL) + '</b> 으로 인증번호를 보냈습니다. 메일함(스팸함 포함)을 확인해 주세요.</p>' +
      '<form class="lf" id="pmC"><input id="pmCode" inputmode="numeric" pattern="[0-9]{6}" maxlength="6" required autocomplete="one-time-code" placeholder="인증번호 6자리"><button class="btn-lg" type="submit">확인</button></form>' +
      '<p class="lhint"><a href="#" id="pmBack">이메일 다시 입력</a></p>');
  }
  M.addEventListener('submit', function (e) {
    e.preventDefault(); var f = e.target;
    if (f.id === 'pmE') {
      EMAIL = $('#pmEmail').value.trim().toLowerCase(); lock(f, 1);
      api('/api/auth', { action: 'send', email: EMAIL }).then(function (d) {
        if (d.ok) return stepCode();
        if (d.error === 'too_soon') return stepCode('인증번호를 방금 보냈습니다. 1분 뒤에 다시 받을 수 있습니다.');
        if (d.error === 'too_many') return stepEmail('요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.');
        stepEmail('인증번호를 보내지 못했습니다. 명단에 등록된 이메일인지 확인해 주세요.');
      }).catch(function () { stepEmail('서버에 연결하지 못했습니다.') });
    } else if (f.id === 'pmC') {
      lock(f, 1);
      api('/api/auth', { action: 'verify', email: EMAIL, code: $('#pmCode').value.trim() }).then(function (d) {
        if (d.ok) { TOKEN = d.token; ssSet('emba_post', TOKEN); ME = d; return stepType(); }
        if (d.error === 'not_allowed') return stepEmail('이 이메일은 소식을 올릴 수 있는 대상이 아닙니다. (현재 3학기 원우 · 다음 기수 회장·부회장·사무총장) 문의: bob@khu.ac.kr');
        if (d.error === 'wrong_code') return stepCode('인증번호가 맞지 않습니다. (남은 횟수 ' + d.left + '번)');
        stepEmail('인증번호가 만료됐거나 확인하지 못했습니다. 다시 받아 주세요.');
      }).catch(function () { stepCode('서버에 연결하지 못했습니다.') });
    } else if (f.id === 'pmW') compose(f);
    else if (f.id === 'pmP') publish(f);
  });
  function lock(f, on) { [].forEach.call(f.querySelectorAll('button,input,textarea'), function (x) { x.disabled = !!on }) }

  // ── 종류 선택 ──
  function stepType() {
    TYPE = ''; ITEMS = []; DRAFT = null; TEXT = '';
    body('<p>' + (ME && ME.name ? '<b>' + esc(ME.name) + '</b> 님, ' : '') + '무엇을 전할까요?</p><div class="pm-types">' +
      Object.keys(TYPES).map(function (k) { return '<button type="button" class="pm-t" data-t="' + k + '"><b>' + TYPES[k].name + '</b><span>' + TYPES[k].desc + '</span></button>' }).join('') +
      '</div><p class="lhint"><a href="#" id="pmMine">내가 올린 글 보기·삭제</a></p>', '소식 전하기');
  }
  M.addEventListener('click', function (e) {
    var t = e.target.closest('.pm-t'); if (t) { TYPE = t.dataset.t; stepWrite(); return }
    if (e.target.id === 'pmBack') { e.preventDefault(); stepEmail() }
    if (e.target.id === 'pmMine') { e.preventDefault(); stepMine() }
    if (e.target.id === 'pmToType') { e.preventDefault(); stepType() }
    if (e.target.id === 'pmToWrite') { e.preventDefault(); stepWrite() }
    var rm = e.target.closest('.pm-rm'); if (rm) { ITEMS.splice(+rm.dataset.i, 1); drawItems() }
    var dl = e.target.closest('.pm-del'); if (dl && confirm('이 글을 삭제할까요? 사진과 파일도 함께 지워집니다.')) {
      dl.disabled = true; api('/api/posts?id=' + dl.dataset.id, null, 'DELETE').then(function (d) { d.ok ? (reload(), stepMine('삭제했습니다.')) : stepMine('삭제하지 못했습니다.') });
    }
  });

  // ── 내 글 ──
  function stepMine(msg) {
    body('<p>불러오는 중…</p>', '내가 올린 글');
    api('/api/posts?mine=1', null, 'GET').then(function (d) {
      if (!d.ok) { TOKEN = ''; ssSet('emba_post', ''); return stepEmail('로그인이 만료됐습니다. 다시 인증해 주세요.') }
      var N = { care: '경조사', gallery: '갤러리' };
      body((msg ? '<p class="lmsg">' + msg + '</p>' : '') + (d.mine.length ? '<ul class="pm-list">' + d.mine.map(function (p) {
        return '<li><span><small>' + (N[p.type] || '') + ' · ' + new Date(p.at).toLocaleDateString('ko-KR') + '</small>' + esc(p.t) + '</span><button type="button" class="pm-del" data-id="' + esc(p.id) + '">삭제</button></li>' }).join('') + '</ul>' : '<p>올린 글이 없습니다.</p>') +
        '<p class="lhint"><a href="#" id="pmToType">← 돌아가기</a></p>', '내가 올린 글');
    });
  }

  // ── 쓰기 ──
  function stepWrite(msg) {
    var T = TYPES[TYPE], hasFiles = TYPE !== 'profile';
    body((msg ? '<p class="lmsg">' + msg + '</p>' : '') + '<form id="pmW"><p><b>' + T.name + '</b> · 대충 적어 주세요. 정리는 AI가 합니다.</p>' +
      '<textarea id="pmTx" rows="6" maxlength="3000" placeholder="' + esc(T.ph) + '" required>' + esc(TEXT) + '</textarea>' +
      (hasFiles ? '<div class="pm-fl"><label class="pm-add"><input type="file" id="pmFile" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.hwp,.hwpx,.txt" hidden>사진·파일 추가</label><span class="lhint" id="pmCnt"></span></div><div class="pm-th" id="pmTh"></div>' : '') +
      '<div class="pm-act"><button type="button" class="pm-s" id="pmToType">← 처음으로</button><button class="btn-lg" type="submit">AI로 정리하기</button></div></form>', T.name);
    if (hasFiles) { drawItems(); $('#pmFile').addEventListener('change', onFiles) }
  }
  function onFiles(e) {
    var list = [].slice.call(e.target.files); e.target.value = '';
    var over = false;
    list.forEach(function (f) {
      if (ITEMS.length >= MAX) { over = true; return }
      if (f.size > 25 * 1024 * 1024) { alert(f.name + ': 25MB를 넘는 파일은 올릴 수 없습니다.'); return }
      ITEMS.push({ file: f, img: /^image\/(jpe?g|png|webp|gif|heic|heif)/i.test(f.type) || /\.(jpe?g|png|webp|heic|heif)$/i.test(f.name), url: URL.createObjectURL(f) });
    });
    if (over) alert('사진·파일은 합쳐서 최대 ' + MAX + '개까지입니다.');
    drawItems();
  }
  function drawItems() {
    var th = $('#pmTh'); if (!th) return;
    th.innerHTML = ITEMS.map(function (it, i) { return '<div class="pm-i">' + (it.img ? '<img src="' + it.url + '" alt="">' : '<span>' + esc(it.file.name) + '</span>') + '<button type="button" class="pm-rm" data-i="' + i + '" aria-label="삭제">✕</button></div>' }).join('');
    $('#pmCnt').textContent = ITEMS.length + ' / ' + MAX;
  }

  // ── AI 정리 ──
  function compose(f) {
    TEXT = $('#pmTx').value.trim(); lock(f, 1);
    var np = ITEMS.filter(function (x) { return x.img }).length;
    body('<p>AI가 정리하는 중입니다…</p>');
    api('/api/compose', { type: TYPE, text: TEXT, photos: np }).then(function (d) {
      if (d.ok) { DRAFT = d.draft; return stepPreview() }
      if (d.error === 'login') { TOKEN = ''; return stepEmail('로그인이 만료됐습니다. 다시 인증해 주세요.') }
      stepWrite('정리하지 못했습니다. 잠시 후 다시 시도해 주세요.');
    }).catch(function () { stepWrite('서버에 연결하지 못했습니다.') });
  }
  function fld(id, label, val, long) { return '<label class="pm-f"><span>' + label + '</span>' + (long ? '<textarea id="' + id + '" rows="2">' + esc(val) + '</textarea>' : '<input id="' + id + '" value="' + esc(val) + '">') + '</label>' }
  function stepPreview() {
    var d = DRAFT, h = '';
    if (TYPE === 'care') {
      h = '<label class="pm-f"><span>구분</span><select id="d_k"><option value="ok"' + (d.k === 'ok' ? ' selected' : '') + '>경사 (축하)</option><option value="sad"' + (d.k === 'sad' ? ' selected' : '') + '>조사 (부고)</option></select></label>' +
        fld('d_gen', '기수', d.gen || (ME && ME.gen) || '') + fld('d_name', '이름', d.name || (ME && ME.name) || '') + fld('d_t', '제목', d.t) +
        d.rows.map(function (r, i) { return fld('d_r' + i, esc(r[0]), r[1]) }).join('') + fld('d_note', '인사말', d.note) + fld('d_url', '링크 (청첩장·부고장)', d.url);
    } else if (TYPE === 'gallery') {
      h = fld('d_t', '제목', d.t) + fld('d_d', '날짜 (YYYY.MM.DD)', d.d) + fld('d_s', '소식 요약', d.s, 1) +
        (ITEMS.filter(function (x) { return x.img }).length ? '<p class="lhint">사진 ' + ITEMS.filter(function (x) { return x.img }).length + '장 · 설명 문구는 AI가 사진 순서대로 붙였습니다.</p>' : '<p class="lmsg">갤러리에는 사진이 1장 이상 필요합니다.</p>');
    } else {
      h = '<p class="lmsg">로그인한 <b>' + esc(EMAIL) + '</b> 의 명단 행만 바뀝니다. 비워 둔 칸은 그대로 둡니다.</p>' + fld('d_co', '회사명', d.co) + fld('d_job', '직책', d.job) + fld('d_desc', '회사 소개', d.desc, 1) + fld('d_web', '홈페이지', d.web);
    }
    body('<form id="pmP"><p>AI가 정리한 내용입니다. 고칠 곳이 있으면 고친 뒤 올려 주세요.</p>' + h +
      '<div class="pm-act"><button type="button" class="pm-s" id="pmToWrite">← 다시 쓰기</button><button class="btn-lg" type="submit">' + (TYPE === 'profile' ? '명단에 반영하기' : '사이트에 올리기') + '</button></div></form>', '미리보기');
  }
  function val(id) { var e = $('#' + id); return e ? e.value.trim() : '' }
  function readDraft() {
    var d = DRAFT;
    if (TYPE === 'care') return { k: val('d_k'), gen: val('d_gen'), name: val('d_name'), t: val('d_t'), rows: d.rows.map(function (r, i) { return [r[0], val('d_r' + i)] }), note: val('d_note'), url: val('d_url'), cta: d.cta };
    if (TYPE === 'gallery') return { t: val('d_t'), d: val('d_d'), s: val('d_s'), captions: d.captions };
    return { co: val('d_co'), job: val('d_job'), desc: val('d_desc'), web: val('d_web') };
  }

  // ── 사진 줄이기 + 올리기 ──
  function shrink(file, max, q) {
    return new Promise(function (ok, no) {
      var im = new Image(), u = URL.createObjectURL(file);
      im.onload = function () {
        var s = Math.min(1, max / Math.max(im.width, im.height)), c = document.createElement('canvas');
        c.width = Math.round(im.width * s); c.height = Math.round(im.height * s);
        c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
        c.toBlob(function (b) { URL.revokeObjectURL(u); b ? ok(b) : no() }, 'image/jpeg', q);
      };
      im.onerror = function () { URL.revokeObjectURL(u); no() };
      im.src = u;
    });
  }
  function up(blob, name, type) {
    return fetch('/api/upload?name=' + encodeURIComponent(name), { method: 'POST', headers: { 'Content-Type': type, Authorization: 'Bearer ' + TOKEN }, body: blob })
      .then(function (r) { return r.json() }).then(function (d) { if (!d.ok) throw new Error(d.error || 'upload'); return d });
  }
  function publish(f) {
    var data = readDraft(); BUSY = true; lock(f, 1);
    if (TYPE === 'profile') {
      body('<p>명단에 반영하는 중입니다…</p>');
      return api('/api/publish', { type: 'profile', data: data }).then(function (d) {
        BUSY = false;
        if (d.ok) return done('명단에 반영했습니다. 잠시 뒤 EMBA 네트워크 표에 나타납니다.');
        var m = { not_found: '명단에서 이 이메일의 행을 찾지 못했습니다.', ambiguous: '명단에 같은 이메일이 2곳 이상 있어 자동 반영하지 못했습니다. bob@khu.ac.kr로 알려 주세요.', empty: '바꿀 내용이 없습니다.' }[d.error];
        stepPreview(); alert(m || '반영하지 못했습니다. 잠시 후 다시 시도해 주세요.');
      }).catch(function () { BUSY = false; stepPreview(); alert('서버에 연결하지 못했습니다.') });
    }
    var photos = [], files = [], list = ITEMS.slice(), n = 0, total = list.length;
    function prog() { body('<p>올리는 중입니다… (' + n + ' / ' + total + ')</p><div class="pm-bar"><i style="width:' + (total ? Math.round(n / total * 100) : 100) + '%"></i></div><p class="lhint">창을 닫지 마세요.</p>') }
    prog();
    var chain = Promise.resolve();
    list.forEach(function (it, i) {
      chain = chain.then(function () {
        if (it.img && TYPE === 'gallery') {
          return Promise.all([shrink(it.file, 1600, .82), shrink(it.file, 420, .75)]).then(function (bs) {
            return up(bs[0], 'p' + (i + 1) + '.jpg', 'image/jpeg').then(function (a) {
              return up(bs[1], 'p' + (i + 1) + '_t.jpg', 'image/jpeg').then(function (t) { photos.push({ u: a.url, t: t.url }) });
            });
          });
        }
        if (it.img) { // 경조사에 올린 사진은 첨부 파일로 취급
          return shrink(it.file, 1600, .82).then(function (b) { return up(b, it.file.name.replace(/\.\w+$/, '') + '.jpg', 'image/jpeg') }).then(function (a) { files.push({ u: a.url, n: a.name }) });
        }
        var ty = it.file.type || (/\.hwpx?$/i.test(it.file.name) ? 'application/x-hwp' : 'application/octet-stream');
        return up(it.file, it.file.name, ty).then(function (a) { files.push({ u: a.url, n: a.name }) });
      }).then(function () { n++; prog() });
    });
    chain.then(function () {
      return api('/api/publish', { type: TYPE, data: data, photos: photos, files: files });
    }).then(function (d) {
      BUSY = false;
      if (d.ok) return done('올렸습니다. 사이트에 바로 반영됩니다.');
      stepPreview(); alert(d.error === 'empty' ? '필요한 내용(제목 또는 사진)이 비어 있습니다.' : '올리지 못했습니다. 잠시 후 다시 시도해 주세요.');
    }).catch(function (e) { BUSY = false; stepPreview(); alert('올리는 중 문제가 생겼습니다. (' + (e && e.message || '') + ') 사진이 너무 크거나 많으면 줄여서 다시 시도해 주세요.') });
  }
  function reload() { if (window.EMBA_loadPosts) window.EMBA_loadPosts() }
  function done(msg) { reload(); body('<p class="lmsg">' + msg + '</p><p class="lhint"><a href="#" id="pmToType">소식 더 올리기</a></p>', '완료'); }
})();
