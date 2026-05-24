"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const exp = {
  role: "Software Developer Intern",
  company: "Taashee Linux Services",
  period: "Oct 2024 – Jan 2025",
  type: "Internship",
  bullets: [
    "Built a custom CMS using the Alfresco API for enterprise file, user, and group management",
    "Implemented JWT auth and RBAC using Alfresco's People & Groups API",
    "Developed full User Management and Group Management modules",
    "Stack: React (frontend), Express.js (middleware), PostgreSQL (backend)",
  ],
  tags: ["React", "Express.js", "PostgreSQL", "JWT", "RBAC", "Alfresco API"],
};

export default function Experience() {
  return (
    <section className="section bg-alt" id="experience">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="heading-lg">Experience.</h2>
          <p className="subtext" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>
            Professional roles and internships.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="exp-timeline">
          <div className="exp-line" />

          {/* Experience item */}
          <motion.div
            className="exp-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="exp-dot" />
            <div className="exp-card" style={{ width: "100%" }}>
              <div className="exp-card-header">
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                  <div style={{
                    width: "2.75rem", height: "2.75rem", borderRadius: "12px", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)",
                  }}>
                    <Briefcase size={18} color="#a5b4fc" />
                  </div>
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-badge">{exp.type}</div>
                  </div>
                </div>
                <div className="exp-period">
                  <Calendar size={13} />
                  {exp.period}
                </div>
              </div>

              <ul className="exp-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="exp-bullet">
                    <div className="exp-bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </motion.div>

          {/* Open to new roles */}
          <motion.div
            className="exp-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="exp-dot" style={{ borderColor: "rgba(255,255,255,0.15)", boxShadow: "none" }} />
            <div className="exp-open" style={{ width: "100%" }}>
              🚀 Currently seeking{" "}
              <span style={{ color: "#a5b4fc", fontWeight: 600 }}>
                internships, full-time roles, or freelance projects
              </span>{" "}
              in AI/ML and Full-Stack development.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
