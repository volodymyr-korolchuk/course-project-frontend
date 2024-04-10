import CollapsibleWrapper from "../Collapsibles/CollapsibleWrapper";
import { IoIosArrowForward } from "react-icons/io";

const CollapsibleEntry = ({ textContent }: { textContent: string }) => {
  return (
    <div className="flex-1 bg-primary font-light cursor-pointer hover:bg-neutral-800 text-neutral-400 p-2 px-2 rounded-md group">
      <span className="flex gap-1 items-center">
        <IoIosArrowForward
          size={25}
          className="group-hover:translate-x-1 transition-all ease-in-out"
        />
        {textContent}
      </span>
    </div>
  );
};

const Sidebar = () => {
  const carRentalEntries = ["Reservations", "Payments", "Calendar"];

  const fleetEntries = ["Garage", "Classes", "In Use"];

  return (
    <aside className="min-w-40 w-56 bg-neutral-900 h-full p-1">
      <section className="flex flex-col items-center justify-center gap-1">
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
