import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK } from "@/lib/work";
import { cx, HOVER_BOX } from "@/lib/cx";


/**
 * Inline MDX link (the original <MdxA> client component). External links open in
 * a new tab; the styling matches the captured SSR markup exactly.
 */
function MdxA({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = /^https?:\/\//.test(href);
  const className =
    "text-[color:var(--label-1)] underline underline-offset-4 " +
    "decoration-[color:var(--label-3)] transition-colors " +
    "lg:hover:decoration-[color:var(--label-2)]";
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** A footer link styled like the captured chrome links (dotted hover box). */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className = cx(
    HOVER_BOX,
    "inline-block -mx-1 px-1 py-0.5 text-l2 lg:hover:text-l1 text-sm transition-colors",
  );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <span>{children}</span>
    </a>
  );
}

/** The article metadata footer (the original <ArticleFooter> component). */
function ArticleFooter({ updated, host }: { updated: string; host: string }) {
  return (
    <footer
      data-mdx-footer="true"
      className="bg-[rgba(var(--label-d),0.03)] mt-16 p-4 lg:p-6 rounded-xl"
    >
      <div className="mb-5 font-sans font-semibold text-l1 text-base">
        Metadata
      </div>
      <dl className="gap-x-6 gap-y-6 grid grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <dt className="font-sans font-semibold text-l1 text-sm">
            Last Updated
          </dt>
          <dd>
            <span className="font-mono tabular-nums text-l2 text-sm">
              <span>{updated}</span>
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="font-sans font-semibold text-l1 text-sm">
            Type
          </dt>
          <dd>
            <span className="font-mono tabular-nums text-l2 text-sm">
              <span>Live site</span>
            </span>
          </dd>
        </div>
        <div className="flex flex-col gap-1.5">
          <dt className="font-sans font-semibold text-l1 text-sm">
            Hosting
          </dt>
          <dd>
            <span className="font-mono tabular-nums text-l2 text-sm">
              <span>{host}</span>
            </span>
          </dd>
        </div>
      </dl>
      <div className="my-6 border-line border-t border-dashed"></div>
      <div className="gap-x-6 gap-y-4 grid grid-cols-2 lg:grid-cols-3">
        <div className="hidden lg:block font-sans font-semibold text-l1 text-sm">
          Links
        </div>
        <div className="flex flex-col items-start gap-1 font-mono">
          <Link
            href="/"
            className={cx(
              HOVER_BOX,
              "inline-block -mx-1 px-1 py-0.5 text-l2 lg:hover:text-l1 text-sm transition-colors",
            )}
          >
            <span>Home</span>
          </Link>
          <button
            type="button"
            className={cx(
              HOVER_BOX,
              "inline-block -mx-1 px-1 py-0.5 text-l2 lg:hover:text-l1 text-sm transition-colors text-left cursor-pointer",
            )}
          >
            <span>Work</span>
          </button>
          <button
            type="button"
            className={cx(
              HOVER_BOX,
              "inline-block -mx-1 px-1 py-0.5 text-l2 lg:hover:text-l1 text-sm transition-colors text-left cursor-pointer",
            )}
          >
            <span>Contact</span>
          </button>
        </div>
        <div className="flex flex-col items-start gap-1 font-mono">
          <FooterLink href="https://x.com/Muneeb455365487">Twitter/X</FooterLink>
          <FooterLink href="https://github.com/muneebrahmancmd">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/muneeb-soomro-887925333/">LinkedIn</FooterLink>
          <FooterLink href="https://www.instagram.com/he__muneeb/">Instagram</FooterLink>
        </div>
      </div>
    </footer>
  );
}


export function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = WORK.find((x) => x.slug === slug);
  return { title: w ? `${w.name} - MUNEEB©2026` : "Project" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = WORK.find((x) => x.slug === slug);
  if (!w) notFound();
  const host = w.live.replace("https://", "");
  const updated = "November 2, 2026";
  return (
    <article
      data-mdx-article="true"
      className="mx-auto px-6 py-18 lg:py-24 w-full max-w-[880px] text-l1"
    >
      <div className="space-y-4 [&_p]:text-sm [&_p]:text-l1 [&_p]:leading-relaxed lg:[&_p]:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-0 [&_ul]:space-y-0 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-0 [&_ol]:space-y-0 [&_li]:text-l1 [&_li]:leading-relaxed [&_li::marker]:text-[var(--selection-bg)] [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--selection-bg)] [&_blockquote]:pl-4 [&_blockquote]:text-l2 [&_blockquote_p]:text-l2 [&_blockquote_li]:text-l2 [&_blockquote_strong]:text-l2 [&_blockquote_em]:text-l2 [&_blockquote_a]:!text-l2 [&_blockquote_a]:underline [&_blockquote_a]:underline-offset-4 [&_blockquote_a]:decoration-[color:var(--label-3)] [&_blockquote_a]:transition-colors [&_blockquote_a]:lg:hover:!text-l1 [&_blockquote_a]:lg:hover:decoration-[color:var(--label-2)] [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-[rgba(var(--label-d),0.08)] [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.9em] [&_:not(pre)>code]:text-l1 [&_hr]:my-8 [&_hr]:h-px [&_hr]:w-full [&_hr]:border-0 [&_hr]:bg-line [&_u]:no-underline [&_u]:pb-[6px] [&_u]:[box-decoration-break:clone] [&_u]:[-webkit-box-decoration-break:clone] [&_u]:[background-image:radial-gradient(circle_at_center,var(--color-l2)_0.65px,transparent_0.7px)] [&_u]:[background-size:5px_3px] [&_u]:[background-repeat:repeat-x] [&_u]:[background-position:left_bottom]">
        <header className="pt-[10vh]">
          <h1
            className="font-bold text-3xl! text-l1 lg:text-5xl! leading-tight tracking-tight"
            style={{ fontVariationSettings: '"wdth" 120' }}
          >
            {w.name}
          </h1>
          <p className="mt-1 tabular-nums text-l2! text-sm! lg:text-base! leading-relaxed">
            {updated}
          </p>
          <div className="mt-2 border-line border-b"></div>
          <p className="pt-3 text-l2! text-sm! lg:text-base! leading-relaxed">
            {w.year}
          </p>
        </header>
        <div className="[&_p+p]:mt-3 [&_p]:mb-0 text-l2 [&_p]:text-l2! text-sm lg:text-base leading-relaxed">
          <p>
            {w.name} is one of my live web projects, designed and coded by me, Muneeb Rehman. It is deployed and running right now at{" "}
            <MdxA href={w.live}>{host}</MdxA>.
          </p>
          <p>
            I build sites like this with a focus on motion, layout and polish: hand-written front-end code, smooth scrolling, and visuals that feel considered. Open the live site below to see it in action.
          </p>
        </div>
        {"\n"}
        <iframe
          width="840"
          height="600"
          src={w.live}
          title={`${w.name} live preview`}
          allowFullScreen
        />
      </div>
      <ArticleFooter updated={updated} host={host} />
    </article>
  );
}
