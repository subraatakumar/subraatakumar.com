(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return p},getImageProps:function(){return l}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=e.r(55682),s=e.r(8927),o=e.r(5500),d=n._(e.r(1948));function l(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:d.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let p=o.Image},57688,(e,t,r)=>{t.exports=e.r(94909)},54283,e=>{"use strict";var t=e.i(71645);e.s(["useMoodTrackerScrollSpy",0,function(e,r){let[i,a]=(0,t.useState)(r??e[0]??"");return(0,t.useEffect)(()=>{if(!e.length)return;let t=()=>{let t=e.map(e=>document.getElementById(e)).filter(e=>!!e);if(!t.length)return;let r=t[0].id;for(let e of t)if(e.getBoundingClientRect().top-120<=0)r=e.id;else break;a(e=>e===r?e:r)};return t(),window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e]),{activeSection:i,jumpTo:e=>{a(e),document.getElementById(e)?.scrollIntoView({behavior:"smooth",block:"start"})}}}])},32549,e=>{"use strict";var t=e.i(43476),r=e.i(57688),i=e.i(22016),a=e.i(54283);function n({sections:e,faq:n}){let{activeSection:s,jumpTo:o}=(0,a.useMoodTrackerScrollSpy)(e.map(e=>e.id),e[0]?.id);return(0,t.jsxs)("article",{children:[(0,t.jsx)("style",{children:`
        .wtg-header {
          border-radius: 24px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: var(--wt-card);
          padding: 30px;
          margin-bottom: 18px;
        }
        .wtg-header h1 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.4rem);
          letter-spacing: -0.03em;
          color: var(--wt-navy-900);
        }
        .wtg-header p {
          margin: 12px 0 0;
          color: var(--wt-muted);
          line-height: 1.75;
          max-width: 840px;
          font-size: 1rem;
        }
        .wtg-mobile-jumps {
          display: none;
        }
        .wtg-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wtg-sidebar {
          width: 240px;
          flex-shrink: 0;
          position: sticky;
          top: 86px;
        }
        .wtg-sidebar-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--wt-muted);
          margin: 0 0 10px;
          padding: 0 12px;
        }
        .wtg-nav-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .wtg-nav-btn {
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
        .wtg-nav-btn:hover {
          background: rgba(140, 88, 217, 0.1);
        }
        .wtg-nav-btn.active {
          color: #fff;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          box-shadow: 0 5px 14px rgba(95, 51, 160, 0.2);
        }
        .wtg-content {
          flex: 1;
          min-width: 0;
          display: grid;
          gap: 14px;
        }
        .wtg-section {
          background: var(--wt-card);
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 20px;
          padding: 24px;
          scroll-margin-top: 95px;
        }
        .wtg-section h2 {
          margin: 0;
          color: var(--wt-navy-900);
          letter-spacing: -0.02em;
          font-size: clamp(1.25rem, 2.4vw, 1.8rem);
        }
        .wtg-section p {
          margin: 10px 0 0;
          color: var(--wt-muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .wtg-steps {
          margin-top: 15px;
          display: grid;
          gap: 8px;
        }
        .wtg-step {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 10px;
          background: rgba(79, 136, 255, 0.06);
          border: 1px solid rgba(140, 88, 217, 0.16);
          color: var(--wt-navy-900);
          font-size: 14px;
          font-weight: 700;
        }
        .wtg-step-n {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: linear-gradient(140deg, #8c58d9, #de6cb6);
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .wtg-shot {
          margin-top: 14px;
          border: 1px solid rgba(16, 36, 79, 0.08);
          border-radius: 14px;
          padding: 10px;
          background: #fff;
        }
        .wtg-shot figure {
          margin: 0;
        }
        .wtg-shot img {
          border-radius: 10px;
          width: 100%;
          height: auto;
        }
        .wtg-shot figcaption {
          margin-top: 8px;
          font-size: 12px;
          color: var(--wt-muted);
          font-weight: 700;
        }
        .wtg-faq-wrap {
          margin-top: 6px;
          background: #fff;
          border: 1px solid rgba(16, 36, 79, 0.1);
          border-radius: 16px;
          padding: 16px;
        }
        .wtg-faq-wrap h2 {
          margin: 0 0 10px;
          color: var(--wt-navy-900);
          font-size: 1.2rem;
        }
        .wtg-faq-item {
          border-radius: 12px;
          border: 1px solid rgba(16, 36, 79, 0.1);
          background: #f8fcff;
          padding: 12px;
        }
        .wtg-faq-item + .wtg-faq-item {
          margin-top: 8px;
        }
        .wtg-faq-item b {
          color: #17386f;
          display: block;
          margin-bottom: 4px;
        }
        .wtg-faq-item p {
          margin: 0;
          color: #4d5f86;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .wtg-actions {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wtg-btn {
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
        .wtg-btn-primary {
          background: #8c58d9;
          color: #fff;
        }
        .wtg-btn-ghost {
          border-color: rgba(16, 36, 79, 0.2);
          color: #17386f;
          background: #fff;
        }
        @media (max-width: 860px) {
          .wtg-header { padding: 22px 16px; }
          .wtg-layout { flex-direction: column; }
          .wtg-sidebar { display: none; }
          .wtg-mobile-jumps {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            gap: 8px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .wtg-mobile-jumps::-webkit-scrollbar { display: none; }
          .wtg-mobile-jumps button {
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
          .wtg-section { padding: 20px 14px; }
        }
      `}),(0,t.jsxs)("div",{className:"wtg-header",children:[(0,t.jsx)("h1",{className:"wt-font-display",children:"MoodTracker Setup and Usage Guide"}),(0,t.jsx)("p",{children:"This guide mirrors the real MoodTracker app flow: setup reminders, create mood labels, log check-ins, monitor patterns, and secure/backup your data."})]}),(0,t.jsx)("div",{className:"wtg-mobile-jumps","aria-label":"Guide section jumps",children:e.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>o(e.id),children:e.title},e.id))}),(0,t.jsxs)("div",{className:"wtg-layout",children:[(0,t.jsxs)("aside",{className:"wtg-sidebar","aria-label":"Guide sections",children:[(0,t.jsx)("p",{className:"wtg-sidebar-title",children:"Guide Sections"}),(0,t.jsx)("div",{className:"wtg-nav-list",children:e.map(e=>(0,t.jsx)("button",{type:"button",onClick:()=>o(e.id),className:`wtg-nav-btn ${s===e.id?"active":""}`,children:e.title},e.id))})]}),(0,t.jsxs)("div",{className:"wtg-content",children:[e.map(e=>(0,t.jsxs)("section",{id:e.id,className:"wtg-section",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:e.title}),(0,t.jsx)("p",{children:e.intro}),(0,t.jsx)("div",{className:"wtg-steps",role:"list","aria-label":`${e.title} steps`,children:e.steps.map((e,r)=>(0,t.jsxs)("div",{className:"wtg-step",role:"listitem",children:[(0,t.jsx)("span",{className:"wtg-step-n",children:r+1}),(0,t.jsx)("span",{children:e})]},e))}),e.image?(0,t.jsx)("div",{className:"wtg-shot",children:(0,t.jsxs)("figure",{children:[(0,t.jsx)(r.default,{src:e.image.src,alt:e.image.alt,width:1242,height:2688,sizes:"(max-width: 860px) 100vw, 720px"}),(0,t.jsx)("figcaption",{children:e.image.caption})]})}):null]},e.id)),(0,t.jsxs)("div",{className:"wtg-faq-wrap",children:[(0,t.jsx)("h2",{className:"wt-font-display",children:"Quick FAQ"}),n.map(e=>(0,t.jsxs)("div",{className:"wtg-faq-item",children:[(0,t.jsx)("b",{children:e.q}),(0,t.jsx)("p",{children:e.a})]},e.q)),(0,t.jsxs)("div",{className:"wtg-actions",children:[(0,t.jsx)(i.default,{href:"/moodtracker",className:"wtg-btn wtg-btn-primary",children:"Back To Overview"}),(0,t.jsx)(i.default,{href:"/moodtracker/benefits",className:"wtg-btn wtg-btn-ghost",children:"Mood Tracking Benefits"}),(0,t.jsx)(i.default,{href:"/contact",className:"wtg-btn wtg-btn-ghost",children:"Contact Support"})]})]})]})]})]})}e.s(["default",()=>n])}]);