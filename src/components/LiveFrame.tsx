"use client";

import { useEffect, useRef, useState } from "react";

let order = 0; // registration order -> staggered background preload

/**
 * Non-interactive, scaled iframe of a real site.
 * Loads immediately when within ~1500px of the viewport, otherwise is preloaded
 * in the background on a short stagger (so every card is ready before you reach it).
 */
export function LiveFrame({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const [dims, setDims] = useState({ scale: 0.3, vw: 1280, h: 1280 });
  const host = src.replace("https://", "");

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => {
      const w = el.clientWidth, hh = el.clientHeight;
      if (!w) return;
      const vw = w < 360 ? 420 : 1280;
      const scale = w / vw;
      setDims({ scale, vw, h: Math.ceil(hh / scale) });
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    const go = () => setOn(true);
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && (go(), io.disconnect()), { rootMargin: "1500px" });
    io.observe(el);
    const t = window.setTimeout(go, 600 + order++ * 350);
    return () => { ro.disconnect(); io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div ref={box} className={"absolute inset-0 overflow-hidden bg-[#0a0a0a] " + className}>
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center font-mono-2 text-xs uppercase text-white/50 animate-pulse">
          {host}
        </div>
      )}
      {on && (
        <iframe
          src={src}
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onLoad={() => setReady(true)}
          style={{ position: "absolute", left: 0, top: 0, width: dims.vw, height: dims.h, border: 0, transformOrigin: "0 0", transform: `scale(${dims.scale})`, pointerEvents: "none", opacity: ready ? 1 : 0, transition: "opacity 300ms ease-out" }}
        />
      )}
    </div>
  );
}
