// src/sections/Contact.jsx

import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [sent, setSent]     = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real project, you'd send this to a backend / EmailJS etc.
    // For now we just show a thank-you message
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: "✉️",
      label: "Email",
      value: "devapoojitha2@gmail.com",
      href: "mailto:devapoojitha2@gmail.com",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/poojitha925",
      href: "https://github.com/poojitha925",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/devapoojitha",
      href: "https://www.linkedin.com/in/poojithadeva",
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact Me" subtitle="Let's connect — I'd love to hear from you" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — contact info */}
          <div className="flex flex-col gap-4">
            {contacts.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl px-5 py-4 border card-hover"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                  boxShadow: "0 2px 12px var(--shadow)",
                  textDecoration: "none",
                }}
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right — simple form */}
          <div
            className="rounded-2xl p-6 border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "0 2px 20px var(--shadow)",
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-6">
                <span className="text-4xl mb-3">🎉</span>
                <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                  Thank you!
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Your message has been received. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline mt-5 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { name: "name",    type: "text",  placeholder: "Your Name",    label: "Name" },
                  { name: "email",   type: "email", placeholder: "Your Email",   label: "Email" },
                ].map(({ name, type, placeholder, label }) => (
                  <div key={name}>
                    <label
                      className="block text-xs font-medium mb-1 uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      className="w-full rounded-xl px-4 py-2.5 text-sm border outline-none focus:ring-2 transition"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-xs font-medium mb-1 uppercase tracking-wide"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    rows={4}
                    className="w-full rounded-xl px-4 py-2.5 text-sm border outline-none resize-none transition"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full text-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
