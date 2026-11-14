(function(){var q=document.getElementById('q'),items=[].slice.call(document.querySelectorAll('.qa')),chips=[].slice.call(document.querySelectorAll('.chip')),cnt=document.getElementById('cnt'),none=document.getElementById('none'),sec='';
function run(){var k=q.value.trim().toLowerCase(),n=0;items.forEach(function(d){var ok=(!sec||d.dataset.s===sec)&&(!k||d.textContent.toLowerCase().indexOf(k)>-1);d.hidden=!ok;if(ok){n++;if(k)d.open=true}else d.open=false});cnt.textContent=n+'개 항목';none.style.display=n?'none':'block'}
q.addEventListener('input',run);chips.forEach(function(c){c.addEventListener('click',function(){chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');sec=c.dataset.s;run()})});run();
var links=[].slice.call(document.querySelectorAll('nav.sticky a')),map=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
function spy(){var y=window.scrollY+90,cur=-1;map.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});links.forEach(function(a,i){a.classList.toggle('on',i===cur)})}
window.addEventListener('scroll',spy,{passive:true});spy()})();
