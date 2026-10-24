"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Engineer · Trainee Software Engineer",
    company: "Solix Softech Pvt. Ltd.",
    period: "Jul 2026 – Present",
    type: "Enterprise AI",
    bullets: [
      "Building a multi-format RAG system handling PDFs, images, Excel and Word documents using Python, FastAPI, ChromaDB, Ollama, and sentence-transformers for enterprise document intelligence.",
      "Implementing document parsing pipeline with PyMuPDF, python-docx, pandas, and pytesseract (OCR) to normalize 100+ mixed documents across two data buckets with metadata-based ChromaDB filtering.",
      "Developing REST API endpoints (/ingest, /query, /retrieve, /health) tested via Postman, with local LLM inference through Ollama for fully offline enterprise AI querying.",
      "Currently building an internal MLflow-based ML lifecycle management platform from scratch — covering experiment tracking, model registry, and model serving pipeline for enterprise ML workflows.",
      "Researched and implemented security mechanisms for prediction endpoints when deploying ML models on KServe within a Kubernetes cluster, including authentication, authorization, and secure inference routing.",
    ],
    tags: ["Python", "FastAPI", "RAG", "ChromaDB", "Ollama", "MLflow", "KServe", "Kubernetes"],
  },
  {
    role: "Full Stack Developer Intern",
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
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
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

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="exp-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: "easeOut" }}
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
          ))}
        </div>
      </div>
    </section>
  );
}
