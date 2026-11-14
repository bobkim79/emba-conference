(function(){
  var msg = document.getElementById('copied');
  function flash(t){ msg.textContent = t; setTimeout(function(){ msg.textContent=''; }, 2400); }
  function copyText(text, el){
    var done = function(){ flash('복사했습니다.'); };
    var fallback = function(){
      try{
        if(el && el.select){ el.focus(); el.select(); }
        else { var r=document.createRange(); r.selectNodeContents(document.getElementById('mailaddr')); var s=window.getSelection(); s.removeAllRanges(); s.addRange(r); }
        flash('선택했습니다. 길게 눌러 복사해 주세요.');
      }catch(e){ flash('직접 선택해서 복사해 주세요.'); }
    };
    try{
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(text).then(done, fallback);
      } else { fallback(); }
    }catch(e){ fallback(); }
  }
  document.getElementById('copyMail').addEventListener('click', function(){ copyText('bob@khu.ac.kr', null); });
  var tpl = document.getElementById('tpl');
  document.getElementById('copyTpl').addEventListener('click', function(){ copyText(tpl.value, tpl); });
})();
