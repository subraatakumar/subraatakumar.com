import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Subra AI: Background Remover",
  description:
    "Learn how Subra AI: Background Remover handles selected photos, editing drafts, permissions, and on-device image processing.",
  alternates: { canonical: "/background-remover/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Subra AI: Background Remover",
    description:
      "Privacy details for the private, offline Background Remover app.",
    url: "/background-remover/privacy-policy",
    type: "website",
  },
};

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Privacy at a glance",
    content: (
      <>
        <p className="br-legal-note">
          <strong>
            Subra AI: Background Remover processes your editing images on your
            device.
          </strong>{" "}
          Selected photos and generated cutouts are not uploaded to or stored by
          a Subra AI server for background processing.
        </p>
        <p>
          The app does not require an account, sell your photos or editing data,
          use them for advertising, or use them to train a remote model. The
          current app does not include developer-operated analytics, advertising
          SDKs, or cloud image processing.
        </p>
      </>
    ),
  },
  {
    id: "photos",
    title: "Photos and information you provide",
    content: (
      <>
        <p>
          You may take a photo with the camera or choose an original image and
          an optional replacement background from your photo library. The app
          uses those images only to provide the editing workflow you request.
        </p>
        <p>
          The app does not ask for your name, email address, phone number, or a
          user profile to use its core features. A selected image may itself
          contain personal information, including a person&apos;s appearance or
          surroundings. Choose only images you have the right and permission to
          process.
        </p>
      </>
    ),
  },
  {
    id: "processing",
    title: "On-device image processing",
    content: (
      <>
        <p>
          Background separation and compositing run locally using Google ML Kit
          selfie-segmentation technology and app-provided image-processing code.
          The app creates a mask, transparent foreground, preview, and final
          composition on your device.
        </p>
        <ul>
          <li>Source and replacement images are read locally.</li>
          <li>Segmentation and edge adjustments run locally.</li>
          <li>Manual mask edits and subject placement are applied locally.</li>
          <li>
            Finished files are sent to your system photo library only when you
            choose Export &amp; Save.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "Local drafts, storage, and deletion",
    content: (
      <>
        <p>
          To restore an unfinished edit, the app copies selected images and
          generated working files into its private, app-owned storage. Draft
          metadata—including adjustment values, placement, and mask edits—is
          stored in a local SQLite database. These files and records are not a
          cloud backup and are not available to the developer.
        </p>
        <p>
          Starting a replacement draft may remove the previous active draft.
          Choosing <strong>Discard draft</strong> removes the active app-owned
          draft and derived files. Uninstalling the app or clearing its data
          removes app-owned local data subject to operating-system behavior.
          Images you explicitly exported to the photo library remain there until
          you delete them using your device&apos;s photo tools.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Camera and photo-library permissions",
    content: (
      <>
        <p>
          The app requests access only when the corresponding action needs it:
        </p>
        <ul>
          <li>Camera access lets you take an original photo.</li>
          <li>
            Photo-library access lets you choose original and background images.
          </li>
          <li>
            Photo-library add access lets you save the finished image to Photos.
          </li>
        </ul>
        <p>
          You can deny or revoke permissions in system settings. The related
          selection, camera, or export function will then be unavailable. The
          exact permission interface varies by platform and operating-system
          version.
        </p>
      </>
    ),
  },
  {
    id: "connections",
    title: "Network connections and third parties",
    content: (
      <>
        <p>
          Internet access may be used by the app store and operating system to
          download, install, update, verify, or restore the app. Those providers
          may process ordinary connection, purchase, device, and diagnostics
          information under their own terms and privacy policies. The developer
          does not receive your personal editing photos from those processes.
        </p>
        <p>
          The app includes Google ML Kit components. The editing workflow is
          designed to perform segmentation locally and does not send each
          selected photo to a Google or Subra AI image-processing server.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <p>
        On-device processing reduces network exposure, but no device or software
        is completely secure. Protect your device with a passcode and current
        security updates. Anyone with access to your unlocked device may be able
        to view selected images, active drafts, or exported results.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children&apos;s privacy",
    content: (
      <p>
        The app is not directed to children under 13 or the minimum
        digital-consent age where they live. The developer does not knowingly
        collect children&apos;s personal information through an account or cloud
        photo-processing service.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your choices and privacy rights",
    content: (
      <>
        <p>
          Because the developer does not maintain an account or server-side
          image library for this app, we generally cannot retrieve, correct, or
          delete your editing photos from a server. You control local drafts and
          exported images through the app and your device.
        </p>
        <p>
          Depending on where you live, applicable law may provide additional
          privacy rights. Contact us below with a privacy question or request
          concerning information controlled by the developer.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy when the app, technology, or legal
        requirements change. The updated date will appear on this page. Material
        changes will be communicated through the app, store listing, or website
        when appropriate.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Private photo editing"
      title="Privacy Policy"
      intro="Your source photos, cutouts, masks, and background compositions are designed to stay on the device in front of you."
      sections={sections}
    />
  );
}
