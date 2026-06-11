"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CodeIcon, NotebookIcon } from "lucide-react";
import Link from "next/link";

export function TopHeader() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
      <div className="pointer-events-auto flex items-center gap-1">
        {/* <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "flex items-center gap-2"
          )}
        >
          <NotebookIcon className="size-5 sm:hidden" />
          <span className="hidden sm:inline">blogs</span>
          <span className="sr-only sm:hidden">Blog</span>
        </Link> */}
        <Link
          href="/#projects"
          className={cn(
            buttonVariants({ variant: "ghost", size: "default" }),
            "flex items-center gap-2"
          )}
        >
          <CodeIcon className="size-5 sm:hidden" />
          <span className="hidden sm:inline">projects</span>
          <span className="sr-only sm:hidden">Projects</span>
        </Link>
      </div> 
    </div>
  );
}
