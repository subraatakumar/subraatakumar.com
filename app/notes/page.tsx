import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";

type NoteFile = {
  name: string;
  href: string;
};

type NoteFolder = {
  name: string;
  path: string;
  files: NoteFile[];
  folders: NoteFolder[];
};

const notesDirectory = path.join(process.cwd(), "public/notes");

export const metadata: Metadata = {
  title: "Notes | Subrata Kumar Das",
  description: "A dynamically generated index of technical notes and chapters.",
  alternates: { canonical: "/notes" },
};

function prettify(value: string) {
  return value
    .replace(/\.html$/, "")
    .replace(/^\d+[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function readFolder(relativePath = ""): NoteFolder {
  const absolutePath = path.join(notesDirectory, relativePath);
  const entries = fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  return {
    name: relativePath ? prettify(path.basename(relativePath)) : "Notes",
    path: relativePath,
    files: entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
      .map((entry) => ({
        name: prettify(entry.name),
        href: `/notes/${relativePath ? `${relativePath}/` : ""}${entry.name}`,
      })),
    folders: entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => readFolder(relativePath ? `${relativePath}/${entry.name}` : entry.name)),
  };
}

function FolderSection({ folder, level = 0 }: { folder: NoteFolder; level?: number }) {
  return (
    <section className="notes-folder" style={{ marginLeft: level ? `${level * 18}px` : undefined }}>
      {level > 0 && <h2>{folder.name}</h2>}
      {folder.files.length > 0 && (
        <div className="notes-files">
          {folder.files.map((file) => (
            <a key={file.href} href={file.href} className="notes-file">
              <span>{file.name}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
      {folder.folders.map((child) => (
        <FolderSection key={child.path} folder={child} level={level + 1} />
      ))}
    </section>
  );
}

export default function NotesPage() {
  const notes = readFolder();

  return (
    <main className="notes-page">
      <header className="notes-header">
        <p className="notes-eyebrow">Hand Crafted</p>
        <h1>Notes</h1>
        <p className="notes-intro">By Subrata Kumar Das.</p>
      </header>
      <div className="notes-content">
        <FolderSection folder={notes} />
      </div>
      <style>{`
        .notes-page { min-height: 100vh; padding: 56px 24px 80px; background: #fafaf7; }
        .notes-header, .notes-content { max-width: 820px; margin: 0 auto; }
        .notes-back { color: #2563eb; font-size: 1.1rem; text-decoration: none; }
        .notes-eyebrow { margin-top: 48px; color: #2563eb; font-size: 1.15rem; font-weight: 700; }
        .notes-header h1 { margin-top: 4px; font-family: 'Caveat Brush', cursive; font-size: clamp(3.5rem, 10vw, 6rem); line-height: 1; }
        .notes-intro { margin-top: 14px; font-size: 1.35rem; }
        .notes-content { margin-top: 52px; }
        .notes-folder > h2 { margin: 36px 0 14px; font-size: 1.8rem; }
        .notes-files { display: grid; gap: 12px; }
        .notes-file { display: flex; justify-content: space-between; gap: 20px; padding: 18px 20px; border: 2px solid #1a1a2e; border-radius: 12px; color: #1a1a2e; font-size: 1.3rem; text-decoration: none; background: #fff; transition: transform .15s ease, box-shadow .15s ease; }
        .notes-file:hover { transform: translate(-3px, -3px); box-shadow: 4px 4px 0 #1a1a2e; }
        @media (max-width: 600px) { .notes-page { padding-top: 32px; } .notes-eyebrow { margin-top: 36px; } }
      `}</style>
    </main>
  );
}
