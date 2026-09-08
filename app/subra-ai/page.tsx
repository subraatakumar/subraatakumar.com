import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowRight, BrainCircuit, Check, Cpu, Download, Image as ImageIcon, Languages, MessageSquareText, Mic, Play, Share2, ShieldCheck, SlidersHorizontal, Volume2, WifiOff } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";
import storeLinks from "@/config/store-links.json";
import styles from "./home.module.css";

const stores = storeLinks["subra-ai"];
const description = "Chat, ask questions about images, transcribe voice, and personalize answers across 35+ response languages and language-aware styles. Subra AI runs on your device.";
const screenshots = [
  { file: "01-private-ai", title: "Private AI chat", alt: "Subra AI planning a morning routine in an on-device conversation" },
  { file: "02-image-questions", title: "Image questions", alt: "Subra AI answering a question about a weekend packing checklist" },
  { file: "03-voice-to-text", title: "Voice to text", alt: "A spoken idea transcribed into readable text in Subra AI" },
  { file: "04-chat-history", title: "Local chat history", alt: "Saved Subra AI conversations with pinning and import controls" },
  { file: "08-share-any-chat", title: "Share any chat", alt: "The Share action in the Subra AI chat options menu" },
  { file: "05-read-aloud", title: "Read aloud", alt: "Subra AI response with a read-aloud control" },
  { file: "06-ai-memory", title: "AI Memory", alt: "Editable AI Memory preferences with save and reset controls" },
  { file: "09-your-language", title: "35+ response languages", alt: "Subra AI response language settings with Hindi selected and European language examples" },
  { file: "10-response-style", title: "Response styles", alt: "Subra AI response style settings with Natural Hinglish selected" },
  { file: "07-local-model", title: "Model control", alt: "Subra AI local model download and import controls" },
];

export const metadata: Metadata = {
  title: "Subra AI | Private AI for Text, Images & Voice",
  description,
  keywords: ["Subra AI", "on-device AI", "offline AI chat", "private AI assistant", "multilingual AI", "35+ languages", "response styles", "voice transcription", "AI Memory", "image questions"],
  alternates: { canonical: "/subra-ai" },
  openGraph: { title: "Subra AI — Your ideas. Your AI. On your device.", description, url: "/subra-ai", type: "website", images: [{ url: absoluteUrl("/subra-ai/screenshots/social.jpg"), width: 1200, height: 630, alt: "Subra AI: text, images and voice on your device" }] },
  twitter: { card: "summary_large_image", title: "Subra AI | Private AI for Text, Images & Voice", description, images: [absoluteUrl("/subra-ai/screenshots/social.jpg")] },
};

function StoreButtons() {
  return <div className={styles.actions}>
    <a className={styles.primary} href={stores.ios} target="_blank" rel="noopener noreferrer"><Apple size={19} aria-hidden="true" /> Download on the App Store</a>
    <a className={styles.secondary} href={stores.android} target="_blank" rel="noopener noreferrer"><Play size={17} aria-hidden="true" /> Get it on Google Play</a>
  </div>;
}

function Capture({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return <a className={styles.captureLink} href={`/subra-ai/screenshots/${name}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`${alt}. Open larger image in a new tab`}>
    <Image className={styles.capture} src={`/subra-ai/screenshots/${name}.webp`} alt={alt} width={720} height={1565} sizes="(max-width: 760px) 80vw, 360px" priority={priority} />
    <span className={styles.enlarge}>Explore the real interface <ArrowRight size={14} aria-hidden="true" /></span>
  </a>;
}

export default function SubraAiPage() {
  return <div className={styles.home}>
    <section className={styles.hero} aria-labelledby="hero-title">
      <div>
        <p className={styles.eyebrow}><span className={styles.dot} /> YOUR EVERYDAY AI, ON DEVICE</p>
        <h1 id="hero-title" className="sa-display">Your ideas.<br />Your AI.<br /><span className={styles.gradient}>On your device.</span></h1>
        <p className={styles.lead}>Chat, ask questions about images, turn voice into text, and choose the language and style of your answers. A private AI workspace that goes where you go.</p>
        <StoreButtons />
        <p className={styles.note}>Runs offline after model download. Availability varies by device and region.</p>
        <div className={styles.trust}><span><ShieldCheck size={16} /> No account required</span><span><WifiOff size={16} /> On-device inference</span><span><Share2 size={16} /> Share when you choose</span></div>
        <a className={styles.textLink} href="#features">Explore what you can do <ArrowRight size={16} /></a>
      </div>
      <div className={styles.heroVisual}><div className={styles.orbit} /><Capture name="chat" alt="Subra AI chat with a sample 30-minute morning routine" priority /><span className={styles.visualBadge}><span className={styles.dot} /> TEXT · IMAGES · VOICE</span></div>
    </section>

    <section className={styles.section} id="features" aria-labelledby="features-title">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>A LITTLE HELP, EVERY DAY</p><h2 className="sa-display" id="features-title">From a passing thought<br />to something useful.</h2><p>Start with a message, an image or your own voice. Keep the conversation going in one place.</p></div>
      <div className={styles.featureGrid}>
        <article className={styles.feature}><MessageSquareText className={styles.icon} size={26} /><h3>Make room for your ideas</h3><p>Plan a calmer morning, draft a thoughtful message or work through a question. Get help putting your thoughts into words.</p><div className={styles.miniCapture}><Capture name="chat" alt="A sample morning routine created in Subra AI chat" /></div></article>
        <article className={styles.feature}><ImageIcon className={styles.icon} size={26} /><h3>Bring an image into the chat</h3><p>Add a picture and ask about what you see. A packing checklist, a visual reference or an everyday object can start the conversation.</p><div className={styles.miniCapture}><Capture name="image" alt="Subra AI responding to an image of a packing checklist" /></div></article>
        <article className={styles.feature}><Mic className={styles.icon} size={26} /><h3>Say it. Keep the words.</h3><p>Record a thought or attach an audio file. Turn spoken audio into readable text you can return to later.</p><div className={styles.transcript}><span>EXAMPLE TRANSCRIPT</span><blockquote>“Let’s take the early train, find a quiet café, and spend the afternoon exploring on foot.”</blockquote><div className={styles.wave} aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ height: `${12 + ((i * 17) % 39)}px` }} />)}</div><a className={styles.textLink} href="#screenshots">See voice to text <ArrowRight size={15} /></a></div></article>
      </div>
    </section>

    <section className={`${styles.section} ${styles.personal}`} aria-labelledby="personal-title">
      <div className={styles.personalVisual}><Capture name="memory" alt="AI Memory with editable sample preferences and save and reset controls" /></div>
      <div className={styles.sectionHead}><p className={styles.eyebrow}>MAKE IT YOURS</p><h2 className="sa-display" id="personal-title">A little memory.<br /><span className={styles.gradient}>More you.</span></h2><p>Keep useful context and preferences across chats. Open AI Memory to see what is saved, edit it or reset it whenever you want.</p><div className={styles.inlineFeature}><BrainCircuit size={23} /><div><h3>Context you control</h3><p>Saved memory and your current conversation context have separate controls.</p></div></div><div className={styles.inlineFeature}><Volume2 size={23} /><div><h3>Give your eyes a break</h3><p>Use the read-aloud control to hear a response. You can also enable spoken replies in Settings.</p></div></div></div>
    </section>

    <section className={`${styles.section} ${styles.languageStyle}`} aria-labelledby="language-style-title">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>PERSONAL RESPONSES</p><h2 className="sa-display" id="language-style-title">Your language.<br /><span className={styles.gradient}>Your style.</span></h2><p>Choose from 35+ response languages—or let Subra AI automatically match your language. Then select a response style that feels natural to you.</p><div className={styles.inlineFeature}><Languages size={23} /><div><h3>Answers in your language</h3><p>Select Hindi, Japanese, French, German, Spanish and many more. Change your choice whenever you want.</p></div></div><div className={styles.inlineFeature}><SlidersHorizontal size={23} /><div><h3>More than translation</h3><p>Available styles adapt to the selected language, including conversational, formal and language-specific options such as Natural Hinglish and Roman Hindi.</p></div></div><p className={styles.note}>Response-language support is separate from translation of the app interface. Available styles vary by selected language and model.</p></div>
      <div className={styles.languageVisuals}>
        <a href="/subra-ai/screenshots/09-your-language.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the response language screenshot in a new tab"><Image src="/subra-ai/screenshots/09-your-language.webp" alt="Subra AI lets users select from more than 35 response languages" width={620} height={1342} sizes="(max-width: 760px) 62vw, 270px" /></a>
        <a href="/subra-ai/screenshots/10-response-style.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the response style screenshot in a new tab"><Image src="/subra-ai/screenshots/10-response-style.webp" alt="Subra AI language-aware response style controls with Natural Hinglish selected" width={620} height={1342} sizes="(max-width: 760px) 62vw, 270px" /></a>
      </div>
    </section>

    <section className={`${styles.section} ${styles.sharing}`} aria-labelledby="sharing-title">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>KEEP IT. COME BACK. PASS IT ON.</p><h2 className="sa-display" id="sharing-title">Private by default.<br /><span className={styles.gradient}>Shared by you.</span></h2><p>Your conversations stay in your local chat history. When a chat is worth passing along, share an export with a friend, a colleague or anyone you choose.</p><ul className={styles.checklist}><li><Check size={18} /> Pin favorites and rename conversations.</li><li><Check size={18} /> Clone, archive or delete chats.</li><li><Check size={18} /> Share a chat export through your device’s sharing options.</li><li><Check size={18} /> Import a Subra AI chat export back into the app.</li></ul><p className={styles.note}>Open chat options → Share → choose a recipient or destination.</p></div>
      <div className={styles.shareVisual}><a href="/subra-ai/screenshots/share.webp" target="_blank" rel="noopener noreferrer" aria-label="Open a larger screenshot of the Share menu in a new tab"><Image src="/subra-ai/screenshots/share.webp" alt="Subra AI chat options with Share, Rename, Pin, Clone and Archive" width={760} height={1003} sizes="(max-width: 760px) 90vw, 460px" /></a><span className={styles.shareBadge}><Share2 size={19} /> Share any chat. With anyone.</span></div>
    </section>

    <section className={styles.section} id="screenshots" aria-labelledby="screenshots-title">
      <div className={styles.galleryHead}><div className={styles.sectionHead}><p className={styles.eyebrow}>TAKE A LOOK INSIDE</p><h2 className="sa-display" id="screenshots-title">One app. Everyday possibilities.</h2><p>Explore ten current capabilities. Select an image to open it larger.</p></div><span className={styles.galleryHint}>Scroll to explore →</span></div>
      <div className={styles.gallery} tabIndex={0} role="region" aria-label="Scrollable Subra AI screenshot gallery">{screenshots.map((shot, i) => <figure key={shot.file}><a href={`/subra-ai/screenshots/${shot.file}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`${shot.title}. Open larger image in a new tab`}><Image src={`/subra-ai/screenshots/${shot.file}.webp`} alt={shot.alt} width={620} height={1342} sizes="(max-width: 600px) 72vw, 260px" /></a><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{shot.title}</figcaption></figure>)}</div>
      <p className={styles.note}>iOS interface shown with example conversations. Features and layout may vary by platform and model.</p>
    </section>

    <section className={styles.section} id="privacy" aria-labelledby="privacy-title"><div className={styles.privacyCard}>
      <div><p className={styles.eyebrow}><ShieldCheck size={16} /> PRIVACY YOU CAN UNDERSTAND</p><h2 className="sa-display" id="privacy-title">On your hardware.<br />Under your control.</h2><p className={styles.muted}>The on-device experience processes prompts and responses locally, without uploading your chat history to a Subra AI server.</p><Link className={styles.textLink} href="/subra-ai/privacy-policy">Read the privacy details <ArrowRight size={16} /></Link></div>
      <ul className={styles.privacyList}><li><WifiOff size={22} /><div><h3>Ready for offline use</h3><p>Download the app and a compatible model first. On-device chat can then work without an internet connection.</p></div></li><li><Download size={22} /><div><h3>Your model, your choice</h3><p>Download or import a local model, export a copy, and manage it directly on your device.</p></div></li><li><ShieldCheck size={22} /><div><h3>Clear controls for your data</h3><p>Manage local chats and AI Memory in the app. Sharing an export gives your chosen recipient a copy of that conversation.</p></div></li></ul>
    </div></section>

    <section className={`${styles.section} ${styles.videoSection}`} id="intro" aria-labelledby="intro-title"><div className={styles.sectionHead}><p className={styles.eyebrow}>MEET SUBRA AI</p><h2 className="sa-display" id="intro-title">See where it started.</h2><p>A short introduction to the idea behind Subra AI. Explore the screenshots above for the current interface and capabilities.</p></div><video className={styles.video} controls playsInline preload="none" poster="/subra-ai/subra-ai-intro-poster.jpg" aria-label="Subra AI introduction"><source src="/subra-ai/subra-ai-intro.mp4" type="video/mp4" />Your browser does not support embedded video.</video></section>

    <section className={`${styles.section} ${styles.developers}`} id="use-cases" aria-labelledby="developers-title"><div><p className={styles.eyebrow}><Cpu size={16} /> FOR DEVELOPERS &amp; BUSINESSES</p><h2 className="sa-display" id="developers-title">Curious about what powers it?</h2><p>Subra AI uses Gemma 4 through LiteRT-LM for on-device inference. Explore the engineering decisions and separate integration examples behind the technology.</p><p className={styles.note}>Business integration examples are separate from the consumer features shown above.</p></div><div className={styles.developerLinks}><Link href="/blog/Why-I-Chose-Gemma-4-E2B-for-Subra-AI">Why I chose Gemma 4 E2B <ArrowRight size={18} /></Link><Link href="/subra-ai-use-cases/device-agnostic-medical-reading-capture">Explore a medical-reading integration example <ArrowRight size={18} /></Link></div></section>

    <section className={styles.section} id="download" aria-labelledby="download-title"><div className={styles.downloadCard}><p className={styles.eyebrow}>BRING YOUR NEXT IDEA</p><h2 className="sa-display" id="download-title">Take private AI with you.</h2><p>Text, images, voice and useful context.<br />Ready for your everyday conversations.</p><StoreButtons /><p className={styles.note}>No account required. A compatible model is needed for on-device inference.</p></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Subra AI", applicationCategory: "UtilitiesApplication", operatingSystem: "Android, iOS", url: absoluteUrl("/subra-ai"), installUrl: [stores.ios, stores.android], description, featureList: ["Offline chat after model download", "Image questions", "Voice transcription", "Read aloud", "Local chat history", "AI Memory", "Chat export and import", "35+ response languages", "Language-aware response styles", "Local model management"], offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, author: { "@type": "Person", name: "Subrata Kumar Das" } }) }} />
  </div>;
}
