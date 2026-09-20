import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceList } from "@/components/ExperienceList";
import { Section } from "@/components/Section";
import { SelectedWork } from "@/components/SelectedWork";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div id="top" className="mx-auto w-full max-w-[70rem] px-6">
        <div className="sticky top-0 z-50 bg-bg">
          <SiteNav />
        </div>
        <main id="main">
          <SiteHeader />
          <Section id="work" index="01" title="Selected Work">
            <SelectedWork />
          </Section>
          <Section id="experience" index="02" title="Experience">
            <ExperienceList />
          </Section>
          <Section id="about" index="03" title="About">
            <About />
          </Section>
          <Section id="contact" index="04" title="Contact">
            <Contact />
          </Section>
        </main>
        <footer className="py-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
            Toronto · {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </>
  );
}
