import {
  CircleAlert,
  Gavel,
  History,
  ListTodo,
  ShieldQuestion,
  StickyNote,
  Zap,
} from "lucide-react";

import { DecisionBlock } from "@/components/blocks/decision/decision";
import { NoteBlock } from "@/components/blocks/note/note";
import { QuestionBlock } from "@/components/blocks/question/question";
import { RiskBlock } from "@/components/blocks/risk/risk";
import { TaskBlock } from "@/components/blocks/task/task";
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
        <AlertDescription className="text-sm">
          The Core Architecture subject seems to be lacking behind. You might want the look at the{" "}
          <a>Pending Actions</a>
        </AlertDescription>
      </Alert>
      <div className="grid-layout-zen min-h-full">
        <Card className="area-timeline">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
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
            <CardTitle className="text-accent-foreground flex items-center gap-2">
              <ListTodo /> Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.tasks.map((task) => (
              <TaskBlock task={task} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-risks">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
              <Zap />
              Risks
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.risks.map((risk) => (
              <RiskBlock risk={risk} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-questions">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
              <ShieldQuestion />
              Open Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.questions.map((question) => (
              <QuestionBlock question={question} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-notes">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
              <StickyNote />
              Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.notes.map((note) => (
              <NoteBlock note={note} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-decisions">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
              <Gavel />
              Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {subject.decisions.map((decision) => (
              <DecisionBlock decision={decision} />
            ))}
          </CardContent>
        </Card>
        <Card className="area-cta">
          <CardHeader>
            <CardTitle className="text-accent-foreground flex items-center gap-2">
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
