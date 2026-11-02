const WDTH = { fontVariationSettings: '"wdth" 120' } as const;

export function Hero() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr] px-4 lg:px-14 py-18 lg:py-24 w-full h-dvh lg:h-screen">
      {/* meta column block */}
      <div className="flex flex-col order-2 lg:order-1 lg:grid lg:grid-cols-12 col-span-12 font-mono text-base">
        <span className="hidden lg:block lg:col-span-3 xl:col-span-2 lg:col-start-1 xl:col-start-1 p-2 font-sans font-medium text-[4svw] sm:text-2xl lg:text-3xl leading-tight">
          <span>Design &amp;</span>
          <br />
          <span>Code</span>
        </span>
        <span className="hidden lg:block lg:col-span-3 xl:col-span-2 lg:col-start-4 xl:col-start-5 p-2 text-balance">
          <span>Thinking in motion. Building with care.</span>
        </span>
        <span className="col-span-12 lg:col-span-6 xl:col-span-4 lg:col-start-7 xl:col-start-9 mt-auto lg:mt-0 p-2">
          <span>
            I&rsquo;m Muneeb Rehman, a computer science student and creative developer in Pakistan.
            I design and build motion-driven websites, and outside of code I make AI cinematic video and images.
          </span>
        </span>
      </div>

      {/* big headline */}
      <div
        className="flex flex-col self-end order-1 lg:order-2 col-span-12 px-2 font-bold text-[7.2svw] lg:text-[6svw] 2xl:text-[5svw] xl:text-[5.6svw] uppercase leading-none"
        style={WDTH}
      >
        <span>
          <span>I design</span>
        </span>
        <span>
          <span>code &amp; visuals</span>
        </span>
        <span>
          <span>that move</span>
        </span>
      </div>
    </div>
  );
}
