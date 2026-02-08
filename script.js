// Responsive behaviours and small casual interactions
(function(){
  // hero compact mode for small screens
  const hero = document.querySelector('.hero');
  function updateHeroMode(){
    if(!hero) return;
    if(window.innerWidth < 720) hero.classList.add('compact');
    else hero.classList.remove('compact');
  }
  window.addEventListener('resize', updateHeroMode);
  updateHeroMode();

  // reveal panels on scroll
  const panels = document.querySelectorAll('.panel');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((items)=>{
      items.forEach(i=>{
        if(i.isIntersecting){
          i.target.classList.add('reveal');
          obs.unobserve(i.target);
        }
      });
    },{root: null, threshold: 0.08});
    panels.forEach(p=>obs.observe(p));
  } else {
    // fallback
    panels.forEach(p=>p.classList.add('reveal'));
  }

  // small casual toast when clicking ghost buttons (e.g., Say hello)
  function showToast(text='Nice one — message sent!'){
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(()=>{t.style.opacity='0';t.addEventListener('transitionend', ()=>t.remove());},2500);
  }

  document.querySelectorAll('.btn.ghost').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const href = btn.getAttribute('href') || '';
      // if it's a mailto or external, let it behave normally but still show a casual toast
      if(href.startsWith('mailto:')){
        showToast('Nice — I’ll keep an eye out for your email.');
        return;
      }
      // otherwise prevent default and show a small note
      e.preventDefault();
      showToast('Sweet — thanks for the click.');
      const target = btn.getAttribute('href');
      if(target && target.startsWith('#')){
        const el = document.querySelector(target);
        if(el) el.scrollIntoView({behavior:'smooth'});
      }
    });
  });
})();
