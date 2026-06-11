import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function PublicationsSection() {
  return (
    <section id="publications">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
          <h2 className="text-xl font-bold">Publications</h2>
        </BlurFade>
        {DATA.publications.map((pub, id) => (
          <BlurFade key={pub.title} delay={BLUR_FADE_DELAY * 9 + id * 0.05}>
            <ResumeCard
              key={pub.title}
              href={pub.href}
              logoUrl={""}
              altText={pub.title}
              title={pub.title}
              subtitle={pub.publisher}
              period={pub.dates}
              description={pub.description}
              expandable={false}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
