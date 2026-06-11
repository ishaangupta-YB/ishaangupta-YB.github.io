"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

export function AboutSection() {
  const [isAboutExpanded, setIsAboutExpanded] = useState<boolean>(false);

  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="text-sm text-muted-foreground">
          <Markdown className={`prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert ${isAboutExpanded ? "" : "line-clamp-2"}`}>
            {DATA.summary}
          </Markdown>
          <button
            type="button"
            onClick={() => setIsAboutExpanded(!isAboutExpanded)}
            className="mt-1 text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            {isAboutExpanded ? "Show less" : "Read more"}
            <ChevronRightIcon
              className={`size-3 transition-transform ${isAboutExpanded ? "rotate-90" : "rotate-0"}`}
            />
          </button>
        </div>
      </BlurFade>
    </section>
  );
}
