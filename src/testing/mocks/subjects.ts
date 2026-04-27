import { MOCK_DECISIONS } from "@/testing/mocks/decisions";
import { MOCK_NOTES } from "@/testing/mocks/notes";
import { MOCK_QUESTIONS } from "@/testing/mocks/questions";
import { MOCK_RISKS } from "@/testing/mocks/risks";
import { MOCK_TASKS } from "@/testing/mocks/tasks";
import { MOCK_TIMELINE } from "@/testing/mocks/timeline";
import type { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "1",
    name: "App: Core Architecture",
    description: "Defining the relationship between Drops, the Garden, and Subjects.",
    status: "Active",
    lastUpdate: new Date("2024-05-20T10:30:00"),
    tasks: MOCK_TASKS,
    questions: MOCK_QUESTIONS,
    notes: MOCK_NOTES,
    risks: MOCK_RISKS,
    decisions: MOCK_DECISIONS,
    timeline: MOCK_TIMELINE,
  },
  {
    id: "2",
    name: "CachyOS Configuration",
    description: "Customizing the kernel and Wayland compositor for 4K performance.",
    status: "Stalled",
    lastUpdate: new Date("2024-05-18T14:20:00"),
    tasks: [],
    questions: [],
    notes: [],
    risks: [],
    decisions: [],
    timeline: [],
  },
  {
    id: "3",
    name: "Home Office Lighting",
    description: "Reducing eye strain for long coding sessions on the 32-inch monitor.",
    status: "Finalizing",
    lastUpdate: new Date("2025-05-20T09:00:00"),
    tasks: [],
    questions: [],
    notes: [],
    risks: [],
    decisions: [],
    timeline: [],
  },
  {
    id: "4",
    name: "Knowledge Base Tool: UI/UX",
    description: "Layout strategy for high-density 4K dashboards.",
    status: "Active",
    lastUpdate: new Date(),
    tasks: [],
    questions: [],
    notes: [],
    risks: [],
    decisions: [],
    timeline: [],
  },
  {
    id: "5",
    name: "Project: Rust Backend",
    description: "Exploring Axum for the high-performance local API.",
    status: "Paused",
    lastUpdate: new Date("2024-05-10T11:00:00"),
    tasks: [],
    questions: [],
    notes: [],
    risks: [],
    decisions: [],
    timeline: [],
  },
];
