"use client";

import Image from "next/image";
import type { Project } from "@/content/projects";
import { isRenderableHref } from "@/lib/links";
import { chipClass } from "./StackFilter";

type ProjectRowProps = {
  project: Project;
  onFilterStack: (tag: string) => void;
  activeStack: string | null;
  imagePriority?: boolean;
};

export function ProjectRow({
  project,
  onFilterStack,
  activeStack,
  imagePriority = false,
}: ProjectRowProps) {
  const live = isRenderableHref(project.liveUrl);

  return (
    <article className="border-t border-rule py-8 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-[1.375rem] font-normal tracking-[-0.02em] text-fg md:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
          {project.year}
        </p>
      </div>
      <p className="mt-2 max-w-[40rem] text-fg">{project.oneLiner}</p>

      <div className="mt-5 max-w-[40rem] border-l-2 border-accent pl-4">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-accent">
          Outcome
        </p>
        <p className="mt-1 text-[1.0625rem] font-medium leading-snug text-fg md:text-[1.125rem]">
          {project.outcome}
        </p>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onFilterStack(tag)}
              aria-pressed={activeStack === tag}
              className={chipClass(activeStack === tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {isRenderableHref(project.repoUrl) ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
          >
            Code
          </a>
        ) : null}
        {live ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
          >
            Live demo
          </a>
        ) : null}
      </p>

      <figure className="relative mt-6 max-w-[40rem] overflow-hidden bg-bg-elev">
        <Image
          src={project.mediaUrl}
          alt={
            project.mediaUrl.includes("todo-media")
              ? `TODO_MEDIA: add a screenshot for ${project.title}`
              : `Screenshot of ${project.title}`
          }
          width={1200}
          height={480}
          sizes="(max-width: 768px) 100vw, 640px"
          className="aspect-[2.5/1] h-auto w-full object-cover"
          priority={imagePriority}
        />
        {project.mediaUrl.includes("todo-media") ? (
          <figcaption className="pointer-events-none absolute left-4 top-4 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
            TODO_MEDIA
          </figcaption>
        ) : null}
      </figure>

      <details className="group mt-5 max-w-[40rem]">
        <summary className="cursor-pointer list-none font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted transition-colors duration-150 hover:text-fg [&::-webkit-details-marker]:hidden">
          <span className="underline decoration-rule underline-offset-4 group-open:text-fg">
            Problem and approach
          </span>
        </summary>
        <div className="mt-4 space-y-4 text-[0.9875rem] text-fg">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
              Problem
            </p>
            <p className="mt-1">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted">
              Approach
            </p>
            <p className="mt-1">{project.approach}</p>
          </div>
        </div>
      </details>
    </article>
  );
}
