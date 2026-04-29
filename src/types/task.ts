export type TaskStatus = "todo" | "doing" | "done" | "overdue";
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: string;
  dueDate?: string;
  completedDate?: string;
  label: string;
}
