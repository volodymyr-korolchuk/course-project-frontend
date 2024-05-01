import CollapsibleWrapper from "../Collapsibles/CollapsibleWrapper";
import { IoIosArrowBack } from "react-icons/io";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

const CollapsibleEntry = ({ textContent }: { textContent: string }) => {
  return (
    <>
      <DropdownMenuSeparator className="mx-1 dark:bg-neutral-800" />
      <div className="flex-1 font-light cursor-pointer bg-neutral-100  dark:bg-transparent dark:hover:bg-neutral-700 p-2 px-2 rounded-[2px] group transition-all ease-in-out">
        <span className="flex items-center justify-between dark:text-neutral-300 text-neutral-900 text-sm dark:group-hover:text-indigo-300">
          {textContent}
          <IoIosArrowBack
            size={20}
            className="scale-0 group-hover:scale-100 transition-all ease-in-out"
          />
        </span>
      </div>
    </>
  );
};

const Sidebar = () => {
  const carRentalEntries = [
    { path: "/home/leasings", title: "Leasings" },
    { path: "/home/payments", title: "Payments" },
    { path: "/home/calendar", title: "Calendar" },
  ];

  const fleetEntries = ["Garage", "Classes", "In Use"];

  return (
    <aside className="w-60 dark:bg-neutral-950 border-r-[1px] border-neutral-800 h-full p-2">
      <section className="flex flex-col items-center justify-center gap-2">
        <CollapsibleWrapper triggerTitle="Car Rental">
          {carRentalEntries.map((item) => (
            <Link to={item.path}>
              <CollapsibleEntry key={item.path} textContent={item.title} />
            </Link>
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
