import { formatDistanceToNow } from "date-fns";
import type { PropsWithChildren } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card/card";

import type { Subject } from "@/types";

export type SubjectSummaryProps = {
  subject: Subject;
};

export const SubjectSummary = ({ subject }: PropsWithChildren<SubjectSummaryProps>) => {
  return (
    <Card className="max-w-xl min-w-80">
      <CardHeader>
        <CardTitle className="text-accent-foreground text-xl font-medium">{subject.name}</CardTitle>
        {subject.description ?? <CardDescription>{subject.description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-full">
        {subject.tasks && subject.tasks?.length > 0 && (
          <>
            <h2 className="text-muted-foreground font-medium">Pending tasks</h2>
            <ul className="list-inside list-disc">
              {subject.tasks
                .filter((task) => task.status === "overdue" || task.status === "todo")
                .map((task) => (
                  <li>{task.title}</li>
                ))}
            </ul>
            <h2 className="text-muted-foreground mt-4 font-medium">Opened questions</h2>
            <ul className="list-inside list-disc">
              {subject.questions
                .filter((question) => question.status === "open")
                .map((task) => (
                  <li>{task.question}</li>
                ))}
            </ul>
          </>
        )}
      </CardContent>
      <CardFooter>
        Last update: {formatDistanceToNow(subject.lastUpdate, { addSuffix: true })} |{" "}
        {subject.status}
      </CardFooter>
    </Card>
  );
};
