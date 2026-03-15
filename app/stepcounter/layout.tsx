import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StepCounterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`sc-shell ${dmSans.className}`}>

<style>{`
body:has(.sc-shell) .sk-header,
body:has(.sc-shell) .sk-footer {
  display: none !important;
}
.sc-shell {

  --sc-bg: #f5f7fb;
  --sc-card: #ffffff;

  --sc-navy: #243447;
  --sc-navy-dark: #1e2b3c;

  --sc-muted: #6b7b8c;

  --sc-accent: #3b82f6;

  min-height:100vh;
  color:var(--sc-navy);

  background:
    radial-gradient(circle at 10% 20%, rgba(36,52,71,0.08), transparent 40%),
    radial-gradient(circle at 90% 10%, rgba(59,130,246,0.08), transparent 40%),
    linear-gradient(180deg,#ffffff 0%, #f5f7fb 100%);
}

/* NAVBAR */

.sc-nav{
 position:sticky;
 top:0;
 z-index:50;
 backdrop-filter:blur(10px);
 background:rgba(255,255,255,0.85);
 border-bottom:1px solid rgba(0,0,0,0.06);
}

.sc-nav-inner{
 max-width:1100px;
 margin:auto;
 padding:0 20px;
 height:64px;
 display:flex;
 align-items:center;
 justify-content:space-between;
}

.sc-logo{
 display:flex;
 align-items:center;
 gap:10px;
 font-weight:700;
 color:var(--sc-navy);
 text-decoration:none;
}

.sc-logo-icon{
 width:32px;
 height:32px;
 border-radius:8px;
 background:linear-gradient(135deg,#243447,#1e2b3c);
 display:flex;
 align-items:center;
 justify-content:center;
 color:#fff;
 font-size:14px;
}

.sc-links{
 display:flex;
 gap:8px;
}

.sc-links a{
 text-decoration:none;
 padding:8px 12px;
 font-size:13px;
 border-radius:8px;
 color:var(--sc-navy);
 font-weight:600;
}

.sc-links a:hover{
 background:rgba(36,52,71,0.08);
}

.sc-btn{
 background:var(--sc-navy);
 color:#fff !important;
 padding:8px 16px;
 border-radius:10px;
}

.sc-btn:hover{
 background:var(--sc-navy-dark);
}

/* MAIN */

.sc-main{
 max-width:1100px;
 margin:auto;
 padding:30px 20px 60px;
}

/* FOOTER */

.sc-footer{
 border-top:1px solid rgba(0,0,0,0.06);
 background:#fafafa;
}

.sc-footer-inner{
 max-width:1100px;
 margin:auto;
 padding:18px 20px;
 display:flex;
 justify-content:space-between;
 flex-wrap:wrap;
 font-size:12px;
 color:var(--sc-muted);
}

`}</style>

<header className="sc-nav">
  <div className="sc-nav-inner">

    <Link href="/stepcounter" className="sc-logo">
      <span className="sc-logo-icon">👣</span>
      Step Counter
    </Link>

    <nav className="sc-links">
      <Link href="/stepcounter">Overview</Link>
      <Link href="/stepcounter/privacy-policy">Privacy</Link>
      <Link href="/stepcounter/terms">Terms</Link>
      <Link href="/products">Products</Link>
      <Link href="/stepcounter#download" className="sc-btn">
        Download
      </Link>
    </nav>

  </div>
</header>

<main className="sc-main">
  {children}
</main>

<footer className="sc-footer">
  <div className="sc-footer-inner">
    <span>© {new Date().getFullYear()} Step Counter</span>
    <div>
      <Link href="/stepcounter/privacy-policy">Privacy</Link>{" "}
      ·{" "}
      <Link href="/stepcounter/terms">Terms</Link>
    </div>
  </div>
</footer>

</div>
);
}