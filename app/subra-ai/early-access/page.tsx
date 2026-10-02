import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import styles from "./page.module.css";

const firebaseInviteUrl = "https://appdistribution.firebase.dev/i/1f1ef9c04f97327e";

export const metadata: Metadata = {
  title: "Android Early Access | Subra AI",
  description: "Request Subra AI Android early access through Firebase App Distribution.",
  alternates: { canonical: "/subra-ai/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <div className={styles.page}>
      <section className={styles.intro} aria-labelledby="early-access-title">
        <Link className={styles.back} href="/subra-ai"><ArrowLeft size={16} /> Back to Subra AI</Link>
        <div className={styles.signal}><span><Sparkles size={15} /> Android early access</span><i /></div>
        <h1 className="sa-display" id="early-access-title">Get invited to try<br />Subra AI on Android.</h1>
        <p className={styles.lead}>Subra AI is available for an approved early-access group via Firebase App Distribution. You can join automatically below. Some Android features are still being finished and tested.</p>
      </section>

      <section className={styles.access} aria-label="How to get Android early access">
        <a className={`${styles.choice}`} href={firebaseInviteUrl} target="_blank" rel="noopener noreferrer">
          <span className={styles.icon}><Smartphone size={25} /></span>
          <div><p>Firebase App Distribution</p><h2 className="sa-display">Join Early Access</h2><span>Sign in with Google to automatically join the Subra AI Android early-access group and install the app.</span></div>
          <span className={styles.action}>Join Now</span>
        </a>
        <figure className={styles.proof}>
          <Image src="/subra-ai/early-access-play-store.png" alt="Subra AI: Offline AI Chat listing on Google Play" width={2032} height={1162} sizes="(max-width: 760px) 100vw, 540px" />
          <figcaption>Firebase App Tester is available to approved early-access testers.</figcaption>
        </figure>
      </section>

      <section className={styles.expect} aria-labelledby="what-to-expect-title">
        <div><p className={styles.sectionLabel}>A transparent early-access experience</p><h2 className="sa-display" id="what-to-expect-title">What to expect</h2></div>
        <ul>
          <li><Smartphone size={20} /><span><b>Not every feature is ready yet.</b> The Android app is still being finished and tested. Early access lets us validate the experience before features are released more broadly.</span></li>
          <li><ShieldCheck size={20} /><span><b>Your conversations stay local.</b> Subra AI is designed to run inference on your device after setup. Model downloads and updates still need a connection.</span></li>
          <li><CheckCircle2 size={20} /><span><b>Choose an official source.</b> Firebase App Distribution provides the official early-access install and update path.</span></li>
        </ul>
      </section>

      <p className={styles.footerNote}>For early access, use the Firebase Invite link above.</p>
    </div>
  );
}
