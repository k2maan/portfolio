import blogDown from "@/public/blogDown.jpg";
import codePenClone from "@/public/codePenClone.jpg";
import easyResume from "@/public/easyResume.jpg";
import eduguardian from "@/public/eduguardian.jpg";
import indigo from "@/public/indigo.jpg";
import mlAlgoVisualiser from "@/public/mlAlgoVisualiser.jpg";
import moviehut from "@/public/moviehut.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [
  {
    title: "EasyResume: Resume Maker",
    description:
      "Swiftly craft clean ATS-friendly resumes with ease. Options for font, colour, links, etc.",
    tags: ["React", "ReactToPrint", "ReactSelect"],
    imageUrl: easyResume,
    githubUrl: 'https://github.com/k2maan/easyresume',
    liveUrl: 'https://easyresume.vercel.app/'
  },
  {
    title: "BlogDown",
    description:
      "Blog app with pretty UI having all CRUD operations on blogs with Markdown support.",
    tags: ["React", "Redux", "ReactMdEdtior", "Tailwind"],
    imageUrl: blogDown,
    githubUrl: 'https://github.com/k2maan/blogdown',
    liveUrl: 'https://blogdown-app.vercel.app/'
  },
  {
    title: "EduGuardian",
    description:
      "EduGuardian is an all-in-one content aggregator that hosts resources and roadmaps for devs.",
    tags: ["React", "MaterialUI"],
    imageUrl: eduguardian,
    githubUrl: 'https://github.com/k2maan/eduguardian',
    liveUrl: 'https://eduguardian.vercel.app/'
  },
  {
    title: "MovieHut: Random Movie API",
    description:
      "NodeJS REST API to fetch random movies. Has multiple GET endpoints. More on GitHub!",
    tags: ["Nodejs", "MongoDB", "Express"],
    imageUrl: moviehut,
    githubUrl: 'https://github.com/k2maan/moviehut-random-movie-api',
    liveUrl: ''
  },
  {
    title: "Indigo: VS Code Dark Theme",
    description:
      "VS Code theme deployed on the marketplace. Has 2,500+ downloads and couting!",
    tags: ["VS Code"],
    imageUrl: indigo,
    githubUrl: 'https://github.com/k2maan/IndigoVSCodeDarkTheme',
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=k2maan.indigo-dark-theme'
  },
  {
    title: "Code Pen Clone",
    description:
      "React.js Code Pen like app with live coding support for HTML-CSS-JSS.",
    tags: ["React", "CodeMirror"],
    imageUrl: codePenClone,
    githubUrl: 'https://k2maan.github.io/CodePenCloneReactJS/',
    liveUrl: 'https://k2maan.github.io/CodePenCloneReactJS/'
  },
  {
    title: "ML Algorithm Visualiser",
    description:
      "Machine learning algorithm visualiser mobile app, has simulations and animations of basic ML algorithms.",
    tags: ["Flutter", "Rive Animator"],
    imageUrl: mlAlgoVisualiser,
    githubUrl: 'https://github.com/k2maan/MLAlgoVisualiserAppFlutter',
    liveUrl: ''
  },
] as const;
