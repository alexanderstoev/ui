import { CircleAlert } from "lucide-react";

import { SubjectSummary } from "@/components/blocks/subject-summary/subject-summary";
import { Alert, AlertDescription, AlertTitle } from "@/components/primitives/alert/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/primitives/card/card";

import type { Subject } from "@/types";

interface SubjectProps {
  subject: Subject;
}

export const SubjectPage = ({ subject }: SubjectProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Subject: Core Architecture</AlertTitle>
        <AlertDescription className="text-sm">
          The Core Architecture subject seems to be lacking behind. You might want the look at the{" "}
          <a>Pending Actions</a>
        </AlertDescription>
      </Alert>
      <Card>
        <CardHeader>
          <CardTitle>Timeline</CardTitle>
        </CardHeader>
        <CardContent>Nothing happened so far</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Open Questions</CardTitle>
        </CardHeader>
        <CardContent>No open quesions</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Tasks</CardTitle>
        </CardHeader>
        <CardContent>No tasks pending</CardContent>
      </Card>
      <div className="flex flex-wrap gap-6">
        <SubjectSummary subject={subject} key={subject.id} />
      </div>
    </div>
  );
};
