const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slides=$$('.s');let cur=0;
const names=['Inicio','Qué hacemos','Servicios','Trabajo','Casos','Método','Nosotros','Contratar','Contacto'];
const IDX={svc:2,work:3,last:slides.length-1};
$('nav').innerHTML=names.map((n,i)=>`<button data-g="${i}">${String(i+1).padStart(2,'0')} ${n}</button>`).join('');
$$('.rv').forEach(r=>[...r.children].forEach((c,i)=>c.style.setProperty('--i',i)));
function go(i){i=Math.max(0,Math.min(slides.length-1,i));cur=i;
 slides.forEach((s,k)=>{s.classList.toggle('on',k===i);s.classList.toggle('prev',k<i);s.inert=k!==i;if(k!==i)$$('video',s).forEach(v=>v.pause())});
 $$('nav button').forEach((b,k)=>b.classList.toggle('on',k===i));
 $('.pr i').style.width=((i+1)/slides.length*100)+'%';$('.ct').textContent=(i+1)+' / '+slides.length;
 $('.cta').style.display=(i===IDX.svc||i===IDX.last)?'none':'';slides[i].scrollTop=0;history.replaceState(null,'','#'+(i+1));
 if(i===IDX.work)odo();$$('nav button')[i].scrollIntoView({inline:'center',block:'nearest'})}
document.addEventListener('click',e=>{const g=e.target.closest('[data-g]');if(g)go(+g.dataset.g)});
$('.pv0').onclick=()=>go(cur-1);$('.nx0').onclick=()=>go(cur+1);
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
function open(list,i){lb={list,i};show();$('#lb').classList.add('on');$('#lb .x').focus()}
function close(){lbv.pause();lbv.removeAttribute('src');$('#lb').classList.remove('on')}
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
/* entrada */
addEventListener('keydown',e=>{if($('#lb').classList.contains('on')){if(e.key==='Escape')close();if(e.key==='ArrowRight')$('#lb .nx').click();if(e.key==='ArrowLeft')$('#lb .pv').click();return}
 if(e.target.closest&&e.target.closest('video'))return;
 if(e.key==='ArrowRight'||e.key==='PageDown')go(cur+1);if(e.key==='ArrowLeft'||e.key==='PageUp')go(cur-1);if(e.key==='Home')go(0);if(e.key==='End')go(slides.length-1)});
let tx=0,ty=0;addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
addEventListener('touchend',e=>{if($('#lb').classList.contains('on')||e.target.closest('video'))return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)go(cur+(dx<0?1:-1))},{passive:true});
go((parseInt(location.hash.slice(1))||1)-1);
