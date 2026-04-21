export type SubjectItem = {
  name: string;
  type: "question" | "task" | "decision" | "risk";
  id: string;
};

export interface Subject {
  id: string;
  name: string;
  description?: string;
  pendingItems?: SubjectItem[];
  completedItems?: SubjectItem[];
  lastUpdate: Date;
  status: string;
}
