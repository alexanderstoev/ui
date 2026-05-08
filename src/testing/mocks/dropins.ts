import type { Dropin } from "@/types/dropin";

export const MOCK_DROPINS: Dropin[] = [
  {
    id: "drop-1",
    content:
      "The 4K density allows for an extra column in the 'Subjects' grid if we drop the padding to p-4.",
    timestamp: "2026-04-29T14:30:00Z",
  },
  {
    id: "drop-2",
    content:
      "CRITICAL: The oklch color functions in Tailwind v4 are not rendering correctly in Safari 17.4—need fallback.",
    timestamp: "2026-04-29T14:15:00Z",
  },
  {
    id: "drop-3",
    content: "https://questrial-font-spec.info/geometric-spacing",
    timestamp: "2026-04-29T13:45:00Z",
  },
  {
    id: "drop-4",
    content:
      "Audit the contrast ratio of the Zinc-950 background against the secondary Questrial text.",
    timestamp: "2026-04-29T11:20:00Z",
  },
  {
    id: "drop-5",
    content:
      "Try using a 1px border-glow on the 'Active' subject card to draw the eye without using a bright background.",
    timestamp: "2026-04-29T09:05:00Z",
  },
];
