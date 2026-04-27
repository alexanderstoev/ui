import type { Question } from "@/types";

export type QuestionProps = {
  question: Question;
};
export const QuestionBlock = ({ question }: QuestionProps) => {
  return <div>{question.question}</div>;
};
