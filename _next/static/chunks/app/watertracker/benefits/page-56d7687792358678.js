(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7695],{5742:(e,t,i)=>{"use strict";i.d(t,{default:()=>d});var a=i(5155),r=i(5772),n=i(8500),s=i.n(n),o=i(8544);function d({sections:e,faq:t}){let{activeSection:i,jumpTo:n}=(0,o.w)(e.map(e=>e.id),e[0]?.id);return(0,a.jsxs)("article",{children:[(0,a.jsx)("style",{children:`
        .wtb-hero {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: var(--wt-card);
          padding: 30px;
          margin-bottom: 18px;
        }
        .wtb-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.3rem);
          letter-spacing: -0.03em;
          color: var(--wt-navy-900);
        }
        .wtb-hero p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.75;
          max-width: 860px;
        }
        .wtb-mobile-jumps {
          display: none;
        }
        .wtb-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wtb-sidebar {
          width: 230px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wtb-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wtb-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wtb-nav-btn {
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
        }
        .wtb-nav-btn:hover {
          background: rgba(79, 136, 255, 0.1);
        }
        .wtb-nav-btn.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
        }
        .wtb-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 14px;
        }
        .wtb-card {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 20px;
          padding: 24px;
          scroll-margin-top: 95px;
        }
        .wtb-card h2 {
          margin: 0;
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
          font-size: clamp(1.24rem, 2.3vw, 1.7rem);
        }
        .wtb-card p {
          margin: 10px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wtb-points {
          margin: 14px 0 0;
          display: grid;
          gap: 8px;
        }
        .wtb-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wtb-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          flex-shrink: 0;
        }
        .wtb-shot {
          margin-top: 14px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 14px;
          background: #fff;
          padding: 10px;
        }
        .wtb-shot figure {
          margin: 0;
        }
        .wtb-shot img {
          border-radius: 10px;
          width: 100%;
          height: auto;
        }
        .wtb-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wtb-faq {
          background: #fff;
          border: 1px solid rgba(16, 36, 79, 0.1);
          border-radius: 16px;
          padding: 16px;
        }
        .wtb-faq h2 {
          margin: 0 0 10px;
          color: var(--wt-navy-900);
          font-size: 1.2rem;
        }
        .wtb-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtb-faq-item + .wtb-faq-item {
          margin-top: 8px;
        }
        .wtb-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
        }
        .wtb-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtb-note {
          margin-top: 10px;
          border-radius: 12px;
          border: 1px solid rgba(245, 158, 11, 0.35);
          background: #fff8eb;
          color: #7c4a04;
          padding: 10px 12px;
          font-size: 0.92rem;
          line-height: 1.6;
        }
        .wtb-actions {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .wtb-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 14px;
          border-radius: 10px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
        }
        .wtb-btn-primary {
          background: #3f82ff;
          color: #fff;
        }
        .wtb-btn-ghost {
          border: 1px solid rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 860px) {
          .wtb-hero { padding: 22px 16px; }
          .wtb-layout { flex-direction: column; }
          .wtb-sidebar { display: none; }
          .wtb-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wtb-mobile-jumps::-webkit-scrollbar { display: none; }
          .wtb-mobile-jumps button {
            border: 1px solid rgba(16, 36, 79, 0.16);
            background: rgba(255, 255, 255, 0.8);
            color: var(--wt-navy-900);
            border-radius: 999px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            padding: 8px 12px;
            white-space: nowrap;
          }
          .wtb-card { padding: 20px 14px; }
        }
      `}),(0,a.jsxs)("div",{className:"wtb-hero",children:[(0,a.jsx)("h1",{className:"wt-font-display",children:"Benefits of Balanced Drinking and Hydration Tracking"}),(0,a.jsx)("p",{children:"Better hydration is not about drinking endlessly. It is about consistency, timing, and awareness. This page explains practical hydration benefits and how a water tracker app helps build sustainable habits."})]}),(0,a.jsx)("div",{className:"wtb-mobile-jumps","aria-label":"Benefits section jumps",children:e.map(e=>(0,a.jsx)("button",{type:"button",onClick:()=>n(e.id),children:e.title},e.id))}),(0,a.jsxs)("div",{className:"wtb-layout",children:[(0,a.jsxs)("aside",{className:"wtb-sidebar","aria-label":"Benefits sections",children:[(0,a.jsx)("p",{className:"wtb-sidebar-title",children:"Benefit Topics"}),(0,a.jsx)("div",{className:"wtb-nav-list",children:e.map(e=>(0,a.jsx)("button",{type:"button",onClick:()=>n(e.id),className:`wtb-nav-btn ${i===e.id?"active":""}`,children:e.title},e.id))})]}),(0,a.jsxs)("div",{className:"wtb-content",children:[e.map(e=>(0,a.jsxs)("section",{id:e.id,className:"wtb-card",children:[(0,a.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,a.jsx)("p",{children:e.summary}),(0,a.jsx)("div",{className:"wtb-points",role:"list","aria-label":`${e.title} details`,children:e.bullets.map(e=>(0,a.jsxs)("div",{className:"wtb-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wtb-dot","aria-hidden":"true"}),(0,a.jsx)("span",{children:e})]},e))}),e.image?(0,a.jsx)("div",{className:"wtb-shot",children:(0,a.jsxs)("figure",{children:[(0,a.jsx)(r.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,a.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,a.jsxs)("div",{className:"wtb-faq",children:[(0,a.jsx)("h2",{className:"wt-font-display",children:"Common Questions"}),t.map(e=>(0,a.jsxs)("div",{className:"wtb-faq-item",children:[(0,a.jsx)("b",{children:e.q}),(0,a.jsx)("p",{children:e.a})]},e.q)),(0,a.jsx)("div",{className:"wtb-note",children:"General wellness information only. If you have kidney, heart, endocrine, or medically restricted fluid needs, follow your clinician guidance for hydration targets."}),(0,a.jsxs)("div",{className:"wtb-actions",children:[(0,a.jsx)(s(),{href:"/watertracker",className:"wtb-btn wtb-btn-primary",children:"Back To Overview"}),(0,a.jsx)(s(),{href:"/watertracker/guide",className:"wtb-btn wtb-btn-ghost",children:"Open How-To Guide"})]})]})]})]})]})}},5772:(e,t,i)=>{"use strict";i.d(t,{default:()=>r.a});var a=i(7651),r=i.n(a)},7651:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return p},getImageProps:function(){return l}};for(var r in a)Object.defineProperty(t,r,{enumerable:!0,get:a[r]});let n=i(3623),s=i(5413),o=i(8437),d=n._(i(6095));function l(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:d.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let p=o.Image},8544:(e,t,i)=>{"use strict";i.d(t,{w:()=>r});var a=i(2115);function r(e,t){let[i,r]=(0,a.useState)(t??e[0]??"");return(0,a.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let i=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)i=e.id;else break;r(e=>e===i?e:i)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:i,jumpTo:e=>{r(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}},8710:(e,t,i)=>{Promise.resolve().then(i.bind(i,5742))}},e=>{e.O(0,[8500,8437,8441,3794,7358],()=>e(e.s=8710)),_N_E=e.O()}]);