import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Instagram, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const instagramUrl = "https://www.instagram.com/subraatakumar/";

export const metadata: Metadata = {
  title: "Android Early Access | Subra AI",
  description: "Request access to the Subra AI Android early-access group on Instagram, then download it safely from Google Play.",
  alternates: { canonical: "/subra-ai/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="early-access-title">
        <Link className={styles.back} href="/subra-ai"><ArrowLeft size={16} /> Back to Subra AI</Link>
        <div className={styles.signal}><span><Sparkles size={15} /> Android early access</span><i /></div>
        <h1 className="sa-display" id="early-access-title">Get invited to try<br />Subra AI on Android.</h1>
        <p className={styles.lead}>Subra AI is already on Google Play, but its Android release is still limited to an early-access group. Some features are not yet ready for the Android release, so access is personally approved while we finish and test them.</p>
      </section>

      <section className={styles.access} aria-label="How to get Android early access">
        <a className={`${styles.choice} ${styles.instagram}`} href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}><Instagram size={25} /></span>
          <div><p>Step 1: request access</p><h2 className="sa-display">Message me on Instagram</h2><span>Ask to join the Subra AI Android early-access group. I’ll add you to the group, then you can install the app securely from Google Play.</span></div>
          <span className={styles.action}>Open Instagram</span>
        </a>
        <figure className={styles.proof}>
          <Image src="/subra-ai/early-access-play-store.png" alt="Subra AI: Offline AI Chat listing on Google Play" width={2032} height={1162} sizes="(max-width: 760px) 100vw, 540px" />
          <figcaption>Available through Google Play early access—not an APK download.</figcaption>
        </figure>
      </section>

      <section className={styles.expect} aria-labelledby="what-to-expect-title">
        <div><p className={styles.sectionLabel}>A transparent early-access experience</p><h2 className="sa-display" id="what-to-expect-title">What to expect</h2></div>
        <ul>
          <li><Smartphone size={20} /><span><b>Not every feature is ready yet.</b> The Android app is still being finished and tested. Early access lets us validate the experience before features are released more broadly.</span></li>
          <li><ShieldCheck size={20} /><span><b>Your conversations stay local.</b> Subra AI is designed to run inference on your device after setup. Model downloads and updates still need a connection.</span></li>
          <li><CheckCircle2 size={20} /><span><b>Install only through Google Play.</b> Once you are added to the early-access group, Google Play gives you the official install and update path.</span></li>
        </ul>
      </section>

      <p className={styles.footerNote}>To get started, message me on Instagram. I’ll add you to the Google Play early-access group, then send you the next step.</p>
    </div>
  );
}
