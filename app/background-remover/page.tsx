import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  Brush,
  Check,
  Image as ImageIcon,
  Layers3,
  LockKeyhole,
  Palette,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  WifiOff,
} from "lucide-react";
import storeLinks from "@/config/store-links.json";
import { absoluteUrl } from "@/lib/seo";
import styles from "./page.module.css";

const canonicalPath = "/background-remover";
const trialStore = storeLinks["subra-ai"];
const title = "Subra AI: Background Remover | Private Offline Photo Editor";
const description =
  "Remove, replace, and refine image backgrounds privately on your iPhone. One purchase, unlimited high-resolution exports, no subscription, no watermark, and no cloud upload.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "offline background remover",
    "private background remover",
    "transparent PNG maker",
    "white background creator",
    "background remover without subscription",
    "watermark-free photo editor",
    "on-device background remover",
  ],
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description,
    url: canonicalPath,
    type: "website",
    images: [
      {
        url: "/background-remover/screenshots/remove-background-instantly.png",
        width: 1242,
        height: 2688,
        alt: "Subra AI Background Remover creating a clean transparent cutout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/background-remover/screenshots/remove-background-instantly.png"],
  },
};

const steps = [
  {
    number: "01",
    title: "Choose a photo",
    copy: "Select a portrait, product, animal, or object from your device. Your source image stays on your iPhone.",
  },
  {
    number: "02",
    title: "Remove the background",
    copy: "On-device machine learning separates the subject and prepares a transparent, high-resolution cutout.",
  },
  {
    number: "03",
    title: "Inspect the result",
    copy: "Drag the split-view divider to compare the original photo with the processed result.",
  },
  {
    number: "04",
    title: "Refine difficult details",
    copy: "Erase unwanted areas, restore the subject, and tune threshold, softness, cleanup, refinement, and color spill.",
  },
  {
    number: "05",
    title: "Replace and arrange",
    copy: "Keep transparency or add your own background, then resize, rotate, and position the subject precisely.",
  },
  {
    number: "06",
    title: "Export without a watermark",
    copy: "Save the finished image at high resolution with no recurring subscription and no export limits.",
  },
];

const screenshots = [
  {
    src: "/background-remover/screenshots/refine-every-edge.png",
    alt: "Subra AI mask tools refining hair and difficult image edges",
  },
  {
    src: "/background-remover/screenshots/resize-and-reposition.png",
    alt: "Subra AI resizing and repositioning a cutout over a custom background",
  },
  {
    src: "/background-remover/screenshots/swap-selfie-backgrounds.png",
    alt: "Subra AI swapping a selfie background with a beach scene",
  },
  {
    src: "/background-remover/screenshots/perfect-white-background.png",
    alt: "Subra AI creating a clean white background for a professional photo",
  },
];

const faqs = [
  {
    q: "Are my photos uploaded to a server?",
    a: "No. The editing workflow runs locally on your device. Your selected photos do not need to leave your iPhone for background removal or replacement.",
  },
  {
    q: "Does the app require an account?",
    a: "No account, profile, email address, or sign-up is required. Download the app and start editing.",
  },
  {
    q: "Is this a subscription?",
    a: "No. Subra AI: Background Remover is designed as a one-time purchase with unlimited lifetime use of the included features—without monthly subscription fees.",
  },
  {
    q: "Will exported images contain a watermark?",
    a: "No. The standalone paid app exports clean, watermark-free images. The free background-removal experience in the main Subra AI app includes a watermark.",
  },
  {
    q: "Can I create transparent PNGs and white backgrounds?",
    a: "Yes. Export a transparent PNG, use a clean white background for product listings, or choose your own replacement image.",
  },
  {
    q: "Can I correct hair and difficult edges?",
    a: "Yes. Natural, Sharp, and Hair Detail presets provide starting points, while mask and edge controls let you refine difficult boundaries manually.",
  },
];

export default function BackgroundRemoverPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Subra AI: Background Remover",
    applicationCategory: "PhotoApplication",
    operatingSystem: "iOS",
    url: absoluteUrl(canonicalPath),
    description,
    offers: { "@type": "Offer", category: "One-time purchase" },
    featureList: [
      "Offline background removal",
      "Transparent PNG export",
      "Custom replacement backgrounds",
      "Manual mask refinement",
      "Edge adjustment controls",
      "Watermark-free exports",
    ],
  };
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <Sparkles size={16} /> Paid once · Private forever
              </p>
              <h1 className="sa-display">
                Remove the background.
                <br />
                <span>Keep every photo private.</span>
              </h1>
              <p className={styles.lead}>
                Transform photos in seconds with a focused, AI-powered editor
                for professional cutouts and clean compositions. Everything runs
                offline on your iPhone—no account, no cloud processing, and no
                subscription.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#screenshots">
                  <Apple size={19} /> Explore the iPhone app
                </a>
                <a
                  className={styles.secondary}
                  href={trialStore.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try the free version first
                </a>
              </div>
              <div className={styles.trust}>
                <span>
                  <WifiOff size={16} /> Fully offline editing
                </span>
                <span>
                  <LockKeyhole size={16} /> No photo upload
                </span>
                <span>
                  <Check size={16} /> Unlimited watermark-free exports
                </span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <figure
                className={`${styles.heroFigure} ${styles.majorScreenshot}`}
              >
                <Image
                  src="/background-remover/screenshots/remove-background-instantly.png"
                  alt="Subra AI Background Remover showing a before-and-after transparent cutout"
                  width={1242}
                  height={2688}
                  priority
                  sizes="(max-width: 900px) 88vw, 360px"
                />
                <figcaption>
                  Remove people, products, and objects in one tap—fully on
                  device.
                </figcaption>
              </figure>
              <div className={styles.heroNote}>
                <b>One purchase. No recurring bill.</b>
                <p>
                  Get unlimited premium access without monthly fees, daily
                  limits, accounts, or hidden export charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.promise} aria-label="Product advantages">
        <div className={`${styles.wrap} ${styles.promiseGrid}`}>
          <div>
            <ShieldCheck size={24} />
            <b>100% private and offline</b>
            <p>
              No accounts, sign-ups, or cloud processing. Photos stay on your
              device.
            </p>
          </div>
          <div>
            <ScanLine size={24} />
            <b>Automatic, then adjustable</b>
            <p>
              Start with an AI cutout and refine complex details with hands-on
              controls.
            </p>
          </div>
          <div>
            <Palette size={24} />
            <b>Paid once, unlimited</b>
            <p>
              No subscription, daily caps, or watermark on your high-resolution
              exports.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="features"
        aria-labelledby="workflow-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Complete feature workflow</p>
            <h2 className="sa-display" id="workflow-title">
              From source photo to finished cutout in six focused steps.
            </h2>
            <p>
              Fast automatic processing meets the precision controls needed for
              professional results.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.options}`}
        aria-labelledby="outputs-title"
      >
        <div className={`${styles.wrap} ${styles.optionsGrid}`}>
          <figure className={styles.optionsFigure}>
            <Image
              src="/subra-ai/use-cases/how-to-remove-image-background-for-free/background-options.webp"
              alt="Transparent, white, colored, and custom photo-background options"
              width={1536}
              height={1024}
              sizes="(max-width:900px) 100vw,58vw"
            />
            <figcaption>One cutout, multiple professional uses.</figcaption>
          </figure>
          <div>
            <p className={styles.eyebrow}>More than background removal</p>
            <h2 className="sa-display" id="outputs-title">
              Transparent is only the beginning.
            </h2>
            <p className={styles.bodyCopy}>
              Prepare marketplace listings, thumbnails, collages, marketing
              graphics, profile photos, and reusable design assets.
            </p>
            <ul className={styles.optionList}>
              <li>
                <Layers3 size={20} />
                <div>
                  <b>Transparent PNG maker</b>
                  <span>
                    Export a clean cutout ready for design layouts, stickers,
                    logos, and digital marketing.
                  </span>
                </div>
              </li>
              <li>
                <ImageIcon size={20} />
                <div>
                  <b>Perfect white backgrounds</b>
                  <span>
                    Create crisp product imagery for Amazon, eBay, Etsy,
                    Poshmark, and catalog use.
                  </span>
                </div>
              </li>
              <li>
                <Palette size={20} />
                <div>
                  <b>Your own replacement image</b>
                  <span>
                    Swap distracting scenes for a custom photo, texture, or
                    branded composition.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        id="screenshots"
        aria-labelledby="screenshots-title"
      >
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>The real app, end to end</p>
            <h2 className="sa-display" id="screenshots-title">
              Every important control stays close to the image.
            </h2>
            <p>
              See edge refinement, subject placement, background replacement,
              and clean white-background creation.
            </p>
          </div>
          <div className={styles.screenshotGrid}>
            {screenshots.map((item) => (
              <figure key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1242}
                  height={2688}
                  sizes="(max-width:640px) 82vw, (max-width:1000px) 42vw, 260px"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="control-title">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>
              Precision when one tap is not enough
            </p>
            <h2 className="sa-display" id="control-title">
              Keep the speed. Take back the edges.
            </h2>
            <p>
              Automatic segmentation gets you started; practical controls let
              you finish hair, fur, clothing folds, product corners, and complex
              boundaries.
            </p>
          </div>
          <div className={styles.controlGrid}>
            <article>
              <Brush size={25} />
              <h3>Refine the mask</h3>
              <p>
                Erase background remnants or restore parts of the subject with
                hard or soft brushes.
              </p>
            </article>
            <article>
              <SlidersHorizontal size={25} />
              <h3>Adjust the edge</h3>
              <p>
                Tune threshold, softness, cleanup, refinement, and color-spill
                removal.
              </p>
            </article>
            <article>
              <Sparkles size={25} />
              <h3>Start with a preset</h3>
              <p>
                Natural, Sharp, and Hair Detail give you sensible starting
                points.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.founders}`}
        aria-labelledby="pros-title"
      >
        <div className={`${styles.wrap} ${styles.founderGrid}`}>
          <div>
            <p className={styles.eyebrow}>Why professionals choose Subra AI</p>
            <h2 className="sa-display" id="pros-title">
              Professional image utility without a privacy trade.
            </h2>
          </div>
          <div className={styles.founderCopy}>
            <p>
              E-commerce owners can create crisp listing photos. Content
              creators can prepare thumbnails and collages. Designers can make
              reusable transparent graphics—all without feeding private or
              unreleased imagery into a cloud service.
            </p>
            <p>
              Work anywhere, including without network access. There are no
              accounts, processing caps, monthly plans, or watermarked exports.
            </p>
            <p className={styles.honest}>
              <b>Honest boundary:</b> hair, fur, motion blur, transparent
              objects, shadows, and low-contrast edges can still require manual
              refinement. The app includes those controls instead of pretending
              every automatic cutout is perfect.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <div className={styles.wrap}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Frequently asked questions</p>
            <h2 className="sa-display" id="faq-title">
              Everything to know before your first cutout.
            </h2>
          </div>
          <div className={styles.faqs}>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="download-title">
        <div className={`${styles.wrap} ${styles.ctaCard}`}>
          <div>
            <p className={styles.eyebrow}>Try before you buy</p>
            <h2 className="sa-display" id="download-title">
              Test the core AI in the free Subra AI app.
            </h2>
            <p>
              The master app includes a limited version of background removal so
              you can test the experience first. Free exports include a
              watermark; the standalone paid app removes it.
            </p>
          </div>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={trialStore.ios}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Apple size={19} /> Download Subra AI
            </a>
            <Link
              className={styles.secondary}
              href="/subra-ai-use-cases/how-to-remove-image-background-for-free"
            >
              Read the free workflow
            </Link>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  );
}
