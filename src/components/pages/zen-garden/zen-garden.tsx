import { formatDistanceToNowStrict } from "date-fns";
import {
  Gavel,
  ListTodo,
  SeparatorVertical,
  ShieldQuestion,
  StickyNote,
  Trash2,
  Zap,
} from "lucide-react";

import { Button } from "@/components/primitives/button/button";
import { Card, CardContent, CardFooter } from "@/components/primitives/card/card";

import type { Dropin } from "@/types/dropin";

interface ZenGardenProps {
  dropins: Dropin[];
}

export const ZenGardenPage = ({ dropins }: ZenGardenProps) => {
  return (
    <>
      <h1 className="text-secondary-foreground mb-4 text-xl font-bold">ZEN GARDEN</h1>
      <div className="grid grid-cols-none gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {dropins.map((dropin) => (
          <Card>
            <CardContent className="h-full">
              <p>{dropin.content}</p>
            </CardContent>
            <CardFooter className="flex">
              <span className="text-muted-foreground grow text-sm">
                {formatDistanceToNowStrict(dropin.timestamp, { addSuffix: true })}
              </span>
              <Button size="icon" variant="ghost" title="Split into different items">
                <SeparatorVertical />
              </Button>
              <Button size="icon" variant="ghost" title="Convert to task">
                <ListTodo />
              </Button>
              <Button size="icon" variant="ghost" title="Convert to risk">
                <Zap />
              </Button>
              <Button size="icon" variant="ghost" title="Convert to question">
                <ShieldQuestion />
              </Button>
              <Button size="icon" variant="ghost" title="Convert to note">
                <StickyNote />
              </Button>
              <Button size="icon" variant="ghost" title="Convert to decision">
                <Gavel />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                title="Discard this dropin"
                className="text-muted-foreground"
              >
                <Trash2 />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};
