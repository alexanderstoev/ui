import {
  CircleAlert,
  Gavel,
  History,
  ListTodo,
  ShieldQuestion,
  StickyNote,
  Zap,
} from "lucide-react";

import { DecisionBlock } from "@/components/blocks/decision-block/decision-block";
import { NoteBlock } from "@/components/blocks/note-block/note-block";
import { QuestionBlock } from "@/components/blocks/question-block/question-block";
import { RiskBlock } from "@/components/blocks/risk-block/risk-block";
import { TaskBlock } from "@/components/blocks/task-block/task-block";
import { Timeline } from "@/components/blocks/timeline/timeline";
import { Alert, AlertDescription, AlertTitle } from "@/components/primitives/alert/alert";
import { Button } from "@/components/primitives/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/primitives/card/card";

import type { Subject } from "@/types";

interface SubjectProps {
  subject: Subject;
}

export const SubjectPage = ({ subject }: SubjectProps) => {
  return (
    <>
      <Alert variant="destructive" className="mb-6">
        <CircleAlert />
        <AlertTitle>Subject: Core Architecture</AlertTitle>
        <AlertDescription>
          The Core Architecture subject seems to be lacking behind. You might want the look at the{" "}
          <a>Pending Actions</a>
        </AlertDescription>
      </Alert>
      <div className="grid-layout-zen min-h-full">
        <Card className="area-timeline">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <History />
              Time line
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.timeline && <Timeline entries={subject.timeline}></Timeline>}
          </CardContent>
        </Card>
        <Card className="area-tasks">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <ListTodo /> Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {subject.tasks.map((task) => (
              <TaskBlock task={task} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-risks">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <Zap />
              Risks
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {subject.risks.map((risk) => (
              <RiskBlock risk={risk} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-questions">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <ShieldQuestion />
              Open Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {subject.questions.map((question) => (
              <QuestionBlock question={question} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-notes">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <StickyNote />
              Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {subject.notes.map((note) => (
              <NoteBlock note={note} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-decisions">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              <Gavel />
              Decisions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {subject.decisions.map((decision) => (
              <DecisionBlock decision={decision} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-cta">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2 text-lg">
              Finalize
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button>FINALIZE</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
