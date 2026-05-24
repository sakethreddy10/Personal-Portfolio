"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Achievements", href: "achievements" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.href);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(link.href);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className={`navbar${scrolled ? " scrolled" : ""}`}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <button className="navbar-logo gradient-text" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            VSR.
          </button>

          {/* Desktop links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  className={`navbar-link${active === link.href ? " active" : ""}`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div className="navbar-sep" />
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar-resume">
              <FileText size={15} />
              Resume
            </a>
            <button className="navbar-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 500,
                  color: "#a1a1aa",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "-0.02em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#a1a1aa")}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="btn-outline"
              style={{ marginTop: "1rem" }}
            >
              <FileText size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
