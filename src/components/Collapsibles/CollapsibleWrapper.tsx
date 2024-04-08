import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";

interface Props {
  children: React.ReactNode[];
  triggerTitle: string;
}

const CollapsibleWrapper: React.FC<Props> = ({ children, triggerTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4">
        <CollapsibleTrigger asChild>
          <Button className="flex-1 font-light font-comfortaa h-12 rounded-sm">
            {triggerTitle}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleWrapper;
