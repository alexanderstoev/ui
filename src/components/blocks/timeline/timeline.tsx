import { differenceInDays, formatDistanceToNow, parseISO } from "date-fns";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/primitives/card/card";

import { cn } from "@/lib/utils";

export type TimeLineEntry = {
  user: string;
  date: string;
  title: string;
  description: string;
  type?: "question" | "task" | null;
  entityId?: string | null;
};

export type TimelineProps = {
  entries: TimeLineEntry[];
};
export const Timeline = ({ entries }: TimelineProps) => {
  const getRecencyColor = (dateString: string) => {
    const date = parseISO(dateString);
    const daysOld = differenceInDays(new Date(), date);

    if (daysOld < 1) return "text-emerald-500 font-medium";
    if (daysOld < 3) return "text-sky-500";
    if (daysOld < 7) return "text-zinc-400";
    return ""; // Old
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {entries.length == 0 && <div>Nothing happend yet</div>}
        <div className="leading-tight">
          {entries.map((entry, index) => (
            <div key={index} className="grid w-full grid-cols-3 gap-4">
              <div
                className={cn("flex flex-col items-end text-right", getRecencyColor(entry.date))}
              >
                <h6 className="text-success">{entry.user}</h6>
                <span className={cn("text-muted-foreground", getRecencyColor(entry.date))}>
                  {formatDistanceToNow(entry.date, { addSuffix: true })}
                </span>
              </div>
              <div className="relative col-span-2 flex flex-col justify-center border-l-2 pb-6 pl-4">
                <div className="border-primary bg-background absolute top-4 -left-px h-3 w-3 -translate-x-1/2 rounded-full border-2" />
                <h3 className="font-bold">
                  {(!entry.type || !entry.entityId) && entry.title}
                  {entry.type && entry.entityId && <a href="#">{entry.title}</a>}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
