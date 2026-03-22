// src/components/ProjectCard.jsx

export default function ProjectCard({ project }) {
  const { title, description, techStack, github, live } = project;

  return (
    <div
      className="card-hover rounded-2xl p-6 border"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        boxShadow: "0 2px 16px var(--shadow)",
      }}
    >
      {/* Title */}
      <h3
        className="text-xl font-semibold mb-2"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        {description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline text-sm"
        >
          GitHub
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
