// src/data/portfolioData.js

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "My personal portfolio built to showcase my skills and projects. Designed with a warm, minimal aesthetic using React and Tailwind CSS.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/poojitha925",
    live: null,
  },
  {
    id: 2,
    title: "Calculator App",
    description:
      "A simple, clean calculator app built with vanilla HTML, CSS, and JavaScript. Supports basic arithmetic operations with a responsive layout.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/poojitha925",
    live: null,
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C",
  "Java",
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Artificial Intelligence",
    institution: "Vignan Institute of Information Technology",
    period: "2024 – Present",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    period: "2022 – 2024",
    icon: "📚",
  },
  {
    id: 3,
    degree: "School",
    institution: "Sri Chaitanya Techno School",
    period: "2020 – 2022",
    icon: "🏫",
  },
];

export const navLinks = [
  { label: "About",     href: "#about"     },
  { label: "Projects",  href: "#projects"  },
  { label: "Skills",    href: "#skills"    },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact"   },
];
