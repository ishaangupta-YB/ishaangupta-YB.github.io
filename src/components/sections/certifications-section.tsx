import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function CertificationsSection() {
  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
          <h2 className="text-xl font-bold">Certifications</h2>
        </BlurFade>
        {DATA.certifications.map((cert, id) => (
          <BlurFade key={cert.name} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
            <ResumeCard
              key={cert.name}
              href={cert.href}
              logoUrl={""}
              altText={cert.name}
              title={cert.name}
              subtitle={cert.issuer}
              period={cert.dates}
              description={cert.description}
              expandable={false}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
