import type { StaticImageData } from "next/image";
import perk from "@/public/perk.png";
import gittingOverIt from "@/public/gitting-over-it.png";
import indigo from "@/public/indigo.jpg";
import easyResume from "@/public/easyResume.jpg";
import moviehut from "@/public/moviehut.jpg";
import mlAlgoVisualiser from "@/public/mlAlgoVisualiser.jpg";

export const contact = {
  email: "hello.ketuman@gmail.com",
  github: "https://github.com/k2maan",
  linkedin: "https://www.linkedin.com/in/k2maan/",
  x: "https://x.com/k2maandotdev",
};

export type WorkStory = {
  figure: string;
  /** The value before the change, shown struck through next to the figure */
  from?: string;
  figureLabel: string;
  title: string;
  body: string;
  stack: string[];
};

export const workStories: WorkStory[] = [
  {
    figure: "500M",
    figureLabel: "loyalty records checked on every run",
    title: "Guardrails for Gap’s loyalty pipeline",
    body: "One bad run in Gap Inc.’s loyalty pipeline could push broken customer data downstream, and our deployment playbook had no step for it. I added SQL checks with a threshold and an alert to every run, closing off a risk behind recurring outages.",
    stack: ["SQL", "BigQuery", "Alerting"],
  },
  {
    figure: "12 min",
    from: "30",
    figureLabel: "for each live site check",
    title: "EventProof",
    body: "Before Black Friday, every client storefront has to send the right tracking events. EventProof drafts a checklist from the integration code, walks the site on desktop and mobile, and checks every event payload in code.",
    stack: ["TypeScript", "Playwright", "Claude Code skills"],
  },
  {
    figure: "5%",
    from: "30%",
    figureLabel: "of catalog and eligibility runs halting",
    title: "Keeping catalog pipelines running",
    body: "I own production support for the pipelines that pull catalog and eligibility data from very different client systems. Root-cause fixes, monitoring and automatic safeguards cut halted runs from about 30% to about 5%.",
    stack: ["Python", "SQL", "GCP Cloud Functions"],
  },
  {
    figure: "90%",
    figureLabel: "of the FDE team uses it",
    title: "Chrono DevTool",
    body: "An internal VS Code extension with a guided job builder and one-click testing. Setting up a client pipeline now takes half as long, and almost the whole team switched to it.",
    stack: ["TypeScript", "VS Code extension API"],
  },
];

export const bluecoreUrl = "https://www.bluecore.com/";

export type Role = {
  period: string;
  role: string;
  org: string;
  /** The company's site; the name links to it when set */
  url?: string;
  current?: boolean;
  note: string;
};

export const experience: Role[] = [
  {
    period: "2024 to now",
    role: "Forward Deployed Engineer",
    org: "Bluecore",
    url: bluecoreUrl,
    current: true,
    note: "Technical lead contact for enterprise retail clients in the US, EU, UK, Japan and Canada. Interim squad lead for the FDE pod.",
  },
  {
    period: "2022 to 2024",
    role: "Software Engineer, Frontend",
    org: "HotWax Commerce",
    url: "https://www.hotwax.co/",
    note: "Features in React, Vue and Ionic for an order management system, and a single sign-on service shared across its apps. Ran Hacktoberfest for students in 2022 and 2023.",
  },
  {
    period: "Alongside",
    role: "Instructor",
    org: "FDE Academy",
    url: "https://fde.academy/",
    note: "Two workshops on what forward deployed engineers actually do, for 110 attendees, and a seat on the expert Q&A panel.",
  },
];

export type ProductLink = { label: string; href: string };

export type Product = {
  slug: string;
  name: string;
  kind: string;
  year: number;
  live: boolean;
  image: StaticImageData;
  imageAlt: string;
  summary: string;
  links: ProductLink[];
};

export const products: Product[] = [
  {
    slug: "git-ing-over-it",
    name: "Git-ing Over It",
    kind: "Browser game",
    year: 2026,
    live: true,
    image: gittingOverIt,
    imageAlt: "Git-ing Over It title screen, with a coworker’s chat message about a lost commit and a terminal running git reflog",
    summary:
      "A game that teaches git judgment, not git commands. A coworker messages you about something that went wrong, you fix it in a real terminal, and the game checks the repo you end up with, so any valid fix passes.",
    links: [{ label: "Play it", href: "https://git-ing-over-it.vercel.app/" }],
  },
  {
    slug: "perk",
    name: "Perk",
    kind: "Chrome extension",
    year: 2026,
    live: true,
    image: perk,
    imageAlt: "Perk’s break screen: an animated figure demonstrating a stretch next to step-by-step instructions",
    summary:
      "A focus timer that makes you actually take the break. Each break is one short animated stretch and a glass of water, then you’re back to work. It waits while you’re on a call and never pulls you out of another app.",
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/eoobkecnlbiomngaaebjjlmhhckonhho" },
      { label: "Website", href: "https://perkedup.vercel.app" },
    ],
  },
  {
    slug: "indigo",
    name: "Indigo",
    kind: "VS Code theme",
    year: 2020,
    live: true,
    image: indigo,
    imageAlt: "VS Code with the Indigo dark theme, showing a CSS file",
    summary: "An indigo and magenta dark theme for VS Code, published on the Marketplace. More than 2,500 people have installed it.",
    links: [
      { label: "Marketplace", href: "https://marketplace.visualstudio.com/items?itemName=k2maan.indigo-dark-theme" },
      { label: "Source", href: "https://github.com/k2maan/IndigoVSCodeDarkTheme" },
    ],
  },
  {
    slug: "easyresume",
    name: "EasyResume",
    kind: "Web app",
    year: 2023,
    live: true,
    image: easyResume,
    imageAlt: "EasyResume editor with colour, font and link options above a blank resume template",
    summary: "A resume builder for clean, ATS-friendly resumes, with options for font, colour and links, and a print-ready export.",
    links: [
      { label: "Try it", href: "https://easyresume.vercel.app/" },
      { label: "Source", href: "https://github.com/k2maan/easyresume" },
    ],
  },
  {
    slug: "moviehut",
    name: "MovieHut",
    kind: "REST API",
    year: 2021,
    live: false,
    image: moviehut,
    imageAlt: "MovieHut logo: the name over a strip of film",
    summary: "An open-source Node.js API that suggests a random movie, with several GET endpoints.",
    links: [{ label: "Source", href: "https://github.com/k2maan/moviehut-random-movie-api" }],
  },
  {
    slug: "ml-algorithm-visualiser",
    name: "ML Algorithm Visualiser",
    kind: "Mobile app",
    year: 2020,
    live: false,
    image: mlAlgoVisualiser,
    imageAlt: "Two app screens: a list of algorithms and a step-by-step decision tree simulation",
    summary: "A Flutter app that animates how basic machine learning algorithms work, step by step, with Rive animations.",
    links: [{ label: "Source", href: "https://github.com/k2maan/MLAlgoVisualiserAppFlutter" }],
  },
];
