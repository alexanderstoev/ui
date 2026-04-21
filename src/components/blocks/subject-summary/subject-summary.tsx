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
        <CardTitle className="text-xl font-bold">{subject.name}</CardTitle>
        {subject.description ?? <CardDescription>{subject.description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-full">
        {subject.pendingItems && subject.pendingItems?.length > 0 && (
          <>
            <h2 className="fontfont-bold text-lg">Pending</h2>
            <ul className="list-inside list-disc">
              {subject.pendingItems.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>
          </>
        )}
        {subject.completedItems && subject.completedItems?.length > 0 && (
          <>
            <h2 className="fontfont-bold text-lg">Completed</h2>
            <ul className="list-inside list-disc">
              {subject.completedItems.map((item) => (
                <li>{item.name}</li>
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
