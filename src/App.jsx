// src/App.jsx

import { useState, useEffect } from "react";
import Navbar    from "./components/Navbar";
import Hero      from "./sections/Hero";
import About     from "./sections/About";
import Projects  from "./sections/Projects";
import Skills    from "./sections/Skills";
import Education from "./sections/Education";
import Contact   from "./sections/Contact";
import Footer    from "./sections/Footer";

export default function App() {
  // Read saved preference or default to light
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true; 
  });

  // Apply / remove "dark" class on <html> whenever dark changes
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggle = () => setDark((prev) => !prev);

  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
