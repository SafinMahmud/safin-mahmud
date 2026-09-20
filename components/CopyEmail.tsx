"use client";

import { useState } from "react";

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email address copied");
    } catch {
      setStatus("Copy failed — select the address instead");
    }
    window.setTimeout(() => setStatus(""), 2000);
  }

  return (
    <div>
      <button
        type="button"
        onClick={copy}
        className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg underline decoration-rule underline-offset-4 transition-colors duration-150 hover:decoration-fg"
      >
        Copy to clipboard
      </button>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      {status && !status.startsWith("Copy failed") ? (
        <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-fg-muted" aria-hidden="true">
          Copied
        </p>
      ) : null}
    </div>
  );
}
