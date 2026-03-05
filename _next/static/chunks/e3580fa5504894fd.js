(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69769,e=>{"use strict";var i=e.i(43476),s=e.i(71645);let r=[{id:"offline",icon:"📱",label:"Offline Architecture"},{id:"collection",icon:"🗂️",label:"Data We Collect"},{id:"purchases",icon:"💳",label:"Subscriptions"},{id:"backups",icon:"☁️",label:"Cloud Backups"},{id:"platforms",icon:"🔗",label:"Platform Links"},{id:"usage",icon:"ℹ️",label:"How Data Is Used"},{id:"permissions",icon:"🔔",label:"App Permissions"},{id:"security",icon:"🔒",label:"Security & Retention"},{id:"rights",icon:"✅",label:"User Rights"},{id:"contact",icon:"✉️",label:"Contact Us"}];function a({icon:e,title:s}){return(0,i.jsxs)("div",{className:"shp-section-head",children:[(0,i.jsx)("div",{className:"shp-section-icon",children:e}),(0,i.jsx)("h2",{className:"shp-h2 sh-font-display",children:s})]})}function t(){return(0,i.jsx)("div",{className:"shp-divider"})}function o({title:e,children:s,gold:r=!1}){return(0,i.jsxs)("div",{className:`shp-callout${r?" shp-callout-gold":""}`,children:[(0,i.jsx)("div",{className:`shp-callout-title${r?" shp-callout-title-gold":""}`,children:e}),(0,i.jsx)("p",{children:s})]})}function n({children:e}){return(0,i.jsx)("div",{className:"shp-info-grid",children:e})}function l({title:e,children:s}){return(0,i.jsxs)("div",{className:"shp-info-box",children:[(0,i.jsx)("h4",{children:e}),(0,i.jsx)("p",{children:s})]})}function c({items:e}){return(0,i.jsx)("ul",{className:"shp-bullet-list",children:e.map((e,s)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"shp-bullet-dot"}),(0,i.jsx)("span",{children:e})]},s))})}function d(){let[e,d]=(0,s.useState)("offline");return(0,s.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&d(e.target.id)})},{threshold:.3,rootMargin:"-10% 0px -65% 0px"});return r.forEach(({id:i})=>{let s=document.getElementById(i);s&&e.observe(s)}),()=>e.disconnect()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        html { scroll-behavior: smooth; }

        /* ── layout ── */
        .shp-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 36px 24px 80px;
          display: flex; gap: 36px; align-items: flex-start;
        }

        /* ── sidebar ── */
        .shp-sidebar {
          width: 210px; flex-shrink: 0;
          position: sticky; top: 84px;
        }
        .shp-sidebar-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--sh-muted);
          padding: 0 12px; margin-bottom: 10px; display: block;
        }
        .shp-sidebar-nav { display: flex; flex-direction: column; gap: 2px; }
        .shp-sidebar-btn {
          width: 100%; display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 10px;
          font-size: 13px; font-weight: 600; color: var(--sh-muted);
          background: transparent; border: none; cursor: pointer;
          text-align: left; transition: background 0.18s, color 0.18s;
        }
        .shp-sidebar-btn:hover { background: rgba(196,122,90,0.1); color: var(--sh-terra-d); }
        .shp-sidebar-btn.active {
          background: var(--sh-maroon); color: #fff;
        }
        .shp-sidebar-icon { font-size: 14px; flex-shrink: 0; }

        /* ── main ── */
        .shp-main { flex: 1; min-width: 0; }

        /* ── header card ── */
        .shp-header-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.15);
          border-radius: 22px; padding: 34px 38px; margin-bottom: 22px;
          box-shadow: 0 8px 30px rgba(90,31,47,0.06);
        }
        .shp-eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 700; color: var(--sh-terra);
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px;
        }
        .shp-h1 {
          font-size: 44px; font-weight: 700; color: var(--sh-maroon-d);
          line-height: 1.1; margin-bottom: 8px;
        }
        .shp-meta {
          color: var(--sh-muted); font-size: 13px; font-weight: 600;
          display: flex; align-items: center; gap: 6px; margin-bottom: 28px;
        }
        .shp-highlights {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px;
        }
        .shp-highlight {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 14px; padding: 15px 17px;
          display: flex; align-items: flex-start; gap: 12px;
        }
        .shp-hl-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.18), rgba(123,45,66,0.1));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .shp-hl-title { font-size: 13px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 3px; }
        .shp-hl-desc  { font-size: 12px; color: var(--sh-muted); line-height: 1.5; }

        /* ── content card ── */
        .shp-content-card {
          background: #fff; border: 1px solid rgba(196,122,90,0.12);
          border-radius: 22px; padding: 38px 42px;
          box-shadow: 0 6px 24px rgba(90,31,47,0.05);
        }

        /* ── policy sections ── */
        .shp-policy-section { scroll-margin-top: 90px; margin-bottom: 48px; }
        .shp-policy-section:last-child { margin-bottom: 0; }
        .shp-divider { height: 1px; background: rgba(196,122,90,0.12); margin-bottom: 48px; }
        .shp-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .shp-section-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: linear-gradient(135deg, rgba(196,122,90,0.15), rgba(123,45,66,0.10));
          display: flex; align-items: center; justify-content: center; font-size: 16px;
        }
        .shp-h2 { font-size: 24px; font-weight: 700; color: var(--sh-maroon-d); margin: 0; }
        .shp-policy-section p {
          font-size: 15px; color: var(--sh-muted);
          line-height: 1.72; margin-bottom: 14px;
        }
        .shp-policy-section p:last-child { margin-bottom: 0; }
        .shp-policy-section strong { color: var(--sh-charcoal); font-weight: 700; }

        /* callout */
        .shp-callout {
          background: rgba(196,122,90,0.07); border-left: 4px solid var(--sh-terra);
          border-radius: 0 12px 12px 0; padding: 15px 19px; margin: 14px 0;
        }
        .shp-callout p { margin: 0; color: var(--sh-charcoal); font-size: 14px; line-height: 1.65; }
        .shp-callout-title { font-size: 13px; font-weight: 800; color: var(--sh-terra-d); margin-bottom: 6px; }
        .shp-callout-gold { background: rgba(201,150,58,0.07); border-left-color: var(--sh-gold); }
        .shp-callout-title-gold { color: #9a6e10; }

        /* info grid */
        .shp-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; margin: 14px 0; }
        .shp-info-box {
          background: var(--sh-cream); border: 1px solid rgba(196,122,90,0.14);
          border-radius: 12px; padding: 15px 17px;
        }
        .shp-info-box h4 { font-size: 14px; font-weight: 700; color: var(--sh-maroon); margin-bottom: 6px; }
        .shp-info-box p  { font-size: 13px; color: var(--sh-muted); margin: 0; line-height: 1.6; }

        /* bullet list */
        .shp-bullet-list { list-style: none; margin: 13px 0; display: flex; flex-direction: column; gap: 10px; }
        .shp-bullet-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 14px; color: var(--sh-muted); }
        .shp-bullet-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sh-terra); flex-shrink: 0; margin-top: 6px; }

        /* platform links */
        .shp-platform-links { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
        .shp-platform-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; background: var(--sh-cream);
          border: 1px solid rgba(196,122,90,0.18); border-radius: 12px;
          text-decoration: none; font-size: 14px; font-weight: 700; color: var(--sh-maroon);
          transition: border-color 0.2s;
        }
        .shp-platform-link:hover { border-color: var(--sh-terra); }

        /* contact card */
        .shp-contact-card {
          background: linear-gradient(140deg, var(--sh-maroon-d), var(--sh-terra-d));
          border-radius: 18px; padding: 28px 32px;
          color: #fff; position: relative; overflow: hidden;
        }
        .shp-contact-card::before {
          content: ''; position: absolute;
          width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.08); top: -30px; right: -30px;
        }
        .shp-contact-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 6px; color: #fff; }
        .shp-contact-card p  { color: rgba(255,255,255,0.65); font-size: 14px; margin-bottom: 18px; }
        .shp-contact-link {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff; color: var(--sh-maroon-d);
          padding: 10px 20px; border-radius: 10px;
          font-size: 13px; font-weight: 700; text-decoration: none;
          transition: background 0.2s;
        }
        .shp-contact-link:hover { background: var(--sh-cream); }

        /* footer strip */
        .shp-page-footer {
          margin-top: 48px; padding-top: 24px;
          border-top: 1px solid rgba(196,122,90,0.12);
          text-align: center;
        }
        .shp-page-footer p { font-size: 12px; color: var(--sh-muted); }
        .shp-page-footer p:first-child {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; margin-bottom: 4px;
        }

        /* ── responsive ── */
        @media (max-width: 860px) {
          .shp-wrap { flex-direction: column; padding: 20px 16px 60px; gap: 20px; }
          .shp-sidebar { width: 100%; position: static; }
          .shp-sidebar-nav { flex-direction: row; flex-wrap: wrap; }
          .shp-header-card { padding: 22px; }
          .shp-h1 { font-size: 34px; }
          .shp-highlights { grid-template-columns: 1fr; }
          .shp-content-card { padding: 22px; }
          .shp-info-grid { grid-template-columns: 1fr; }
          .shp-platform-links { grid-template-columns: 1fr; }
        }
      `}),(0,i.jsxs)("div",{className:"shp-wrap",children:[(0,i.jsxs)("aside",{className:"shp-sidebar",children:[(0,i.jsx)("span",{className:"shp-sidebar-label",children:"Sections"}),(0,i.jsx)("nav",{className:"shp-sidebar-nav","aria-label":"Privacy policy sections",children:r.map(({id:s,icon:r,label:a})=>(0,i.jsxs)("button",{className:`shp-sidebar-btn${e===s?" active":""}`,onClick:()=>{document.getElementById(s)?.scrollIntoView({behavior:"smooth"})},children:[(0,i.jsx)("span",{className:"shp-sidebar-icon",children:r}),a]},s))})]}),(0,i.jsxs)("main",{className:"shp-main",children:[(0,i.jsxs)("div",{className:"shp-header-card",children:[(0,i.jsx)("div",{className:"shp-eyebrow",children:"🌸 She Health – Health Tracking App"}),(0,i.jsx)("h1",{className:"shp-h1 sh-font-display",children:"Privacy Policy"}),(0,i.jsx)("div",{className:"shp-meta",children:"🕐 Last updated: March 5, 2026"}),(0,i.jsx)("div",{className:"shp-highlights",children:[{icon:"📱",title:"Offline-Only",desc:"All health logs stored locally in an encrypted on-device database."},{icon:"👤",title:"No Login Needed",desc:"We do not collect names, emails, or any credentials."},{icon:"☁️",title:"Private Backups",desc:"Optional backups go only to your personal iCloud or Google Drive."}].map(e=>(0,i.jsxs)("div",{className:"shp-highlight",children:[(0,i.jsx)("div",{className:"shp-hl-icon",children:e.icon}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"shp-hl-title",children:e.title}),(0,i.jsx)("div",{className:"shp-hl-desc",children:e.desc})]})]},e.title))})]}),(0,i.jsxs)("div",{className:"shp-content-card",children:[(0,i.jsxs)("div",{className:"shp-policy-section",id:"offline",children:[(0,i.jsx)(a,{icon:"📱",title:"Offline-First Architecture"}),(0,i.jsxs)("p",{children:[(0,i.jsx)("strong",{children:"She Health"})," is built with a core philosophy of local privacy. Unlike many health apps, we do not require account registration, email submission, or any social media login to function."]}),(0,i.jsx)(o,{title:"Local Storage Only",children:"Your health logs — period data, incontinence records, hydration entries, secure gallery images, and contacts — are stored exclusively on your device. We have no central server that receives or stores your personal health data."}),(0,i.jsx)("p",{children:"Your data is encrypted using hardware-level encryption provided by your iOS or Android operating system. It does not leave your device unless you choose to initiate an optional backup."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"collection",children:[(0,i.jsx)(a,{icon:"🗂️",title:"Data We Collect"}),(0,i.jsx)("p",{children:"Because we do not have user accounts, we do not collect personal identifiers. The data that remains on your device includes:"}),(0,i.jsx)(c,{items:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Health Logs:"})," Period entries, incontinence episodes, Kegel exercise sets, hydration records, and symptom notes."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Gallery Images:"})," Sensitive photos stored in the secure gallery, kept separate from your device photo library."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Contact Vault:"})," Names, professions, notes, and messaging links you choose to store in the private contact vault."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Anonymous Diagnostics:"})," We may process non-identifiable crash reports and app version data to improve reliability. These are never linked to your identity."]})]}),(0,i.jsx)("p",{children:"We do not collect location data, device identifiers, or any other personal information beyond what you explicitly enter into the app."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"purchases",children:[(0,i.jsx)(a,{icon:"💳",title:"Subscriptions & In-App Purchases"}),(0,i.jsx)("p",{children:"She Health offers two types of premium purchases, both processed entirely through Apple or Google. We never receive or store your billing information."}),(0,i.jsx)(o,{title:"Drive Backup — Yearly Subscription",children:"An auto-renewing annual subscription that unlocks cloud backup. On Android, data backs up to your private Google Drive “App Data” folder. On iOS, data backs up to your private iCloud Drive container. We have no access to these files."}),(0,i.jsxs)(o,{title:"Color Schemes — One-Time In-App Purchases ($4.99 each)",gold:!0,children:["Individual color schemes are sold as non-consumable one-time purchases at ",(0,i.jsx)("strong",{children:"$4.99"})," each. ",(0,i.jsx)("strong",{children:"Terracotta"})," is the default scheme and is completely free. ",(0,i.jsx)("strong",{children:"Teal Gold"})," can be previewed in-app but has no trial period — purchase required to activate. ",(0,i.jsx)("strong",{children:"Plum Cream, Champagne Midnight, and Navy Silver"})," each include a ",(0,i.jsx)("strong",{children:"free 30-day trial"})," before any payment is required. Once purchased, a scheme is yours permanently with no further charges."]}),(0,i.jsxs)(n,{children:[(0,i.jsx)(l,{title:"Secure Payments",children:"All transactions are processed by Apple App Store (iOS) or Google Play (Android). The developer never sees or stores your credit card or billing details."}),(0,i.jsx)(l,{title:"Purchase Verification",children:"The app uses anonymous, cryptographically signed store receipts to unlock premium features locally on your device."}),(0,i.jsx)(l,{title:"Subscription Renewal",children:"The Drive Backup subscription auto-renews annually unless cancelled at least 24 hours before the end of the current period."}),(0,i.jsx)(l,{title:"Refunds",children:"All refund requests for subscriptions and one-time purchases are handled by Apple or Google through their standard refund processes."})]})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"backups",children:[(0,i.jsx)(a,{icon:"☁️",title:"User-Managed Cloud Backups"}),(0,i.jsxs)("p",{children:["To protect against data loss, She Health offers an ",(0,i.jsx)("strong",{children:"optional"})," backup feature managed entirely by you. We do not access, view, or store your backup files."]}),(0,i.jsxs)(n,{children:[(0,i.jsx)(l,{title:"🍎 iCloud Drive (iOS)",children:"Backups are encrypted and saved to your private iCloud container. Only you can access these files."}),(0,i.jsx)(l,{title:"▶ Google Drive (Android)",children:"Backups are saved to a private “App Data” folder on your Google Drive, inaccessible to us or other apps."})]}),(0,i.jsx)("p",{children:"Backup includes health logs and, optionally, secure gallery photos. The backup feature requires an active premium subscription."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"platforms",children:[(0,i.jsx)(a,{icon:"🔗",title:"Platform & Privacy Links"}),(0,i.jsx)("p",{children:"She Health relies on the following platform services. For details on how they handle data, please review their privacy policies:"}),(0,i.jsxs)("div",{className:"shp-platform-links",children:[(0,i.jsxs)("a",{href:"https://www.apple.com/legal/privacy/",target:"_blank",rel:"noreferrer",className:"shp-platform-link",children:["Apple Privacy Policy ",(0,i.jsx)("span",{children:"↗"})]}),(0,i.jsxs)("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noreferrer",className:"shp-platform-link",children:["Google Privacy Policy ",(0,i.jsx)("span",{children:"↗"})]})]})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"usage",children:[(0,i.jsx)(a,{icon:"ℹ️",title:"How Data Is Used"}),(0,i.jsx)("p",{children:"All data processing occurs locally on your device. Data is used exclusively for:"}),(0,i.jsx)(c,{items:["Calculating cycle predictions and hydration goal completion.","Scheduling local push notification reminders.","Generating health trend charts within the app.","Restoring premium status via store receipts.","Executing user-initiated cloud backups."]}),(0,i.jsx)("p",{children:"We do not use your data for advertising, analytics, profiling, or any purpose other than providing app functionality to you."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"permissions",children:[(0,i.jsx)(a,{icon:"🔔",title:"App Permissions"}),(0,i.jsx)("p",{children:"She Health may request the following device permissions:"}),(0,i.jsxs)(n,{children:[(0,i.jsx)(l,{title:"Notifications",children:"To send local hydration reminders and health check-in prompts according to your configured schedule."}),(0,i.jsx)(l,{title:"Cloud Storage",children:"To write backup files to your personal iCloud or Google Drive account (only when you initiate a backup)."}),(0,i.jsx)(l,{title:"Camera & Photo Library",children:"To add photos to the secure gallery. Images are stored within the app, not synced to your device gallery."}),(0,i.jsx)(l,{title:"Biometrics",children:"To authenticate app access using Face ID or fingerprint. Biometric data never leaves your device."})]})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"security",children:[(0,i.jsx)(a,{icon:"🔒",title:"Security & Retention"}),(0,i.jsxs)(n,{children:[(0,i.jsx)(l,{title:"🛡️ Native Encryption",children:"Your data benefits from hardware-level encryption built into your iOS or Android device."}),(0,i.jsx)(l,{title:"🗑️ Immediate Deletion",children:"Uninstalling the app immediately and permanently deletes all locally stored data from your device."})]}),(0,i.jsx)("p",{children:"We retain no copies of your personal data on any server. Data retention is entirely controlled by you."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"rights",children:[(0,i.jsx)(a,{icon:"✅",title:"User Rights"}),(0,i.jsx)("p",{children:"As an offline-first app, you retain complete ownership and control of your data at all times."}),(0,i.jsx)(c,{items:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Access:"})," View all your health data within the app at any time."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Modify:"})," Edit or update any entry directly within the app."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Delete:"})," Remove individual entries or all data via app settings."]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:"Export:"})," Back up your data using the optional cloud backup feature."]})]}),(0,i.jsx)("p",{children:"We comply with global privacy standards including GDPR and CCPA. Because no personal data is transmitted to our servers, most traditional data request processes are not applicable — your device is the only place your data lives."})]}),(0,i.jsx)(t,{}),(0,i.jsxs)("div",{className:"shp-policy-section",id:"contact",children:[(0,i.jsx)(a,{icon:"✉️",title:"Contact Us"}),(0,i.jsxs)("div",{className:"shp-contact-card",children:[(0,i.jsx)("h4",{children:"Developer Contact"}),(0,i.jsx)("p",{children:"For any questions about this Privacy Policy or She Health's privacy architecture, please reach out:"}),(0,i.jsx)("a",{href:"mailto:subraatakumar+shehealth@gmail.com",className:"shp-contact-link",children:"✉️ subraatakumar+shehealth@gmail.com"})]})]}),(0,i.jsxs)("div",{className:"shp-page-footer",children:[(0,i.jsx)("p",{children:"She Health – Health Tracking App"}),(0,i.jsxs)("p",{children:["© ",new Date().getFullYear()," She Health. All rights reserved."]})]})]})]})]})]})}e.s(["default",()=>d])}]);