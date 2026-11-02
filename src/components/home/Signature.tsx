"use client";

import { useEffect, useRef } from "react";

const PATHS: { d: string; w: number }[] = [
  { d: "M72.99 32.57 63.26 87.67H49.84L55.73 54.62L37.52 87.67H26.69L20.09 54.47L14.29 87.67H0.86L10.6 32.57H26.45L35.24 70.71L57.22 32.57Z", w: 3 },
  { d: "M122.29 43.87 114.59 87.67H101.17L102.19 81.7Q99.6 84.61 95.87 86.37Q92.15 88.14 87.91 88.14Q81.31 88.14 77.55 84.41Q73.78 80.68 73.78 74.01Q73.78 71.5 74.17 69.46L78.72 43.87H92.07L87.91 67.65Q87.67 68.91 87.67 70.09Q87.67 73.38 89.52 75.15Q91.36 76.91 94.66 76.91Q98.43 76.91 101.05 74.68Q103.68 72.44 104.55 68.28L108.86 43.87Z", w: 3 },
  { d: "M171.26 57.37Q171.26 59.57 170.79 62.08L166.24 87.67H152.9L157.14 63.89Q157.37 62.55 157.37 61.53Q157.37 58.23 155.53 56.43Q153.68 54.62 150.39 54.62Q146.46 54.62 143.79 57.06Q141.12 59.49 140.34 63.89V63.49L136.1 87.67H122.68L130.37 43.87H143.79L142.77 49.76Q145.36 46.85 149.09 45.13Q152.82 43.4 157.14 43.4Q163.73 43.4 167.5 47.09Q171.26 50.78 171.26 57.37Z", w: 3 },
  { d: "M219.77 60.35Q219.77 62.94 219.38 64.98Q219.06 66.79 218.44 68.83H188.06Q187.98 69.3 187.98 70.32Q187.98 73.77 189.87 75.58Q191.75 77.39 194.89 77.39Q199.91 77.39 202.58 73.15H216.87Q214.04 79.82 207.68 84.06Q201.32 88.3 193.4 88.3Q184.92 88.3 179.86 83.59Q174.8 78.88 174.8 70.79Q174.8 68.36 175.27 65.77Q176.44 58.94 180.13 53.84Q183.82 48.74 189.32 45.99Q194.81 43.24 201.32 43.24Q209.8 43.24 214.79 47.83Q219.77 52.43 219.77 60.35ZM206.35 60.51Q206.35 57.37 204.39 55.68Q202.42 54 199.21 54Q195.75 54 193.12 56.08Q190.49 58.16 189.32 62H206.19Q206.35 60.9 206.35 60.51Z", w: 3 },
  { d: "M266.55 60.35Q266.55 62.94 266.16 64.98Q265.84 66.79 265.21 68.83H234.84Q234.76 69.3 234.76 70.32Q234.76 73.77 236.64 75.58Q238.53 77.39 241.67 77.39Q246.69 77.39 249.36 73.15H263.64Q260.82 79.82 254.46 84.06Q248.1 88.3 240.18 88.3Q231.7 88.3 226.64 83.59Q221.57 78.88 221.57 70.79Q221.57 68.36 222.05 65.77Q223.22 58.94 226.91 53.84Q230.6 48.74 236.1 45.99Q241.59 43.24 248.1 43.24Q256.58 43.24 261.56 47.83Q266.55 52.43 266.55 60.35ZM253.13 60.51Q253.13 57.37 251.17 55.68Q249.2 54 245.98 54Q242.53 54 239.9 56.08Q237.27 58.16 236.1 62H252.97Q253.13 60.9 253.13 60.51Z", w: 3 },
  { d: "M302.34 43.24Q309.4 43.24 313.76 47.83Q318.12 52.43 318.12 60.35Q318.12 62.86 317.65 65.69Q316.47 72.44 313.01 77.58Q309.56 82.72 304.69 85.51Q299.83 88.3 294.41 88.3Q289.78 88.3 286.64 86.45Q283.5 84.61 282.09 81.55L280.99 87.67H267.57L277.85 29.59H291.27L287.58 50.07Q290.1 47.01 293.94 45.13Q297.79 43.24 302.34 43.24ZM304.3 63.26Q304.3 59.33 302.07 57.14Q299.83 54.94 296.37 54.94Q292.37 54.94 289.08 57.84Q285.78 60.75 284.84 65.77Q284.6 67.18 284.6 68.36Q284.6 72.21 286.8 74.4Q289 76.6 292.45 76.6Q296.45 76.6 299.79 73.66Q303.12 70.71 304.07 65.69Q304.3 64.36 304.3 63.26Z", w: 3 },
];

const STROKE = "#C0FE04";

export function Signature() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = Array.from(svg.querySelectorAll<SVGPathElement>(".svg-sign__path"));
    let delay = 0.5; // initial --path-delay (production)
    paths.forEach((p) => {
      const len = p.getTotalLength();
      const dur = len / 720; // seconds (production)
      p.style.setProperty("--path-len", `${len}`);
      p.style.strokeDasharray = `${len}`;
      p.style.strokeDashoffset = `${len}`;
      p.style.setProperty("--path-delay", `${delay}s`);
      p.style.setProperty("--path-dur", `${dur}s`);
      delay += dur + 0.03; // sequential, +30ms gap
    });
    // next frame → start drawing
    const id = requestAnimationFrame(() => svg.classList.add("is-drawing"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative col-span-12 sm:col-span-4 lg:col-span-3 p-2">
      <style>{`
        .svg-sign__path { opacity: 0; fill: none; stroke-linecap: butt; }
        .svg-sign.is-drawing .svg-sign__path {
          animation:
            svg-sign-show 0s linear var(--path-delay) forwards,
            svg-sign-draw var(--path-dur) cubic-bezier(0.65, 0, 0.35, 1) var(--path-delay) forwards;
        }
        @keyframes svg-sign-draw { to { stroke-dashoffset: 0; } }
        @keyframes svg-sign-show { to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .svg-sign.is-drawing .svg-sign__path { animation: none; stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
      <svg
        ref={svgRef}
        viewBox="0 0 320 154"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-sign -top-1/32 -left-1/12 absolute w-3/4 pointer-events-none"
        aria-hidden="true"
      >
        {PATHS.map((p, i) => (
          <path
            key={i}
            className="svg-sign__path"
            d={p.d}
            stroke={STROKE}
            strokeWidth={p.w}
            fill="none"
          />
        ))}
      </svg>
      <div className="aspect-square" />
    </div>
  );
}
