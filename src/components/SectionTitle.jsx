// src/components/SectionTitle.jsx

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2
        className="text-3xl md:text-4xl font-bold mb-3"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
      {/* Decorative underline */}
      <div className="flex justify-center mt-4">
        <span
          className="block h-1 w-12 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <span
          className="block h-1 w-4 rounded-full mx-1"
          style={{ backgroundColor: "var(--accent-light)" }}
        />
        <span
          className="block h-1 w-2 rounded-full"
          style={{ backgroundColor: "var(--border)" }}
        />
      </div>
    </div>
  );
}
