import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Apple, ArrowLeft, ArrowRight, BookOpen, FileText, Headphones, Image as ImageIcon, LockKeyhole, Play, SearchCheck } from "lucide-react";
import storeLinks from "@/config/store-links.json";
import { absoluteUrl } from "@/lib/seo";
import styles from "./page.module.css";

const path = "/subra-ai-use-cases/study-with-your-own-materials";
const description = "Bring your PDFs, notes, images, and lecture recordings into Subra AI's private Learning Vault. Ask questions about your material and review the source behind an answer.";

export const metadata: Metadata = {
  title: "Study With Your Own Materials and Check the Source | Subra AI",
  description,
  alternates: { canonical: path },
  openGraph: { title: "Study with your own materials. See where an answer came from.", description, url: path, type: "article", images: [{ url: "/subra-ai/use-cases/study-with-your-own-materials/hero.png", width: 1536, height: 1024, alt: "Illustration connecting a highlighted study passage with an answer on a phone" }] },
  twitter: { card: "summary_large_image", title: "Study with your own materials | Subra AI", description, images: ["/subra-ai/use-cases/study-with-your-own-materials/hero.png"] },
};

const steps = [
  { number: "01", title: "Bring in what you are actually studying", body: "Add a PDF, text file, image, or lecture recording to your Learning Vault. Subra AI prepares searchable text from supported materials on your device." },
  { number: "02", title: "Ask a question in Learning Chat", body: "Ask about a chapter, a concept in your notes, or a point from a lecture. Learning Chat looks for relevant parts of your Vault before forming an answer." },
  { number: "03", title: "Check the material behind the answer", body: "Use the source references in the response to compare it with your own material. PDF pages and audio timestamps may be included when that information is available." },
];

const faqs = [
  { question: "What can I add to the Learning Vault?", answer: "PDFs, text files, images, and audio recordings. Images need the local image model for description; recordings need transcription before their words can be searched." },
  { question: "Does it use the internet to answer questions?", answer: "Learning Vault retrieval and answer generation are designed to run on your device. You need to download the required local model first; downloading the app alone is not enough for AI answers." },
  { question: "Will every answer have an exact page or timestamp?", answer: "No. Source detail depends on the imported material and what could be extracted from it. Check the original when accuracy matters; AI-generated answers and references can still be wrong." },
  { question: "What if my materials do not cover the question?", answer: "Learning Chat is designed to say when the Vault does not provide enough information instead of presenting general knowledge as if it came from your files. As with any AI answer, review the source before relying on it." },
];

export default function StudyWithYourMaterialsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Study with your own materials, and see where an answer came from",
    description,
    mainEntityOfPage: absoluteUrl(path),
    author: { "@type": "Person", name: "Subrata Kumar Das" },
    image: absoluteUrl("/subra-ai/use-cases/study-with-your-own-materials/hero.png"),
    about: { "@type": "SoftwareApplication", name: "Subra AI Learning Lens", operatingSystem: "iOS" },
  };

  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="study-title"><div className={styles.wrap}>
      <Link className={styles.back} href="/subra-ai"><ArrowLeft size={16} aria-hidden="true" /> Subra AI</Link>
      <div className={styles.heroGrid}>
        <div>
          <p className={styles.eyebrow}><BookOpen size={16} aria-hidden="true" /> LEARNING LENS</p>
          <h1 className="sa-display" id="study-title">Study with <em>your own</em> materials. See where an answer came from.</h1>
          <p className={styles.lead}>Your lecture notes, textbook PDFs, images, and recordings already hold the context you need. Bring them into one private Learning Vault, ask a question, and follow the answer back to its source.</p>
          <div className={styles.actions}><a className={styles.primary} href={storeLinks["subra-ai"].ios} target="_blank" rel="noopener noreferrer"><Apple size={18} aria-hidden="true" /> Get Subra AI for iPhone</a><Link className={styles.secondary} href={storeLinks["subra-ai"].android}><Play size={17} aria-hidden="true" /> Get early access on Android</Link></div>
          <a className={styles.howLink} href="#how-it-works">See how it works <ArrowRight size={16} aria-hidden="true" /></a>
          <p className={styles.smallNote}>A compatible on-device model must be downloaded before using Learning Chat.</p>
        </div>
        <figure className={styles.example} aria-label="Illustration of a question, an answer, and a source reference">
          <div className={styles.exampleTop}><span className={styles.exampleDot} /> YOUR LEARNING VAULT <span className={styles.local}>ON DEVICE</span></div>
          <div className={styles.sourceCard}><FileText size={21} aria-hidden="true" /><div><strong>React fundamentals.pdf</strong><span>Chapter 3 · State and rendering</span></div></div>
          <div className={styles.question}><span>YOUR QUESTION</span><p>Why does changing state update a component?</p></div>
          <div className={styles.answer}><span>LEARNING CHAT</span><p>State is data a component remembers. When it changes, React renders the component again so the interface can reflect the new value.</p><div className={styles.citation}><SearchCheck size={17} aria-hidden="true" /> Source: React fundamentals.pdf · p. 18</div></div>
          <figcaption>Illustrative example. Your answer and source detail depend on your files.</figcaption>
        </figure>
      </div>
      <figure className={styles.heroFigure}><Image src="/subra-ai/use-cases/study-with-your-own-materials/hero.png" alt="Illustration of a highlighted passage in a textbook connected to an answer on a phone, alongside notes and a lecture recording" width={1536} height={1024} priority sizes="(max-width: 1160px) 100vw, 1104px" /><figcaption>Illustration of the study workflow; the phone image is not an app screenshot.</figcaption></figure>
    </div></section>

    <section className={styles.screenshots} aria-labelledby="screenshots-title"><div className={styles.wrap}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>INSIDE THE APP</p><h2 className="sa-display" id="screenshots-title">The real Learning Lens and Vault.</h2><p>Start in Learning Lens to chat with your materials, then open the Vault to add the files you want to study.</p></div>
      <div className={styles.screenshotGrid}>
        <figure><a href="/subra-ai/use-cases/study-with-your-own-materials/learning-lens.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Learning Lens screenshot at full size"><Image src="/subra-ai/use-cases/study-with-your-own-materials/learning-lens.png" alt="Subra AI Learning Lens screen with Chat with my learning materials and Open Vault controls" width={1179} height={2556} sizes="(max-width: 700px) 80vw, 360px" /></a><figcaption><strong>Learning Lens</strong><span>Ask a question or open your private Vault.</span></figcaption></figure>
        <figure><a href="/subra-ai/use-cases/study-with-your-own-materials/learning-vault.png" target="_blank" rel="noopener noreferrer" aria-label="Open the Learning Vault screenshot at full size"><Image src="/subra-ai/use-cases/study-with-your-own-materials/learning-vault.png" alt="Subra AI Learning Vault screen with buttons for adding PDF, text, image, and audio sources" width={1179} height={2556} sizes="(max-width: 700px) 80vw, 360px" /></a><figcaption><strong>Learning Vault</strong><span>Add PDFs, text, images, or lecture audio.</span></figcaption></figure>
      </div>
      <p className={styles.screenshotNote}>Current iOS screens. The screenshots show navigation and import options, not an example of a generated answer.</p>
    </div></section>

    <section className={styles.materials} aria-labelledby="materials-title"><div className={styles.wrap}>
      <p className={styles.eyebrow}>START WITH WHAT YOU ALREADY HAVE</p><h2 className="sa-display" id="materials-title">One place for the material scattered across your day.</h2>
      <div className={styles.materialGrid}>
        <div><FileText size={23} aria-hidden="true" /><strong>PDFs &amp; notes</strong><p>Keep course handouts, chapters, and written notes in the same study space.</p></div>
        <div><ImageIcon size={23} aria-hidden="true" /><strong>Images</strong><p>Add diagrams or photographed pages. A local image model can turn visible content into searchable text.</p></div>
        <div><Headphones size={23} aria-hidden="true" /><strong>Lecture audio</strong><p>Transcribe a recording so spoken explanations can become part of what Learning Chat searches.</p></div>
      </div>
    </div></section>

    <section className={styles.process} id="how-it-works" aria-labelledby="process-title"><div className={styles.wrap}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>FROM MATERIAL TO ANSWER</p><h2 className="sa-display" id="process-title">Ask the question your textbook cannot hear.</h2><p>Use your own course material as the starting point, then check the answer against it.</p></div>
      <ol className={styles.steps}>{steps.map(step => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>
      <div className={styles.callout}><LockKeyhole size={26} aria-hidden="true" /><div><h3>Your materials stay in your local Vault</h3><p>Learning Lens searches content from the Vault on your phone and uses an on-device model for answers. You do not need to upload a textbook or lecture recording to a cloud chatbot for this workflow.</p></div></div>
    </div></section>

    <section className={styles.reality} aria-labelledby="reality-title"><div className={styles.wrap}><div className={styles.realityGrid}>
      <div><p className={styles.eyebrow}>WHY THE SOURCE MATTERS</p><h2 className="sa-display" id="reality-title">A useful answer is one you can verify.</h2></div>
      <div><p>If an explanation feels unfamiliar, its source reference gives you somewhere to look next: the file you imported, and a page or audio time when available. That makes it easier to revise a difficult concept without losing the thread of your course.</p><p>AI can still misunderstand a passage or give an inaccurate reference. Treat citations as a route back to the original, not a guarantee that every sentence is correct.</p></div>
    </div></div></section>

    <section className={styles.faq} aria-labelledby="faq-title"><div className={styles.wrap}><p className={styles.eyebrow}>GOOD TO KNOW</p><h2 className="sa-display" id="faq-title">A few practical questions.</h2><div className={styles.faqGrid}>{faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>

    <section className={styles.finish}><div className={styles.wrap}><div className={styles.finishCard}><div><p className={styles.eyebrow}>YOUR NEXT STUDY SESSION</p><h2 className="sa-display">Start with one file. Ask one good question.</h2><p>Open Learning Lens, add the material you are working through, and let the answer point you back to your source.</p></div><div className={styles.finishActions}><a className={styles.primary} href={storeLinks["subra-ai"].ios} target="_blank" rel="noopener noreferrer"><Apple size={18} aria-hidden="true" /> Get Subra AI for iPhone</a><Link className={styles.secondary} href={storeLinks["subra-ai"].android}><Play size={17} aria-hidden="true" /> Get early access on Android</Link></div></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </div>;
}
