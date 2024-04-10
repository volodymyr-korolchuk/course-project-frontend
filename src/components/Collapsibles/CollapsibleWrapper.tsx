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
      <div className="flex items-center justify-between space-x-2">
        <CollapsibleTrigger asChild>
          <Button
            className="flex-1 justify-between font-normal text-md h-12 rounded-sm 
          hover:bg-neutral-200 dark:hover:bg-neutral-700 bg-neutral-100 text-neutral-950 dark:border border-neutral-800 dark:text-neutral-100 dark:bg-neutral-800"
          >
            {triggerTitle}{" "}
            <IoIosArrowDown
              className={`${isOpen ? "-rotate-90" : ""} transition-all`}
            />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-1">{children}</CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleWrapper;
