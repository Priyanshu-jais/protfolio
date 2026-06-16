import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Mascot } from "@/components/portfolio/Mascot";
import { FloatingParticles } from "@/components/portfolio/FloatingParticles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Jaiswal — Software Developer & Backend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Priyanshu Jaiswal — Software Developer building scalable Go backends, real-time systems and Kotlin Multiplatform apps. Internships at AppsForBharat, NoblesseTech and ISRO.",
      },
      { property: "og:title", content: "Priyanshu Jaiswal — Software Developer" },
      {
        property: "og:description",
        content:
          "Backend & full-stack engineer. Go, Kotlin Multiplatform, Node.js, Kafka. 1500+ DSA problems solved.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <FloatingParticles />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Mascot />
      </div>
    </ThemeProvider>
  );
}
