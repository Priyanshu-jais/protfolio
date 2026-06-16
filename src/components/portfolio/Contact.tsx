import { Mail, Phone, Github, Linkedin, Code2, Send, Trophy } from "lucide-react";
import { Section, Reveal } from "./Section";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Say hello" title="Let's Build Something">
      <Reveal>
        <div className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 text-center shadow-glow sm:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ backgroundImage: "var(--gradient-glow)" }}
          />
          <div className="relative">
            <p className="mx-auto max-w-xl text-muted-foreground">
              I'm open to software engineering opportunities, collaborations and interesting backend challenges.
              Drop a message — I'll get back to you soon.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full shadow-glow">
                <a href={`mailto:${profile.email}`}>
                  <Send /> {profile.email}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={`tel:${profile.phone}`}>
                  <Phone /> {profile.phone}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { href: profile.socials.github, icon: Github, label: "GitHub" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: profile.socials.leetcode, icon: Code2, label: "LeetCode" },
                { href: profile.socials.codolio, icon: Trophy, label: "Codolio" },
                { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
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
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
        <span className="font-display font-semibold text-foreground">
          Priyanshu Jaiswal<span className="text-primary">.</span>
        </span>
        <span>© {new Date().getFullYear()} · Designed & built with care.</span>
      </div>
    </footer>
  );
}
