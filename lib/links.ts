/** Render a href only when it is a real URL — never TODO placeholders or empty strings. */
export function isRenderableHref(
  value: string | null | undefined,
): value is string {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("TODO")) return false;
  return true;
}
