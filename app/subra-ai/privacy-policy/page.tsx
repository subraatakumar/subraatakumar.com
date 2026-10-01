import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Subra AI",
  description: "Learn how Subra AI handles local AI content, support messages, subscriptions, and on-device processing.",
  alternates: { canonical: "/subra-ai/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Subra AI",
    description: "Privacy details for the Subra AI local-first mobile app.",
    url: "/subra-ai/privacy-policy",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Privacy at a glance",
    content: <>
      <p className="sa-legal-note"><strong>Subra AI is designed as a local-first, on-device AI app.</strong> Your ordinary AI prompts, Vault files, images, audio, health readings, and generated responses are processed and stored on your device unless you deliberately use an export, sharing, remote-provider, or support feature.</p>
      <p>Some optional features require a network connection. In particular, anonymous in-app support, problem reports, and feature feedback use Google Firebase; WhatsApp support opens an external service; and subscriptions are processed by Apple or Google. These exceptions are described below.</p>
      <p>We do not sell your personal information or local AI content, use it for advertising, or use it to train a remote AI model.</p>
    </>,
  },
  {
    id: "local-data",
    title: "Information stored on your device",
    content: <>
      <p>Depending on the features you use, Subra AI may store chat sessions and messages, selected or captured media, Vault files and extracted content, audio transcripts, AI Memory or compacted context, Space settings, health measurements and user notes, processing metadata, downloaded models, and app preferences on your device.</p>
      <p>Local structured records are stored in app-managed databases or secure local storage, while app-owned media is stored in the app&apos;s local files. This information is not uploaded to Subra AI merely because it is stored in the app. Anyone with access to your unlocked device or an eligible device backup may be able to access some of it.</p>
    </>,
  },
  {
    id: "inference",
    title: "On-device AI processing",
    content: <>
      <p>Subra AI uses Gemma models through Google LiteRT/LiteRT-LM technology to perform supported inference on your device.</p>
      <ul>
        <li>Prompts and selected local content are provided to the locally running model.</li>
        <li>Generated responses are produced locally for on-device workflows.</li>
        <li>Local AI content is not uploaded to Firebase or a Subra AI server for model inference.</li>
        <li>Subra AI does not use your local AI content to train a remote model.</li>
      </ul>
      <p>If a separately identified remote-provider feature is offered, the app will explain that processing and require any consent that applies before sending private content off-device.</p>
    </>,
  },
  {
    id: "firebase-support",
    title: "Anonymous in-app support and Firebase",
    content: <>
      <p>If you use anonymous chat support, submit a problem report, or send feature feedback, the app creates a Firebase anonymous account and assigns it a unique identifier. No name, email address, or Subra AI password is required, but “anonymous” does not mean that no identifier or technical data exists.</p>
      <p>Depending on the support feature, we collect the anonymous user identifier, support-message text and replies, issue category, description, privacy-limited app and device diagnostics, selected favorite Space, feature feedback, and server timestamps. This information is transmitted to and stored in Google Cloud Firestore so that we can receive, investigate, and respond to the request and improve the app.</p>
      <p>Do not send health records, readings, Vault documents, private chats, photos, audio, screenshots, passwords, financial information, or other sensitive content to support. Support data is separate from your local AI and Vault content.</p>
    </>,
  },
  {
    id: "whatsapp",
    title: "WhatsApp support",
    content: <>
      <p>Subra Plus may include an optional link to contact us through WhatsApp. Continuing opens WhatsApp outside Subra AI. WhatsApp and Meta may receive information associated with your use of their service, which may include your phone number, profile information, message content, attachments, device information, and network information, under their own terms and privacy policy.</p>
      <p>Subra AI does not automatically send your local chats, Vault files, health information, photos, or other app content to WhatsApp. You choose what to send. Do not send sensitive or private app content through WhatsApp support.</p>
    </>,
  },
  {
    id: "subscriptions",
    title: "Subscriptions and purchase information",
    content: <>
      <p>Subra Plus monthly and annual subscriptions are offered through Apple&apos;s App Store or Google Play. The applicable store processes payment details and maintains the authoritative purchase record under its own privacy terms. Subra AI does not receive your complete payment-card information.</p>
      <p>The app receives and uses information needed to offer, verify, restore, and manage Plus access, such as the product identifier, platform, purchase or subscription status, transaction or verification time, and available expiry information. A limited entitlement record is stored in encrypted local app storage to support offline access. It does not contain receipts, payment-card details, Vault content, health content, or chat content.</p>
    </>,
  },
  {
    id: "connections",
    title: "Downloads and other network connections",
    content: <>
      <p>An internet connection is required to obtain the app and its updates and may be required to download ML components or model files. Model files may be downloaded from <a href="https://huggingface.co/privacy" target="_blank" rel="noreferrer">Hugging Face</a>. App stores, operating-system providers, Google, Firebase, Hugging Face, internet providers, or other distribution providers may receive ordinary connection and service information such as IP address, device or client information, request time, requested file, and download status.</p>
      <p>Those providers process information under their own terms and privacy policies. After the required model is available, supported core inference is intended to work offline.</p>
    </>,
  },
  {
    id: "permissions",
    title: "Device permissions",
    content: <>
      <p>Subra AI requests access only when needed for a feature you choose, such as camera or photo-library access for images and readings, microphone access for recording or dictation, or local file access for importing and exporting. Selected content is used for the requested feature. Denying or revoking a permission disables the related feature.</p>
      <p>Temporary capture or dictation files may be created during processing. The app is designed to remove temporary measurement photos and dictation audio after the applicable local workflow finishes; confirmed user records and app-owned imports remain until you delete them.</p>
    </>,
  },
  {
    id: "sharing",
    title: "When information is shared",
    content: <>
      <p>We disclose information only as needed to provide a feature you request, to service providers acting for us, to comply with law or valid legal process, to protect users and the service, or as part of a business transfer with appropriate notice and safeguards. Current relevant providers include Google/Firebase for cloud support features, Apple or Google for subscriptions and app distribution, Hugging Face for model downloads, and WhatsApp/Meta when you choose WhatsApp support.</p>
      <p>Exports and shares are initiated by you and are handled by the destination you choose. Review the destination and the material before sending it.</p>
    </>,
  },
  {
    id: "retention",
    title: "Retention and deletion",
    content: <>
      <p>You can delete local chats, Vault entries, measurements, downloaded models, and other supported records using the available app controls. Clearing app data or uninstalling generally removes app data held only on that device, subject to operating-system backups and files you exported elsewhere. Uninstalling does not cancel a store subscription.</p>
      <p>Firebase support messages, reports, feedback, associated anonymous identifiers, and timestamps are retained for as long as reasonably needed to provide support, investigate issues, improve the app, maintain security, resolve disputes, and meet legal obligations. To request deletion of cloud support data, email the privacy contact below. Because there is no name or email attached to an anonymous account, we may ask for the anonymous identifier or other information reasonably necessary to locate and verify the records. Some information may be retained where required by law or in secured backups for a limited period.</p>
      <p>Subscription records held by Apple or Google are controlled by the applicable store. Contact that provider or use its account tools for store-record requests.</p>
    </>,
  },
  {
    id: "security",
    title: "Security",
    content: <>
      <p>We use reasonable technical and organizational measures appropriate to the information we handle. Firebase states that Authentication and Cloud Firestore data are encrypted in transit and at rest. No device, transmission, or storage system is completely secure, so avoid sending sensitive information to support and protect your device with a passcode and current security updates.</p>
    </>,
  },
  {
    id: "children",
    title: "Children's privacy",
    content: <>
      <p>Subra AI is not directed to children under 13 or the minimum digital-consent age in their country. We do not knowingly collect personal information from children through cloud support. If you believe a child has submitted information, contact us so we can investigate and delete it where appropriate.</p>
    </>,
  },
  {
    id: "rights",
    title: "Your choices and rights",
    content: <>
      <p>You may choose not to use Firebase support or WhatsApp support. You can manage local permissions in system settings, manage subscriptions through the applicable store, delete supported local records, and request access, correction, or deletion of cloud support data by contacting us.</p>
      <p>Depending on where you live, applicable law may provide additional rights concerning access, correction, deletion, restriction, objection, portability, withdrawal of consent, or complaints to a regulator. We may need information sufficient to understand and verify a request.</p>
    </>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: <>
      <p>We may update this policy when the app, its technology, or legal requirements change. The effective and last-updated date appears at the top of this page. Material changes will be communicated through the app or website when appropriate.</p>
    </>,
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Local-first privacy" title="Privacy Policy" intro="Subra AI keeps core AI workflows on your device and clearly identifies the optional features that connect to outside services." sections={sections} />;
}
