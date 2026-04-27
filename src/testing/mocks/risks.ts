export const MOCK_RISKS = [
  {
    id: "r-1",
    title: "Vite/Tailwind v4 Build Latency",
    impact: "High",
    mitigation: "Investigate incremental builds or move heavy processing to PostCSS plugins.",
    status: "mitigating",
    probability: "80%",
  },
  {
    id: "r-2",
    title: "Z-Index Conflict in Grid Areas",
    impact: "Medium",
    mitigation: "Establish a strict layer-naming convention in the new v4 @layer system.",
    status: "monitored",
    probability: "40%",
  },
  {
    id: "r-3",
    title: "Data Desync on Offline Mode",
    impact: "Critical",
    mitigation: "Implement a robust IndexedDB sync layer with conflict resolution.",
    status: "active",
    probability: "20%",
  },
];
