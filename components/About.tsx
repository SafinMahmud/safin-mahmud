import { aboutParagraphs } from "@/content/about";

export function About() {
  return (
    <div className="max-w-[40rem] space-y-4">
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
