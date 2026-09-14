import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  ArrowLeft,
  Brush,
  Check,
  Image as ImageIcon,
  Layers3,
  LockKeyhole,
  Palette,
  Play,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  WifiOff,
} from "lucide-react";
import storeLinks from "@/config/store-links.json";
import { absoluteUrl } from "@/lib/seo";
import styles from "./page.module.css";

const canonicalPath = "/subra-ai-use-cases/how-to-remove-image-background-for-free";
const stores = storeLinks["subra-ai"];
const title = "How to Remove an Image Background for Free and Offline | Subra AI";
const description = "Remove a photo background for free on your phone with Subra AI. Refine the mask, adjust edges, and replace the background with white, transparent, or your own image—all offline.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to remove image background for free",
    "free background remover app",
    "offline background remover",
    "on-device AI background remover",
    "remove photo background",
    "transparent background PNG",
    "change background of photo",
    "white background photo",
    "image background remover without upload",
    "refine image mask",
    "hair edge background removal",
    "background eraser photo editor",
  ],
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Remove an Image Background for Free—Without Uploading It",
    description,
    url: canonicalPath,
    type: "article",
    images: [{
      url: "/subra-ai/use-cases/how-to-remove-image-background-for-free/hero.webp",
      width: 1536,
      height: 1024,
      alt: "Subra AI on-device background removal with transparent, white, and custom background results",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free, Private and Offline Image Background Removal",
    description,
    images: ["/subra-ai/use-cases/how-to-remove-image-background-for-free/hero.webp"],
  },
};

const steps = [
  { number: "01", title: "Choose a photo", copy: "Open your image in Subra AI. The photo stays on the device while the on-device model separates the subject from its background." },
  { number: "02", title: "Inspect the cutout", copy: "Use the split comparison to move between the original and the result. Check hair, clothing, hands, product corners, and other difficult boundaries." },
  { number: "03", title: "Refine the mask", copy: "Erase unwanted areas or restore parts of the subject. Choose the brush shape and hardness that suit the correction you need." },
  { number: "04", title: "Tune the edges", copy: "Adjust mask threshold, softness, cleanup, refinement, and color-spill removal—or start with Natural, Sharp, or Hair Detail." },
  { number: "05", title: "Choose the new background", copy: "Keep it transparent, make it white, select a color, or place the subject over another image you choose." },
  { number: "06", title: "Export and save", copy: "Review the final composition, then export it from the app. No personal-image upload is required for the editing workflow." },
];

const faqs = [
  { q: "How can I remove an image background for free?", a: "Download Subra AI, open the background-removal tool, choose a photo, review the automatically created mask, refine it if needed, choose a transparent, white, color, or image background, and export the result. The feature is designed to run locally on your device." },
  { q: "Can I remove a photo background without uploading it online?", a: "Yes. Subra AI performs this background-removal workflow on device, so your source image does not need to be sent to a cloud AI service. Download the app and required model resources before working offline." },
  { q: "Can I change the background of a photo to white?", a: "Yes. After separating the subject, choose white as the replacement background. This is useful for profile pictures, marketplace listings, catalog images, documents, and clean product shots." },
  { q: "Can I make the background transparent?", a: "Yes. You can keep the extracted subject on a transparent background and export the result for designs, presentations, product listings, thumbnails, or later editing." },
  { q: "Can I replace the background with another picture or color?", a: "Yes. Subra AI supports a transparent result, a plain white or custom-color background, and a replacement image selected by you." },
  { q: "What if the automatic background removal misses hair or small details?", a: "Use mask refinement to erase or restore regions, then adjust threshold, edge softness, edge cleanup, edge refinement, and color-spill removal. Natural, Sharp, and Hair Detail presets provide useful starting points." },
  { q: "Does Subra AI work without internet?", a: "The editing workflow runs on device and can work offline after the app and any required model resources are already downloaded. You do not need an active connection to send each personal photo to a server." },
  { q: "Is Subra AI useful for founders and small businesses?", a: "It can help create consistent profile images, product cutouts, listing photos, pitch-deck assets, social posts, and marketing compositions on a phone—without adding a per-image cloud workflow or exposing customer and product imagery to a third-party image service." },
  { q: "Can I remove backgrounds from multiple images at once?", a: "This page does not promise bulk processing. Subra AI currently focuses on a controlled, image-by-image mobile workflow with visual review, mask refinement, edge adjustment, and export." },
  { q: "Will the exported image always be HD quality?", a: "Output quality depends on the source image, subject complexity, device resources, mask quality, and export settings. Start with a clear, well-lit image and inspect detailed edges before saving." },
];

function DownloadButtons() {
  return (
    <div className={styles.actions}>
      <a className={styles.primary} href={stores.ios} target="_blank" rel="noopener noreferrer"><Apple size={19} /> Download on the App Store</a>
      <a className={styles.secondary} href={stores.android} target="_blank" rel="noopener noreferrer"><Play size={18} /> Get it on Google Play</a>
    </div>
  );
}

export default function FreeBackgroundRemovalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        name: "How to remove an image background for free with Subra AI",
        description,
        image: absoluteUrl("/subra-ai/use-cases/how-to-remove-image-background-for-free/hero.webp"),
        totalTime: "PT5M",
        supply: [{ "@type": "HowToSupply", name: "A photo stored on your phone" }],
        tool: [{ "@type": "HowToTool", name: "Subra AI mobile app" }],
        step: steps.map((step) => ({ "@type": "HowToStep", name: step.title, text: step.copy })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
      {
        "@type": "SoftwareApplication",
        name: "Subra AI",
        applicationCategory: "PhotoApplication",
        operatingSystem: "Android, iOS",
        url: absoluteUrl(canonicalPath),
        installUrl: [stores.ios, stores.android],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <Link className={styles.back} href="/subra-ai#use-cases"><ArrowLeft size={15} /> All Subra AI use cases</Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><Sparkles size={16} /> Free background remover · On-device AI</p>
              <h1 className="sa-display">Remove the background.<br /><span>Keep the photo private.</span></h1>
              <p className={styles.lead}>Turn a portrait, product shot, or everyday photo into a clean cutout—then make the background transparent, white, a custom color, or an image you choose. Refine the mask and tune difficult edges, all on your phone.</p>
              <DownloadButtons />
              <div className={styles.trust}><span><WifiOff size={16} /> Works offline after setup</span><span><LockKeyhole size={16} /> No image upload required</span><span><Check size={16} /> Free to use</span></div>
            </div>
            <div className={styles.heroNote}>
              <b>Your image is not the price.</b>
              <p>Many “free online background remover” tools begin with an upload. Subra AI brings the model to your device, so personal portraits, unreleased products, client assets, and family photos can stay there.</p>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <Image src="/subra-ai/use-cases/how-to-remove-image-background-for-free/hero.webp" alt="Illustration of private on-device photo background removal, mask refinement, edge controls, and transparent, white, or custom backgrounds" width={1536} height={1024} priority sizes="(max-width: 1160px) 100vw, 1104px" />
            <figcaption>One private workflow: separate, compare, refine, adjust, replace, and export. Illustration based only on capabilities available in Subra AI.</figcaption>
          </figure>
        </div>
      </header>

      <section className={styles.promise} aria-label="Product advantages">
        <div className={`${styles.wrap} ${styles.promiseGrid}`}>
          <div><ShieldCheck size={24} /><b>Private by architecture</b><p>Processing happens on your hardware instead of sending each source photo to cloud AI.</p></div>
          <div><ScanLine size={24} /><b>Automatic, then adjustable</b><p>Start with an AI-generated mask and keep control over the details that matter.</p></div>
          <div><Palette size={24} /><b>More than “remove”</b><p>Finish with transparency, white, color, or a replacement image—not just an empty background.</p></div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="how-title">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>How to remove an image background for free</p>
            <h2 className="sa-display" id="how-title">Six steps. Your photo never needs a cloud detour.</h2>
            <p>You get the speed of automatic background removal with the final say of a hands-on photo editor.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.options}`} aria-labelledby="options-title">
        <div className={`${styles.wrap} ${styles.optionsGrid}`}>
          <figure className={styles.optionsFigure}>
            <Image src="/subra-ai/use-cases/how-to-remove-image-background-for-free/background-options.webp" alt="Illustration of a portrait with transparent, white, colored, and scenic replacement backgrounds plus mask and edge refinement controls" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 58vw" />
            <figcaption>From one subject to multiple useful compositions—without claiming a perfect one-tap result.</figcaption>
          </figure>
          <div>
            <p className={styles.eyebrow}>Your cutout, your context</p>
            <h2 className="sa-display" id="options-title">Transparent is only the beginning.</h2>
            <p className={styles.bodyCopy}>A clean cutout can become a professional headshot, a marketplace-ready product image, a thumbnail, a pitch-deck visual, or a social asset. Choose the finish that serves the job.</p>
            <ul className={styles.optionList}>
              <li><Layers3 size={20} /><div><b>Transparent background</b><span>Keep the subject ready for another design or composition.</span></div></li>
              <li><ImageIcon size={20} /><div><b>White background</b><span>Create a clean, distraction-free profile or product presentation.</span></div></li>
              <li><Palette size={20} /><div><b>Color or custom image</b><span>Match a brand palette or place the subject into another scene you select.</span></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="control-title">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Precision when one tap is not enough</p>
            <h2 className="sa-display" id="control-title">Keep the speed. Take back the edges.</h2>
            <p>Automatic segmentation gets you started. Subra AI gives you practical controls for the places where a person—not an algorithm—should make the final call.</p>
          </div>
          <div className={styles.controlGrid}>
            <article><Brush size={25} /><h3>Refine the mask</h3><p>Erase background remnants or restore parts of the subject with round or triangle brushes and hard or soft behavior.</p></article>
            <article><SlidersHorizontal size={25} /><h3>Adjust the edge</h3><p>Tune threshold, softness, cleanup, refinement, and color spill to improve uncertain borders.</p></article>
            <article><Sparkles size={25} /><h3>Start with a preset</h3><p>Natural, Sharp, and Hair Detail offer sensible starting points before you make more precise changes.</p></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.founders}`} aria-labelledby="founders-title">
        <div className={`${styles.wrap} ${styles.founderGrid}`}>
          <div><p className={styles.eyebrow}>For founders, creators, and small teams</p><h2 className="sa-display" id="founders-title">A visual-content workflow without a per-photo privacy trade.</h2></div>
          <div className={styles.founderCopy}>
            <p>Remove distractions from founder headshots. Standardize product listings on white. Prepare customer-approved cutouts for campaigns. Build pitch-deck compositions while traveling. The work stays available even when the Wi-Fi does not.</p>
            <p>On-device processing also changes the product conversation: less dependence on an image-upload pipeline, fewer personal assets moving between services, and a clearer privacy story for customers and collaborators.</p>
            <p className={styles.honest}><b>Honest boundary:</b> complex hair, motion blur, low contrast, transparent objects, and shadows may still need manual refinement. Subra AI provides those controls instead of pretending every cutout is perfect.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}><p className={styles.eyebrow}>Frequently asked questions</p><h2 className="sa-display" id="faq-title">Everything to know before your first cutout.</h2></div>
          <div className={styles.faqs}>{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="download-title">
        <div className={`${styles.wrap} ${styles.ctaCard}`}>
          <div><p className={styles.eyebrow}>Your photo. Your device. Your decision.</p><h2 className="sa-display" id="download-title">Remove the background—not your privacy.</h2><p>Download Subra AI and create transparent, white, or custom-background images for free, even when you are offline.</p></div>
          <DownloadButtons />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </article>
  );
}
