(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63059,75254,e=>{"use strict";var t=e.i(71645);let a=(...e)=>e.filter((e,t,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===t).join(" ").trim(),r=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,t.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:o="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...i,width:r,height:r,stroke:e,strokeWidth:n?24*Number(s)/Number(r):s,className:a("lucide",o),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(c)&&{"aria-hidden":"true"},...c},[...d.map(([e,a])=>(0,t.createElement)(e,a)),...Array.isArray(l)?l:[l]])),n=(e,i)=>{let n=(0,t.forwardRef)(({className:n,...o},l)=>(0,t.createElement)(s,{ref:l,iconNode:i,className:a(`lucide-${r(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...o}));return n.displayName=r(e),n};e.s(["default",()=>n],75254);let o=n("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",()=>o],63059)},27927,e=>{"use strict";let t=(0,e.i(75254).default)("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);e.s(["Cloud",()=>t],27927)},26707,e=>{"use strict";let t=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>t],26707)},81418,e=>{"use strict";let t=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>t],81418)},94909,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var i in r)Object.defineProperty(a,i,{enumerable:!0,get:r[i]});let s=e.r(55682),n=e.r(8927),o=e.r(5500),l=s._(e.r(1948));function d(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let c=o.Image},57688,(e,t,a)=>{t.exports=e.r(94909)},54283,e=>{"use strict";var t=e.i(71645);e.s(["useMoodTrackerScrollSpy",0,function(e,a){let[r,i]=(0,t.useState)(a??e[0]??"");return(0,t.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let a=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)a=e.id;else break;i(e=>e===a?e:a)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:r,jumpTo:e=>{i(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}])},30267,e=>{"use strict";let t=(0,e.i(75254).default)("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);e.s(["LineChart",()=>t],30267)},73705,e=>{"use strict";let t=(0,e.i(75254).default)("bell-ring",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);e.s(["BellRing",()=>t],73705)},57805,e=>{"use strict";var t=e.i(43476),a=e.i(57688),r=e.i(22016),i=e.i(75254);let s=(0,i.default)("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);var n=e.i(81418),o=e.i(73705),l=e.i(30267);let d=(0,i.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]);var c=e.i(27927),p=e.i(26707),h=e.i(63059);let m=(0,i.default)("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),g=(0,i.default)("moon-star",[["path",{d:"M18 5h4",key:"1lhgn2"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);var f=e.i(54283);let x=[{id:"daily-checkins",title:"Log Mood In Seconds",summary:"Quick check-ins keep reflection easy. Add mood, note the moment, and build a clear emotional timeline over time.",bullets:["One-tap mood entry for daily consistency","Add short notes for context behind each mood","Simple timeline view to spot emotional patterns"]},{id:"reminders",title:"Gentle Reminder Schedule",summary:"Set reminder windows and optional follow-up nudges so you remember to check in, even on busy days.",bullets:["Custom reminder slots","Flexible reminder frequency","Silent and sound notification modes"]},{id:"mood-management",title:"Your Mood Labels, Your Style",summary:"Create custom mood labels, colors, and tags so tracking reflects your real life and emotional vocabulary.",bullets:["Manage custom mood tags","Color-coded mood categories","Personalized logging experience"]},{id:"insights",title:"Trends You Can Understand",summary:"Trend charts help you identify what improves your mood and what patterns need attention across days and weeks.",bullets:["Daily and weekly mood trend visuals","Streak and consistency history","Pattern signals for better self-awareness"]},{id:"privacy",title:"Privacy-First By Default",summary:"No mandatory account. Mood logs stay on-device with optional protection such as PIN and biometric unlock.",bullets:["No login needed for core usage","Local-first data model","PIN and biometric protection options"]},{id:"backup-personalization",title:"Backup and Personalization",summary:"Backup and restore support plus appearance themes make MoodTracker practical for long-term use.",bullets:["Backup and restore tools","Optional widget support","Appearance themes and customization"]}];function u({iosUrl:e,androidUrl:i}){let{activeSection:u,jumpTo:w}=(0,f.useMoodTrackerScrollSpy)(x.map(e=>e.id),x[0].id);return(0,t.jsxs)("section",{children:[(0,t.jsx)("style",{children:`
        .wth-hero {
          border-radius: 26px;
          border: 1px solid rgba(78, 47, 122, 0.18);
          background:
            radial-gradient(circle at 7% 8%, rgba(221, 177, 255, 0.28), transparent 36%),
            radial-gradient(circle at 92% 84%, rgba(255, 182, 220, 0.24), transparent 34%),
            linear-gradient(145deg, #3c245e 0%, #5f33a0 46%, #9541b5 100%);
          padding: 34px;
          color: #fff2ff;
          margin-bottom: 26px;
        }
        .wth-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .wth-brand img {
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(44, 21, 74, 0.35);
        }
        .wth-brand span {
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #fbe8ff;
        }
        .wth-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .wth-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 239, 255, 0.38);
          border-radius: 999px;
          background: rgba(255, 239, 255, 0.14);
          padding: 6px 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .wth-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4.8vw, 3.9rem);
          letter-spacing: -0.03em;
          line-height: 1.03;
        }
        .wth-hero p {
          margin: 14px 0 0;
          color: #f4d8ff;
          line-height: 1.7;
          max-width: 760px;
          font-size: 1.03rem;
        }
        .wth-cta-row {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wth-btn {
          text-decoration: none;
          min-height: 44px;
          border-radius: 12px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid transparent;
        }
        .wth-btn-primary {
          background: #ffd8f5;
          color: #4e2f7a;
          box-shadow: 0 8px 20px rgba(35, 16, 56, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #fff2ff;
          border-color: rgba(255, 239, 255, 0.4);
        }
        .wth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wth-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wth-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wth-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wth-nav-item {
          border: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          padding: 9px 13px;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 700;
          color: var(--wt-muted);
          background: transparent;
          transition: 0.2s ease;
        }
        .wth-nav-item:hover {
          background: rgba(140, 88, 217, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          box-shadow: 0 5px 14px rgba(95, 51, 160, 0.2);
        }
        .wth-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 16px;
        }
        .wth-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 22px;
          padding: 28px;
          box-shadow: 0 8px 24px rgba(16, 36, 79, 0.05);
          scroll-margin-top: 95px;
        }
        .wth-card h2 {
          margin: 0;
          font-size: clamp(1.35rem, 2.6vw, 2rem);
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
        }
        .wth-card p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wth-feature-list {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wth-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          flex-shrink: 0;
        }
        .wth-shot {
          margin-top: 16px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 16px;
          padding: 10px;
          background: #fff;
        }
        .wth-shot figure {
          margin: 0;
        }
        .wth-shot img {
          border-radius: 12px;
          width: 100%;
          height: auto;
        }
        .wth-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wth-faq {
          margin-top: 16px;
          border: 1px solid rgba(78, 47, 122, 0.13);
          border-radius: 14px;
          background: #fff8ff;
          padding: 14px;
        }
        .wth-faq h3 {
          margin: 0 0 8px;
          font-size: 15px;
          color: var(--wt-navy-900);
        }
        .wth-faq p {
          margin: 0;
          font-size: 14px;
        }
        .wth-bottom-cta {
          margin-top: 4px;
          background: linear-gradient(140deg, var(--wt-navy-900) 0%, var(--wt-navy-700) 100%);
          border-radius: 22px;
          padding: 30px;
          color: #fff;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          justify-content: space-between;
        }
        .wth-bottom-cta h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(1.3rem, 2.4vw, 1.9rem);
        }
        .wth-bottom-cta p {
          margin: 7px 0 0;
          color: #f5deff;
          max-width: 620px;
        }
        .wth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .wth-hero { padding: 28px 18px; }
          .wth-layout { flex-direction: column; }
          .wth-sidebar { display: none; }
          .wth-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 4px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wth-mobile-jumps::-webkit-scrollbar { display: none; }
          .wth-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.15);
            background: rgba(255, 255, 255, 0.78);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wth-card { padding: 22px 16px; }
        }
      `}),(0,t.jsxs)("div",{className:"wth-hero",children:[(0,t.jsxs)("div",{className:"wth-brand",children:[(0,t.jsx)(a.default,{src:"/moodtracker/logo.png",alt:"Mood Tracker",width:48,height:48,priority:!0}),(0,t.jsx)("span",{children:"Mood Tracker"})]}),(0,t.jsxs)("div",{className:"wth-badges","aria-label":"Mood tracker highlights",children:[(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(s,{size:12})," Daily Check-ins"]}),(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(o.BellRing,{size:12})," Gentle Reminders"]}),(0,t.jsxs)("span",{className:"wth-badge",children:[(0,t.jsx)(n.ShieldCheck,{size:12})," Local-First Logs"]})]}),(0,t.jsx)("h1",{className:"wt-font-display",children:"Mood Tracker App For Daily Emotional Awareness"}),(0,t.jsx)("p",{children:"MoodTracker helps you log mood quickly, schedule check-in reminders, and understand emotional trends. No mandatory account, local-first privacy, and practical tools for reflection, patterns, and consistency."}),(0,t.jsxs)("div",{className:"wth-cta-row",children:[e?(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"wth-btn wth-btn-primary",children:"Download on App Store"}):(0,t.jsx)("span",{className:"wth-btn wth-btn-secondary",children:"App Store Link Pending"}),i?(0,t.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"wth-btn wth-btn-secondary",children:"Get it on Play Store"}):(0,t.jsx)("span",{className:"wth-btn wth-btn-secondary",children:"Play Store Under Review"}),(0,t.jsx)(r.default,{href:"/moodtracker/guide",className:"wth-btn wth-btn-secondary",children:"How To Use"}),(0,t.jsx)(r.default,{href:"/moodtracker/benefits",className:"wth-btn wth-btn-secondary",children:"Mental Wellness Benefits"})]})]}),(0,t.jsx)("div",{className:"wth-mobile-jumps","aria-label":"Jump to sections",children:x.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>w(e.id),children:e.title},e.id))}),(0,t.jsxs)("div",{className:"wth-layout",children:[(0,t.jsxs)("aside",{className:"wth-sidebar","aria-label":"Mood tracker sections",children:[(0,t.jsx)("p",{className:"wth-sidebar-title",children:"Explore"}),(0,t.jsx)("div",{className:"wth-nav-list",children:x.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>w(e.id),className:`wth-nav-item ${u===e.id?"active":""}`,children:e.title},e.id))})]}),(0,t.jsxs)("div",{className:"wth-content",children:[x.map(e=>(0,t.jsxs)("article",{id:e.id,className:"wth-card",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,t.jsx)("p",{children:e.summary}),(0,t.jsx)("div",{className:"wth-feature-list",role:"list","aria-label":`${e.title} highlights`,children:e.bullets.map(e=>(0,t.jsxs)("div",{className:"wth-feature-item",role:"listitem",children:[(0,t.jsx)("span",{className:"wth-dot","aria-hidden":"true"}),(0,t.jsx)("span",{children:e})]},e))}),e.image?(0,t.jsx)("div",{className:"wth-shot",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(a.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,t.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Is this a good mood tracker for daily use?"}),(0,t.jsx)("p",{children:"Yes. It is built for practical daily tracking with quick mood logging, schedule-based reminders, and privacy-first local storage."})]}),(0,t.jsxs)("div",{className:"wth-bottom-cta",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"wt-font-display",children:"Ready To Build Better Emotional Habits?"}),(0,t.jsx)("p",{children:"Open the full guide for setup steps, then review benefits to make mood tracking simple and sustainable."})]}),(0,t.jsxs)("div",{className:"wth-cta-row",style:{marginTop:0},children:[(0,t.jsxs)(r.default,{href:"/moodtracker/guide",className:"wth-btn wth-btn-primary",children:["Open Guide ",(0,t.jsx)(h.ChevronRight,{size:14})]}),(0,t.jsx)(r.default,{href:"/moodtracker/benefits",className:"wth-btn wth-btn-secondary",children:"Read Benefits"})]})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"How is this different from a basic mood app?"}),(0,t.jsx)("p",{children:"MoodTracker combines reminders, custom labels, trend insights, backup support, widgets, and on-device privacy controls in one flow."})]}),(0,t.jsxs)("div",{className:"wth-faq",children:[(0,t.jsx)("h3",{children:"Need implementation-level walkthrough?"}),(0,t.jsxs)("p",{children:["See the complete ",(0,t.jsx)(r.default,{href:"/moodtracker/guide",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"MoodTracker guide"})," to set reminders, customize mood labels, and configure backup options from start to finish."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(p.Smartphone,{size:16}),(0,t.jsxs)("p",{style:{margin:0},children:["Want practical mental wellness guidance? Read ",(0,t.jsx)(r.default,{href:"/moodtracker/benefits",style:{color:"var(--wt-navy-700)",fontWeight:800},children:"Benefits of Daily Mood Tracking"}),"."]})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(c.Cloud,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"For backup and restore details, open the guide section dedicated to recovery flow and safe device migration."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(d,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Personalization includes themes and appearance controls to match your mood tracking style."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(l.LineChart,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Trend charts turn entries into insights, helping you improve self-awareness over time."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(m,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Reflective notes help connect moods with triggers, activities, and routines."})]}),(0,t.jsxs)("div",{className:"wth-faq",style:{display:"flex",gap:10,alignItems:"center"},children:[(0,t.jsx)(g,{size:16}),(0,t.jsx)("p",{style:{margin:0},children:"Track day vs night mood shifts to better understand sleep and routine impact."})]})]})]})]})}e.s(["default",()=>u],57805)}]);