// src/sections/About.jsx

import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="About Me" subtitle="A little bit about who I am" />

        <div
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "0 2px 20px var(--shadow)",
          }}
        >
          {/* Icon + text side by side on md+ */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Big emoji avatar */}
            <div
              className="text-5xl w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border"
              style={{
                backgroundColor: "var(--accent-light)",
                borderColor: "var(--border)",
              }}
            >
              🤖
            </div>

            <div>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                I'm a <strong style={{ color: "var(--text-primary)" }}>2nd-year B.Tech student</strong> specialising in{" "}
                <strong style={{ color: "var(--accent)" }}>Artificial Intelligence</strong> at Vignan Institute of
                Information Technology (VIIT), Visakhapatnam.
              </p>

              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                Currently, I'm exploring <strong style={{ color: "var(--text-primary)" }}>web development</strong> — building
                small projects with HTML, CSS, JavaScript, and React while learning the fundamentals of AI and programming.
              </p>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I enjoy creating simple, user-friendly applications and am always looking for opportunities to learn
                something new. I believe in taking it one step at a time. 🌱
              </p>
            </div>
          </div>

          {/* Quick facts row */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-6 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { icon: "📍", label: "Location", value: "Visakhapatnam, India" },
              { icon: "🎓", label: "Year",     value: "2nd Year, B.Tech AI" },
              { icon: "💡", label: "Focus",    value: "Web Dev & AI Basics" },
            ].map(({ icon, label, value }) => (
              <div key={label} className="text-sm">
                <p className="font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>
                  {icon} {label}
                </p>
                <p style={{ color: "var(--text-primary)" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
