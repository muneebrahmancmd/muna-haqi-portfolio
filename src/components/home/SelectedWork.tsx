import { LiveFrame } from "@/components/LiveFrame";
import { TransitionLink } from "@/components/chrome/TransitionLink";
import { WORK, type WorkItem } from "@/lib/work";

function CardInner({ item }: { item: WorkItem }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="relative w-full pointer-events-none select-none overflow-hidden"
        style={{ aspectRatio: "1 / 1" }}
      >
        {item.codingProject && (
          <span className="top-0 right-0 z-10 absolute bg-selection px-1 font-mono-2 text-black text-xs uppercase pointer-events-none select-none">
            Coding Project
          </span>
        )}
        <LiveFrame src={item.live} title={`Live preview of ${item.name}`} className="transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
      </div>
      <div className="flex justify-between items-center gap-3 min-w-0 text-xs lg:text-sm uppercase">
        <span className="flex-1 min-w-0 truncate">{item.name}</span>
        <div className="flex items-center gap-2 sm:gap-3 font-mono-2 tabular-nums whitespace-nowrap shrink-0">
          <span>{item.year}</span>
          <span className="hidden lg:inline-flex items-center gap-1" aria-hidden="true">
            <span>live</span>
          </span>
        </div>
      </div>
    </>
  );
}

export function SelectedWork() {
  return (
    <section id="selected-work" className="px-4 lg:px-14 py-18 lg:py-24 w-full">
      <div className="grid grid-cols-12 w-full" style={{ rowGap: "0px" }}>
        {WORK.map((item) => {
          const aria = `${item.name} - ${item.year}`;
          return (
            <article key={item.name} className={item.gridClass}>
              <TransitionLink href={item.href} className="group block space-y-3 p-2" aria-label={aria}>
                <CardInner item={item} />
              </TransitionLink>
            </article>
          );
        })}
      </div>
    </section>
  );
}
