import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Code2, MapPin, Trophy } from "lucide-react";
import { ScrambleText } from "./ScrambleText";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 dark:opacity-35"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "var(--gradient-glow)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Software Engineering roles
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I'm <ScrambleText text="Priyanshu" className="text-gradient" trigger="mount" />
            <br />
            <ScrambleText text="Jaiswal" className="text-gradient" trigger="hover" />
          </h1>

          <div className="mt-4 h-9 text-xl font-semibold text-muted-foreground sm:text-2xl">
            <span key={roleIndex} className="reveal is-visible text-primary">
              {profile.roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full shadow-glow">
              <a href="#contact">
                <Mail /> Get in touch
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#projects">View my work</a>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.socials.leetcode, icon: Code2, label: "LeetCode" },
                { href: profile.socials.codolio, icon: Trophy, label: "Codolio" },
              ].map(({ href, icon: Icon, label }) => (
                <Button key={label} asChild variant="ghost" size="icon" className="rounded-full" aria-label={label}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
