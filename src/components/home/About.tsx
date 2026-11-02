import { Signature } from "./Signature";

const FONT_TIKTOK = { fontFamily: '"tiktok", sans-serif' } as const;

const LINK =
  "inline text-l1 underline underline-offset-[0.08em] decoration-solid decoration-(--label-3) " +
  "transition-[text-decoration-color] duration-150 ease-out lg:[@media(hover:hover)]:hover:decoration-(--label-1)";

export function About() {
  return (
    <div className="grid grid-cols-12 px-4 lg:px-14 py-18 lg:py-24 lg:pb-28 w-full">
      <Signature />
      <div className="flex flex-col justify-start items-start gap-6 col-span-12 sm:col-span-7 lg:col-span-8 sm:col-start-6 lg:col-start-5 text-base lg:text-xl leading-none">
        <p
          className="p-2 w-full text-l1 md:text-[4.2svw] text-xl leading-[1.3] md:leading-none select-text"
          style={FONT_TIKTOK}
        >
          <span>
            I explore how motion, code and AI visuals come together, building the next generation of websites with craft and taste.
          </span>
        </p>
        <p
          className="p-2 w-full text-l2 md:text-[4.2svw] text-xl leading-[1.3] md:leading-none select-text"
          style={FONT_TIKTOK}
        >
          <span>
            I&rsquo;m building{" "}
            <a target="_blank" rel="noopener noreferrer" className={LINK} href="https://muna-226.netlify.app">
              muna-226
            </a>
            , and previously shipped{" "}
            <a target="_blank" rel="noopener noreferrer" className={LINK} href="https://muneeb-portfolio-50.netlify.app">
              portfolio 50
            </a>
            ,{" "}
            <a target="_blank" rel="noopener noreferrer" className={LINK} href="https://muneeb-rehman-40.vercel.app">
              portfolio 40
            </a>
            , and more.
          </span>
        </p>
      </div>
    </div>
  );
}
