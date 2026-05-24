"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const cards = [
  {
    Icon: Mail,
    label: "Send Email",
    sub: "saketh1045@gmail.com",
    href: "mailto:saketh1045@gmail.com",
    primary: true,
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    sub: "sakethreddy10",
    href: "https://github.com/sakethreddy10",
    primary: false,
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    sub: "saketh-reddy-varkuti",
    href: "https://linkedin.com/in/saketh-reddy-varkuti",
    primary: false,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="wrap">
        <motion.div
          className="contact-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
        >
          {/* Pre-label */}
          <div className="contact-pre">
            <div className="pulse-dot">
              <div className="pulse-dot-ring" style={{ background: "#22c55e" }} />
              <div className="pulse-dot-core" style={{ background: "#22c55e" }} />
            </div>
            <span className="label">Available for new opportunities</span>
          </div>

          {/* Title */}
          <h2 className="contact-title">
            Let&apos;s Build<br />
            <span className="gradient-text">Something.</span>
          </h2>

          {/* Sub */}
          <p className="contact-sub">
            Open to internships, full-time roles, and freelance projects.
            Let&apos;s turn ideas into intelligent systems.
          </p>

          {/* Cards */}
          <div className="contact-cards">
            {cards.map(({ Icon, label, sub, href, primary }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`contact-card ${primary ? "primary" : "secondary"}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon">
                  <Icon />
                </div>
                <div>
                  <div className="contact-card-name">{label}</div>
                  <div className="contact-card-sub">{sub}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Status */}
          <div className="status-dot">
            <div className="pulse-dot">
              <div className="pulse-dot-ring" style={{ background: "#22c55e" }} />
              <div className="pulse-dot-core" style={{ background: "#22c55e" }} />
            </div>
            Usually responds within 24 hours
          </div>
        </motion.div>
      </div>
    </section>
  );
}
