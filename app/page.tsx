import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* Scrolling Marquee Strip */}
      <Marquee />

      {/* 2. Experience Section */}
      <Experience />

      {/* 3. Projects Section */}
      <Projects />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Achievements + Education Section */}
      <Achievements />

      {/* 6. Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
