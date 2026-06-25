(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43772,e=>{"use strict";var a=e.i(43476),t=e.i(57688),r=e.i(63059);let i=[{label:"Water",accent:"#66d9ff",drinks:[{name:"Water",icon:"💧",qty:"250 ml",hydration:"100%",tone:"#38BDF8"},{name:"Mineral Water",icon:"💧",qty:"250 ml",hydration:"100%",tone:"#7DD3FC"}]},{label:"Coffee",accent:"#c3926f",drinks:[{name:"Coffee",icon:"☕",qty:"250 ml",hydration:"98%",tone:"#8B5A3C"},{name:"Espresso",icon:"☕",qty:"60 ml",hydration:"86%",tone:"#6B3F24"}]},{label:"Tea",accent:"#a4d96c",drinks:[{name:"Tea",icon:"🍵",qty:"250 ml",hydration:"99%",tone:"#65A30D"},{name:"Matcha",icon:"🍵",qty:"250 ml",hydration:"99%",tone:"#166534"}]},{label:"Juice",accent:"#ffd36a",drinks:[{name:"Orange Juice",icon:"🍊",qty:"250 ml",hydration:"89%",tone:"#FB923C"},{name:"Lemonade",icon:"🍋",qty:"250 ml",hydration:"99%",tone:"#EAB308"}]}],n=[{code:"en",name:"English",flag:"🇺🇸",top:"6%",left:"52%",delay:"0s"},{code:"es",name:"Spanish",flag:"🇪🇸",top:"14%",left:"70%",delay:"0.2s"},{code:"fr",name:"French",flag:"🇫🇷",top:"26%",left:"82%",delay:"0.35s"},{code:"de",name:"German",flag:"🇩🇪",top:"42%",left:"87%",delay:"0.1s"},{code:"pt",name:"Portuguese",flag:"🇵🇹",top:"58%",left:"82%",delay:"0.25s"},{code:"it",name:"Italian",flag:"🇮🇹",top:"74%",left:"69%",delay:"0.4s"},{code:"ru",name:"Russian",flag:"🇷🇺",top:"84%",left:"52%",delay:"0.15s"},{code:"ja",name:"Japanese",flag:"🇯🇵",top:"74%",left:"34%",delay:"0.3s"},{code:"ko",name:"Korean",flag:"🇰🇷",top:"58%",left:"21%",delay:"0.45s"},{code:"zh",name:"Chinese",flag:"🇨🇳",top:"42%",left:"16%",delay:"0.18s"},{code:"hi",name:"Hindi",flag:"🇮🇳",top:"26%",left:"21%",delay:"0.32s"},{code:"ar",name:"Arabic",flag:"🇸🇦",top:"14%",left:"34%",delay:"0.08s"},{code:"vi",name:"Vietnamese",flag:"🇻🇳",top:"31%",left:"53%",delay:"0.28s"},{code:"th",name:"Thai",flag:"🇹🇭",top:"42%",left:"63%",delay:"0.38s"},{code:"tr",name:"Turkish",flag:"🇹🇷",top:"53%",left:"53%",delay:"0.12s"},{code:"sw",name:"Swahili",flag:"🇰🇪",top:"42%",left:"42%",delay:"0.22s"}],s=[{label:"How much water should I drink today?",reply:"Check your goal, compare it with today’s intake, and close the gap with small steady sips."},{label:"Show my 10-day hydration trend",reply:"Subra AI can go beyond fixed screens and help with custom hydration history or trend ranges."},{label:"I keep missing reminders in the afternoon",reply:"Try tighter reminder spacing after lunch and keep a realistic sip target for that window."}],l=[{src:"/watertrackerimages/1.png",alt:"Water Tracker privacy-focused screen",title:"Privacy-first tracking"},{src:"/watertrackerimages/2.png",alt:"Water Tracker backup and restore screen",title:"Backup and restore"},{src:"/watertrackerimages/3.png",alt:"Water Tracker hydration app screen",title:"Daily hydration workflow"},{src:"/watertrackerimages/4.png",alt:"Water Tracker reminder schedule screen",title:"Reminder scheduling"},{src:"/watertrackerimages/5.png",alt:"Water Tracker dashboard screen",title:"Quick logging dashboard"},{src:"/watertrackerimages/6.png",alt:"Water Tracker appearance customization screen",title:"Appearance themes"},{src:"/watertrackerimages/7.png",alt:"Water Tracker manage drinks screen",title:"Manage drinks"},{src:"/watertrackerimages/8.png",alt:"Water Tracker custom drink type screen",title:"Custom drink setup"},{src:"/watertrackerimages/9.png",alt:"Water Tracker trend insights screen",title:"Hydration trends"},{src:"/watertrackerimages/10.png",alt:"Water Tracker personalization screen",title:"Personalized app style"}];function o({iosUrl:e,androidUrl:o}){return(0,a.jsxs)("section",{children:[(0,a.jsx)("style",{children:`
        .wth-hero {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          border: none;
          background:
            linear-gradient(106deg, rgba(3, 18, 48, 0.12) 12%, rgba(4, 24, 66, 0.42) 40%, rgba(8, 39, 92, 0.74) 68%, rgba(10, 51, 114, 0.86) 100%),
            url("/watertrackerimages/home_page_img1.png");
          background-size: cover;
          background-position: center;
          min-height: calc(100vh - 68px);
          padding: clamp(22px, 4vw, 42px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-top: -26px;
          margin-bottom: 26px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .wth-hero-panel {
          width: min(530px, 100%);
          border: 1px solid rgba(228, 242, 255, 0.3);
          border-radius: 20px;
          background: linear-gradient(160deg, rgba(6, 26, 66, 0.72) 0%, rgba(9, 45, 106, 0.84) 100%);
          box-shadow: 0 18px 42px rgba(6, 20, 48, 0.34);
          padding: clamp(18px, 3vw, 30px);
          color: #eff8ff;
          margin-left: clamp(12px, 5vw, 110px);
        }
        .wth-hero-title {
          margin: 0;
          font-size: clamp(1.7rem, 3.8vw, 3rem);
          line-height: 1.06;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .wth-feature-ribbon {
          margin-top: 16px;
          display: block;
        }
        .wth-feature-badges {
          display: flex;
          gap: 8px;
          width: 100%;
          justify-content: space-between;
        }
        .wth-feature-badge-row {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 0;
          min-width: 0;
          min-height: clamp(100px, 10vw, 136px);
          padding: 8px 10px;
        }
        .wth-feature-badge-row::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("/images/png-tree-award.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: clamp(120px, 100vw, 195px) auto;
          opacity: 0.95;
          filter: drop-shadow(0 5px 12px rgba(5, 19, 44, 0.42));
          pointer-events: none;
        }
        .wth-feature-badge {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: none;
          background: transparent;
          padding: 0;
          color: #e7f5ff;
          text-align: center;
          text-shadow: 0 2px 8px rgba(4, 22, 54, 0.74);
        }
        .wth-store-row {
          margin-top: 18px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        .wth-store-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 calc((100% - 10px) / 2);
          min-width: 0;
          width: calc((100% - 10px) / 2);
          height: 64px;
          border-radius: 12px;
          transition: transform 0.15s ease, filter 0.15s ease;
        }
        .wth-store-link:hover {
          transform: translateY(-1px);
          filter: brightness(1.04);
        }
        .wth-store-button {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .wth-store-button-play {
          transform: scale(1.5);
          transform-origin: center;
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
          background: #b7e8ff;
          color: #0f326b;
          box-shadow: 0 8px 20px rgba(8, 17, 42, 0.32);
        }
        .wth-btn-secondary {
          background: transparent;
          color: #eaf7ff;
          border-color: rgba(234, 247, 255, 0.4);
        }
        .wth-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .wth-language-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(18px, 3vw, 34px);
          background:
            radial-gradient(circle at 20% 30%, rgba(111, 214, 255, 0.14), transparent 30%),
            radial-gradient(circle at 78% 25%, rgba(255, 205, 110, 0.12), transparent 26%),
            linear-gradient(125deg, #071a44 0%, #0a2f73 48%, #1255b0 100%);
          display: flex;
          align-items: center;
        }
        .wth-language-shell {
          width: min(1160px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
          gap: clamp(18px, 3vw, 34px);
          align-items: center;
        }
        .wth-language-copy {
          color: #eff9ff;
        }
        .wth-language-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(181, 232, 255, 0.24);
          background: rgba(8, 31, 73, 0.34);
          color: #a6e5ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .wth-language-title {
          margin: 14px 0 0;
          font-size: clamp(2rem, 4.4vw, 3.9rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-language-summary {
          margin: 14px 0 0;
          max-width: 36ch;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
        }
        .wth-language-stat {
          margin-top: 18px;
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 20px;
          background: rgba(5, 24, 61, 0.32);
          border: 1px solid rgba(192, 236, 255, 0.18);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }
        .wth-language-stat strong {
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.05em;
        }
        .wth-language-stat span {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #9bdfff;
        }
        .wth-language-points {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-language-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 700;
          color: #eff8ff;
        }
        .wth-language-point strong {
          color: #9fe4ff;
        }
        .wth-language-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          margin-top: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7ae0ff, #ffffff);
          box-shadow: 0 0 0 5px rgba(122, 224, 255, 0.12);
        }
        .wth-language-note {
          margin-top: 16px;
          padding: 12px 14px;
          border-radius: 18px;
          border: 1px solid rgba(188, 234, 255, 0.18);
          background: rgba(10, 36, 83, 0.34);
          color: rgba(233, 246, 255, 0.9);
          font-size: 12px;
          line-height: 1.55;
        }
        .wth-language-note strong {
          color: #9fe4ff;
        }
        .wth-language-art {
          position: relative;
          min-height: min(74vh, 680px);
          border-radius: 30px;
          border: 1px solid rgba(188, 234, 255, 0.16);
          background:
            radial-gradient(circle at 50% 50%, rgba(132, 225, 255, 0.1), transparent 33%),
            linear-gradient(180deg, rgba(240, 249, 255, 0.09) 0%, rgba(240, 249, 255, 0.04) 100%);
          box-shadow: 0 28px 60px rgba(3, 16, 45, 0.34);
          overflow: hidden;
        }
        .wth-language-art::before,
        .wth-language-art::after {
          content: "";
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          border: 1px dashed rgba(180, 230, 255, 0.16);
          pointer-events: none;
        }
        .wth-language-art::before {
          width: min(66%, 420px);
          height: min(66%, 420px);
        }
        .wth-language-art::after {
          width: min(84%, 560px);
          height: min(54%, 340px);
        }
        .wth-language-center {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          width: min(42%, 260px);
          aspect-ratio: 1;
          border-radius: 999px;
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.18), rgba(142, 219, 255, 0.08));
          border: 1px solid rgba(198, 239, 255, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          padding: 18px;
        }
        .wth-language-center strong {
          font-size: clamp(2rem, 4vw, 3.3rem);
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.05em;
        }
        .wth-language-center span {
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #a8e7ff;
          max-width: 15ch;
        }
        .wth-language-orbit {
          position: absolute;
          inset: 0;
        }
        .wth-language-flag {
          position: absolute;
          width: clamp(56px, 7vw, 74px);
          aspect-ratio: 1;
          border-radius: 999px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          background: rgba(245, 251, 255, 0.97);
          border: 1px solid rgba(188, 234, 255, 0.45);
          box-shadow: 0 16px 28px rgba(7, 20, 55, 0.24);
          transform: translate(-50%, -50%);
          animation: wth-flag-float 4.8s ease-in-out infinite;
        }
        .wth-language-flag span {
          font-size: clamp(1.25rem, 2vw, 1.7rem);
          line-height: 1;
        }
        .wth-language-flag small {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #24416f;
        }
        @keyframes wth-flag-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-7px); }
        }
        .wth-ai-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(18px, 3vw, 34px);
          background:
            radial-gradient(circle at 18% 22%, rgba(255, 162, 122, 0.16), transparent 28%),
            radial-gradient(circle at 82% 30%, rgba(132, 225, 255, 0.14), transparent 26%),
            linear-gradient(135deg, #0a1537 0%, #132a63 44%, #173f8d 100%);
          display: flex;
          align-items: center;
        }
        .wth-ai-shell {
          width: min(1160px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(280px, 390px) minmax(0, 1fr);
          gap: clamp(18px, 3vw, 34px);
          align-items: center;
        }
        .wth-ai-copy {
          color: #eff9ff;
        }
        .wth-ai-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(181, 232, 255, 0.24);
          background: rgba(8, 31, 73, 0.34);
          color: #a6e5ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .wth-ai-title {
          margin: 14px 0 0;
          font-size: clamp(2rem, 4.4vw, 3.9rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-ai-summary {
          margin: 14px 0 0;
          max-width: 35ch;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
        }
        .wth-ai-badges {
          margin-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .wth-ai-badge {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e8f7ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .wth-ai-points {
          margin: 16px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-ai-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 700;
          color: #eff8ff;
        }
        .wth-ai-point strong {
          color: #9fe4ff;
        }
        .wth-ai-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          margin-top: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #7ae0ff, #ffffff);
          box-shadow: 0 0 0 5px rgba(122, 224, 255, 0.12);
        }
        .wth-ai-note {
          margin-top: 16px;
          padding: 12px 14px;
          border-radius: 18px;
          border: 1px solid rgba(188, 234, 255, 0.18);
          background: rgba(10, 36, 83, 0.34);
          color: rgba(233, 246, 255, 0.9);
          font-size: 12px;
          line-height: 1.55;
        }
        .wth-ai-note strong {
          color: #9fe4ff;
        }
        .wth-ai-board {
          position: relative;
          min-height: min(74vh, 680px);
          border-radius: 30px;
          border: 1px solid rgba(188, 234, 255, 0.16);
          background:
            radial-gradient(circle at 72% 20%, rgba(255, 188, 122, 0.12), transparent 26%),
            linear-gradient(180deg, rgba(240, 249, 255, 0.1) 0%, rgba(240, 249, 255, 0.05) 100%);
          box-shadow: 0 28px 60px rgba(3, 16, 45, 0.34);
          overflow: hidden;
          padding: 20px;
        }
        .wth-ai-board::before {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          pointer-events: none;
        }
        .wth-ai-head {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }
        .wth-ai-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .wth-ai-avatar {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(160deg, #8ce2ff, #4d9cff);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #08275a;
          font-size: 20px;
          font-weight: 900;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35);
        }
        .wth-ai-brand-copy strong {
          display: block;
          font-size: 16px;
          color: #ffffff;
        }
        .wth-ai-brand-copy span {
          display: block;
          margin-top: 3px;
          font-size: 12px;
          color: #9fdfff;
          line-height: 1.4;
        }
        .wth-ai-chip {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(140, 226, 255, 0.14);
          border: 1px solid rgba(140, 226, 255, 0.22);
          color: #dff8ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .wth-ai-chat {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 10px;
        }
        .wth-ai-chat-turn {
          display: grid;
          gap: 8px;
        }
        .wth-ai-message {
          max-width: min(82%, 480px);
          padding: 12px 14px;
          border-radius: 18px;
          font-size: 13px;
          line-height: 1.55;
          box-shadow: 0 12px 24px rgba(8, 17, 42, 0.14);
        }
        .wth-ai-message.user {
          justify-self: end;
          background: rgba(255, 255, 255, 0.96);
          color: #14315d;
          border-bottom-right-radius: 8px;
        }
        .wth-ai-message.assistant {
          justify-self: start;
          background: linear-gradient(160deg, rgba(126, 221, 255, 0.16), rgba(85, 154, 255, 0.18));
          border: 1px solid rgba(160, 228, 255, 0.18);
          color: #eefaff;
          border-bottom-left-radius: 8px;
        }
        .wth-ai-grid {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .wth-ai-stat-card {
          border-radius: 20px;
          padding: 14px;
          background: rgba(8, 24, 58, 0.44);
          border: 1px solid rgba(188, 234, 255, 0.12);
        }
        .wth-ai-stat-card strong {
          display: block;
          font-size: 20px;
          color: #ffffff;
          line-height: 1.1;
        }
        .wth-ai-stat-card span {
          display: block;
          margin-top: 6px;
          font-size: 11px;
          line-height: 1.45;
          color: #9fdfff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
        }
        .wth-ai-footer {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(188, 234, 255, 0.12);
        }
        .wth-ai-footer-copy {
          max-width: 42ch;
          color: rgba(230, 244, 255, 0.88);
          font-size: 11px;
          line-height: 1.45;
        }
        .wth-ai-footer-copy strong {
          color: #9fe4ff;
        }
        .wth-ai-footer-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ffb07c, #ffd36f);
          color: #5c2306;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .wth-gallery-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(20px, 3vw, 34px);
          background:
            radial-gradient(circle at 20% 18%, rgba(137, 228, 255, 0.14), transparent 30%),
            radial-gradient(circle at 82% 24%, rgba(255, 216, 130, 0.12), transparent 28%),
            linear-gradient(135deg, #08173c 0%, #0f2f73 48%, #1350a7 100%);
          display: flex;
          align-items: center;
        }
        .wth-gallery-shell {
          width: min(1240px, 100%);
          margin: 0 auto;
        }
        .wth-gallery-head {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 18px;
        }
        .wth-gallery-copy {
          color: #eff9ff;
          max-width: 700px;
        }
        .wth-gallery-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(181, 232, 255, 0.24);
          background: rgba(8, 31, 73, 0.34);
          color: #a6e5ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .wth-gallery-title {
          margin: 14px 0 0;
          font-size: clamp(2rem, 4vw, 3.5rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-gallery-summary {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
          max-width: 58ch;
        }
        .wth-gallery-meta {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e8f7ff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .wth-gallery-slider {
          overflow: hidden;
          padding: 8px 4px 14px;
          position: relative;
        }
        .wth-gallery-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: wth-gallery-marquee 42s linear infinite;
        }
        .wth-gallery-slider:hover .wth-gallery-track {
          animation-play-state: paused;
        }
        @keyframes wth-gallery-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 8px)); }
        }
        .wth-gallery-card {
          flex: 0 0 min(320px, 26vw);
          border-radius: 26px;
          padding: 12px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
          border: 1px solid rgba(192, 236, 255, 0.16);
          box-shadow: 0 20px 40px rgba(5, 18, 49, 0.3);
        }
        .wth-gallery-card figure {
          margin: 0;
        }
        .wth-gallery-card img {
          width: 100%;
          height: auto;
          border-radius: 18px;
          display: block;
          background: rgba(255, 255, 255, 0.9);
        }
        .wth-gallery-caption {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }
        .wth-gallery-caption strong {
          display: block;
          font-size: 14px;
          color: #ffffff;
        }
        .wth-gallery-caption span {
          display: block;
          margin-top: 2px;
          font-size: 11px;
          color: #9fdfff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
        }
        .wth-gallery-index {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(122, 224, 255, 0.14);
          border: 1px solid rgba(122, 224, 255, 0.24);
          color: #dff8ff;
          font-size: 11px;
          font-weight: 900;
          flex-shrink: 0;
        }
        .wth-fluid-hero {
          position: relative;
          overflow: hidden;
          min-height: calc(100vh - 68px);
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          margin-bottom: 30px;
          padding: clamp(18px, 2.8vw, 30px);
          background:
            radial-gradient(circle at 15% 18%, rgba(96, 204, 255, 0.22), transparent 28%),
            radial-gradient(circle at 85% 24%, rgba(74, 130, 255, 0.2), transparent 30%),
            linear-gradient(135deg, #041a43 0%, #0b2f6f 48%, #0a4fa2 100%);
          display: flex;
          align-items: center;
        }
        .wth-fluid-shell {
          position: relative;
          z-index: 1;
          width: min(1160px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
          gap: clamp(18px, 2.5vw, 28px);
          align-items: center;
        }
        .wth-fluid-copy {
          color: #eef8ff;
        }
        .wth-fluid-kicker {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9fe4ff;
          border: 1px solid rgba(183, 233, 255, 0.24);
          background: rgba(7, 26, 62, 0.32);
          backdrop-filter: blur(10px);
        }
        .wth-fluid-title {
          margin: 12px 0 0;
          font-size: clamp(1.9rem, 4.2vw, 3.7rem);
          line-height: 0.98;
          letter-spacing: -0.05em;
          text-wrap: balance;
        }
        .wth-fluid-summary {
          margin: 14px 0 0;
          max-width: 34ch;
          font-size: 15px;
          line-height: 1.65;
          color: rgba(232, 245, 255, 0.84);
        }
        .wth-fluid-points {
          margin: 14px 0 0;
          display: grid;
          gap: 8px;
        }
        .wth-fluid-point {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: #eff8ff;
          font-size: 13px;
          font-weight: 700;
        }
        .wth-fluid-point strong {
          color: #9fe4ff;
          font-weight: 800;
        }
        .wth-fluid-point-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          flex-shrink: 0;
          margin-top: 6px;
          background: linear-gradient(135deg, #6cdbff, #ffffff);
          box-shadow: 0 0 0 5px rgba(97, 219, 255, 0.12);
        }
        .wth-fluid-note {
          margin-top: 14px;
          padding: 11px 12px;
          border-radius: 16px;
          border: 1px solid rgba(188, 234, 255, 0.18);
          background: rgba(10, 36, 83, 0.34);
          color: rgba(233, 246, 255, 0.9);
          font-size: 12px;
          line-height: 1.55;
        }
        .wth-fluid-note strong {
          color: #9fe4ff;
        }
        .wth-fluid-board {
          position: relative;
          padding: clamp(14px, 1.8vw, 18px);
          border-radius: 24px;
          border: 1px solid rgba(189, 235, 255, 0.2);
          background: linear-gradient(180deg, rgba(240, 249, 255, 0.12) 0%, rgba(242, 250, 255, 0.08) 100%);
          box-shadow: 0 28px 60px rgba(3, 16, 45, 0.34);
          backdrop-filter: blur(16px);
        }
        .wth-fluid-board::before {
          content: "";
          position: absolute;
          inset: 14px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          pointer-events: none;
        }
        .wth-fluid-board-header {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .wth-fluid-board-title {
          margin: 0;
          font-size: 15px;
          font-weight: 800;
          color: #eef8ff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .wth-fluid-search {
          min-width: min(100%, 250px);
          border-radius: 999px;
          padding: 9px 14px;
          border: 1px solid rgba(205, 239, 255, 0.18);
          background: rgba(5, 23, 57, 0.38);
          color: rgba(225, 241, 255, 0.82);
          font-size: 12px;
        }
        .wth-fluid-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 12px;
        }
        .wth-fluid-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0 13px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #dbf4ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .wth-fluid-chip.active {
          background: rgba(103, 205, 255, 0.18);
          border-color: rgba(132, 223, 255, 0.4);
          color: #fff;
        }
        .wth-fluid-groups {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .wth-fluid-group {
          border-radius: 20px;
          border: 1px solid rgba(206, 239, 255, 0.16);
          background: rgba(4, 17, 43, 0.36);
          padding: 12px;
        }
        .wth-fluid-group-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 10px;
        }
        .wth-fluid-group-title {
          margin: 0;
          font-size: 14px;
          font-weight: 800;
          color: #eff8ff;
        }
        .wth-fluid-group-accent {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.04);
        }
        .wth-fluid-card-list {
          display: grid;
          gap: 8px;
        }
        .wth-fluid-card {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto auto;
          align-items: center;
          gap: 10px;
          border-radius: 16px;
          background: rgba(245, 251, 255, 0.96);
          padding: 10px;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.65);
        }
        .wth-fluid-card-main {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }
        .wth-fluid-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.44);
        }
        .wth-fluid-card-name {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }
        .wth-fluid-card-name strong {
          font-size: 13px;
          color: #10244f;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .wth-fluid-card-name span {
          font-size: 10px;
          color: #61728f;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }
        .wth-fluid-stat {
          text-align: right;
          min-width: 52px;
        }
        .wth-fluid-stat strong {
          display: block;
          font-size: 12px;
          color: #10244f;
        }
        .wth-fluid-stat span {
          display: block;
          margin-top: 2px;
          font-size: 9px;
          color: #6a7e9f;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 800;
        }
        .wth-fluid-toggle {
          width: 40px;
          height: 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #49b8ff, #1e74f4);
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32);
        }
        .wth-fluid-toggle::after {
          content: "";
          position: absolute;
          top: 3px;
          right: 3px;
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(8, 17, 42, 0.22);
        }
        .wth-fluid-board-footer {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
          padding-top: 10px;
          border-top: 1px solid rgba(203, 238, 255, 0.14);
        }
        .wth-fluid-footer-copy {
          color: rgba(230, 244, 255, 0.86);
          font-size: 11px;
          line-height: 1.45;
          max-width: 52ch;
        }
        .wth-fluid-footer-copy strong {
          color: #9fe4ff;
        }
        .wth-fluid-footer-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #76d9ff, #3ba9ff);
          color: #05265d;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
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
          background: rgba(79, 136, 255, 0.1);
        }
        .wth-nav-item.active {
          color: #fff;
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
          box-shadow: 0 5px 14px rgba(31, 79, 157, 0.2);
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
          background: linear-gradient(140deg, #4f88ff, #3ec1ff);
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
          border: 1px solid rgba(16, 36, 79, 0.09);
          border-radius: 14px;
          background: #f8fcff;
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
          color: #d6edff;
          max-width: 620px;
        }
        .wth-mobile-jumps {
          display: none;
        }
        @media (max-width: 860px) {
          .wth-hero {
            justify-content: center;
            min-height: calc(100vh - 56px);
          }
          .wth-gallery-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-gallery-head {
            align-items: flex-start;
          }
          .wth-gallery-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-gallery-summary {
            max-width: none;
          }
          .wth-gallery-slider {
            overflow: hidden;
          }
          .wth-gallery-track {
            gap: 12px;
            animation-duration: 34s;
          }
          .wth-gallery-card {
            flex-basis: min(260px, 72vw);
          }
          .wth-ai-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-ai-shell {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .wth-ai-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-ai-summary {
            max-width: none;
          }
          .wth-ai-board {
            min-height: 560px;
          }
          .wth-ai-grid {
            grid-template-columns: 1fr;
          }
          .wth-language-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-language-shell {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .wth-language-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-language-summary {
            max-width: none;
          }
          .wth-language-art {
            min-height: 520px;
          }
          .wth-language-center {
            width: min(46%, 220px);
          }
          .wth-fluid-hero {
            min-height: auto;
            padding: 22px 14px 24px;
          }
          .wth-fluid-shell {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .wth-fluid-title {
            font-size: clamp(2rem, 12vw, 3rem);
          }
          .wth-fluid-summary {
            max-width: none;
          }
          .wth-fluid-groups {
            grid-template-columns: 1fr;
          }
          .wth-hero-panel {
            width: min(96%, 520px);
            margin-left: -70px;
            background: transparent;
            border-color: transparent;
            box-shadow: none;
            margin-top: -30px;
          }
          .wth-feature-ribbon {
            margin-top: 14px;
            margin-left: -40px;
          }
          .wth-feature-badges {
            display: grid;
            gap: 10px;
            justify-items: start;
            width: auto;
          }
          .wth-feature-badge-row {
            width: clamp(220px, 58vw, 290px);
            min-height: clamp(132px, 34vw, 188px);
            justify-self: start;
            justify-content: center;
          }
          .wth-feature-badge-row::before {
            inset: 0;
            left: auto;
            top: auto;
            transform: none;
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: 100% auto;
          }
          .wth-feature-badge {
            font-size: 11px;
            width: 62%;
            margin: 0 auto;
            line-height: 1.28;
          }
          .wth-store-row {
            flex-direction: column;
            align-items: stretch;
          }
          .wth-store-link {
            justify-content: center;
            width: 210px;
            height: 62px;
            flex: 0 0 auto;
          }
          .wth-store-button-play {
            transform: scale(1.33);
            transform-origin: center;
          }
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
        @media (max-width: 760px) {
          .wth-hero {
            margin-top: -22px;
          }
          .wth-ai-board {
            min-height: 520px;
            padding: 16px;
          }
          .wth-ai-message {
            max-width: 100%;
          }
          .wth-language-art {
            min-height: 460px;
          }
          .wth-language-flag {
            width: 58px;
          }
          .wth-fluid-card {
            grid-template-columns: minmax(0, 1fr) auto auto auto;
          }
          .wth-store-link {
            width: 196px;
            height: 58px;
          }
        }
      `}),(0,a.jsx)("div",{className:"wth-hero",children:(0,a.jsxs)("div",{className:"wth-hero-panel",children:[(0,a.jsx)("h1",{className:"wt-font-display wth-hero-title",children:"Water Tracker N Reminder"}),(0,a.jsx)("div",{className:"wth-feature-ribbon","aria-label":"Water Tracker core features",children:(0,a.jsxs)("div",{className:"wth-feature-badges",children:[(0,a.jsx)("div",{className:"wth-feature-badge-row",children:(0,a.jsxs)("span",{className:"wth-feature-badge",children:[(0,a.jsx)("span",{children:"Offline"}),(0,a.jsx)("span",{children:"No Login"}),(0,a.jsx)("span",{children:"Private"})]})}),(0,a.jsx)("div",{className:"wth-feature-badge-row",children:(0,a.jsxs)("span",{className:"wth-feature-badge",children:[(0,a.jsx)("span",{children:"Smart"}),(0,a.jsx)("span",{children:"Reminders"})]})}),(0,a.jsx)("div",{className:"wth-feature-badge-row",children:(0,a.jsxs)("span",{className:"wth-feature-badge",children:[(0,a.jsx)("span",{children:"Insightful"}),(0,a.jsx)("span",{children:"Trend"}),(0,a.jsx)("span",{children:"Charts"})]})})]})}),(0,a.jsxs)("div",{className:"wth-store-row",children:[e?(0,a.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"wth-store-link","aria-label":"Download on the App Store",children:(0,a.jsx)(t.default,{src:"/images/appstore-button-download.svg",alt:"Download on the App Store",width:240,height:80,className:"wth-store-button"})}):null,o?(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"wth-store-link","aria-label":"Get it on Google Play",children:(0,a.jsx)(t.default,{src:"/images/playstore-button-download.png",alt:"Get it on Google Play",width:646,height:250,className:"wth-store-button wth-store-button-play"})}):null]})]})}),(0,a.jsx)("section",{className:"wth-fluid-hero","aria-labelledby":"choose-your-fluid-title",children:(0,a.jsxs)("div",{className:"wth-fluid-shell",children:[(0,a.jsxs)("div",{className:"wth-fluid-copy",children:[(0,a.jsx)("div",{className:"wth-fluid-kicker",children:"Feature Spotlight"}),(0,a.jsx)("h2",{id:"choose-your-fluid-title",className:"wt-font-display wth-fluid-title",children:"Choose Your Fluid"}),(0,a.jsx)("p",{className:"wth-fluid-summary",children:"Water Tracker lets you choose from a real drink library, keep your active list focused on what you actually drink, and fine-tune default serving sizes before you start logging."}),(0,a.jsxs)("div",{className:"wth-fluid-points",role:"list","aria-label":"Choose Your Fluid highlights",children:[(0,a.jsxs)("div",{className:"wth-fluid-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-fluid-point-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Browse by category:"})," Water, Coffee, Tea, and Juice stay easy to scan inside the actual picker."]})]}),(0,a.jsxs)("div",{className:"wth-fluid-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-fluid-point-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Set realistic defaults:"})," each drink can carry its own quantity so quick logging stays accurate."]})]}),(0,a.jsxs)("div",{className:"wth-fluid-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-fluid-point-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"See hydration impact:"})," every option uses the app's hydration values, not a one-size-fits-all assumption."]})]})]}),(0,a.jsxs)("div",{className:"wth-fluid-note",children:[(0,a.jsx)("strong",{children:"This is the real feature flow:"})," free users can choose up to 3 fluids, and Pro unlocks a broader drink library for more personalized tracking."]})]}),(0,a.jsxs)("div",{className:"wth-fluid-board","aria-label":"Choose Your Fluid preview",children:[(0,a.jsxs)("div",{className:"wth-fluid-board-header",children:[(0,a.jsx)("p",{className:"wth-fluid-board-title",children:"Choose Your Fluid"}),(0,a.jsx)("div",{className:"wth-fluid-search",children:"Search a drink type"})]}),(0,a.jsxs)("div",{className:"wth-fluid-chip-row","aria-label":"Drink categories",children:[(0,a.jsx)("span",{className:"wth-fluid-chip active",children:"Water"}),(0,a.jsx)("span",{className:"wth-fluid-chip",children:"Coffee"}),(0,a.jsx)("span",{className:"wth-fluid-chip",children:"Tea"}),(0,a.jsx)("span",{className:"wth-fluid-chip",children:"Juice"}),(0,a.jsx)("span",{className:"wth-fluid-chip",children:"All"})]}),(0,a.jsx)("div",{className:"wth-fluid-groups",children:i.map(e=>(0,a.jsxs)("section",{className:"wth-fluid-group","aria-label":`${e.label} drink choices`,children:[(0,a.jsxs)("div",{className:"wth-fluid-group-head",children:[(0,a.jsx)("h3",{className:"wth-fluid-group-title",children:e.label}),(0,a.jsx)("span",{className:"wth-fluid-group-accent",style:{background:e.accent},"aria-hidden":"true"})]}),(0,a.jsx)("div",{className:"wth-fluid-card-list",children:e.drinks.map(e=>(0,a.jsxs)("article",{className:"wth-fluid-card",children:[(0,a.jsxs)("div",{className:"wth-fluid-card-main",children:[(0,a.jsx)("span",{className:"wth-fluid-card-icon",style:{background:e.tone},"aria-hidden":"true",children:e.icon}),(0,a.jsxs)("span",{className:"wth-fluid-card-name",children:[(0,a.jsx)("strong",{children:e.name}),(0,a.jsx)("span",{children:"Default quantity"})]})]}),(0,a.jsxs)("span",{className:"wth-fluid-stat",children:[(0,a.jsx)("strong",{children:e.qty}),(0,a.jsx)("span",{children:"Qty"})]}),(0,a.jsxs)("span",{className:"wth-fluid-stat",children:[(0,a.jsx)("strong",{children:e.hydration}),(0,a.jsx)("span",{children:"Hydration"})]}),(0,a.jsx)("span",{className:"wth-fluid-toggle","aria-hidden":"true"})]},e.name))})]},e.label))}),(0,a.jsxs)("div",{className:"wth-fluid-board-footer",children:[(0,a.jsxs)("div",{className:"wth-fluid-footer-copy",children:["Selected drinks move into ",(0,a.jsx)("strong",{children:"Manage Drinks"}),", where your daily logging stays personal, faster, and more accurate."]}),(0,a.jsxs)("div",{className:"wth-fluid-footer-action",children:["Real app feature ",(0,a.jsx)(r.ChevronRight,{size:14})]})]})]})]})}),(0,a.jsx)("section",{className:"wth-language-hero","aria-labelledby":"watertracker-language-title",children:(0,a.jsxs)("div",{className:"wth-language-shell",children:[(0,a.jsxs)("div",{className:"wth-language-copy",children:[(0,a.jsx)("div",{className:"wth-language-kicker",children:"Global Access"}),(0,a.jsxs)("h2",{id:"watertracker-language-title",className:"wt-font-display wth-language-title",children:["Hydration Support In ",59," Languages"]}),(0,a.jsx)("p",{className:"wth-language-summary",children:"Water Tracker is built for a global audience, with real in-app language support that helps more people set goals, log drinks, and follow reminders in the language they understand best."}),(0,a.jsxs)("div",{className:"wth-language-stat",children:[(0,a.jsx)("strong",{children:59}),(0,a.jsx)("span",{children:"Supported app languages"})]}),(0,a.jsxs)("div",{className:"wth-language-points",role:"list","aria-label":"Language support highlights",children:[(0,a.jsxs)("div",{className:"wth-language-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-language-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Localized for real use:"})," setup, tracking, and reminders become easier to follow day after day."]})]}),(0,a.jsxs)("div",{className:"wth-language-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-language-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Broader reach:"})," the app supports users across major global and regional languages."]})]}),(0,a.jsxs)("div",{className:"wth-language-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-language-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Practical accessibility:"})," language choice helps make hydration habits simpler for more households worldwide."]})]})]}),(0,a.jsxs)("div",{className:"wth-language-note",children:[(0,a.jsx)("strong",{children:"Verified from the app language pack:"})," this showcase reflects the actual supported language list used by Water Tracker."]})]}),(0,a.jsxs)("div",{className:"wth-language-art","aria-label":"Water Tracker supports 59 languages",children:[(0,a.jsxs)("div",{className:"wth-language-center",children:[(0,a.jsx)("strong",{children:59}),(0,a.jsx)("span",{children:"Languages inside the actual Water Tracker app"})]}),(0,a.jsx)("div",{className:"wth-language-orbit",children:n.map(e=>(0,a.jsxs)("div",{className:"wth-language-flag",style:{top:e.top,left:e.left,animationDelay:e.delay},"aria-label":e.name,title:e.name,children:[(0,a.jsx)("span",{"aria-hidden":"true",children:e.flag}),(0,a.jsx)("small",{children:e.code.toUpperCase()})]},e.code))})]})]})}),(0,a.jsx)("section",{className:"wth-ai-hero","aria-labelledby":"subra-ai-title",children:(0,a.jsxs)("div",{className:"wth-ai-shell",children:[(0,a.jsxs)("div",{className:"wth-ai-copy",children:[(0,a.jsx)("div",{className:"wth-ai-kicker",children:"AI Hydration Coach"}),(0,a.jsx)("h2",{id:"subra-ai-title",className:"wt-font-display wth-ai-title",children:"Meet Subra AI Hydration Coach"}),(0,a.jsx)("p",{className:"wth-ai-summary",children:"Subra AI gives Water Tracker a more flexible layer of guidance, helping users ask real hydration questions, get concise coaching, and go beyond fixed screens when they want more personalized insight."}),(0,a.jsxs)("div",{className:"wth-ai-badges","aria-label":"Subra AI capabilities",children:[(0,a.jsx)("span",{className:"wth-ai-badge",children:"Powered by Gemma 4"}),(0,a.jsx)("span",{className:"wth-ai-badge",children:"On-device privacy"}),(0,a.jsx)("span",{className:"wth-ai-badge",children:"Hydration coaching"})]}),(0,a.jsxs)("div",{className:"wth-ai-points",role:"list","aria-label":"Subra AI highlights",children:[(0,a.jsxs)("div",{className:"wth-ai-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-ai-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"More flexible than fixed screens:"})," users can ask for custom hydration history or trend ranges that normal dashboards do not show by default."]})]}),(0,a.jsxs)("div",{className:"wth-ai-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-ai-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Built for privacy by default:"})," after setup, Subra AI is designed to work on-device instead of sending personal hydration chats to cloud servers."]})]}),(0,a.jsxs)("div",{className:"wth-ai-point",role:"listitem",children:[(0,a.jsx)("span",{className:"wth-ai-dot","aria-hidden":"true"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Practical daily coaching:"})," reminder ideas, hydration habit suggestions, and intake guidance stay short, useful, and action-oriented."]})]})]}),(0,a.jsxs)("div",{className:"wth-ai-note",children:[(0,a.jsx)("strong",{children:"Real setup detail:"})," Subra AI requires a one-time brain download of about 2.5 GB, then it can be exported, stored, and reused without repeating the same large download."]})]}),(0,a.jsxs)("div",{className:"wth-ai-board","aria-label":"Subra AI Hydration Coach preview",children:[(0,a.jsxs)("div",{className:"wth-ai-head",children:[(0,a.jsxs)("div",{className:"wth-ai-brand",children:[(0,a.jsx)("div",{className:"wth-ai-avatar",children:"AI"}),(0,a.jsxs)("div",{className:"wth-ai-brand-copy",children:[(0,a.jsx)("strong",{children:"Subra AI"}),(0,a.jsx)("span",{children:"Your hydration coach with concise, practical guidance"})]})]}),(0,a.jsx)("div",{className:"wth-ai-chip",children:"Offline-ready after setup"})]}),(0,a.jsx)("div",{className:"wth-ai-chat",children:s.map(e=>(0,a.jsxs)("div",{className:"wth-ai-chat-turn",children:[(0,a.jsx)("div",{className:"wth-ai-message user",children:e.label}),(0,a.jsx)("div",{className:"wth-ai-message assistant",children:e.reply})]},e.label))}),(0,a.jsxs)("div",{className:"wth-ai-grid",children:[(0,a.jsxs)("div",{className:"wth-ai-stat-card",children:[(0,a.jsx)("strong",{children:"Gemma 4"}),(0,a.jsx)("span",{children:"Engine behind Subra AI hydration guidance"})]}),(0,a.jsxs)("div",{className:"wth-ai-stat-card",children:[(0,a.jsx)("strong",{children:"~2.5 GB"}),(0,a.jsx)("span",{children:"One-time AI brain download before offline use"})]}),(0,a.jsxs)("div",{className:"wth-ai-stat-card",children:[(0,a.jsx)("strong",{children:"Custom ranges"}),(0,a.jsx)("span",{children:"Ask for views beyond fixed 7-day or 15-day trend screens"})]})]}),(0,a.jsxs)("div",{className:"wth-ai-footer",children:[(0,a.jsxs)("div",{className:"wth-ai-footer-copy",children:[(0,a.jsx)("strong",{children:"Important:"})," Subra AI supports hydration tracking and coaching, but it does not replace medical advice."]}),(0,a.jsxs)("div",{className:"wth-ai-footer-pill",children:["Real app AI feature ",(0,a.jsx)(r.ChevronRight,{size:14})]})]})]})]})}),(0,a.jsx)("section",{className:"wth-gallery-hero","aria-labelledby":"watertracker-gallery-title",children:(0,a.jsxs)("div",{className:"wth-gallery-shell",children:[(0,a.jsxs)("div",{className:"wth-gallery-head",children:[(0,a.jsxs)("div",{className:"wth-gallery-copy",children:[(0,a.jsx)("div",{className:"wth-gallery-kicker",children:"Full App Showcase"}),(0,a.jsx)("h2",{id:"watertracker-gallery-title",className:"wt-font-display wth-gallery-title",children:"Explore Water Tracker Screen By Screen"}),(0,a.jsx)("p",{className:"wth-gallery-summary",children:"This final gallery brings together the full Water Tracker visual flow, from daily logging and reminders to trends, privacy, customization, and backup features. Swipe horizontally to browse all showcase screens."})]}),(0,a.jsx)("div",{className:"wth-gallery-meta",children:"10 app screens"})]}),(0,a.jsx)("div",{className:"wth-gallery-slider","aria-label":"Water Tracker screenshot gallery",children:(0,a.jsx)("div",{className:"wth-gallery-track",children:[...l,...l].map((e,r)=>(0,a.jsx)("article",{className:"wth-gallery-card","aria-hidden":r>=l.length,children:(0,a.jsxs)("figure",{children:[(0,a.jsx)(t.default,{src:e.src,alt:e.alt,width:1242,height:2688,sizes:"(max-width: 860px) 72vw, 320px"}),(0,a.jsxs)("figcaption",{className:"wth-gallery-caption",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:e.title}),(0,a.jsx)("span",{children:"Water Tracker"})]}),(0,a.jsx)("div",{className:"wth-gallery-index",children:r%l.length+1})]})]})},`${e.src}-${r}`))})})]})})]})}e.s(["default",()=>o])}]);