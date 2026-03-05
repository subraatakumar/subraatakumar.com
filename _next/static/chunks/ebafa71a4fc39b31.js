(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74686,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let s=[{id:"acceptance",icon:"📄",label:"Acceptance"},{id:"use",icon:"✅",label:"Use of App"},{id:"prohibited",icon:"🚫",label:"Prohibited"},{id:"purchases",icon:"💳",label:"Billing"},{id:"disclaimer",icon:"⚠️",label:"Health Disclaimer"},{id:"ip",icon:"🌐",label:"Intellectual Property"},{id:"termination",icon:"🔄",label:"Termination"},{id:"liability",icon:"⚖️",label:"Liability"},{id:"rights",icon:"👤",label:"Your Rights"},{id:"contact",icon:"✉️",label:"Contact Us"}],r=["Attempting to decompile, disassemble, or reverse-engineer the App","Using the App for any unlawful or fraudulent purpose","Circumventing in-app purchase or subscription verification systems","Distributing modified or cracked versions of the App","Interfering with the App's reminder or notification systems","Attempting to access other users' device data or backups","Removing or altering copyright or trademark notices","Using the App in any way that could damage its operation or reputation"];function a({icon:e,title:i}){return(0,t.jsxs)("div",{className:"sht-section-head",children:[(0,t.jsx)("div",{className:"sht-section-icon",children:e}),(0,t.jsx)("h2",{className:"sht-h2 sh-font-display",children:i})]})}function o(){return(0,t.jsx)("div",{className:"sht-divider"})}function n({title:e,warn:i=!1,children:s}){return(0,t.jsxs)("div",{className:`sht-callout${i?" sht-callout-warn":""}`,children:[(0,t.jsx)("div",{className:`sht-callout-title${i?" sht-callout-title-warn":""}`,children:e}),(0,t.jsx)("p",{children:s})]})}function l({children:e}){return(0,t.jsx)("div",{className:"sht-info-grid",children:e})}function c({title:e,children:i,accentColor:s}){return(0,t.jsxs)("div",{className:"sht-info-box",style:s?{borderColor:s}:void 0,children:[(0,t.jsx)("h4",{children:e}),(0,t.jsx)("p",{children:i})]})}function d({items:e}){return(0,t.jsx)("ul",{className:"sht-bullet-list",children:e.map((e,i)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("div",{className:"sht-bullet-dot"}),(0,t.jsx)("span",{children:e})]},i))})}function h({items:e}){return(0,t.jsx)("div",{className:"sht-prohibited-grid",children:e.map((e,i)=>(0,t.jsxs)("div",{className:"sht-prohibited-item",children:[(0,t.jsx)("div",{className:"sht-prohibited-dot"}),e]},i))})}function p(){let[e,p]=(0,i.useState)("acceptance");return(0,i.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&p(e.target.id)})},{threshold:.3,rootMargin:"-10% 0px -65% 0px"});return s.forEach(({id:t})=>{let i=document.getElementById(t);i&&e.observe(i)}),()=>e.disconnect()},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        html { scroll-behavior: smooth; }

        /* ── layout ── */
        .sht-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 36px 24px 80px;
          display: flex; gap: 36px; align-items: flex-start;
        }

        /* ── sidebar ── */
        .sht-sidebar {
          width: 210px; flex-shrink: 0;
          position: sticky; top: 84px;
        }
        .sht-sidebar-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--sh-muted);
          padding: 0 12px; margin-bottom: 10px; display: block;
        }
        .sht-sidebar-nav { display: flex; flex-direction: column; gap: 2px; }
        .sht-sidebar-btn {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px;
          font-size: 13px; font-weight: 600; color: var(--sh-muted);
          background: transparent; border: none; cursor: pointer;
          text-align: left; transition: background 0.18s, color 0.18s;
        }
        .sht-sidebar-btn:hover { background: rgba(196,122,90,0.1); color: var(--sh-terra-d); }
        .sht-sidebar-btn.active { background: var(--sh-maroon); color: #fff; }
        .sht-sidebar-icon { font-size: 14px; flex-shrink: 0; }

        /* ── main ── */
        .sht-main { flex: 1; min-width: 0; }

        /* ── header card ── */
        .sht-header-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.15);
          border-radius: 22px; padding: 34px 38px; margin-bottom: 22px;
          box-shadow: 0 8px 30px rgba(90,31,47,0.06);
        }
        .sht-eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; color: var(--sh-terra);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px;
        }
        .sht-h1 {
          font-size: 44px; font-weight: 700; color: var(--sh-maroon-d);
          line-height: 1.1; margin-bottom: 8px;
        }
        .sht-meta {
          color: var(--sh-muted); font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 6px; margin-bottom: 28px;
        }
        .sht-highlights {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px;
        }
        .sht-highlight {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 14px; padding: 15px 17px;
          display: flex; align-items: flex-start; gap: 12px;
        }
        .sht-hl-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.18), rgba(123,45,66,0.1));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .sht-hl-title { font-size: 13px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 3px; }
        .sht-hl-desc  { font-size: 12px; color: var(--sh-muted); line-height: 1.5; }

        /* ── content card ── */
        .sht-content-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.12);
          border-radius: 22px; padding: 38px 42px;
          box-shadow: 0 6px 24px rgba(90,31,47,0.05);
        }

        /* ── policy sections ── */
        .sht-policy-section { scroll-margin-top: 90px; margin-bottom: 48px; }
        .sht-policy-section:last-child { margin-bottom: 0; }
        .sht-divider { height: 1px; background: rgba(196,122,90,0.12); margin-bottom: 48px; }
        .sht-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .sht-section-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.15), rgba(123,45,66,0.10));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .sht-h2 { font-size: 24px; font-weight: 700; color: var(--sh-maroon-d); margin: 0; }
        .sht-policy-section p {
          font-size: 15px; color: var(--sh-muted);
          line-height: 1.72; margin-bottom: 14px;
        }
        .sht-policy-section p:last-child { margin-bottom: 0; }
        .sht-policy-section strong { color: var(--sh-charcoal); font-weight: 700; }

        /* callout */
        .sht-callout {
          background: rgba(196,122,90,0.07); border-left: 4px solid var(--sh-terra);
          border-radius: 0 12px 12px 0; padding: 15px 19px; margin: 14px 0;
        }
        .sht-callout p { margin: 0; color: var(--sh-charcoal); font-size: 14px; line-height: 1.65; }
        .sht-callout-title { font-size: 13px; font-weight: 800; color: var(--sh-terra-d); margin-bottom: 6px; }
        .sht-callout-warn { background: rgba(201,150,58,0.08); border-left-color: var(--sh-gold); }
        .sht-callout-title-warn { color: #9a6e10; }

        /* info grid */
        .sht-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin: 14px 0; }
        .sht-info-box {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 12px; padding: 15px 17px;
        }
        .sht-info-box h4 { font-size: 14px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 6px; }
        .sht-info-box p  { font-size: 13px; color: var(--sh-muted); margin: 0; line-height: 1.6; }

        /* bullet list */
        .sht-bullet-list { list-style: none; margin: 13px 0; display: flex; flex-direction: column; gap: 10px; }
        .sht-bullet-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--sh-muted); }
        .sht-bullet-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sh-terra); flex-shrink: 0; margin-top: 6px; }

        /* prohibited grid */
        .sht-prohibited-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 14px 0; }
        .sht-prohibited-item {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 12px 14px;
          border: 1px solid rgba(163,94,64,0.15); border-radius: 10px;
          background: rgba(163,94,64,0.04);
          font-size: 13px; color: var(--sh-muted); line-height: 1.5;
        }
        .sht-prohibited-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #c0392b; flex-shrink: 0; margin-top: 5px;
        }

        /* contact card */
        .sht-contact-card {
          background: linear-gradient(140deg, var(--sh-maroon-d), var(--sh-terra-d));
          border-radius: 18px; padding: 28px 32px;
          color: #fff; position: relative; overflow: hidden;
        }
        .sht-contact-card::before {
          content: ''; position: absolute;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.08); top: -30px; right: -30px;
        }
        .sht-contact-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: #fff; }
        .sht-contact-card p  { color: rgba(255,255,255,0.65); font-size: 14px; margin-bottom: 18px; }
        .sht-contact-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--sh-maroon-d);
          padding: 10px 20px; border-radius: 10px;
          font-size: 13px; font-weight: 700; text-decoration: none;
          transition: background 0.2s;
        }
        .sht-contact-link:hover { background: var(--sh-cream); }

        /* page footer */
        .sht-page-footer {
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid rgba(196,122,90,0.12);
          text-align: center;
        }
        .sht-page-footer p { font-size: 12px; color: var(--sh-muted); }
        .sht-page-footer p:first-child {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; margin-bottom: 4px;
        }

        /* ── responsive ── */
        @media (max-width: 860px) {
          .sht-wrap { flex-direction: column; padding: 20px 16px 60px; gap: 20px; }
          .sht-sidebar { width: 100%; position: static; }
          .sht-sidebar-nav { flex-direction: row; flex-wrap: wrap; }
          .sht-header-card { padding: 22px; }
          .sht-h1 { font-size: 34px; }
          .sht-highlights { grid-template-columns: 1fr; }
          .sht-content-card { padding: 22px; }
          .sht-info-grid { grid-template-columns: 1fr; }
          .sht-prohibited-grid { grid-template-columns: 1fr; }
        }
      `}),(0,t.jsxs)("div",{className:"sht-wrap",children:[(0,t.jsxs)("aside",{className:"sht-sidebar",children:[(0,t.jsx)("span",{className:"sht-sidebar-label",children:"Sections"}),(0,t.jsx)("nav",{className:"sht-sidebar-nav","aria-label":"Terms of use sections",children:s.map(({id:i,icon:s,label:r})=>(0,t.jsxs)("button",{className:`sht-sidebar-btn${e===i?" active":""}`,onClick:()=>{document.getElementById(i)?.scrollIntoView({behavior:"smooth"})},children:[(0,t.jsx)("span",{className:"sht-sidebar-icon",children:s}),r]},i))})]}),(0,t.jsxs)("main",{className:"sht-main",children:[(0,t.jsxs)("div",{className:"sht-header-card",children:[(0,t.jsx)("div",{className:"sht-eyebrow",children:"🌸 She Health – Health Tracking App"}),(0,t.jsx)("h1",{className:"sht-h1 sh-font-display",children:"Terms of Use"}),(0,t.jsx)("div",{className:"sht-meta",children:"🕐 Last updated: March 5, 2026"}),(0,t.jsx)("div",{className:"sht-highlights",children:[{icon:"📄",title:"Clear Agreement",desc:"By using the app you agree to these terms. Please read them carefully."},{icon:"🔒",title:"Privacy First",desc:"These terms complement our Privacy Policy to protect your data."},{icon:"⚖️",title:"Fair Personal Use",desc:"Use the app for personal health tracking only, as intended."}].map(e=>(0,t.jsxs)("div",{className:"sht-highlight",children:[(0,t.jsx)("div",{className:"sht-hl-icon",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"sht-hl-title",children:e.title}),(0,t.jsx)("div",{className:"sht-hl-desc",children:e.desc})]})]},e.title))})]}),(0,t.jsxs)("div",{className:"sht-content-card",children:[(0,t.jsxs)("div",{className:"sht-policy-section",id:"acceptance",children:[(0,t.jsx)(a,{icon:"📄",title:"Acceptance of Terms"}),(0,t.jsxs)("p",{children:["By downloading, installing, or using ",(0,t.jsx)("strong",{children:"She Health"})," (“the App”), you agree to be bound by these Terms of Use (“Terms”). If you do not agree to all of these Terms, please do not use the App."]}),(0,t.jsx)(n,{title:"Important Notice",children:"These Terms apply to all versions of She Health on the Apple App Store and Google Play Store. We may update these Terms from time to time. Continued use of the App after changes are posted constitutes your acceptance of the revised Terms."}),(0,t.jsxs)("p",{children:["She Health is intended for personal, non-commercial wellness tracking. It is"," ",(0,t.jsx)("strong",{children:"not a medical device"})," and does not provide medical advice, diagnosis, or treatment."]})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"use",children:[(0,t.jsx)(a,{icon:"✅",title:"Use of the App"}),(0,t.jsx)("p",{children:"She Health is a personal health tracking tool designed for individual, non-commercial use. You agree to use the App only for its intended purpose and in compliance with all applicable laws."}),(0,t.jsx)(d,{items:["You must be at least 13 years of age to use the App.","You are responsible for maintaining the physical security of your device and the PIN or biometric lock on the App.","You agree not to misuse, reverse-engineer, or modify the App in any way.","The App is provided for personal, non-commercial use only.","You are solely responsible for the accuracy and completeness of health records you enter."]})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"prohibited",children:[(0,t.jsx)(a,{icon:"🚫",title:"Prohibited Activities"}),(0,t.jsx)("p",{children:"You agree not to engage in any of the following activities when using She Health:"}),(0,t.jsx)(h,{items:r})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"purchases",children:[(0,t.jsx)(a,{icon:"💳",title:"Subscriptions & Billing"}),(0,t.jsx)("p",{children:"She Health offers two types of premium purchases processed through Apple or Google's native commerce systems."}),(0,t.jsxs)(l,{children:[(0,t.jsxs)(c,{title:"☁️ Drive Backup — Yearly Subscription",accentColor:"rgba(123,45,66,0.2)",children:["An annual auto-renewing subscription. Backs up your data to"," ",(0,t.jsx)("strong",{children:"Google Drive"})," (Android) or ",(0,t.jsx)("strong",{children:"iCloud Drive"})," (iOS) — your private storage only. Renews each year unless cancelled at least 24 hours before the end of the current period."]}),(0,t.jsxs)(c,{title:"🎨 Color Schemes — One-Time Purchase ($4.99 each)",accentColor:"rgba(201,150,58,0.25)",children:["Non-consumable one-time in-app purchases at ",(0,t.jsx)("strong",{children:"$4.99"})," each."," ",(0,t.jsx)("strong",{children:"Terracotta"})," is free and the default. ",(0,t.jsx)("strong",{children:"Teal Gold"})," offers in-app preview only — no trial. ",(0,t.jsx)("strong",{children:"Plum Cream, Champagne Midnight, and Navy Silver"})," ","each include a ",(0,t.jsx)("strong",{children:"free 30-day trial"})," with no payment required until you choose to buy. Once purchased, the scheme is yours permanently."]})]}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{title:"Billing",children:"All charges are processed by Apple App Store or Google Play. The developer does not handle your payment information directly."}),(0,t.jsx)(c,{title:"Trials",children:"Plum Cream, Champagne Midnight, and Navy Silver each include a free 30-day trial — no payment required during the trial. Teal Gold has no trial; it requires purchase to activate. Terracotta is always free."}),(0,t.jsx)(c,{title:"Cancellation",children:"Cancel the backup subscription at any time via your App Store or Google Play account settings. Cancellation stops future renewals but does not delete your data."}),(0,t.jsx)(c,{title:"Refunds",children:"Refund requests must be directed to Apple or Google in accordance with their respective refund policies."})]}),(0,t.jsx)("p",{children:"Purchasing a color scheme or subscribing to Drive Backup does not affect the privacy of your health data — all data remains on-device."})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"disclaimer",children:[(0,t.jsx)(a,{icon:"⚠️",title:"Health Disclaimer"}),(0,t.jsxs)(n,{title:"⚠️ Not a Medical Device",warn:!0,children:["She Health is a general wellness tracking tool and is ",(0,t.jsx)("strong",{children:"not"})," a medical device. It does not provide medical advice, diagnosis, or treatment. All health suggestions and tracking features are for personal awareness and record-keeping only."]}),(0,t.jsx)(d,{items:["Always consult a qualified healthcare professional for medical concerns, diagnosis, or treatment decisions.","Cycle predictions and health insights within the App are general estimates, not medical determinations.","Incontinence tracking is a personal diary tool — it is not a diagnostic or treatment service.","The developer is not liable for any health outcomes resulting from use of or reliance on the App."]})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"ip",children:[(0,t.jsx)(a,{icon:"🌐",title:"Intellectual Property"}),(0,t.jsx)("p",{children:"All content within She Health — including design, graphics, icons, text, animations, and code — is the exclusive property of the developer and is protected by applicable intellectual property laws."}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{title:"Your Health Data",children:"All health records, images, and contacts you enter into the App belong entirely to you. We make no claim to ownership of your personal data."}),(0,t.jsx)(c,{title:"App Content",children:"You may not copy, reproduce, distribute, or create derivative works from the App or its content without prior written consent from the developer."})]})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"termination",children:[(0,t.jsx)(a,{icon:"🔄",title:"Termination"}),(0,t.jsxs)("p",{children:["You may stop using the App at any time by uninstalling it from your device."," ",(0,t.jsx)("strong",{children:"Uninstalling permanently deletes all locally stored data"})," — this action cannot be undone unless you have a current backup."]}),(0,t.jsx)(n,{title:"App Discontinuation",children:"We reserve the right to discontinue or modify the App at any time without prior notice. If the App is discontinued, cancel active subscriptions via your app store to avoid future charges. We recommend exporting your data via the backup feature before any planned transitions."})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"liability",children:[(0,t.jsx)(a,{icon:"⚖️",title:"Limitation of Liability"}),(0,t.jsx)("p",{children:"To the fullest extent permitted by applicable law, the developer of She Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App."}),(0,t.jsx)(d,{items:[(0,t.jsx)(t.Fragment,{children:"The App is provided “as is” without warranties of any kind, express or implied."}),"We do not guarantee uninterrupted or error-free operation of the App.","We are not responsible for data loss resulting from device failure, OS updates, or accidental deletion.","Our total liability shall not exceed the amount you paid for the App in the twelve months prior to the claim."]}),(0,t.jsx)("p",{children:"Some jurisdictions do not allow the exclusion of implied warranties or limitation of liability for incidental damages, so the above limitations may not apply to you."})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"rights",children:[(0,t.jsx)(a,{icon:"👤",title:"Your Rights"}),(0,t.jsx)("p",{children:"Because all data is stored exclusively on your device, you retain complete control and ownership at all times. Your rights include:"}),(0,t.jsxs)(l,{children:[(0,t.jsx)(c,{title:"Access",children:"View all your health data directly within the App at any time, with no restrictions."}),(0,t.jsx)(c,{title:"Deletion",children:"Delete individual log entries or all of your data at any time from within the App settings."}),(0,t.jsx)(c,{title:"Portability",children:"Back up and restore your data using your own iCloud or Google Drive account via the premium backup feature."}),(0,t.jsx)(c,{title:"Withdrawal",children:"Stop using the App at any time by simply uninstalling it. No cancellation process is required for the free tier."})]})]}),(0,t.jsx)(o,{}),(0,t.jsxs)("div",{className:"sht-policy-section",id:"contact",children:[(0,t.jsx)(a,{icon:"✉️",title:"Contact Us"}),(0,t.jsx)("p",{children:"If you have questions about these Terms or the App, please reach out to the developer:"}),(0,t.jsxs)("div",{className:"sht-contact-card",children:[(0,t.jsx)("h4",{children:"Developer Contact"}),(0,t.jsx)("p",{children:"We're happy to clarify any aspect of these Terms or assist with any issues you may have with the App."}),(0,t.jsx)("a",{href:"mailto:support@shehealth.app",className:"sht-contact-link",children:"✉️ support@shehealth.app"})]})]}),(0,t.jsxs)("div",{className:"sht-page-footer",children:[(0,t.jsx)("p",{children:"She Health – Health Tracking App"}),(0,t.jsxs)("p",{children:["© ",new Date().getFullYear()," She Health. All rights reserved."]})]})]})]})]})]})}e.s(["default",()=>p])}]);