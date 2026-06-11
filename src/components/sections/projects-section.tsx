"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DATA } from "@/data/resume";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { useMemo, useState } from "react";

const FILTER_OPTIONS = ["All", "Websites & AI", "Apps & Games", "AR/VR", "Miscellaneous"];

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Helper function to parse project dates for sorting (newest first)
const parseDate = (dateStr: string) => {
  // Handle "Present" in dates
  if (dateStr.includes("Present")) {
    return new Date();
  }

  // Extract year from various date formats
  const parts = dateStr.split(" - ");
  const startPart = parts[0].trim();

  // Try to extract month and year
  const monthMatch = startPart.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/);
  if (monthMatch) {
    const month = MONTH_NAMES.indexOf(monthMatch[1]);
    const year = parseInt(monthMatch[2]);
    return new Date(year, month);
  }

  // Just year (e.g., "2024")
  const yearMatch = startPart.match(/(\d{4})/);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1]), 0);
  }

  return new Date(0); // Default to epoch if can't parse
};

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Websites & AI");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(
    () =>
      DATA.projects
        .filter(project => {
          if (selectedFilter !== "All" && project.type !== selectedFilter) return false;
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return (
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query))
          );
        })
        .sort((a, b) => parseDate(b.dates).getTime() - parseDate(a.dates).getTime()),
    [selectedFilter, searchQuery]
  );

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex min-h-0 flex-col gap-y-3">
              <h2 className="text-xl font-bold">Projects</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Specialized in building AI agents, multimodal LLM systems, and RAG applications. Also a full-stack engineer, and worked on Android apps, and game development throughout my journey professionally.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Search Bar */}
        <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
          <div className="max-w-[600px] mx-auto">
            <Input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </BlurFade>

        {/* Filter Buttons */}
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="flex flex-wrap justify-center gap-2 max-w-[800px] mx-auto">
            {FILTER_OPTIONS.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="text-xs"
              >
                {filter}
              </Button>
            ))}
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {filteredProjects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project?.links || []}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
