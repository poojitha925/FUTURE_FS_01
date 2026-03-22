// src/sections/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 text-center border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
      }}
    >
      <p
        className="text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        Designed & built by{" "}
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>
          Deva Poojitha
        </span>{" "}
        · 
        <p>© {year} · All rights reserved</p>
      </p>
    </footer>
  );
}
