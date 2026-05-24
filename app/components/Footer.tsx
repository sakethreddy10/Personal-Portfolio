"use client";

import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">VSR.</div>
          <div className="footer-copy">© {new Date().getFullYear()} Varkuti Saketh Reddy. All rights reserved.</div>
        </div>

        <div className="footer-credit">Built with Next.js · Tailwind CSS · Framer Motion</div>

        <div className="footer-links">
          <a href="https://github.com/sakethreddy10" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/saketh-reddy-varkuti" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:saketh1045@gmail.com" className="social-link" aria-label="Email">
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
