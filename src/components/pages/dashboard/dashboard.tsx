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
    <div className="grid grid-cols-3 gap-6">
      <Card className="col-span-2">
        <CardContent>Global stats</CardContent>
      </Card>
      <Card className="row-span-2">
        <CardContent className="flex h-full items-center justify-center">DROP IN</CardContent>
      </Card>
      <Alert variant="destructive" className="col-span-2">
        <CircleAlert />
        <AlertTitle>Subject: Core Architecture</AlertTitle>
        <AlertDescription>
          The Core Architecture subject seems to be lacking behind. You might want the look at the{" "}
          <a>Pending Actions</a>
        </AlertDescription>
      </Alert>

      {subjects.map((subject) => (
        <SubjectSummary subject={subject} key={subject.id} />
      ))}
    </div>
  );
};
