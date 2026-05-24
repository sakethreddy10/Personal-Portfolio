"use client";

const items = [
  "FinSmart AI", "IJESAT Published", "Reliance Scholar",
  "Hackathon Winner", "Full-Stack Dev", "AI/ML Builder",
  "RAG Pipelines", "Deep Learning", "FastAPI", "LangChain",
  "React 19", "Open Source",
];

const doubled = [...items, ...items];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-fade-l" />
      <div className="marquee-fade-r" />
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            <span>{item}</span>
            <span className="marquee-dot">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
