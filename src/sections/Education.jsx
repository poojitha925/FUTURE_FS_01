// src/sections/Education.jsx

import SectionTitle from "../components/SectionTitle";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-2xl mx-auto">
        <SectionTitle title="Education" subtitle="My academic journey so far" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <div key={edu.id} className="flex items-start gap-5 relative">
                {/* Circle dot on timeline */}
                <div
                  className="z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 border-2"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: index === 0 ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {edu.icon}
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-2xl p-5 border card-hover"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border)",
                    boxShadow: "0 2px 14px var(--shadow)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3
                      className="font-semibold text-base"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto"
                      style={{
                        backgroundColor: "var(--accent-light)",
                        color: "var(--accent)",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
