import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { HackathonsSection } from "@/components/sections/hackathons-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorkSection } from "@/components/sections/work-section";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `${DATA.name} — GenAI Engineer` },
  description:
    "GenAI & Full-Stack Engineer specializing in multi-agent systems, RAG pipelines, and agentic AI workflows. Explore Ishaan Gupta's projects, experience, certifications, and writing.",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ProjectsSection />
      <HackathonsSection />
      <EducationSection />
      <CertificationsSection />
      <PublicationsSection />
      <ContactSection />
    </main>
  );
}
