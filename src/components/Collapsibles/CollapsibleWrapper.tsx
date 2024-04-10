import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";

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
          <Button className="flex-1 justify-between font-light font-comfortaa h-12 rounded-sm hover:bg-neutral-700">
            {triggerTitle} <IoIosArrowDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleWrapper;
