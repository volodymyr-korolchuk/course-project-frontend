import CollapsibleWrapper from "../Collapsibles/CollapsibleWrapper";
import { IoIosArrowBack } from "react-icons/io";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";

const CollapsibleEntry = ({ textContent }: { textContent: string }) => {
  return (
    <>
      <DropdownMenuSeparator className="mx-1 dark:bg-neutral-800" />
      <div className="flex-1 font-light cursor-pointer bg-neutral-100  dark:bg-transparent dark:hover:bg-neutral-700 p-2 px-2 rounded-[2px] group transition-all ease-in-out">
        <span className="flex items-center justify-between dark:text-neutral-300 text-neutral-900 dark:group-hover:text-green-500">
          {textContent}
          <IoIosArrowBack
            size={25}
            className="scale-0 group-hover:scale-100 transition-all ease-in-out"
          />
        </span>
      </div>
    </>
  );
};

const Sidebar = () => {
  const carRentalEntries = ["Reservations", "Payments", "Calendar"];

  const fleetEntries = ["Garage", "Classes", "In Use"];

  return (
    <aside className="min-w-40 w-56 bg-green-200 dark:bg-neutral-950 border-r-[1px] dark:border-neutral-800 h-full p-2">
      <section className="flex flex-col items-center justify-center gap-2">
        <CollapsibleWrapper triggerTitle="Car Rental">
          {carRentalEntries.map((item) => (
            <CollapsibleEntry key={item} textContent={item} />
          ))}
        </CollapsibleWrapper>

        <CollapsibleWrapper triggerTitle="Fleet">
          {fleetEntries.map((item) => (
            <CollapsibleEntry key={item} textContent={item} />
          ))}
        </CollapsibleWrapper>
      </section>
    </aside>
  );
};

export default Sidebar;
