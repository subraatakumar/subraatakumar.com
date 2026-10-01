import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Subra AI",
  description: "Terms governing use of the Subra AI local-first mobile application and Subra Plus subscriptions.",
  alternates: { canonical: "/subra-ai/terms" },
  openGraph: {
    title: "Terms of Use | Subra AI",
    description: "Terms for using Subra AI and Subra Plus.",
    url: "/subra-ai/terms",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance and eligibility",
    content: <>
      <p>These Terms of Use form an agreement between you and <strong>Subrata Kumar Das</strong>, the developer and operator of Subra AI (the “Developer,” “we,” “us,” or “our”). By downloading, installing, purchasing through, or using the app, you agree to these Terms and the Subra AI Privacy Policy. If you do not agree, do not use the app.</p>
      <p>You must be legally capable of accepting these Terms. Subra AI is not directed to children under 13 or the minimum digital-consent age where they live. A minor may use the app only with permission and supervision from a parent or legal guardian where required by law.</p>
    </>,
  },
  {
    id: "service",
    title: "What Subra AI provides",
    content: <>
      <p>Subra AI provides local-first AI chat, image, audio, Vault, Space, organization, and related features. Supported AI inference runs on your device using Gemma models through Google LiteRT/LiteRT-LM. Optional network features include model downloads, app-store purchases and verification, Firebase-based support, and links to external support services.</p>
      <p>Model availability, speed, accuracy, and capabilities depend on your device, operating system, available memory and storage, model version, and app version. Internet access may be required for installation, updates, model downloads, purchases, entitlement checks, and support. Supported core inference is intended to work offline after setup.</p>
    </>,
  },
  {
    id: "plus",
    title: "Subra Plus subscriptions",
    content: <>
      <p>Subra Plus is offered as monthly and annual auto-renewing subscriptions through Apple&apos;s App Store or Google Play. The price, currency, taxes, billing period, any trial or introductory offer, and renewal terms shown by the store at purchase are the terms that apply to that transaction.</p>
      <ul>
        <li>Payment is charged to your applicable store account when you confirm the purchase.</li>
        <li>The subscription automatically renews for the same billing period unless you cancel through the store before its applicable renewal deadline.</li>
        <li>Deleting the app, deleting local data, or ceasing to use Plus does not cancel the subscription.</li>
        <li>You can manage or cancel renewal in your App Store or Google Play subscription settings.</li>
        <li>Cancellation normally stops the next renewal; access ordinarily continues through the already-paid period unless the store reports an earlier refund or revocation.</li>
        <li>Use Restore purchases with the same store account to recover an eligible active entitlement. No separate Subra AI login is required for restoration.</li>
      </ul>
      <p>Apple or Google handles billing, cancellation, refunds, payment disputes, and store purchase records under its rules and applicable law. Except where law requires otherwise, we cannot issue or promise a store refund. Mandatory consumer rights remain unaffected.</p>
    </>,
  },
  {
    id: "entitlement",
    title: "Plus access and offline verification",
    content: <>
      <p>Plus unlocks the paid capabilities identified in the app, which may include increased Space limits, local audio transcription, export tools, anonymous in-app support, and priority WhatsApp support. Available benefits may vary by platform, device capability, app version, or region and will be shown before purchase.</p>
      <p>After the store successfully confirms a purchase, renewal, or restoration, the app keeps a limited encrypted entitlement record on the device. If the store is temporarily unreachable, the app may continue Plus access through the last confirmed paid period and an additional offline grace period of up to 90 days. This grace period does not extend the store subscription, create a new paid period, or prevent the store from reporting a cancellation, expiry, refund, or revocation. A definitive inactive, refunded, or revoked result may remove Plus access immediately.</p>
      <p>When Plus ends, Plus-only capabilities may become unavailable or return to free limits. Existing user-created content remains subject to the app&apos;s available access and deletion controls; expiry does not transfer ownership of your content to us.</p>
    </>,
  },
  {
    id: "support",
    title: "Support services",
    content: <>
      <p>Anonymous in-app support uses a Firebase-generated identifier and stores support messages and replies in a cloud service. Problem reports and feature feedback may also be stored in Firebase. This support is pseudonymous rather than guaranteed to be unidentifiable. The Privacy Policy explains the information involved.</p>
      <p>Priority WhatsApp support is an optional external channel operated by WhatsApp/Meta. If you continue to WhatsApp, your use is governed by its terms and privacy policy. Support response-time descriptions are estimates, not guarantees.</p>
      <p>Do not send health records, measurements, Vault documents, private chats, photos, audio, screenshots, passwords, financial information, or other sensitive content through Firebase support, email, or WhatsApp. Support is not an emergency, medical, legal, financial, or diagnostic service.</p>
    </>,
  },
  {
    id: "ai-output",
    title: "AI output and accuracy",
    content: <>
      <p className="sa-legal-note"><strong>AI-generated responses may be incomplete, outdated, inaccurate, or inappropriate.</strong> Always review important output and verify facts using reliable sources.</p>
      <p>Subra AI is not a substitute for professional medical, legal, financial, mental-health, safety, or other specialist advice. Health Organizer helps store and summarize user-provided information; it does not diagnose conditions or recommend medication changes. Do not rely on the app for emergencies, diagnoses, treatment decisions, legal deadlines, financial transactions, or decisions where an error could cause harm.</p>
    </>,
  },
  {
    id: "use",
    title: "Responsible and prohibited use",
    content: <>
      <p>You may use Subra AI only for lawful purposes and in accordance with these Terms and applicable third-party conditions. You must not use the app to:</p>
      <ul>
        <li>violate law or another person&apos;s intellectual-property, privacy, publicity, confidentiality, or other rights;</li>
        <li>create or facilitate child sexual abuse or exploitation, non-consensual intimate content, human trafficking, harassment, hate, violence, self-harm, fraud, impersonation, deceptive practices, or other harmful or illegal activity;</li>
        <li>generate malware, credentials, instructions for unauthorized access, or content intended to compromise security;</li>
        <li>make high-impact decisions about another person in employment, housing, credit, insurance, education, healthcare, legal services, or access to essential services;</li>
        <li>perform biometric identification, unlawful surveillance, or process another person&apos;s image without any consent or legal basis that is required;</li>
        <li>interfere with, abuse, overload, scrape, or attempt unauthorized access to support services, Firebase, subscription systems, or other connected services;</li>
        <li>present AI output as verified professional advice or human-authored content where disclosure is required; or</li>
        <li>reverse engineer, export, copy, or redistribute protected components except as applicable law and the relevant licence expressly permit.</li>
      </ul>
      <p>Do not use Subra AI for emergencies or where an error or delay could cause death, personal injury, financial loss, legal harm, or damage to property. Contact qualified professionals or emergency services when appropriate.</p>
    </>,
  },
  {
    id: "content",
    title: "Your content and generated output",
    content: <>
      <p>You are responsible for prompts, files, images, audio, measurements, support messages, and other material you provide and for your use and disclosure of generated output. You represent that you have all rights, permissions, and lawful bases necessary to use that material.</p>
      <p>Subra AI does not claim ownership of your content. Subject to applicable law and third-party rights, you may use generated output at your own risk. Output may not be unique, may resemble content produced for others, may be subject to third-party rights, and may not qualify for intellectual-property protection. We do not guarantee ownership, exclusivity, or non-infringement.</p>
      <p>Local app content stays on your device unless you choose a feature that sends specified information elsewhere, such as export, sharing, Firebase support, email, WhatsApp, or a separately disclosed remote provider.</p>
    </>,
  },
  {
    id: "third-party",
    title: "Third-party technology and terms",
    content: <>
      <p>The app includes or relies on third-party technology and services, including Google LiteRT/LiteRT-LM, Gemma, Firebase, Hugging Face, Apple, Google Play, and—if you choose it—WhatsApp. Separate licences, acceptable-use rules, privacy policies, export restrictions, store rules, and service terms may apply.</p>
      <p>Your use of Gemma-powered functionality must comply with the <a href="https://ai.google.dev/gemma/terms" target="_blank" rel="noreferrer">Gemma Terms of Use</a> and <a href="https://ai.google.dev/gemma/prohibited_use_policy" target="_blank" rel="noreferrer">Gemma Prohibited Use Policy</a>. You may not export or redistribute a model unless its applicable terms permit it and you provide every required notice. Third-party marks belong to their respective owners; their inclusion does not imply endorsement.</p>
    </>,
  },
  {
    id: "updates",
    title: "Updates and availability",
    content: <>
      <p>We may add, change, suspend, or discontinue features, model versions, support channels, or device support. We do not guarantee that the app or a support service will always be available, error-free, compatible with every device, or capable of producing a response to every prompt. Material changes to paid subscription terms or benefits remain subject to applicable store rules and consumer law.</p>
    </>,
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: <>
      <p>Subra AI&apos;s app interface, branding, original code, and documentation are protected by applicable intellectual-property laws. These Terms grant you a limited, revocable, non-exclusive, non-transferable licence to use the app for its intended purpose. They do not transfer ownership of the app or third-party components.</p>
    </>,
  },
  {
    id: "disclaimers",
    title: "Disclaimers and limitation of liability",
    content: <>
      <p>To the maximum extent permitted by law, the app, models, support services, and output are provided “as is” and “as available,” without express or implied warranties of accuracy, reliability, availability, merchantability, fitness for a particular purpose, title, or non-infringement. We do not promise that the app will be uninterrupted, secure, error-free, or suitable for your intended use.</p>
      <p>To the maximum extent permitted by law, the Developer will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, loss of data, profits, opportunity, or goodwill, or harm resulting from use of or inability to use the app or reliance on its output. Nothing in these Terms limits liability or mandatory consumer rights that applicable law does not permit us to limit.</p>
    </>,
  },
  {
    id: "indemnity",
    title: "Your responsibility to us",
    content: <>
      <p>To the extent permitted by applicable law, you will be responsible for claims, losses, and reasonable costs arising from your unlawful use of Subra AI, material breach of these Terms, or infringement of another person&apos;s rights. This provision does not apply to the extent a claim results from the Developer&apos;s own unlawful conduct and does not reduce non-waivable consumer protections.</p>
    </>,
  },
  {
    id: "termination",
    title: "Termination",
    content: <>
      <p>You may stop using Subra AI at any time. Uninstalling does not cancel an active subscription; cancellation must be completed through the applicable store. We may restrict access to connected services if you materially violate these Terms, abuse support, or create security or legal risk, subject to applicable law. Store-confirmed expiry, cancellation, refund, or revocation may end Plus access as described above.</p>
      <p>Provisions that by their nature should survive termination—including payment obligations already incurred, disclaimers, liability limits, and intellectual-property provisions—will survive.</p>
    </>,
  },
  {
    id: "app-stores",
    title: "App-store terms",
    content: <>
      <p>If you obtain Subra AI through Apple&apos;s App Store, Apple&apos;s Standard Licensed Application End User License Agreement applies to the extent applicable, and these Terms supplement it. Apple is not responsible for providing maintenance or support for Subra AI except as required by law, and Apple and its subsidiaries are third-party beneficiaries of these Terms as they relate to the licensed app.</p>
      <p>Your use, purchases, subscriptions, cancellations, and refund requests must also comply with the terms of the store through which you obtained the app. If these Terms conflict with mandatory app-store terms, the mandatory terms control to the extent of the conflict.</p>
    </>,
  },
  {
    id: "law",
    title: "Governing law, changes, and general terms",
    content: <>
      <p>These Terms are governed by the laws of India. Subject to mandatory consumer-law rights and any forum that applicable law requires, courts located in Bengaluru, Karnataka, India will have jurisdiction over disputes relating to these Terms or Subra AI.</p>
      <p>We may update these Terms when the app, services, technology, or legal requirements change. Material changes will be communicated through the app or website when appropriate. Continuing to use the app after revised Terms take effect constitutes acceptance where permitted by law.</p>
      <p>If a provision is unenforceable, the remaining provisions remain effective. A failure to enforce a provision is not a waiver. These Terms, the Privacy Policy, applicable app-store terms, and incorporated third-party terms constitute the agreement governing your use of Subra AI. Mandatory consumer rights remain unaffected.</p>
    </>,
  },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Use Subra AI responsibly" title="Terms of Use" intro="These terms cover Subra AI's local-first features, connected support services, and Subra Plus subscriptions." sections={sections} />;
}
