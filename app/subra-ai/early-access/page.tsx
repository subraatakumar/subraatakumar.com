import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, Instagram, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const instagramUrl = "https://www.instagram.com/subraatakumar/";
const releasesUrl = "https://github.com/TechCraft-By-Subrata/subra-ai/releases";

export const metadata: Metadata = {
  title: "Android Early Access | Subra AI",
  description: "Request Subra AI Android early access through Google Play, or check official GitHub Releases for an APK when one is available.",
  alternates: { canonical: "/subra-ai/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="early-access-title">
        <Link className={styles.back} href="/subra-ai"><ArrowLeft size={16} /> Back to Subra AI</Link>
        <div className={styles.signal}><span><Sparkles size={15} /> Android early access</span><i /></div>
        <h1 className="sa-display" id="early-access-title">Get invited to try<br />Subra AI on Android.</h1>
        <p className={styles.lead}>Subra AI is on Google Play for an approved early-access group. You can request access there, or check the official GitHub Releases page for an Android APK when one is published. Some Android features are still being finished and tested.</p>
      </section>

      <section className={styles.access} aria-label="How to get Android early access">
        <a className={`${styles.choice} ${styles.instagram}`} href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}><Instagram size={25} /></span>
          <div><p>Option 1: Google Play early access</p><h2 className="sa-display">Message me on Instagram</h2><span>Ask to join the Subra AI Android early-access group. I’ll add you to the group, then you can install the app from Google Play.</span></div>
          <span className={styles.action}>Open Instagram</span>
        </a>
        <figure className={styles.proof}>
          <Image src="/subra-ai/early-access-play-store.png" alt="Subra AI: Offline AI Chat listing on Google Play" width={2032} height={1162} sizes="(max-width: 760px) 100vw, 540px" />
          <figcaption>Google Play installation is available to approved early-access testers.</figcaption>
        </figure>
        <a className={`${styles.choice} ${styles.github}`} href={releasesUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}><Download size={25} /></span>
          <div><p>Option 2: direct APK</p><h2 className="sa-display">Check GitHub Releases</h2><span>When an Android APK is published, open the latest release and download it from Assets. The releases page does not currently list an APK.</span></div>
          <span className={styles.action}>View official releases</span>
        </a>
      </section>

      <section className={styles.expect} aria-labelledby="what-to-expect-title">
        <div><p className={styles.sectionLabel}>A transparent early-access experience</p><h2 className="sa-display" id="what-to-expect-title">What to expect</h2></div>
        <ul>
          <li><Smartphone size={20} /><span><b>Not every feature is ready yet.</b> The Android app is still being finished and tested. Early access lets us validate the experience before features are released more broadly.</span></li>
          <li><ShieldCheck size={20} /><span><b>Your conversations stay local.</b> Subra AI is designed to run inference on your device after setup. Model downloads and updates still need a connection.</span></li>
          <li><CheckCircle2 size={20} /><span><b>Choose an official source.</b> Google Play provides the early-access install and update path. If you use an APK, get it only from the official GitHub Releases page and check the release notes before installing; APK installs may need manual updates.</span></li>
        </ul>
      </section>

      <p className={styles.footerNote}>For Google Play access, message me on Instagram. For a direct download, check GitHub Releases; no APK is listed there yet.</p>
    </div>
  );
}
