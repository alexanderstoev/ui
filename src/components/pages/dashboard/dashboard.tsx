import { CircleAlert } from "lucide-react";

import { SubjectSummary } from "@/components/blocks/subject-summary/subject-summary";
import { Alert, AlertDescription, AlertTitle } from "@/components/primitives/alert/alert";
import { Card, CardContent } from "@/components/primitives/card/card";

import type { Subject } from "@/types";

interface DashboardPageProps {
  subjects: Subject[];
}

export const DashboardPage = ({ subjects }: DashboardPageProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent>Global stats</CardContent>
      </Card>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Subject: Core Architecture</AlertTitle>
        <AlertDescription>
          The Core Architecture subject seems to be lacking behind. You might want the look at the{" "}
          <a>Pending Actions</a>
        </AlertDescription>
      </Alert>
      <div className="flex flex-wrap gap-6">
        {subjects.map((subject) => (
          <SubjectSummary subject={subject} key={subject.id} />
        ))}
      </div>
    </div>
  );
};
