import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";
import { workWithMeContent as content } from "@/content/work-with-me";
import WorkWithMeClient from "./WorkWithMeClient";
import styles from "./work-with-me.module.css";

export const metadata: Metadata = {
  title: "Work with me",
  description: "Work with Subrata Kumar Das on React Native architecture, mobile product delivery, technical leadership, and engineering mentoring.",
  alternates: { canonical: "/work-with-me" },
  openGraph: {
    title: "Work with me | Subrata Kumar Das",
    description: "Architecture-first React Native consulting, hands-on mobile delivery, and technical leadership.",
    url: "/work-with-me",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work with me | Subrata Kumar Das",
    description: "Architecture-first React Native consulting, hands-on mobile delivery, and technical leadership.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const mailto = `mailto:${content.contact.email}?subject=${encodeURIComponent(content.contact.subject)}`;

export default function WorkWithMePage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Mobile architecture and React Native consulting",
            url: `${SITE_URL}/work-with-me`,
            provider: { "@type": "Person", name: "Subrata Kumar Das", url: SITE_URL },
            areaServed: "Worldwide",
            serviceType: ["Mobile architecture", "React Native development", "Technical leadership"],
          }),
        }}
      />

      <section className={styles.hero} aria-labelledby="work-title">
        <div>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1 id="work-title">{content.hero.title}</h1>
          <p className={styles.heroLead}>{content.hero.lead}</p>
          <p className={styles.heroSupporting}>{content.hero.supporting.join(" ")}</p>
          <div className={styles.actions}>
            <a href={mailto} className="sk-btn">Start a conversation</a>
            <Link href="/products" className="sk-btn sk-btn-ghost">See selected work</Link>
          </div>
        </div>
        <aside className={styles.heroNote} aria-label="Working promise">
          <Image
            src="/images/work-with-me/promise-note.svg"
            alt=""
            width={460}
            height={408}
            priority
          />
          <p className={styles.heroNoteText}>
            {content.hero.note.map((line) => <span key={line}>{line}</span>)}
          </p>
        </aside>
      </section>

      <section className={styles.section} aria-labelledby="engagements-title">
        <p className={styles.kicker}>How I can help</p>
        <h2 id="engagements-title">Engagements</h2>
        <div className={styles.engagementGrid}>
          {content.engagements.map(({ icon: Icon, title, description, points }) => (
            <article className={styles.engagementCard} key={title}>
              <div className={styles.cardHeading}><Icon aria-hidden="true" size={35} strokeWidth={1.8} /><h3>{title}</h3></div>
              <p>{description}</p>
              <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="principles-title">
        <p className={styles.kicker}>How I work</p>
        <h2 id="principles-title">Principles that guide every engagement</h2>
        <div className={styles.principleGrid}>
          {content.principles.map(({ icon: Icon, title, text }) => (
            <article className={styles.principle} key={title}>
              <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="process-title">
        <p className={styles.kicker}>Engagement process</p>
        <h2 id="process-title">A practical 4-step engagement</h2>
        <ol className={styles.processGrid}>
          {content.process.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepNumber}>{index + 1}</span>
              {index < content.process.length - 1 && (
                <Image
                  className={styles.stepArrow}
                  src="/images/work-with-me/process-arrow.svg"
                  alt=""
                  width={96}
                  height={32}
                />
              )}
              <h3>{step.title}</h3><p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.section} ${styles.fitGrid}`} aria-label="Engagement fit">
        <div>
          <p className={styles.kicker}>Best fit</p><h2>Great fit if you…</h2>
          <ul className={styles.fitList}>{content.fit.good.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
        </div>
        <div>
          <p className={styles.kicker}>Not a fit if you…</p><h2>This may not be the right fit if…</h2>
          <ul className={styles.fitList}>{content.fit.notIdeal.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="proof-title">
        <p className={styles.kicker}>Proof points</p><h2 id="proof-title">A track record you can rely on</h2>
        <div className={styles.proofGrid}>
          {content.proof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="faq-title">
        <p className={styles.kicker}>FAQ</p><h2 id="faq-title">Common questions</h2>
        <WorkWithMeClient />
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <h2 id="closing-title">Let’s build something that lasts.</h2>
        <div>
          <p>If you have a product challenge or roadmap in mind, I’d love to hear about it and explore how I can help.</p>
          <div className={styles.actions}>
            <a href={mailto} className="sk-btn">Start a conversation</a>
            <Link href="/products" className="sk-btn sk-btn-ghost">View selected work</Link>
          </div>
        </div>
        <aside className={styles.closingPromise} aria-label="Engagement promise">
          <Image
            src="/images/work-with-me/promise-note.svg"
            alt=""
            width={460}
            height={408}
          />
          <p className={styles.closingPromiseText}>
            {content.contact.promise.map((line) => <span key={line}>{line}</span>)}
          </p>
        </aside>
      </section>
    </div>
  );
}
