export const MOCK_QUESTIONS = [
  {
    id: "q-1",
    question: "How do we handle state persistence for the 'Drop-In' editor?",
    context:
      "If a user starts typing a thought and closes the tab, should it be in LocalStorage or a draft DB record?",
    status: "unresolved",
    askedBy: "User",
    priority: "high",
    date: "2026-04-27T14:00:00Z",
  },
  {
    id: "q-2",
    question: "Is the 12-column grid overkill for the mobile view?",
    context:
      "Currently stacking everything, but maybe a 2-column small grid for 'Risks' and 'Decisions' works better.",
    status: "unresolved",
    askedBy: "DesignBot",
    priority: "medium",
    date: "2026-04-26T11:30:00Z",
  },
  {
    id: "q-3",
    question: "What is the upper limit for Timeline entries before we need virtualization?",
    context: '32" 4K monitors can display ~40 entries at once. Performance might dip at 500+.',
    status: "resolved",
    askedBy: "User",
    priority: "low",
    date: "2026-04-25T09:15:00Z",
  },
];
