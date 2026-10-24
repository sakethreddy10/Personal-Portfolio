"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const achievements = [
  {
    emoji: "🏅",
    title: "University Rank 3",
    period: "2022 – 2026",
    desc: "Achieved 3rd rank in Computer Science & Engineering with an 8.9/10 GPA.",
  },
  {
    emoji: "🏆",
    title: "Reliance Undergraduate Scholar",
    period: "2022 – 2026",
    desc: "Awarded for academic excellence by the Reliance Foundation.",
  },
  {
    emoji: "🥉",
    title: "Smart MECS Hackathon — 3rd Place",
    period: "2024 | out of 70 teams",
    desc: "Built a Job Employment & Skills Learning App using MERN stack.",
  },
  {
    emoji: "📄",
    title: "Research Published in IJESAT",
    period: "Vol. 26, No. 4-1 (2026), Pages 367–375",
    desc: "Peer-reviewed paper on FinSmartAI: Intelligent Financial Guidance Simplified.",
    link: "https://ijesat.com/archivesa_view.php?pid=2653",
  },
  {
    emoji: "✅",
    title: "Industry Ready Full-Stack Certification",
    period: "NXTWAVE (2022 – 2026)",
    desc: "Completed comprehensive full-stack development certification program.",
  },
  {
    emoji: "✅",
    title: "React.js & Introduction to Databases",
    period: "NXTWAVE",
    desc: "Certified in React.js development and database fundamentals.",
  },
  {
    emoji: "⚛️",
    title: "Quantum Computing For Everyone",
    period: "Fractal Analytics / Coursera (2026)",
    desc: "Foundational quantum computing concepts and algorithms.",
  },
  {
    emoji: "🧠",
    title: "Introduction to Deep Learning",
    period: "NxtWave",
    desc: "Neural network architectures and deep learning fundamentals.",
  },
];

function GpaBar() {
  const [width, setWidth] = useState("0%");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setWidth("89%"); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="gpa-bar-wrap">
      <div className="gpa-bar-label">
        <span className="label" style={{ fontSize: "0.65rem" }}>Academic Performance</span>
        <span style={{ fontSize: "0.75rem", color: "#a5b4fc", fontWeight: 600 }}>8.9/10</span>
      </div>
      <div className="gpa-bar-bg">
        <div className="gpa-bar-fill" style={{ width }} />
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="section bg-alt" id="achievements">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="heading-lg">Achievements.</h2>
          <p className="subtext" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>
            Academic and competitive recognition.
          </p>
        </motion.div>

        <div className="ach-layout">
          {/* Achievement list */}
          <div className="ach-list">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                className="ach-item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="ach-emoji">{a.emoji}</div>
                <div className="ach-body">
                  <div className="ach-title">
                    {a.title}
                    {a.link && (
                      <a href={a.link} target="_blank" rel="noopener noreferrer" className="ach-link-icon">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  <div className="ach-period">{a.period}</div>
                  <div className="ach-desc">{a.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education card */}
          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="edu-header">
              <div className="edu-icon">
                <GraduationCap size={18} color="#a5b4fc" />
              </div>
              <div className="edu-label">Education</div>
            </div>

            <div className="edu-degree">B.Tech, Computer Science Engineering</div>
            <div className="edu-inst">Matrusri Engineering College</div>

            <div className="edu-meta">
              <div className="edu-row">
                <span className="edu-key">Period</span>
                <span className="edu-val">2022 – 2026</span>
              </div>
              <div className="edu-row">
                <span className="edu-key">GPA</span>
                <span className="edu-gpa">8.9 / 10</span>
              </div>
              <div className="edu-row">
                <span className="edu-key">Rank</span>
                <span className="edu-val" style={{ color: "#a5b4fc", fontWeight: 600 }}>University Rank 3</span>
              </div>
              <div className="edu-row">
                <span className="edu-key">Location</span>
                <span className="edu-val">Hyderabad, India</span>
              </div>
            </div>

            <GpaBar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
