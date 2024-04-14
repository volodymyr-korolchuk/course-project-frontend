import { Button } from "../../../ui/button";
import { MdOutlineCarRental, MdOutlineEventAvailable } from "react-icons/md";

const TabPanel = () => {
  const filtersTitles = [
    "All",
    "Today`s Pickups",
    "Today`s Returns",
    "Tommorow`s Pickups",
    "Tommorow`s Returns",
  ];

  // create a separate hook to pass onClick
  // handlers to the buttons
  const actionButtonsTitles = [
    {
      title: "New Reservation",
      icon: <MdOutlineCarRental size={18} />,
    },
    {
      title: "Availability Check",
      icon: <MdOutlineEventAvailable size={18} />,
    },
  ];

  return (
    <div className="flex gap-1 pr-4 justify-between bg-neutral-100 dark:bg-neutral-950 p-1 w-full overflow-auto h-auto border-b border-neutral-800 shadow-md">
      <ul className="flex gap-1">
        {filtersTitles.map((item) => (
          <li key={item}>
            <Button
              className="px-4 font-light
           dark:hover:bg-neutral-800  dark:text-neutral-200 dark:bg-neutral-700 border border-neutral-600"
            >
              {item}
            </Button>
          </li>
        ))}
      </ul>

      <ul className="flex gap-1">
        {actionButtonsTitles.map((item) => (
          <li key={item.title}>
            <Button className="px-3 flex gap-1 hover:bg-indigo-300 dark:hover:bg-indigo-400 dark:bg-indigo-500 bg-indigo-400 text-neutral-950 dark:text-neutral-200">
              {item.icon}
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabPanel;
