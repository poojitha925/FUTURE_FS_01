// src/sections/Skills.jsx

import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/portfolioData";

// Map skills to emojis for visual interest
const skillIcons = {
  HTML:       "🌐",
  CSS:        "🎨",
  JavaScript: "⚡",
  Python:     "🐍",
  C:          "⚙️",
  Java:       "☕",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Technologies I'm currently learning and practising"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="card-hover flex items-center gap-3 rounded-xl px-5 py-4 border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "0 2px 12px var(--shadow)",
              }}
            >
              <span className="text-2xl">{skillIcons[skill]}</span>
              <span
                className="font-medium text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {skill}
              </span>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mt-8 italic"
          style={{ color: "var(--text-muted)" }}
        >
          Always learning more every day ✨
        </p>
      </div>
    </section>
  );
}
