"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { icon: "⚡", name: "Frontend", color: "#6366f1", skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "Chart.js", "Vite", "Bootstrap"] },
  { icon: "⚙️", name: "Backend", color: "#8b5cf6", skills: ["Python", "FastAPI", "Node.js", "Express.js", "Java", "C++", "REST APIs"] },
  { icon: "🤖", name: "AI / ML", color: "#a855f7", skills: ["PyTorch", "LangChain", "CrewAI", "HuggingFace", "RAG", "ResNet-50", "LLaMA 3.3", "ChromaDB", "Ollama", "Sentence Transformers"] },
  { icon: "🚀", name: "MLOps", color: "#06b6d4", skills: ["MLflow", "KServe", "Kubernetes", "Model Registry", "Experiment Tracking"] },
  { icon: "🗄️", name: "Databases", color: "#7c3aed", skills: ["PostgreSQL", "MongoDB", "MySQL", "DataStax AstraDB"] },
  { icon: "🛠️", name: "Tools & Cloud", color: "#6366f1", skills: ["Git", "AWS", "Docker", "Postman", "VS Code"] },
  { icon: "🧠", name: "CS Fundamentals", color: "#818cf8", skills: ["DSA", "OOP", "System Design"] },
];

const stats = [
  { val: "10+", label: "Projects Built" },
  { val: "25+", label: "Technologies" },
  { val: "1", label: "Paper Published" },
  { val: "1", label: "Hackathon Win" },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        {/* Header */}
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="heading-lg">Core Competencies.</h2>
          <p className="subtext" style={{ marginTop: "0.5rem", fontSize: "1.0625rem" }}>
            Technical arsenal deployed in production.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.name}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ "--group-color": group.color } as React.CSSProperties}
            >
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span className="skill-group-name" style={{ color: group.color }}>{group.name}</span>
              </div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
            >
              <div className="stat-value">{s.val}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
