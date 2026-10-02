function toggleMenu(){document.getElementById('navLinks').classList.toggle('open')}
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));
function openCaseStudy(){const m=document.getElementById('caseModal');m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden')}
function closeCaseStudy(){const m=document.getElementById('caseModal');m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.getElementById('caseModal').addEventListener('click',e=>{if(e.target===e.currentTarget)closeCaseStudy()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCaseStudy()});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
