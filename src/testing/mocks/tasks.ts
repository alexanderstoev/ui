import type { Task } from "@/types";

export const MOCK_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Define Next.js 15 migration path",
    description: "Assess compatibility with Tailwind v4 and the new App Router structure.",
    status: "done",
    priority: "high",
    dueDate: "2026-04-28T17:00:00Z",
    label: "Engineering",
  },
  {
    id: "task-2",
    title: "Review 4K layout breakpoints",
    description:
      "Ensure the grid-template-areas don't stretch content uncomfortably on ultra-wide panels.",
    status: "todo",
    priority: "medium",
    dueDate: "2026-04-29T10:00:00Z",
    label: "Design",
  },
  {
    id: "task-3",
    title: "Setup Lucide icon library",
    description: "Import icons for all 9 grid areas and set consistent stroke weights.",
    status: "done",
    priority: "low",
    completedDate: "2026-04-26T14:00:00Z",
    label: "UI",
  },
  {
    id: "task-4",
    title: "Finalize Decision Log for Project Zen",
    description: "Archive all resolved questions into the 'Decisions' grid area.",
    status: "overdue",
    priority: "high",
    dueDate: "2026-04-25T09:00:00Z",
    label: "Management",
  },
  {
    id: "task-5",
    title: "Polish Dark Mode transitions",
    description: "Add a 300ms transition-colors to the body tag for a premium feel.",
    status: "doing",
    priority: "medium",
    dueDate: "2026-04-30T12:00:00Z",
    label: "UI",
  },
];
