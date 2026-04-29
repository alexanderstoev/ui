import { formatDistanceToNow } from "date-fns";

import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/primitives/hover-card/hover-card";

import type { Question } from "@/types";

export type QuestionProps = {
  question: Question;
};
export const QuestionBlock = ({ question }: QuestionProps) => {
  return (
    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger>
        <div>{question.question}</div>
      </HoverCardTrigger>
      <HoverCardContent side="right" className="drop-shadow-border w-auto p-0 drop-shadow-lg">
        <CardHeader className="p-4">
          <CardTitle>{question.question}</CardTitle>
          <CardDescription>{question.context}</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start">
          <p>
            Asked by: {question.askedBy} {formatDistanceToNow(question.date, { addSuffix: true })}
          </p>
          <p>
            Currently {question.status} with {question.priority} priority
          </p>
        </CardFooter>
      </HoverCardContent>
    </HoverCard>
  );
};
