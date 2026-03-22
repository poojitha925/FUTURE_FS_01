// src/components/ThemeToggle.jsx

export default function ThemeToggle({ dark, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative w-12 h-6 rounded-full border transition-colors duration-300 focus:outline-none"
      style={{
        backgroundColor: dark ? "var(--accent)" : "var(--border)",
        borderColor: "var(--border)",
      }}
    >
      {/* Sliding knob */}
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-transform duration-300"
        style={{
          backgroundColor: "var(--bg-card)",
          transform: dark ? "translateX(24px)" : "translateX(0)",
        }}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
