import { Button } from "@/components/primitives/button/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/primitives/popover/popover";
import { Textarea } from "@/components/ui/textarea";

export const Dropin = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="accent">Dropin</Button>
      </PopoverTrigger>
      <PopoverContent side="right">
        <Textarea placeholder="Start typing..." className="h-40" rows={6}></Textarea>
        <Button>Save</Button>
      </PopoverContent>
    </Popover>
  );
};
