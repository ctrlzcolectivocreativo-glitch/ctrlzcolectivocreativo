const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slides=$$('.s');let cur=0;
const names=['Inicio','Qué hacemos','Servicios','Trabajo','Casos','Método','Nosotros','Contratar','Contacto'];
const IDX={svc:2,work:3,last:slides.length-1};
$('nav').innerHTML=names.map((n,i)=>`<button data-g="${i}">${n}</button>`).join('');
$$('.rv').forEach(r=>[...r.children].forEach((c,i)=>c.style.setProperty('--i',i)));
function go(i){slides[i].scrollIntoView({behavior:'smooth',block:'start'})}
document.addEventListener('click',e=>{const g=e.target.closest('[data-g]');if(g)go(+g.dataset.g)});
new IntersectionObserver(es=>es.forEach(e=>{const s=e.target;if(e.isIntersecting){s.classList.add('on');if(slides.indexOf(s)===IDX.work)odo()}else $$('video',s).forEach(v=>v.pause())}),{threshold:.12}).observe&&0;
const io=new IntersectionObserver(es=>es.forEach(e=>{const s=e.target;if(e.isIntersecting){s.classList.add('on');if(slides.indexOf(s)===IDX.work)odo()}else $$('video',s).forEach(v=>v.pause())}),{threshold:.12});
slides.forEach(s=>io.observe(s));
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cur=slides.indexOf(e.target);
 $$('nav button').forEach((b,k)=>b.classList.toggle('on',k===cur));$('.cta').style.display=(cur===IDX.svc||cur===IDX.last)?'none':'';
 $$('nav button')[cur].scrollIntoView({inline:'center',block:'nearest'})}),{rootMargin:'-45% 0px -50% 0px'});
slides.forEach(s=>spy.observe(s));
addEventListener('scroll',()=>{const h=document.documentElement;$('.pr i').style.width=(h.scrollTop/Math.max(1,h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
$('#main-cta').onclick=e=>{e.preventDefault();go(IDX.svc)};
/* enlaces (solo los que tienen dato real) */
const L=[['whatsapp','WhatsApp'+(CONTACT.phone?' · '+CONTACT.phone:'')],['instagram','Instagram'],['behance','Behance'],['email','Correo'],['web','Sitio web'],['linkedin','LinkedIn']];
$$('.lk').forEach(e=>e.innerHTML=L.filter(([k])=>CONTACT[k]).map(([k,n])=>{let u=CONTACT[k];if(k==='email'&&!u.startsWith('mailto:'))u='mailto:'+u;return`<a href="${esc(u)}" target="_blank" rel="noopener">${n}</a>`}).join(''));
/* servicios */
$('.tabs').innerHTML=SERVICES.map((s,i)=>`<button data-sv="${i}"><span>${s.n}</span>${esc(s.t)}</button>`).join('');
function sv(i){const s=SERVICES[i];$$('.tabs button').forEach((b,k)=>b.classList.toggle('on',k===i));
 $$('.pan video').forEach(v=>v.pause());
 const m=s.video?`<video class="v916" controls playsinline preload="none" poster="${s.img}" src="${s.video}" aria-label="Ejemplo de ${esc(s.t)}"></video>`:`<img class="v34" src="${s.img}" alt="Ejemplo de ${esc(s.t)}">`;
 $('.pan').innerHTML=`<div><h3 style="font-size:2rem;margin-bottom:.5rem">${esc(s.t)}</h3><p>${esc(s.d)}</p><ul>${s.e.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>${m}`}
$('.tabs').onclick=e=>{const b=e.target.closest('[data-sv]');if(b)sv(+b.dataset.sv)};sv(0);
$('#svc2').innerHTML=SERVICES.map(s=>`<span>${s.n} ${esc(s.t)}</span>`).join('');
/* visor */
const lbv=$('#lb video'),lbi=$('#lb img');let lb={list:[],i:0};
function show(){const it=lb.list[lb.i];lbv.pause();
 if(it.video){lbi.hidden=true;lbv.hidden=false;lbv.poster=it.poster||'';lbv.src=it.video;lbv.play().catch(()=>{})}else{lbv.hidden=true;lbv.removeAttribute('src');lbi.hidden=false;lbi.src=it.src;lbi.alt=it.alt||''}
 $('#lb .cap').innerHTML=it.cap||'';const m=lb.list.length>1;$('#lb .pv').hidden=$('#lb .nx').hidden=!m}
function open(list,i){lb={list,i};document.documentElement.style.overflow='hidden';show();$('#lb').classList.add('on');$('#lb .x').focus()}
function close(){document.documentElement.style.overflow='';lbv.pause();lbv.removeAttribute('src');$('#lb').classList.remove('on')}
$('#lb .x').onclick=close;$('#lb .pv').onclick=()=>{lb.i=(lb.i+lb.list.length-1)%lb.list.length;show()};$('#lb .nx').onclick=()=>{lb.i=(lb.i+1)%lb.list.length;show()};
$('#lb').onclick=e=>{if(e.target.id==='lb')close()};
/* galería con filtros; el texto aparece solo al ampliar */
const caption=p=>`<b>${esc(p.name)}${p.conceptual?' · Proyecto conceptual':''}</b>${esc(p.type)}. ${esc(p.desc)}${p.need?`<br><i>Necesidad:</i> ${esc(p.need)}`:''}<br><i>Servicios:</i> ${p.services.map(esc).join(', ')}`;
const F=[['all','Todo'],['branding','Branding'],['redes','Redes'],['motion','Motion'],['video','Edición de video']];let flt='all',vis=[];
function grid(){vis=ITEMS.filter(p=>flt==='all'||p.k===flt);
 $('.th').innerHTML=vis.map((p,i)=>`<button data-t="${i}" aria-label="Abrir ${esc(p.name)}"><img loading="lazy" src="${p.img}" alt="${esc(p.name)}: ${esc(p.type)}">${p.v?'<i class="pl">▶</i>':''}</button>`).join('');
 $$('.flt button').forEach(b=>b.classList.toggle('on',b.dataset.f===flt))}
$('.flt').innerHTML=F.map(([k,n])=>`<button data-f="${k}">${n}</button>`).join('');
$('.flt').onclick=e=>{const b=e.target.closest('[data-f]');if(b){flt=b.dataset.f;grid()}};
$('.th').onclick=e=>{const b=e.target.closest('[data-t]');if(b)open(vis.map(p=>({src:p.img,alt:p.name,video:p.v,poster:p.img,cap:caption(p)})),+b.dataset.t)};grid();
/* casos */
$('.ct2').innerHTML=CASES.map((c,i)=>`<button data-c="${i}">${esc(c.name)}</button>`).join('');
function cs(i){const c=CASES[i];$$('.ct2 button').forEach((b,k)=>b.classList.toggle('on',k===i));
 const f=[['01 CONTEXTO',c.ctx],['02 RETO',c.reto],['03 EXPLORACIÓN',c.expl],['04 DESARROLLO',c.des],['05 ENTREGABLES',c.ent],['06 RESULTADO',c.res]];
 $('.cs').innerHTML=`<div class="st">${f.map(([a,b])=>`<div><b>${a}</b>${esc(b)}</div>`).join('')}</div><div class="im">${c.video?`<video controls playsinline preload="none" poster="${c.poster}" src="${c.video}"></video>`:''}${c.imgs.map((s,k)=>`<img data-z="${k}" src="${s}" alt="Caso ${esc(c.name)}, imagen ${k+1}" loading="lazy">`).join('')}</div>`;
 $('.cs .im').onclick=e=>{const z=e.target.closest('[data-z]');if(z)open(c.imgs.map(s=>({src:s,alt:c.name,cap:`<b>${esc(c.name)}</b>`})),+z.dataset.z)}}
$('.ct2').onclick=e=>{const b=e.target.closest('[data-c]');if(b){$$('.cs video').forEach(v=>v.pause());cs(+b.dataset.c)}};cs(0);
/* métricas (solo con datos reales) */
if(METRICS.length)$('.od').innerHTML=METRICS.map(m=>`<div><strong data-v="${+m.value}">0</strong>${esc(m.label)}<br><small>${esc(m.context||'')}</small></div>`).join('');else $('.od').remove();
function odo(){$$('[data-v]').forEach(el=>{const v=+el.dataset.v;if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=v;return}const t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1400);el.textContent=Math.round(v*(1-Math.pow(1-k,3)));k<1&&requestAnimationFrame(f)})(t0)})}
/* equipo */
$('.tm').innerHTML=TEAM.map(m=>`<div><div class="ph2">${m.photo?`<img src="${esc(m.photo)}" alt="${esc(m.name)}">`:'Foto pendiente'}</div><h3>${esc(m.name||'Nombre pendiente')}</h3><p>${esc(m.role||'Rol pendiente')}</p></div>`).join('');
addEventListener('keydown',e=>{if(!$('#lb').classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')$('#lb .nx').click();if(e.key==='ArrowLeft')$('#lb .pv').click()});
