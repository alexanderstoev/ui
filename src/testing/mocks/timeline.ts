import type { TimeLineEntry } from "@/components/blocks/timeline/timeline";

export const MOCK_TIMELINE: TimeLineEntry[] = [
  {
    user: "System",
    date: "2026-04-27T09:00:00Z",
    title: "New Drop Detected",
    description:
      "An unstructured thought was captured via the global shortcut: 'Remember to check the API rate limits for the weather service.'",
    type: "task",
    entityId: "drop-123",
  },
  {
    user: "You",
    date: "2026-04-26T10:15:00Z",
    title: "Project Architecture",
    description:
      "Should we move the interface definitions to a shared package or keep them co-located within the blocks folder?",
    type: "question",
    entityId: "subject-456",
  },
  {
    user: "System",
    date: "2026-04-15T14:20:00Z",
    title: "Maturity Milestone reached",
    description:
      "Subject 'Frontend Core' has reached 80% maturity after 5 tasks were completed today. Consider moving it to the 'Polishing' phase.",
    type: null,
    entityId: "subject-789",
  },
  {
    user: "John",
    date: "2026-03-15T11:05:00Z",
    title: "Dependency Update",
    description:
      "Upgrade Storybook to the latest version and verify the dark mode toggle is working across all composite components.",
    type: "task",
    entityId: null,
  },
  {
    user: "You",
    date: "2026-03-25T16:45:00Z",
    title: "Design Review",
    description:
      "Is the 3-column grid layout too dense for the Subject Overview on smaller 4K window sizes, or should we allow sidebars to collapse?",
    type: "question",
    entityId: "layout-001",
  },
];
