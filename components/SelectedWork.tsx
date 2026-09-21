"use client";

import { useSyncExternalStore } from "react";
import { projects } from "@/content/projects";
import { ProjectRow } from "./ProjectRow";
import { StackFilter } from "./StackFilter";

const tags = Array.from(
  new Set(projects.flatMap((project) => project.stack)),
).sort((a, b) => a.localeCompare(b));

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  window.addEventListener("stackfilter", onStoreChange);
  return () => {
    window.removeEventListener("popstate", onStoreChange);
    window.removeEventListener("stackfilter", onStoreChange);
  };
}

function getStackSnapshot(): string | null {
  return new URLSearchParams(window.location.search).get("stack");
}

function getServerStackSnapshot(): string | null {
  return null;
}

function writeStackParam(tag: string | null) {
  const params = new URLSearchParams(window.location.search);
  if (!tag) {
    params.delete("stack");
  } else {
    params.set("stack", tag);
  }
  const query = params.toString();
  const next = query
    ? `${window.location.pathname}?${query}`
    : window.location.pathname;
  window.history.replaceState(window.history.state, "", next);
  window.dispatchEvent(new Event("stackfilter"));
}

export function SelectedWork() {
  const active = useSyncExternalStore(
    subscribe,
    getStackSnapshot,
    getServerStackSnapshot,
  );

  const visible = active
    ? projects.filter((project) => project.stack.includes(active))
    : projects;

  return (
    <div>
      <StackFilter tags={tags} active={active} onChange={writeStackParam} />
      {visible.length === 0 ? (
        <p className="text-fg-muted">
          No projects tagged {active}.{" "}
          <button
            type="button"
            onClick={() => writeStackParam(null)}
            className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4"
          >
            Clear filter
          </button>
        </p>
      ) : (
        <div>
          {visible.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              onFilterStack={(tag) =>
                writeStackParam(active === tag ? null : tag)
              }
              activeStack={active}
              imagePriority={index === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
