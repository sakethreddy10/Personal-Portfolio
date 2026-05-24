"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
  </svg>
);

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github?: string;
  paper?: string;
  badge?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "FinSmart AI",
    subtitle: "Personal Finance & Market Intelligence Platform",
    description:
      "Full-stack GenAI fintech platform with a RAG-powered chatbot, multi-agent stock analyzer (Financial Analyst, Research Analyst, Investment Advisor roles via CrewAI), and real-time market sentiment. Published in IJESAT.",
    tags: ["React 19", "FastAPI", "LLaMA 3.3 70B", "CrewAI", "LangChain", "AstraDB", "RAG"],
    github: "https://github.com/sakethreddy10",
    paper: "https://ijesat.com/archivesa_view.php?pid=2653",
    badge: "Research Published",
    featured: true,
  },
  {
    title: "Fake Image Detector",
    subtitle: "Deep Learning Authenticity Classifier",
    description:
      "Fine-tuned ResNet-50 model to detect AI-generated or manipulated images with high accuracy. Served via a FastAPI REST endpoint for real-time inference.",
    tags: ["Python", "ResNet-50", "PyTorch", "FastAPI", "Torchvision"],
    github: "https://github.com/sakethreddy10",
  },
  {
    title: "Prompt Architect",
    subtitle: "AI Prompt Design & Versioning Platform",
    description:
      "Web platform for designing, optimizing, and versioning production-ready AI prompts. Integrated GPT and Qwen models for real-time testing and AI-generated optimization.",
    tags: ["React", "GPT API", "Qwen API", "REST"],
    github: "https://github.com/sakethreddy10",
  },
];

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={`project-card${project.featured ? " featured" : ""}`}
    >
      {/* Header */}
      <div className="project-header">
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
            <h3 className="project-title">{project.title}</h3>
            {project.badge && <span className="project-badge">{project.badge}</span>}
          </div>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub">
              <GithubIcon size={15} />
            </a>
          )}
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="project-link-btn paper" aria-label="Research Paper">
              <BookOpen size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="project-desc">{project.description}</p>

      {/* Tags */}
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="heading-lg">Selected Works.</h2>
          <p className="subtext" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>
            Flagship builds in AI, backend, and full-stack.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
        >
          <a
            href="https://github.com/sakethreddy10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: "0.8125rem" }}
          >
            View All on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
