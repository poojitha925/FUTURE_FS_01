// src/sections/Hero.jsx

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-pad"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Decorative blobs */}
      <div
        className="blob w-80 h-80 top-10 -left-20"
        style={{ backgroundColor: "var(--accent-light)" }}
      />
      <div
        className="blob w-64 h-64 bottom-10 right-0"
        style={{ backgroundColor: "var(--border)" }}
      />
      <div
        className="blob w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: "var(--accent-light)", opacity: 0.12 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto animate-fade-in">
        {/* Greeting */}
      <p
          className="text-2xl font-medium tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
         Hi,I'm
         </p> 
        

        {/* Name */}
        <h1
          className="text-5xl md:text-6xl font-bold mb-3 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "var(--text-primary)",
          }}
        >
          Deva Poojitha
        </h1>

        {/* Title */}
        <h2
          className="text-xl md:text-2xl font-medium mb-4"
          style={{ color: "var(--text-secondary)" }}
        >
         Aspiring AI Engineer
        </h2>

        {/* Tagline */}
        <p
          className="text-base italic mb-10"
          style={{
            color: "var(--text-muted)",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          "Learning, building, and growing every day"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <span>scroll</span>
            <span className="block w-px h-8 rounded" style={{ backgroundColor: "var(--border)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
