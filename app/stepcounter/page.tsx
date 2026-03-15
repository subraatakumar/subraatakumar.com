import Link from "next/link"
import Image from "next/image"

const FEATURES = [
{
icon:"👣",
title:"Automatic Step Counter",
desc:"Track your daily steps automatically using your phone sensors."
},
{
icon:"🚶",
title:"Walking Distance",
desc:"See how far you walk each day with detailed activity statistics."
},
{
icon:"📊",
title:"Activity Charts",
desc:"View your walking trends and daily progress with simple charts."
},
{
icon:"💧",
title:"Water Intake",
desc:"Log daily water intake and maintain healthy hydration habits."
},
{
icon:"⚖️",
title:"Weight Tracker",
desc:"Track body weight over time and monitor your progress."
},
{
icon:"☁️",
title:"Backup & Restore",
desc:"Securely backup your activity data to your personal cloud account."
}
]

const PRIVACY = [
{
icon:"🔒",
title:"No Login Required",
desc:"No email, no account, no personal data collection."
},
{
icon:"📱",
title:"On Device Storage",
desc:"All step and health data stays locally on your phone."
},
{
icon:"☁️",
title:"Private Backups",
desc:"Optional backups to your own iCloud or Google Drive."
}
]

export default function StepCounterPage() {

return (
<>
<style>{`

html{scroll-behavior:smooth}

.sc-page{
background:#F4F6FA;
color:#2E3E54;
overflow-x:hidden;
}

.sc-section{
padding:90px 24px;
}

.sc-inner{
max-width:1200px;
margin:auto;
}

/* HERO */

.sc-hero{
min-height:calc(100vh - 70px);
display:flex;
align-items:center;
}

.sc-hero-inner{
display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
align-items:center;
}

.sc-h1{
font-size:64px;
font-weight:800;
line-height:1.1;
margin-bottom:20px;
}

.sc-h1 em{
font-style:normal;
color:#6B7B8C;
}

.sc-sub{
font-size:18px;
color:#6B7B8C;
line-height:1.6;
margin-bottom:30px;
max-width:520px;
}

.sc-btn{
display:inline-flex;
align-items:center;
gap:8px;
background:#2E3E54;
color:white;
padding:14px 28px;
border-radius:14px;
text-decoration:none;
font-weight:700;
}

.sc-btn.secondary{
background:white;
border:1px solid #D6DBE4;
color:#2E3E54;
}

/* FEATURES */

.sc-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:24px;
}

.sc-card{
background:white;
padding:26px;
border-radius:18px;
border:1px solid #E3E6ED;
}

.sc-card-icon{
font-size:26px;
margin-bottom:10px;
}

.sc-card h3{
font-size:18px;
margin-bottom:6px;
}

.sc-card p{
font-size:14px;
color:#6B7B8C;
}

/* PRIVACY */

.sc-privacy{
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
align-items:center;
}

.sc-privacy-card{
display:flex;
gap:14px;
background:white;
border-radius:14px;
padding:16px;
border:1px solid #E3E6ED;
margin-bottom:12px;
}

/* CTA */

.sc-cta{
background:#2E3E54;
color:white;
text-align:center;
padding:80px 24px;
}

.sc-cta h2{
font-size:46px;
margin-bottom:16px;
}

.sc-cta p{
opacity:.8;
margin-bottom:30px;
}

/* MOBILE */

@media(max-width:900px){

.sc-hero-inner{
grid-template-columns:1fr;
}

.sc-grid{
grid-template-columns:1fr 1fr;
}

.sc-privacy{
grid-template-columns:1fr;
}

}

@media(max-width:600px){

.sc-grid{
grid-template-columns:1fr;
}

.sc-h1{
font-size:42px;
}

}

`}</style>


<div className="sc-page">


{/* HERO */}

<section className="sc-section sc-hero">

<div className="sc-inner sc-hero-inner">

<div>

<h1 className="sc-h1">
Walk More.<br/>
<em>Track Better.</em>
</h1>

<p className="sc-sub">
Step Counter N Walking Tracker helps you monitor your daily activity,
track walking distance, log water intake, and stay consistent with your health goals.
</p>

<div style={{display:"flex",gap:12,flexWrap:"wrap"}}>

<Link href="#download" className="sc-btn">
Download Free
</Link>

<Link href="#features" className="sc-btn secondary">
Explore Features
</Link>

</div>

</div>


<div style={{textAlign:"center"}}>

<Image
src="/stepcounter/screenshots/1.png"
width={260}
height={540}
alt="Step Counter App"
/>

</div>

</div>

</section>


{/* FEATURES */}

<section className="sc-section" id="features">

<div className="sc-inner">

<h2 style={{fontSize:42,fontWeight:800,marginBottom:40}}>
Everything You Need to Stay Active
</h2>

<div className="sc-grid">

{FEATURES.map((f)=>(
<div key={f.title} className="sc-card">

<div className="sc-card-icon">{f.icon}</div>

<h3>{f.title}</h3>

<p>{f.desc}</p>

</div>
))}

</div>

</div>

</section>


{/* PRIVACY */}

<section className="sc-section">

<div className="sc-inner sc-privacy">

<div>

<h2 style={{fontSize:42,fontWeight:800,marginBottom:20}}>
Your Data<br/>Stays Private
</h2>

<p className="sc-sub">
Step Counter is designed with privacy in mind.
Your activity data is stored locally and never shared without your control.
</p>

<Link href="/stepcounter/privacy-policy" className="sc-btn secondary">
Read Privacy Policy
</Link>

</div>


<div>

{PRIVACY.map(p=>(
<div key={p.title} className="sc-privacy-card">

<div style={{fontSize:22}}>{p.icon}</div>

<div>
<h4>{p.title}</h4>
<p style={{fontSize:13,color:"#6B7B8C"}}>{p.desc}</p>
</div>

</div>
))}

</div>

</div>

</section>


{/* CTA */}

<section className="sc-cta" id="download">

<h2>
Start Walking Today
</h2>

<p>
Download Step Counter N Walking Tracker and build healthier daily habits.
</p>

<div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>

<a
href="#"
className="sc-btn"
style={{background:"white",color:"#2E3E54"}}
>
App Store
</a>

<a
href="#"
className="sc-btn"
style={{background:"white",color:"#2E3E54"}}
>
Google Play
</a>

</div>

</section>

</div>

</>
)
}