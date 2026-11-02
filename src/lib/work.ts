// Selected-work catalog: Muneeb Rehman's live projects (newest first). Each card shows the real site as a live preview.
export type WorkItem = {
  name: string;
  slug: string;
  href: string;
  live: string;
  year: string;
  gridClass: string;
  codingProject?: boolean;
};

export const WORK: WorkItem[] = [
  {
    name: "Muna 226",
    slug: "muna-226",
    href: "/projects/muna-226",
    live: "https://muna-226.netlify.app",
    year: "2026",
    gridClass: "col-span-12 lg:col-span-8 lg:col-start-5",
    codingProject: true,
  },
  {
    name: "Portfolio 50",
    slug: "portfolio-50",
    href: "/projects/portfolio-50",
    live: "https://muneeb-portfolio-50.netlify.app",
    year: "2026",
    gridClass: "col-span-12 lg:col-start-1 lg:col-span-6 xl:col-span-5",
    codingProject: true,
  },
  {
    name: "Portfolio Darw",
    slug: "portfolio-darw",
    href: "/projects/portfolio-darw",
    live: "https://muneeb-rehman-portfolio-darw.vercel.app",
    year: "2026",
    gridClass: "col-span-12 lg:col-span-6 xl:col-span-5 lg:col-start-7 xl:col-start-7",
    codingProject: true,
  },
  {
    name: "Portfolio 40",
    slug: "portfolio-40",
    href: "/projects/portfolio-40",
    live: "https://muneeb-rehman-40.vercel.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-5 lg:col-span-4 xl:col-start-6 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Portfolio 30",
    slug: "portfolio-30",
    href: "/projects/portfolio-30",
    live: "https://muneeb-rehman-portfolio-30.vercel.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-9 lg:col-span-4 xl:col-start-10 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Portfolio 20",
    slug: "portfolio-20",
    href: "/projects/portfolio-20",
    live: "https://muneeb-rehman-portfolio-20.vercel.app",
    year: "2026",
    gridClass: "col-span-12 lg:col-start-1 lg:col-span-4 xl:col-start-1 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Muna Portfolio 2K26",
    slug: "muna-2k26",
    href: "/projects/muna-2k26",
    live: "https://muna-portfolio-2k26.netlify.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-5 lg:col-span-4 xl:col-start-5 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Muna Portfolio 2K26 (Vercel)",
    slug: "muna-2k26-vercel",
    href: "/projects/muna-2k26-vercel",
    live: "https://muna-portfolio-2k26.vercel.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-9 lg:col-span-4 xl:col-start-9 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Muneeb Dev",
    slug: "muneeb-dev",
    href: "/projects/muneeb-dev",
    live: "https://muneeb-dev.netlify.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-5 lg:col-span-4 xl:col-start-6 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Muneeb Dev Portfolio",
    slug: "muneeb-dev-portfolio",
    href: "/projects/muneeb-dev-portfolio",
    live: "https://muneeb-dev-portfolio.netlify.app",
    year: "2026",
    gridClass: "col-span-6 lg:col-start-9 lg:col-span-4 xl:col-start-10 xl:col-span-3",
    codingProject: true,
  },
  {
    name: "Muneeb Port Folio",
    slug: "muneeb-port-folio",
    href: "/projects/muneeb-port-folio",
    live: "https://muneeb-port-folio.netlify.app",
    year: "2026",
    gridClass: "col-span-12 lg:col-span-8 lg:col-start-3",
    codingProject: true,
  },
];
