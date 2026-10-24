"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const colors = ["#6366f1", "#a855f7", "#818cf8", "#c084fc"];
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.35 + 0.08,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + Math.round(p.a * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99,102,241,${0.07 * (1 - d / 110)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener("resize", setSize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", setSize); };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      {/* Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.55 }} />

      {/* Blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div className="blob" style={{ position: "absolute", top: "-15%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)" }} />
        <div className="blob blob-delay-2" style={{ position: "absolute", top: "20%", right: "-12%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)" }} />
        <div className="blob blob-delay-4" style={{ position: "absolute", bottom: "-10%", left: "35%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%)" }} />
      </div>

      <div className="hero-content" style={{ position: "relative", zIndex: 10 }}>
        <motion.div variants={stagger} initial="hidden" animate="show" style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="hero-badge">
              <div className="pulse-dot">
                <div className="pulse-dot-ring" />
                <div className="pulse-dot-core" />
              </div>
              Open to Opportunities
            </div>
          </motion.div>

          {/* Name + Role */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <h1 className="hero-name">Varkuti Saketh Reddy.</h1>
            <p className="hero-role">
              Full-Stack &amp;{" "}
              <span className="gradient-text" style={{ fontWeight: 500 }}>AI/ML Developer</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeUp} className="hero-tagline">
            &ldquo;Building intelligent systems that actually ship.&rdquo;
          </motion.p>

          {/* Bio */}
          <motion.p variants={fadeUp} className="hero-bio">
            AI/ML Engineer at Solix Softech (Enterprise AI division). I build RAG pipelines, MLflow-based ML lifecycle systems, and enterprise AI solutions — from document intelligence to secure ML model serving on Kubernetes.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View My Work <ArrowRight size={16} />
            </button>
            <button className="btn-outline" onClick={() => scrollTo("contact")}>
              Contact Me
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="hero-socials">
            <a href="https://github.com/sakethreddy10" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/saketh-reddy-varkuti" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:saketh1045@gmail.com" className="social-link" aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div className="scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span className="label" style={{ color: "#3f3f46", fontSize: "0.6rem" }}>SCROLL</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
