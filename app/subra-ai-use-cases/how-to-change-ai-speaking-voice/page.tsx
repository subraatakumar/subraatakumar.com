import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple, ArrowLeft, Check, ChevronRight, Download, Globe2, Headphones,
  Languages, LockKeyhole, MessageCircleQuestion, Play, ShieldCheck,
  Smartphone, Volume2, WifiOff,
} from "lucide-react";
import storeLinks from "@/config/store-links.json";
import { absoluteUrl } from "@/lib/seo";
import styles from "./page.module.css";

const canonicalPath = "/subra-ai-use-cases/how-to-change-ai-speaking-voice";
const stores = storeLinks["subra-ai"];
const title = "How to Change the AI Speaking Voice by Language | Subra AI";
const description = "Choose an AI speaking voice for English, Hindi, Spanish, French, Chinese, Japanese, Korean and many more languages in Subra AI. Preview device voices and listen privately on your phone.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to change AI voice", "AI speaking voice app", "multilingual text to speech app",
    "choose AI voice by country", "AI voice reader", "offline text to speech app",
    "Hindi AI voice", "Indian language text to speech", "English accent AI voice",
    "Spanish AI voice", "French AI voice", "Chinese AI voice", "Japanese AI voice",
    "Korean AI voice", "private on-device AI voice", "listen to AI responses",
  ],
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Give AI Responses a Voice That Fits Your Language",
    description,
    url: canonicalPath,
    type: "article",
    images: [{
      url: "/subra-ai/use-cases/how-to-change-ai-speaking-voice/multilingual-voices-hero.png",
      width: 1536,
      height: 1024,
      alt: "A phone speaking with multiple voices and languages around the world",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choose a Multilingual AI Speaking Voice",
    description,
    images: ["/subra-ai/use-cases/how-to-change-ai-speaking-voice/multilingual-voices-hero.png"],
  },
};

const localeGroups = [
  { region: "South Asia", items: ["Bengali — India (bn-IN)", "Hindi — India (hi-IN)", "Kannada — India (kn-IN)", "Tamil — India (ta-IN)", "Telugu — India (te-IN)"] },
  { region: "English voices", items: ["Australia (en-AU)", "United Kingdom (en-GB)", "Ireland (en-IE)", "India (en-IN)", "United States (en-US)", "South Africa (en-ZA)"] },
  { region: "Spanish & Portuguese", items: ["Spain (es-ES)", "Mexico (es-MX)", "Brazil (pt-BR)", "Portugal (pt-PT)"] },
  { region: "French, German & Italian", items: ["French — Canada (fr-CA)", "French — France (fr-FR)", "German — Germany (de-DE)", "Italian — Italy (it-IT)"] },
  { region: "East & Southeast Asia", items: ["Chinese — China (zh-CN)", "Chinese — Taiwan (zh-TW)", "Cantonese — Hong Kong (yue-HK)", "Japanese — Japan (ja-JP)", "Korean — South Korea (ko-KR)", "Indonesian — Indonesia (id-ID)", "Malay — Malaysia (ms-MY)", "Thai — Thailand (th-TH)", "Vietnamese — Vietnam (vi-VN)"] },
  { region: "Northern & Western Europe", items: ["Danish — Denmark (da-DK)", "Finnish — Finland (fi-FI)", "Norwegian — Norway (nb-NO)", "Swedish — Sweden (sv-SE)", "Dutch — Belgium (nl-BE)", "Dutch — Netherlands (nl-NL)", "Catalan — Spain (ca-ES)"] },
  { region: "Central, Eastern & Southern Europe", items: ["Bulgarian — Bulgaria (bg-BG)", "Czech — Czechia (cs-CZ)", "Greek — Greece (el-GR)", "Croatian — Croatia (hr-HR)", "Hungarian — Hungary (hu-HU)", "Polish — Poland (pl-PL)", "Romanian — Romania (ro-RO)", "Russian — Russia (ru-RU)", "Slovak — Slovakia (sk-SK)", "Slovenian — Slovenia (sl-SI)", "Turkish — Türkiye (tr-TR)", "Ukrainian — Ukraine (uk-UA)"] },
  { region: "Middle East & global", items: ["Arabic — device/global locale (ar-001)", "Hebrew — Israel (he-IL)"] },
];

const questions = [
  { q: "How do I change the voice that reads AI responses aloud?", a: "In Subra AI, open Speaking voice, tap the preview button beside a voice, then select the voice you want. The chosen voice is used for spoken AI responses. You can return to System default whenever you prefer your device’s current voice." },
  { q: "Can I choose an AI voice for my country or accent?", a: "Yes, when your device provides it. Subra AI displays installed voices with locale codes such as en-IN for Indian English, en-GB for British English, en-US for American English, es-MX for Mexican Spanish, fr-CA for Canadian French, and pt-BR for Brazilian Portuguese." },
  { q: "Does Subra AI have Hindi, Bengali, Kannada, Tamil and Telugu voices?", a: "The app can show Hindi (hi-IN), Bengali (bn-IN), Kannada (kn-IN), Tamil (ta-IN), and Telugu (te-IN) voices when those speech voices are available on your device. Names and sound quality can differ by operating system and installed voice data." },
  { q: "Which English accents can I use?", a: "The captured device includes English voice locales for Australia, the United Kingdom, Ireland, India, the United States, and South Africa. The exact voice names and accent options available to you depend on your phone." },
  { q: "Can Subra AI speak Spanish, French or Portuguese?", a: "Supported device locales shown include Spanish for Spain and Mexico, French for France and Canada, and Portuguese for Brazil and Portugal. Preview each installed voice before choosing it." },
  { q: "Can it read AI answers in Chinese, Japanese and Korean?", a: "The captured options include Simplified Chinese for China, Traditional Chinese for Taiwan, Cantonese for Hong Kong, Japanese for Japan, and Korean for South Korea. The written response and selected speaking voice should use a compatible language for a natural result." },
  { q: "Does the speaking voice work offline?", a: "Speech can work offline when the selected system voice and its required speech data are already downloaded to your device. Some enhanced voices may require an initial download or may rely on operating-system services." },
  { q: "Are the voice names the same on every iPhone or Android phone?", a: "No. Available voices depend on the device, operating system version, language settings, region, and installed voice data. The screenshots document one device’s available list; your list may be different." },
  { q: "Is Subra AI cloning a real person’s voice?", a: "This voice picker selects text-to-speech voices supplied by the device. It is not presented as voice cloning, celebrity imitation, or a promise to reproduce a particular person’s identity." },
  { q: "Why should I listen to an AI response instead of reading it?", a: "Listening can help while walking, cooking, commuting, reviewing long answers, practicing pronunciation, or using a screen less. A familiar language or regional voice can also make spoken information easier to follow." },
  { q: "Can I preview voices before selecting one?", a: "Yes. Use the speaker preview control shown beside each available voice, compare the sound, then enable the one you prefer." },
  { q: "Is the feature free?", a: "Subra AI is available as a free download. Store availability, app features, and any future terms can vary by platform and version; check the current App Store or Google Play listing for details." },
];

const screenshots = Array.from({ length: 21 }, (_, index) => {
  const number = 1135 + index;
  return { src: `/subra-ai/use-cases/how-to-change-ai-speaking-voice/IMG_${number}.PNG`, alt: `Original Subra AI Speaking voice screen showing installed device voice options, screenshot ${index + 1}` };
});

function DownloadButtons() {
  return <div className={styles.actions}>
    <a className={styles.primary} href={stores.ios} target="_blank" rel="noopener noreferrer"><Apple size={19} /> Download on the App Store</a>
    <a className={styles.secondary} href={stores.android} target="_blank" rel="noopener noreferrer"><Play size={18} /> Get it on Google Play</a>
  </div>;
}

export default function SpeakingVoicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "HowTo", name: "How to change the AI speaking voice in Subra AI", description, totalTime: "PT2M", tool: [{ "@type": "HowToTool", name: "Subra AI mobile app" }], step: [
        { "@type": "HowToStep", name: "Open Speaking voice", text: "Open Subra AI settings and choose Speaking voice." },
        { "@type": "HowToStep", name: "Preview a voice", text: "Tap the speaker button beside an installed voice to hear it." },
        { "@type": "HowToStep", name: "Choose your voice", text: "Enable the voice that matches your preferred language or regional accent." },
        { "@type": "HowToStep", name: "Listen to a response", text: "Play an AI response aloud with the selected device voice." },
      ] },
      { "@type": "FAQPage", mainEntity: questions.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      { "@type": "SoftwareApplication", name: "Subra AI", applicationCategory: "UtilitiesApplication", operatingSystem: "Android, iOS", url: absoluteUrl(canonicalPath), installUrl: [stores.ios, stores.android], offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
    ],
  };

  return <article className={styles.page}>
    <header className={styles.hero}>
      <div className={styles.wrap}>
        <Link className={styles.back} href="/subra-ai#use-cases"><ArrowLeft size={15} /> All Subra AI use cases</Link>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}><Volume2 size={16} /> Multilingual speaking voices</p>
            <h1 className="sa-display">Hear AI in a voice<br /><span>that feels familiar.</span></h1>
            <p className={styles.lead}>Choose from the speaking voices installed on your phone—from Indian English and Hindi to Spanish, French, Japanese, Korean, Chinese, and dozens of regional options. Preview the sound, pick one, and listen to AI responses your way.</p>
            <DownloadButtons />
            <div className={styles.trust}><span><Headphones size={16} /> Preview before choosing</span><span><Globe2 size={16} /> Many languages and regions</span><span><LockKeyhole size={16} /> Uses device voice options</span></div>
          </div>
          <aside className={styles.heroNote}><b>One important, honest detail.</b><p>Subra AI shows voices made available by your phone. Names, languages, quality, and offline availability can vary by device, operating system, region, and downloaded speech data.</p></aside>
        </div>
        <figure className={styles.heroFigure}><Image src="/subra-ai/use-cases/how-to-change-ai-speaking-voice/multilingual-voices-hero.png" alt="Illustration of a phone connecting multilingual speaking voices around the world" width={1536} height={1024} priority sizes="(max-width: 1160px) 100vw, 1104px" /><figcaption>One AI assistant, many possible voices. Illustration explains the experience; the original app screenshots below document the available controls and captured locales.</figcaption></figure>
      </div>
    </header>

    <section className={styles.promise} aria-label="Speaking voice benefits"><div className={`${styles.wrap} ${styles.promiseGrid}`}>
      <div><Languages size={25} /><b>Make listening more natural</b><p>Choose a language or regional accent that is easier and more comfortable for you to follow.</p></div>
      <div><Smartphone size={25} /><b>Use what your phone provides</b><p>Subra AI brings compatible installed system voices into one clear selection screen.</p></div>
      <div><WifiOff size={25} /><b>Ready beyond perfect connectivity</b><p>Downloaded system voices may work offline; availability depends on the selected voice and device.</p></div>
    </div></section>

    <section className={styles.section} aria-labelledby="how-title"><div className={styles.wrap}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>How to change the AI voice</p><h2 className="sa-display" id="how-title">Listen first. Choose in four taps.</h2><p>You do not need to guess which voice suits you. Preview the available options and change your selection whenever your language, context, or preference changes.</p></div>
      <ol className={styles.steps}>{[
        ["01", "Open Speaking voice", "Go to Subra AI’s voice setting to see the options available on your device."],
        ["02", "Find your locale", "Look for the language-and-region code you want, such as en-IN, es-MX, fr-CA, or pt-BR."],
        ["03", "Tap to preview", "Use the speaker button beside a voice to hear how it sounds before selecting it."],
        ["04", "Select and listen", "Turn on your preferred voice, then play AI responses aloud when reading is inconvenient."],
      ].map(([n, h, p]) => <li key={n}><span>{n}</span><div><h3>{h}</h3><p>{p}</p></div></li>)}</ol>
    </div></section>

    <section className={`${styles.section} ${styles.visualSection}`} aria-labelledby="value-title"><div className={`${styles.wrap} ${styles.visualGrid}`}>
      <figure><Image src="/subra-ai/use-cases/how-to-change-ai-speaking-voice/on-device-voice.png" alt="Illustration of speech being processed on a phone and played through headphones" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 58vw" /><figcaption>A visual explanation of the device-led speaking experience—not a screenshot of the app interface.</figcaption></figure>
      <div><p className={styles.eyebrow}>Why a speaking voice matters</p><h2 className="sa-display" id="value-title">Turn screen time into listening time.</h2><p className={styles.bodyCopy}>Hear a long explanation while cooking. Review notes on a walk. Listen when small text is uncomfortable. Practice how another language sounds. A voice option turns an AI response from something you must watch into something that can move with you.</p>
        <ul className={styles.valueList}><li><Check size={19} /><span><b>More accessible</b> when listening is easier than reading</span></li><li><Check size={19} /><span><b>More personal</b> with familiar languages and regional accents</span></li><li><Check size={19} /><span><b>More flexible</b> for commutes, chores, study, and review</span></li></ul>
      </div>
    </div></section>

    <section className={styles.section} aria-labelledby="countries-title"><div className={styles.wrap}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>Countries, regions, languages and accents</p><h2 className="sa-display" id="countries-title">Which AI speaking voices can I choose?</h2><p>The screenshots captured the following locale options. The codes identify both language and region; they do not guarantee that every phone will show the same named voices.</p></div>
      <div className={styles.localeGrid}>{localeGroups.map(group => <section className={styles.localeCard} key={group.region}><h3>{group.region}</h3><ul>{group.items.map(item => <li key={item}><ChevronRight size={14} />{item}</li>)}</ul></section>)}</div>
      <p className={styles.boundary}><ShieldCheck size={20} /><span><b>Availability boundary:</b> this is evidence from the supplied app screenshots, not a universal compatibility guarantee. Your device may add, remove, rename, download, or upgrade voices independently of Subra AI.</span></p>
    </div></section>

    <section className={`${styles.section} ${styles.screensSection}`} aria-labelledby="screens-title"><div className={styles.wrap}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>Original app screenshots</p><h2 className="sa-display" id="screens-title">See the real voice-selection experience.</h2><p>These are original captures of the Speaking voice screen. They show voice previews, locale codes, selection switches, System default, and the range available on the captured device.</p></div>
      <div className={styles.screenGrid}>{screenshots.map((shot, i) => <figure key={shot.src}><Image src={shot.src} alt={shot.alt} width={1179} height={2556} loading="lazy" sizes="(max-width: 640px) 44vw, (max-width: 1000px) 28vw, 210px" /><figcaption>Voice list · {i + 1} of 21</figcaption></figure>)}</div>
    </div></section>

    <section className={styles.section} aria-labelledby="faq-title"><div className={styles.wrap}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}><MessageCircleQuestion size={16} /> Questions people ask Google and AI assistants</p><h2 className="sa-display" id="faq-title">Answers before you choose a voice.</h2></div>
      <div className={styles.faqs}>{questions.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div></section>

    <section className={styles.cta} aria-labelledby="download-title"><div className={`${styles.wrap} ${styles.ctaCard}`}>
      <div><p className={styles.eyebrow}><Download size={16} /> Your AI, now easier to hear</p><h2 className="sa-display" id="download-title">Choose a voice and keep moving.</h2><p>Download Subra AI, preview the speaking voices available on your phone, and listen to useful answers in the language or regional voice that works for you.</p></div><DownloadButtons />
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </article>;
}
