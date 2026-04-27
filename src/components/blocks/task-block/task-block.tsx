import type { Task } from "@/types";

export type TaskProps = {
  task: Task;
};
export const TaskBlock = ({ task }: TaskProps) => {
  return <div>{task.description}</div>;
};
