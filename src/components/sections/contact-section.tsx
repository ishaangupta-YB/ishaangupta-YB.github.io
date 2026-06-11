import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Shoot me a dm on{" "}
              <Link
                href={DATA.contact.social.X.url}
                className="text-blue-500 hover:underline"
              >
                Twitter{" "}
              </Link>
              or on{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                Linkedin
              </Link>
              .
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
