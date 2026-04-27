import type { TimeLineEntry } from "@/components/blocks/timeline/timeline";

import type { Decision } from "@/types/decision";
import type { Note } from "@/types/note";
import type { Question } from "@/types/question";
import type { Risk } from "@/types/risk";
import type { Task } from "@/types/task";

export interface Subject {
  id: string;
  name: string;
  description?: string;
  lastUpdate: Date;
  status: string;
  timeline?: TimeLineEntry[] | null;
  tasks: Task[];
  questions: Question[];
  risks: Risk[];
  decisions: Decision[];
  notes: Note[];
}
