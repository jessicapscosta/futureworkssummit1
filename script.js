const qs=(s,p=document)=>p.querySelector(s);const qsa=(s,p=document)=>[...p.querySelectorAll(s)];window.addEventListener('load',()=>{const preloader=qs('#preloader');setTimeout(()=>preloader?.classList.add('is-done'),350)});const header=qs('.site-header');const progress=qs('#progress');const updateScrollUi=()=>{const y=window.scrollY;header?.classList.toggle('scrolled',y>10);const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;const ratio=max>0?(y/max)*100:0;if(progress)progress.style.width=`${ratio}%`};updateScrollUi();window.addEventListener('scroll',updateScrollUi,{passive:true});const menuToggle=qs('#menuToggle');const mobileNav=qs('#mobileNav');menuToggle?.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));mobileNav?.classList.toggle('is-open',!open);document.body.classList.toggle('menu-open',!open)});qsa('#mobileNav a').forEach(link=>link.addEventListener('click',()=>{menuToggle?.setAttribute('aria-expanded','false');mobileNav?.classList.remove('is-open');document.body.classList.remove('menu-open')}));const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.16,rootMargin:'0px 0px -8% 0px'});qsa('.reveal').forEach(el=>{if(!el.classList.contains('visible-on-load'))observer.observe(el)});const parallaxEls=qsa('[data-depth]');let ticking=false;const applyParallax=()=>{ticking=false;parallaxEls.forEach(el=>{const depth=parseFloat(el.dataset.depth||'0.04');const rect=el.getBoundingClientRect();const center=rect.top+rect.height/2-window.innerHeight/2;const move=center*depth*-1;if(el.classList.contains('hero-robot-wrap')){el.style.transform=`translate3d(0, ${move}px, 0)`}else{el.style.transform=`translate3d(0, ${move}px, 0)`}})};const requestParallax=()=>{if(!ticking){window.requestAnimationFrame(applyParallax);ticking=true}};applyParallax();window.addEventListener('scroll',requestParallax,{passive:true});window.addEventListener('resize',requestParallax);
// Mouse-based micro-parallax adds responsive dimensionality to the hero robot.
// CSS handles the main entrance and idle motion; no animation library required.
const heroSection = qs('.hero');
const heroTilt = qs('.hero-robot-tilt');
if (heroSection && heroTilt && window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
  let tiltTicking = false;
  let tiltX = 0;
  let tiltY = 0;
  heroSection.addEventListener('pointermove', ev => {
    const bounds = heroSection.getBoundingClientRect();
    tiltX = ((ev.clientX - bounds.left) / bounds.width - .5) * 7;
    tiltY = ((ev.clientY - bounds.top) / bounds.height - .5) * -5;
    if (!tiltTicking) {
      tiltTicking = true;
      requestAnimationFrame(() => {
        heroTilt.style.setProperty('--hero-tilt-x', `${tiltX.toFixed(2)}deg`);
        heroTilt.style.setProperty('--hero-tilt-y', `${tiltY.toFixed(2)}deg`);
        tiltTicking = false;
      });
    }
  }, { passive: true });
  heroSection.addEventListener('pointerleave', () => {
    heroTilt.style.setProperty('--hero-tilt-x', '0deg');
    heroTilt.style.setProperty('--hero-tilt-y', '0deg');
  });
}


// Scroll reveal for the gray planet section
const planetStage = qs('.planet-stage');
const planetImage = qs('.planet-image');
const updatePlanetReveal = () => {
  if (!planetStage || !planetImage) return;
  const rect = planetStage.getBoundingClientRect();
  const viewH = window.innerHeight || document.documentElement.clientHeight;
  const start = viewH * 0.92;
  const end = -rect.height * 0.10;
  const raw = (start - rect.top) / (start - end);
  const progress = Math.max(0, Math.min(1, raw));
  planetStage.style.setProperty('--planet-progress', progress.toFixed(3));
};
updatePlanetReveal();
window.addEventListener('scroll', updatePlanetReveal, { passive: true });
window.addEventListener('resize', updatePlanetReveal);
