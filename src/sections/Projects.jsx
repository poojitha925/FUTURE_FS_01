// src/sections/Projects.jsx

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="A few things I've built while learning"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center text-sm mt-8 italic"
          style={{ color: "var(--text-muted)" }}
        >
          More projects coming soon as I keep learning! 🚀
        </p>
      </div>
    </section>
  );
}
