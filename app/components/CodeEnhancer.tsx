"use client";

import { useEffect } from "react";

export default function CodeEnhancer() {
  useEffect(() => {
    const addLink = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = href;
      document.head.appendChild(l);
    };

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(s);
      });

    // Add Prism theme + line-numbers plugin CSS
    addLink("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css");
    addLink(
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css"
    );

    // Load Prism core + languages sequentially then highlight
    (async function loadPrism() {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-clike.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-jsx.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-tsx.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js");
        // load line-numbers plugin
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"
        );

        // Prism loaded — highlight
        if ((window as any).Prism && (window as any).Prism.highlightAll) {
          (window as any).Prism.highlightAll();
        }
      } catch (e) {
        // silent
      }
    })();

    // Copy button handler
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest && (target.closest as any)('[data-copy]') as HTMLElement;
      if (!btn) return;
      const wrapper = btn.closest('.code-block') as HTMLElement;
      if (!wrapper) return;
      const code = wrapper.querySelector('pre code');
      if (!code) return;
      const text = (code as HTMLElement).innerText;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(() => {
        const old = btn.innerText;
        btn.innerText = 'Copied';
        btn.classList.add('bg-green-600');
        setTimeout(() => { btn.innerText = old; btn.classList.remove('bg-green-600'); }, 1500);
      });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
