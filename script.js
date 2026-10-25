document.addEventListener('DOMContentLoaded',function(){
 const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav)toggle.addEventListener('click',function(){nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');});
 const current=(location.pathname.split('/').pop()||'index.html');
 document.querySelectorAll('.nav a').forEach(function(a){if(a.getAttribute('href')===current)a.classList.add('active');});
 document.querySelectorAll('.reveal-answer').forEach(function(b){b.addEventListener('click',function(){const answer=b.parentElement.querySelector('.answer');if(answer){answer.hidden=!answer.hidden;b.textContent=answer.hidden?'Reveal answer →':'Hide answer ↑';}});});
});