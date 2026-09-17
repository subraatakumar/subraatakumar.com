import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Subra AI: Background Remover",
  description:
    "Terms governing use of the paid, private, on-device Subra AI: Background Remover application.",
  alternates: { canonical: "/background-remover/terms" },
  openGraph: {
    title: "Terms of Use | Subra AI: Background Remover",
    description: "Terms for using the offline Subra AI Background Remover app.",
    url: "/background-remover/terms",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance and eligibility",
    content: (
      <>
        <p>
          These Terms of Use form an agreement between you and{" "}
          <strong>Subrata Kumar Das</strong>, the developer and operator of
          Subra AI: Background Remover (the “Developer,” “we,” “us,” or “our”).
          By downloading, installing, or using the app, you agree to these Terms
          and the Background Remover Privacy Policy. If you do not agree, do not
          use the app.
        </p>
        <p>
          You must be legally capable of accepting these Terms. The app is not
          directed to children under 13 or the minimum digital-consent age where
          they live. A minor may use the app only with permission and
          supervision from a parent or legal guardian where required by law.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "What the app provides",
    content: (
      <>
        <p>
          Subra AI: Background Remover is a focused photo-editing utility that
          can separate a foreground subject, create a transparent cutout, place
          it over another image, refine a mask and edges, adjust placement, and
          export a finished image. Processing is designed to run locally on a
          compatible device.
        </p>
        <p>
          Results depend on the source image, lighting, subject, contrast,
          device, operating system, and app version. Hair, fur, transparent
          objects, shadows, motion blur, and visually similar foreground and
          background areas may require manual refinement or may not produce the
          result you expect.
        </p>
      </>
    ),
  },
  {
    id: "purchase",
    title: "Purchase, access, and refunds",
    content: (
      <>
        <p className="br-legal-note">
          <strong>
            The standalone app is offered as a one-time paid download, not a
            recurring subscription.
          </strong>{" "}
          The current version does not impose developer-created daily processing
          limits or add a watermark to exported results.
        </p>
        <p>
          Your purchase, download, family sharing, restoration, taxes, payment,
          and refund eligibility are administered by the app store through which
          you obtained the app and are subject to that store&apos;s rules. We do
          not guarantee that a particular store, device family, region, or
          future operating-system version will support purchase restoration or
          continued compatibility.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Your photos and exported results",
    content: (
      <>
        <p>
          You retain your rights in photos and other material you provide. You
          are responsible for your source images, replacement backgrounds,
          exported results, and how you use or share them. You represent that
          you have all ownership, licences, permissions, consents, and lawful
          bases required to process the material in the app.
        </p>
        <p>
          Do not use another person&apos;s image in a way that violates privacy,
          publicity, intellectual-property, confidentiality, consent, or other
          rights. The app does not grant you rights in third-party photos,
          trademarks, products, artwork, locations, or people merely because it
          can edit an image containing them.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "Responsible and prohibited use",
    content: (
      <>
        <p>
          You may use the app only for lawful purposes. You must not use it to:
        </p>
        <ul>
          <li>
            violate law or another person&apos;s intellectual-property, privacy,
            publicity, confidentiality, contractual, or other rights;
          </li>
          <li>
            create or distribute deceptive impersonations, fraud, harassment,
            non-consensual intimate imagery, child sexual abuse material, or
            other harmful or illegal content;
          </li>
          <li>
            falsely present an edited image as authentic when doing so would be
            unlawful, misleading, or likely to cause harm;
          </li>
          <li>
            bypass platform security, interfere with the app, or reverse
            engineer protected components except where applicable law expressly
            permits it; or
          </li>
          <li>
            copy, redistribute, sublicense, or commercially resell the app
            itself or its protected components.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party technology and services",
    content: (
      <>
        <p>
          The app includes or relies on third-party technology and services,
          including Google ML Kit, React Native, operating-system photo and
          camera services, and platform app stores. Separate licences, usage
          rules, privacy policies, and notices may apply to those components.
        </p>
        <p>
          Google, Apple, Android, Google Play, and related marks belong to their
          respective owners. Their inclusion does not imply sponsorship or
          endorsement of the app.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    title: "Updates and availability",
    content: (
      <p>
        We may add, change, suspend, or discontinue features or device support.
        We do not guarantee that the app will always be available, error-free,
        compatible with every device, or maintained indefinitely. A store or
        operating-system provider may also affect availability, installation,
        updates, permissions, and compatibility.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Intellectual property",
    content: (
      <p>
        The app&apos;s interface, branding, original code, and documentation are
        protected by applicable intellectual-property laws. These Terms grant
        you a limited, revocable, non-exclusive, non-transferable licence to use
        the app for its intended purpose. They do not transfer ownership of the
        app or any third-party component.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers and limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, the app and its output are
          provided “as is” and “as available,” without express or implied
          warranties of accuracy, quality, availability, merchantability,
          fitness for a particular purpose, title, or non-infringement. Always
          inspect an image before publishing, printing, listing, or relying on
          it for professional use.
        </p>
        <p>
          To the maximum extent permitted by law, the Developer will not be
          liable for indirect, incidental, special, consequential, exemplary, or
          punitive damages; loss of data, profits, opportunity, or goodwill; or
          claims resulting from use of or inability to use the app or exported
          images. Nothing in these Terms excludes liability or mandatory
          consumer rights that applicable law does not permit us to exclude.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Your responsibility to us",
    content: (
      <p>
        To the extent permitted by applicable law, you will be responsible for
        claims, losses, and reasonable costs arising from your unlawful use of
        the app, material breach of these Terms, or infringement of another
        person&apos;s rights. This does not apply to the extent a claim results
        from the Developer&apos;s unlawful conduct and does not reduce
        non-waivable consumer protections.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        You may stop using the app at any time by uninstalling it. We may
        restrict access to future versions or services if you materially violate
        these Terms, subject to applicable law. Provisions that by their nature
        should survive—including ownership, disclaimers, liability limits, and
        governing-law provisions—will survive.
      </p>
    ),
  },
  {
    id: "stores",
    title: "App-store terms",
    content: (
      <>
        <p>
          If you obtain the app through Apple&apos;s App Store, Apple&apos;s
          Standard Licensed Application End User License Agreement applies to
          the extent applicable, and these Terms supplement it. Apple is not
          responsible for providing maintenance or support except as required by
          law, and Apple and its subsidiaries are third-party beneficiaries of
          these Terms as they relate to the licensed app.
        </p>
        <p>
          Your use must also comply with the usage rules and other terms of the
          store through which you obtained the app. If these Terms conflict with
          mandatory app-store terms, the mandatory terms control to the extent
          of that conflict.
        </p>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law, changes, and general terms",
    content: (
      <>
        <p>
          These Terms are governed by the laws of India. Subject to mandatory
          consumer-law rights and any forum applicable law requires, courts
          located in Bengaluru, Karnataka, India will have jurisdiction over
          disputes relating to these Terms or the app.
        </p>
        <p>
          We may update these Terms when the app, technology, business model, or
          legal requirements change. Material changes will be communicated
          through the app, store listing, or website when appropriate.
        </p>
        <p>
          If a provision is unenforceable, the remaining provisions remain
          effective. Failure to enforce a provision is not a waiver. These
          Terms, the Privacy Policy, applicable app-store terms, and
          incorporated third-party terms form the agreement governing your use
          of the app. Mandatory consumer rights remain unaffected.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Professional editing, responsible use"
      title="Terms of Use"
      intro="These terms explain the standalone app, your one-time purchase, your responsibility for the images you edit, and the limits of automatic background removal."
      sections={sections}
    />
  );
}
