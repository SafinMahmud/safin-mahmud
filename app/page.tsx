import { Contact } from "@/components/Contact";
import { EducationList } from "@/components/EducationList";
import { ExperienceList } from "@/components/ExperienceList";
import { OpenSourceList } from "@/components/OpenSourceList";
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
          <Section id="experience" index="01" title="Experience">
            <ExperienceList />
          </Section>
          <Section id="projects" index="02" title="Projects">
            <SelectedWork />
          </Section>
          <Section id="open-source" index="03" title="Open source">
            <OpenSourceList />
          </Section>
          <Section id="education" index="04" title="Education">
            <EducationList />
          </Section>
          <Section id="contact" index="05" title="Contact">
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
