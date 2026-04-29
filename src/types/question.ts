export type QuestionStatus = "open" | "resolved";
export interface Question {
  id: string;
  question: string;
  context: string;
  status: QuestionStatus;
  askedBy: string;
  priority: string;
  date: string;
}
