import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contacts.css";

function Contacts() {
  const credits = [
    { role: "Directed by", name: "Shreyas Ghatole" },
    { role: "Created by", name: "Claude" },
    { role: "Brainstorming by", name: "Chad Gpt" },
    { role: "Finishing by", name: "Gemini" },
    { role: "Content by", name: "Shreyas Ghatole" },
  ];

  const links = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/sg_visuals.3d/",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shreyas-ghatole-a234b4229/",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:shreyasghatole4@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm19.4 2H2.6l9.4 7.05L21.4 6zM3 8.24V18h18V8.24l-9.4 7.04L3 8.24z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="contacts-page">
      <Navbar />

      <main className="contacts-wrapper">
        <div className="credits-frame">
          <span className="frame-screw top-left" />
          <span className="frame-screw top-right" />
          <span className="frame-screw bottom-left" />
          <span className="frame-screw bottom-right" />

          <span className="credits-status-dot" />

          <div className="credits-screen">
            <div className="credits-track">
              {[...credits, ...credits, ...credits, ...credits].map((c, i) => (
                <div key={i} className="credits-row">
                  <span className="credits-role">{c.role}</span>
                  <span className="credits-name">{c.name}</span>
                </div>
              ))}
            </div>
            <div className="credits-fade-top" />
            <div className="credits-fade-bottom" />
          </div>
        </div>

        <div className="contact-links-row">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
            >
              <span className="contact-link-icon">{link.icon}</span>
              <span className="contact-link-label">{link.label}</span>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contacts;