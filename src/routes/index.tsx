import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Secrets Club — Moda Fitness Premium Feminina" },
      {
        name: "description",
        content:
          "Conjuntos de academia premium, leggings, tops e macacões. Entre no grupo VIP do WhatsApp e receba promoções exclusivas da Secrets Club.",
      },
      { property: "og:title", content: "Secrets Club — Moda Fitness Premium" },
      {
        property: "og:description",
        content: "Looks fitness premium, promoções exclusivas e lançamentos no grupo VIP.",
      },
      { property: "og:image", content: "/images/hero.jpg" },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/C2vP3Dm8ioHJGWOHJ9BKwK";

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html,body{background:#070309;color:#fff;font-family:'Inter',system-ui,sans-serif;overflow-x:hidden;scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
body{cursor:none}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
:root{
  --bg:#070309;
  --bg2:#0f0612;
  --pink:#ff2d8b;
  --pink-soft:#ff6fb4;
  --pink-glow:rgba(255,45,139,.55);
  --white:#ffffff;
  --muted:rgba(255,255,255,.62);
  --line:rgba(255,255,255,.08);
  --glass:rgba(255,255,255,.04);
  --display:'Cormorant Garamond',serif;
}
/* Cursor */
.cursor,.cursor-dot{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;border-radius:50%;mix-blend-mode:difference}
.cursor{width:36px;height:36px;border:1.5px solid #fff;transform:translate(-50%,-50%);transition:width .25s,height .25s,background .25s,border-color .25s}
.cursor-dot{width:5px;height:5px;background:#fff;transform:translate(-50%,-50%)}
.cursor.hover{width:64px;height:64px;background:var(--pink);border-color:var(--pink)}
@media (max-width:900px){body{cursor:auto}.cursor,.cursor-dot{display:none}}

/* Loading */
#loader{position:fixed;inset:0;background:#070309;z-index:10000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:24px;transition:opacity .8s,visibility .8s}
#loader.done{opacity:0;visibility:hidden}
#loader .ring{width:80px;height:80px;border-radius:50%;border:2px solid rgba(255,255,255,.08);border-top-color:var(--pink);animation:spin 1s linear infinite;box-shadow:0 0 60px var(--pink-glow)}
#loader .lbl{letter-spacing:.6em;font-size:11px;color:#fff;opacity:.7;text-transform:uppercase}
@keyframes spin{to{transform:rotate(360deg)}}

/* Background fx */
.bg-fx{position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none}
.blob{position:absolute;border-radius:50%;filter:blur(110px);opacity:.55;mix-blend-mode:screen;animation:float 18s ease-in-out infinite}
.b1{width:520px;height:520px;background:radial-gradient(circle,#ff2d8b,transparent 60%);top:-120px;left:-120px}
.b2{width:620px;height:620px;background:radial-gradient(circle,#7a1fff,transparent 60%);bottom:-180px;right:-180px;animation-delay:-6s;opacity:.4}
.b3{width:380px;height:380px;background:radial-gradient(circle,#ff6fb4,transparent 60%);top:40%;left:50%;animation-delay:-12s;opacity:.35}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-30px) scale(1.08)}}
canvas#particles{position:fixed;inset:0;z-index:-1;pointer-events:none}
.grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.05;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}

/* Nav */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;justify-content:space-between;align-items:center;padding:18px 5vw;backdrop-filter:blur(20px) saturate(160%);-webkit-backdrop-filter:blur(20px) saturate(160%);background:linear-gradient(180deg,rgba(7,3,9,.7),rgba(7,3,9,0));border-bottom:1px solid var(--line);transition:padding .3s}
.nav.scrolled{padding:12px 5vw;background:rgba(7,3,9,.85)}
.nav .logo{display:flex;align-items:center;gap:12px}
.nav .logo img{height:42px;filter:drop-shadow(0 0 12px var(--pink-glow))}
.nav .links{display:flex;gap:34px;font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7)}
.nav .links a{position:relative;transition:color .25s}
.nav .links a::after{content:"";position:absolute;left:0;bottom:-6px;width:100%;height:1px;background:var(--pink);transform:scaleX(0);transform-origin:right;transition:transform .35s}
.nav .links a:hover{color:#fff}
.nav .links a:hover::after{transform:scaleX(1);transform-origin:left}
.nav .cta-mini{padding:10px 20px;border-radius:999px;background:linear-gradient(135deg,var(--pink),#a3186b);font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;box-shadow:0 8px 30px var(--pink-glow);transition:transform .3s}
.nav .cta-mini:hover{transform:translateY(-2px) scale(1.04)}
@media (max-width:900px){.nav .links{display:none}}

/* Hero */
.hero{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:40px;padding:140px 5vw 80px;position:relative}
.hero-text .pill{display:inline-flex;align-items:center;gap:10px;padding:8px 16px;border:1px solid var(--line);background:var(--glass);backdrop-filter:blur(14px);border-radius:999px;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:rgba(255,255,255,.75);margin-bottom:28px}
.hero-text .pill::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--pink);box-shadow:0 0 14px var(--pink);animation:pulseDot 1.6s infinite}
@keyframes pulseDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.4);opacity:.6}}
.hero h1{font-family:var(--display);font-weight:500;font-size:clamp(42px,6.4vw,92px);line-height:.98;letter-spacing:-.02em;margin-bottom:26px}
.hero h1 .gr{background:linear-gradient(135deg,#fff 30%,var(--pink) 60%,var(--pink-soft) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;font-style:italic}
.hero h1 .word{display:inline-block;opacity:0;transform:translateY(40px);animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
.hero p.sub{font-size:clamp(15px,1.25vw,18px);color:var(--muted);max-width:560px;margin-bottom:42px;line-height:1.65}
.cta-row{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
.cta{position:relative;display:inline-flex;align-items:center;gap:14px;padding:22px 40px;border-radius:999px;background:linear-gradient(135deg,var(--pink) 0%,#ff5fa6 50%,#a3186b 100%);font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-size:14px;color:#fff;overflow:hidden;box-shadow:0 20px 60px var(--pink-glow),inset 0 1px 0 rgba(255,255,255,.4);transition:transform .35s cubic-bezier(.2,.7,.2,1)}
.cta::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);transform:translateX(-110%);transition:transform .9s}
.cta:hover::before{transform:translateX(110%)}
.cta::after{content:"";position:absolute;inset:-2px;border-radius:inherit;background:linear-gradient(135deg,var(--pink),#fff,var(--pink));opacity:0;z-index:-1;filter:blur(14px);transition:opacity .4s}
.cta:hover::after{opacity:.8}
.cta-pulse{position:absolute;inset:0;border-radius:inherit;animation:ctaPulse 2.4s infinite;pointer-events:none}
@keyframes ctaPulse{0%{box-shadow:0 0 0 0 var(--pink-glow)}70%{box-shadow:0 0 0 26px rgba(255,45,139,0)}100%{box-shadow:0 0 0 0 rgba(255,45,139,0)}}
.cta .arr{display:inline-block;transition:transform .35s}
.cta:hover .arr{transform:translateX(6px)}
.trust{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.55)}
.trust b{color:#fff;font-weight:600}

/* Hero image */
.hero-visual{position:relative;height:min(78vh,720px)}
.hero-visual .glow{position:absolute;inset:-10%;background:radial-gradient(closest-side,var(--pink) 0%,transparent 70%);filter:blur(60px);opacity:.55;animation:float 10s ease-in-out infinite}
.hero-visual .frame{position:relative;width:100%;height:100%;border-radius:32px;overflow:hidden;box-shadow:0 60px 120px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06);transform:translateZ(0)}
.hero-visual .frame img{width:100%;height:100%;object-fit:cover;transform:scale(1.04);transition:transform 1.2s}
.hero-visual:hover .frame img{transform:scale(1.08)}
.hero-visual .badge{position:absolute;backdrop-filter:blur(20px);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:14px 18px;display:flex;gap:12px;align-items:center;animation:floatY 6s ease-in-out infinite}
.badge .dot{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--pink),#a3186b);display:grid;place-items:center;font-size:18px;box-shadow:0 8px 24px var(--pink-glow)}
.badge small{display:block;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.6)}
.badge strong{font-size:14px;font-weight:600}
.badge.b-tl{top:5%;left:-6%;animation-delay:-1s}
.badge.b-br{bottom:8%;right:-4%;animation-delay:-3s}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.scroll-ind{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);font-size:10px;letter-spacing:.4em;text-transform:uppercase;color:rgba(255,255,255,.5);display:flex;flex-direction:column;align-items:center;gap:10px}
.scroll-ind .line{width:1px;height:50px;background:linear-gradient(to bottom,var(--pink),transparent);position:relative;overflow:hidden}
.scroll-ind .line::after{content:"";position:absolute;top:-50%;left:0;width:100%;height:50%;background:#fff;animation:slideDown 2s infinite}
@keyframes slideDown{to{top:100%}}

@keyframes rise{to{opacity:1;transform:translateY(0)}}

@media (max-width:900px){
  .hero{grid-template-columns:1fr;padding:120px 5vw 60px;text-align:center}
  .hero-text .pill,.hero-text .cta-row{justify-content:center}
  .hero-text .pill{display:inline-flex}
  .cta-row{justify-content:center}
  .hero p.sub{margin-left:auto;margin-right:auto}
  .hero-visual{height:70vh;margin-top:20px}
  .badge.b-tl{left:4%}.badge.b-br{right:4%}
}

/* Sections shared */
section{padding:120px 5vw;position:relative}
.eyebrow{font-size:11px;letter-spacing:.45em;text-transform:uppercase;color:var(--pink);margin-bottom:18px;display:inline-block}
.title{font-family:var(--display);font-weight:500;font-size:clamp(34px,4.6vw,68px);line-height:1.02;letter-spacing:-.02em;margin-bottom:18px}
.title em{font-style:italic;background:linear-gradient(135deg,var(--pink),var(--pink-soft));-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:var(--muted);max-width:640px;font-size:16px;line-height:1.7}
.section-head{margin-bottom:64px;text-align:center;display:flex;flex-direction:column;align-items:center}
.reveal{opacity:0;transform:translateY(40px);transition:opacity 1s cubic-bezier(.2,.7,.2,1),transform 1s cubic-bezier(.2,.7,.2,1)}
.reveal.in{opacity:1;transform:none}

/* Benefits */
.benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.b-card{position:relative;padding:38px 30px;border-radius:24px;background:linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.01));border:1px solid var(--line);backdrop-filter:blur(20px);overflow:hidden;transition:transform .5s cubic-bezier(.2,.7,.2,1),border-color .4s;transform-style:preserve-3d}
.b-card::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(135deg,var(--pink),transparent 60%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .4s}
.b-card:hover::before{opacity:1}
.b-card:hover{transform:translateY(-8px)}
.b-card .ic{width:54px;height:54px;border-radius:14px;background:linear-gradient(135deg,rgba(255,45,139,.25),rgba(255,45,139,.05));display:grid;place-items:center;font-size:24px;margin-bottom:22px;border:1px solid rgba(255,45,139,.25)}
.b-card h3{font-size:20px;font-weight:600;margin-bottom:10px;letter-spacing:-.01em}
.b-card p{color:var(--muted);font-size:14px;line-height:1.6}
@media (max-width:900px){.benefits{grid-template-columns:1fr}}

/* Categories */
.cats{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-bottom:46px}
.cats button{padding:10px 22px;border-radius:999px;border:1px solid var(--line);background:transparent;color:rgba(255,255,255,.7);font-size:12px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:all .3s}
.cats button.active,.cats button:hover{background:linear-gradient(135deg,var(--pink),#a3186b);color:#fff;border-color:transparent;box-shadow:0 8px 28px var(--pink-glow)}
.gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.gallery .item{position:relative;border-radius:26px;overflow:hidden;aspect-ratio:3/4;background:#111;cursor:pointer;transition:transform .6s cubic-bezier(.2,.7,.2,1)}
.gallery .item:hover{transform:translateY(-8px)}
.gallery .item img{width:100%;height:100%;object-fit:cover;transition:transform 1.4s cubic-bezier(.2,.7,.2,1);filter:saturate(1.05)}
.gallery .item:hover img{transform:scale(1.12)}
.gallery .item::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(7,3,9,.85) 100%);transition:opacity .4s}
.gallery .item .meta{position:absolute;left:24px;right:24px;bottom:22px;display:flex;justify-content:space-between;align-items:flex-end;z-index:2;transform:translateY(10px);opacity:.92;transition:transform .4s}
.gallery .item:hover .meta{transform:translateY(0);opacity:1}
.gallery .item .meta h4{font-family:var(--display);font-style:italic;font-size:24px;font-weight:500}
.gallery .item .meta span{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--pink-soft)}
.gallery .item .tag{position:absolute;top:18px;left:18px;background:rgba(0,0,0,.5);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.15);padding:6px 12px;border-radius:999px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;z-index:2}
.gallery .item .glow-edge{position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px transparent;transition:box-shadow .4s;pointer-events:none}
.gallery .item:hover .glow-edge{box-shadow:inset 0 0 60px rgba(255,45,139,.4),inset 0 0 0 1px rgba(255,45,139,.4)}
@media (max-width:900px){.gallery{grid-template-columns:1fr 1fr;gap:14px}}
@media (max-width:600px){.gallery{grid-template-columns:1fr}}

/* Testimonials */
.testis{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.t-card{padding:26px;border-radius:22px;background:linear-gradient(160deg,rgba(255,255,255,.06),rgba(255,255,255,.02));backdrop-filter:blur(20px);border:1px solid var(--line);position:relative}
.t-head{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.t-head .av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--pink),#a3186b);display:grid;place-items:center;font-weight:700;color:#fff;font-size:15px}
.t-head .meta{flex:1}
.t-head .meta b{display:block;font-size:14px}
.t-head .meta small{font-size:11px;color:var(--muted)}
.t-head .stars{color:#ffd166;letter-spacing:2px;font-size:13px}
.t-card p{font-size:15px;line-height:1.55;color:rgba(255,255,255,.9)}
.t-card .check{position:absolute;top:18px;right:18px;font-size:12px;color:#25D366}
@media (max-width:900px){.testis{grid-template-columns:1fr}}

/* CTA Banner */
.cta-band{margin:0 5vw;padding:80px 6vw;border-radius:36px;background:radial-gradient(circle at 20% 20%,rgba(255,45,139,.35),transparent 60%),radial-gradient(circle at 80% 80%,rgba(122,31,255,.3),transparent 60%),linear-gradient(160deg,#160a18,#0a0410);border:1px solid var(--line);text-align:center;position:relative;overflow:hidden}
.cta-band::before{content:"";position:absolute;inset:0;background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='2' cy='2' r='1' fill='%23ffffff' opacity='.06'/></svg>");opacity:.6}
.cta-band h2{font-family:var(--display);font-size:clamp(36px,5vw,64px);line-height:1.05;margin-bottom:20px;position:relative}
.cta-band p{color:var(--muted);max-width:560px;margin:0 auto 36px;position:relative}
.cta-band .cta{position:relative}

/* Footer */
footer{padding:80px 5vw 40px;border-top:1px solid var(--line);background:linear-gradient(180deg,transparent,#050208)}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px;margin-bottom:50px}
.foot-grid .brand img{height:60px;filter:drop-shadow(0 0 24px var(--pink-glow));margin-bottom:18px}
.foot-grid .brand p{color:var(--muted);font-size:14px;max-width:340px;line-height:1.6}
.foot-grid h5{font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--pink);margin-bottom:18px}
.foot-grid ul{list-style:none;display:flex;flex-direction:column;gap:10px}
.foot-grid ul a{font-size:14px;color:rgba(255,255,255,.7);transition:color .25s}
.foot-grid ul a:hover{color:var(--pink-soft)}
.socials{display:flex;gap:12px;margin-top:14px}
.socials a{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;transition:all .3s;font-size:16px}
.socials a:hover{background:var(--pink);border-color:transparent;transform:translateY(-3px);box-shadow:0 10px 30px var(--pink-glow)}
.foot-bot{padding-top:30px;border-top:1px solid var(--line);display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,.45);letter-spacing:.1em}
@media (max-width:900px){.foot-grid{grid-template-columns:1fr;gap:32px}.foot-bot{flex-direction:column;gap:10px;text-align:center}}

/* Float WhatsApp btn */
.wfab{position:fixed;bottom:26px;right:26px;width:62px;height:62px;border-radius:50%;background:#25D366;display:grid;place-items:center;font-size:30px;z-index:90;box-shadow:0 10px 40px rgba(37,211,102,.5);animation:floatY 3s ease-in-out infinite;transition:transform .3s}
.wfab:hover{transform:scale(1.1)}
.wfab::before{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid #25D366;animation:ctaPulse 2s infinite}

/* Marquee */
.marquee{overflow:hidden;border-block:1px solid var(--line);padding:24px 0;background:rgba(255,255,255,.02)}
.marquee-track{display:flex;gap:60px;animation:scrollX 30s linear infinite;white-space:nowrap;font-family:var(--display);font-style:italic;font-size:clamp(28px,4vw,48px);color:rgba(255,255,255,.85)}
.marquee-track span{display:flex;align-items:center;gap:60px}
.marquee-track .star{color:var(--pink)}
@keyframes scrollX{to{transform:translateX(-50%)}}
`;

const SCRIPT = `
(function(){
  // Loader
  const hideLoader=()=>document.getElementById('loader')?.classList.add('done');
  if(document.readyState==='complete'){setTimeout(hideLoader,300)}
  else{window.addEventListener('load',()=>setTimeout(hideLoader,500))}
  setTimeout(hideLoader,1500);
  // Cursor
  const c=document.querySelector('.cursor'),d=document.querySelector('.cursor-dot');
  if(c&&matchMedia('(pointer:fine)').matches){
    let x=0,y=0,tx=0,ty=0;
    addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;d.style.transform='translate('+tx+'px,'+ty+'px) translate(-50%,-50%)'});
    (function loop(){x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform='translate('+x+'px,'+y+'px) translate(-50%,-50%)';requestAnimationFrame(loop)})();
    document.querySelectorAll('a,button,.cta,.gallery .item').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('hover'));el.addEventListener('mouseleave',()=>c.classList.remove('hover'))});
  }
  // Nav scrolled
  const nav=document.querySelector('.nav');
  addEventListener('scroll',()=>nav?.classList.toggle('scrolled',scrollY>30));
  // Reveal
  const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  // Magnetic CTA
  document.querySelectorAll('[data-magnet]').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();const mx=e.clientX-r.left-r.width/2;const my=e.clientY-r.top-r.height/2;btn.style.transform='translate('+mx*.18+'px,'+my*.25+'px) scale(1.04)'});
    btn.addEventListener('mouseleave',()=>btn.style.transform='');
  });
  // Hero word stagger
  document.querySelectorAll('.hero h1 .word').forEach((w,i)=>w.style.animationDelay=(i*.08)+'s');
  // Categories filter
  const cats=document.querySelectorAll('.cats button');
  cats.forEach(b=>b.addEventListener('click',()=>{cats.forEach(x=>x.classList.remove('active'));b.classList.add('active');const t=b.dataset.cat;document.querySelectorAll('.gallery .item').forEach(it=>{it.style.display=(t==='all'||it.dataset.cat===t)?'':'none'})}));
  // Particles
  const cv=document.getElementById('particles');if(cv){const ctx=cv.getContext('2d');let w,h,parts=[];function rs(){w=cv.width=innerWidth;h=cv.height=innerHeight}rs();addEventListener('resize',rs);for(let i=0;i<60;i++)parts.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.6+.3,vy:-Math.random()*.4-.1,vx:(Math.random()-.5)*.2,a:Math.random()*.6+.2});function tick(){ctx.clearRect(0,0,w,h);parts.forEach(p=>{p.y+=p.vy;p.x+=p.vx;if(p.y<-10){p.y=h+10;p.x=Math.random()*w}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,'+(120+Math.random()*60|0)+',180,'+p.a+')';ctx.shadowColor='#ff2d8b';ctx.shadowBlur=10;ctx.fill()});requestAnimationFrame(tick)}tick()}
  // Parallax hero
  const hv=document.querySelector('.hero-visual .frame img');
  addEventListener('scroll',()=>{if(hv){hv.style.transform='scale(1.06) translateY('+(scrollY*.08)+'px)'}});
})();
`;

function Index() {
  useEffect(() => {
    const s = document.createElement("script");
    s.innerHTML = SCRIPT;
    document.body.appendChild(s);
    // Fonts
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(l);
    return () => {
      s.remove();
      l.remove();
    };
  }, []);

  const headline = ["Os", "Conjuntos", "que", "todo", "mundo"];
  const headline2 = ["pergunta", "onde"];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div id="loader">
        <div className="ring" />
        <div className="lbl">Secrets Club</div>
      </div>

      <div className="cursor" />
      <div className="cursor-dot" />
      <div className="grain" />

      <div className="bg-fx">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <canvas id="particles" />

      <header className="nav">
        <a href="#" className="logo">
          <img src="/images/logo.png" alt="Secrets Club" />
        </a>
        <nav className="links">
          <a href="#beneficios">Vantagens</a>
          <a href="#galeria">Coleção</a>
          <a href="#provas">Avaliações</a>
          <a href="#vip">Grupo VIP</a>
        </nav>
        <a href={WHATSAPP_URL} className="cta-mini" data-magnet>
          Entrar no VIP
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <span className="pill">Promoções liberadas — Vagas limitadas</span>
            <h1>
              {headline.map((w, i) => (
                <span className="word" key={i}>
                  {w}&nbsp;
                </span>
              ))}
              <br />
              {headline2.map((w, i) => (
                <span className="word" key={i}>
                  {w}&nbsp;
                </span>
              ))}
              <span className="word gr">
                <em>comprou.</em>
              </span>
            </h1>
            <p className="sub">
              Looks fitness premium, lançamentos virais e descontos exclusivos direto no
              grupo VIP da <b>Secrets Club</b>. Entre antes que feche.
            </p>
            <div className="cta-row">
              <a href={WHATSAPP_URL} className="cta" data-magnet>
                <span className="cta-pulse" />
                🔥 Quero entrar no grupo VIP
                <span className="arr">→</span>
              </a>
              <div className="trust">
                <b>2 grupos</b> cheios
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glow" />
            <div className="frame">
              <img src="/images/hero.jpg" alt="Conjunto fitness premium Secrets Club" />
            </div>
            <div className="badge b-tl">
              <div className="dot">★</div>
              <div>
                <small>Avaliação</small>
                <strong>4.9 / 5.0</strong>
              </div>
            </div>
            <div className="badge b-br">
              <div className="dot">%</div>
              <div>
                <small>Desconto VIP</small>
                <strong>até 40% OFF</strong>
              </div>
            </div>
          </div>
          <div className="scroll-ind">
            <span>Role</span>
            <div className="line" />
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-track">
            <span>
              Premium Fitwear <span className="star">✦</span> Lançamentos Semanais{" "}
              <span className="star">✦</span> Frete Seguro <span className="star">✦</span>{" "}
              Atendimento VIP <span className="star">✦</span> Peças Virais{" "}
              <span className="star">✦</span>
            </span>
            <span>
              Premium Fitwear <span className="star">✦</span> Lançamentos Semanais{" "}
              <span className="star">✦</span> Frete Seguro <span className="star">✦</span>{" "}
              Atendimento VIP <span className="star">✦</span> Peças Virais{" "}
              <span className="star">✦</span>
            </span>
          </div>
        </div>

        <section id="beneficios">
          <div className="section-head reveal">
            <span className="eyebrow">Por que Secrets Club</span>
            <h2 className="title">
              Feito para mulheres que <em>amam treinar</em>
              <br />e amar como ficam.
            </h2>
          </div>
          <div className="benefits">
            {[
              ["✦", "Qualidade Premium", "Tecidos importados, costura reforçada, modelagem que veste todos os corpos."],
              ["★", "Melhor Preço", "Acesso a preços de fábrica e cupons exclusivos só para o grupo VIP."],
              ["⛨", "Envio Seguro", "Despachamos em até 24h com rastreio, embalagem premium e proteção total."],
              ["♥", "Peças Virais", "As mesmas usadas pelas musas fitness do Instagram. Estoque limitado."],
              ["⚡", "Atendimento Rápido", "Suporte humanizado no WhatsApp. Tira dúvidas, ajuda no tamanho e na escolha."],
              ["%", "Promoções Exclusivas", "Drops semanais, descontos relâmpago e brindes só liberados no grupo VIP."],
            ].map(([ic, h, p], i) => (
              <div className="b-card reveal" key={i} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="ic">{ic}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria">
          <div className="section-head reveal">
            <span className="eyebrow">Coleção</span>
            <h2 className="title">
              Os looks <em>mais desejados</em> da temporada
            </h2>
            <p className="lead" style={{ marginTop: 14 }}>
              Conjuntos, leggings, tops, shorts e macacões que viralizam toda semana.
            </p>
          </div>
          <div className="cats reveal">
            {["all", "Conjuntos", "Leggings", "Tops", "Shorts", "Macacões"].map((c, i) => (
              <button key={c} data-cat={c} className={i === 0 ? "active" : ""}>
                {c === "all" ? "Tudo" : c}
              </button>
            ))}
          </div>
          <div className="gallery">
            {[
              ["/images/hero.jpg", "Bordeaux Set", "Conjunto", "Conjuntos", "Bestseller"],
              ["/images/p1.jpg", "Velvet Flare", "Conjunto Flare", "Conjuntos", "Novo"],
              ["/images/p2.jpg", "Noir Sport", "Top + Legging", "Tops", "Viral"],
              ["/images/p3.jpg", "Black Essential", "Legging Premium", "Leggings", "Top 1"],
              ["/images/hero.jpg", "Wine Macacão", "Macacão Modelador", "Macacões", "Limited"],
              ["/images/p2.jpg", "Shape Short", "Short Empina", "Shorts", "Hot"],
            ].map(([img, t, sub, cat, tag], i) => (
              <div className="item reveal" data-cat={cat} key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <img src={img as string} alt={t as string} loading="lazy" />
                <div className="tag">{tag}</div>
                <div className="glow-edge" />
                <div className="meta">
                  <div>
                    <span>{cat}</span>
                    <h4>{t}</h4>
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.85)" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="provas">
          <div className="section-head reveal">
            <span className="eyebrow">Quem usa, ama</span>
            <h2 className="title">
              Mais de <em>12 mil mulheres</em> aprovam
            </h2>
          </div>
          <div className="testis">
            {[
              ["J", "Júlia M.", "Cliente VIP", "Chegou perfeito 😍 a qualidade superou o que eu esperava, virei cliente fiel."],
              ["B", "Bia R.", "São Paulo", "A qualidade é absurda. O tecido é grosso, não marca nada e modela demais."],
              ["L", "Larissa S.", "Belo Horizonte", "Vestiu muito bem! Comprei 3 conjuntos de uma vez e não me arrependi."],
              ["A", "Amanda T.", "Curitiba", "Todo mundo perguntou onde comprei no treino. Já indiquei pra todas as amigas."],
              ["C", "Carol P.", "Rio de Janeiro", "Valeu cada centavo. Atendimento rápido e entrega super veloz."],
              ["M", "Mariana D.", "Floripa", "Os descontos do grupo VIP são absurdos. Comprei conjunto por menos de metade."],
            ].map(([ini, n, c, txt], i) => (
              <div className="t-card reveal" key={i} style={{ transitionDelay: `${i * 0.05}s` }}>
                <span className="check">✓ Verificado</span>
                <div className="t-head">
                  <div className="av">{ini}</div>
                  <div className="meta">
                    <b>{n}</b>
                    <small>{c}</small>
                  </div>
                  <div className="stars">★★★★★</div>
                </div>
                <p>{txt}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="vip">
          <div className="cta-band reveal">
            <h2>
              Entre no grupo <em style={{ fontStyle: "italic", color: "var(--pink-soft)" }}>VIP</em> e
              receba os drops antes de todo mundo.
            </h2>
            <p>
              Cupons exclusivos, lançamentos em primeira mão e peças que esgotam em
              minutos. Vagas limitadas.
            </p>
            <a href={WHATSAPP_URL} className="cta" data-magnet>
              <span className="cta-pulse" />
              🔥 Quero entrar no grupo VIP
              <span className="arr">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="foot-grid">
          <div className="brand">
            <img src="/images/logo.png" alt="Secrets Club" />
            <p>
              Moda fitness premium feminina. Conjuntos, leggings, tops e macacões que
              viralizam — com qualidade que dura.
            </p>
            <div className="socials">
              <a href="#" aria-label="Instagram">◐</a>
              <a href="#" aria-label="TikTok">♪</a>
              <a href={WHATSAPP_URL} aria-label="WhatsApp">✆</a>
            </div>
          </div>
          <div>
            <h5>Coleção</h5>
            <ul>
              <li><a href="#galeria">Conjuntos</a></li>
              <li><a href="#galeria">Leggings</a></li>
              <li><a href="#galeria">Tops</a></li>
              <li><a href="#galeria">Macacões</a></li>
            </ul>
          </div>
          <div>
            <h5>Atendimento</h5>
            <ul>
              <li><a href={WHATSAPP_URL}>WhatsApp VIP</a></li>
              <li><a href="#provas">Avaliações</a></li>
              <li><a href="#beneficios">Vantagens</a></li>
              <li><a href="#vip">Grupo VIP</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} Secrets Club — Premium Fitwear</span>
          <span>Feito com ♥ para mulheres reais</span>
        </div>
      </footer>

      <a href={WHATSAPP_URL} className="wfab" aria-label="WhatsApp">✆</a>
    </>
  );
}
