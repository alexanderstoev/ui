import { SubjectSummary } from "@/components/blocks/subject-summary/subject-summary";

import type { Subject } from "@/types";

interface DashboardPageProps {
  subjects: Subject[];
}

export const DashboardPage = ({ subjects }: DashboardPageProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full grow bg-gray-400">
        <h1>Global stats</h1>
      </div>
      <div className="w-full grow bg-yellow-400">
        <h1>Alert</h1>
      </div>
      <div className="flex flex-wrap gap-6">
        {subjects.map((subject) => (
          <SubjectSummary subject={subject} key={subject.id} />
        ))}
      </div>
    </div>
  );
};
