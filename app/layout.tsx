import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varkuti Saketh Reddy | Full-Stack & AI/ML Developer",
  description:
    "Final-year CS student from Hyderabad. Building AI-powered applications, scalable web platforms, and automation tools — from RAG pipelines to deep learning systems. Published researcher. Hackathon winner.",
  keywords: [
    "Full Stack Developer",
    "AI/ML Developer",
    "React",
    "Next.js",
    "FastAPI",
    "Python",
    "RAG",
    "LangChain",
    "CrewAI",
    "Hyderabad",
  ],
  authors: [{ name: "Varkuti Saketh Reddy" }],
  creator: "Varkuti Saketh Reddy",
  openGraph: {
    title: "Varkuti Saketh Reddy | Full-Stack & AI/ML Developer",
    description:
      "Building intelligent systems that actually ship. Full-Stack & AI/ML Developer from Hyderabad.",
    url: "https://vsreddy.dev",
    siteName: "VSR Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Varkuti Saketh Reddy | Full-Stack & AI/ML Developer",
    description:
      "Building intelligent systems that actually ship. Full-Stack & AI/ML Developer from Hyderabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white min-h-screen antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
