import type { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "1",
    name: "App: Core Architecture",
    description: "Defining the relationship between Drops, the Garden, and Subjects.",
    status: "Active",
    lastUpdate: new Date("2024-05-20T10:30:00"),
    pendingItems: [
      { id: "1", name: "Decide on DB schema for Motes", type: "question" },
      { id: "2", name: "Implement 'Drop In' global hotkey", type: "task" },
    ],
    completedItems: [
      { id: "3", name: "Rename 'Inputs' to 'Drops'", type: "decision" },
      { id: "4", name: "Define Maturity Index formula", type: "decision" },
    ],
  },
  {
    id: "2",
    name: "CachyOS Configuration",
    description: "Customizing the kernel and Wayland compositor for 4K performance.",
    status: "Stalled",
    lastUpdate: new Date("2024-05-18T14:20:00"),
    pendingItems: [
      { id: "5", name: "Nvidia driver flickering on 32-inch display", type: "risk" },
      { id: "6", name: "Test Zen-Kernel gaming benchmarks", type: "task" },
    ],
    completedItems: [{ id: "7", name: "Install base CachyOS", type: "task" }],
  },
  {
    id: "3",
    name: "Home Office Lighting",
    description: "Reducing eye strain for long coding sessions on the 32-inch monitor.",
    status: "Finalizing",
    lastUpdate: new Date("2025-05-20T09:00:00"),
    pendingItems: [],
    completedItems: [
      { id: "8", name: "Ordered BenQ ScreenBar Halo", type: "task" },
      { id: "9", name: "Bias lighting calibrated to 6500K", type: "decision" },
    ],
  },
  {
    id: "4",
    name: "Knowledge Base Tool: UI/UX",
    description: "Layout strategy for high-density 4K dashboards.",
    status: "Active",
    lastUpdate: new Date(),
    pendingItems: [
      { id: "10", name: "Should Sidebar be fixed or collapsible?", type: "question" },
      { id: "11", name: "Define color palette for Maturity Stages", type: "task" },
      { id: "12", name: "Add 'Empty State' for the Zen Garden", type: "task" },
    ],
    completedItems: [{ id: "13", name: "Fixed-width Subject cards (450px)", type: "decision" }],
  },
  {
    id: "5",
    name: "Project: Rust Backend",
    description: "Exploring Axum for the high-performance local API.",
    status: "Paused",
    lastUpdate: new Date("2024-05-10T11:00:00"),
    pendingItems: [{ id: "14", name: "Auth middleware implementation", type: "question" }],
    completedItems: [],
  },
];
