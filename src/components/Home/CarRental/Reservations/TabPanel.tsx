import { Button } from "../../../ui/button";

const TabPanel = () => {
  const list = [
    "All",
    "Today`s Pickups",
    "Today`s Returns",
    "Tommorow`s Pickups",
    "Tommorow`s Returns",
  ];

  return (
    <ul className="flex gap-1 bg-neutral-100 dark:bg-neutral-950 p-1 w-full overflow-auto h-auto border-b border-neutral-800 shadow-md">
      {list.map((item) => (
        <li key={item}>
          <Button
            className="rounded-sm px-4
          hover:bg-indigo-400 dark:hover:bg-neutral-600 bg-indigo-300 text-neutral-950 dark:text-neutral-200 dark:bg-indigo-500/70"
          >
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TabPanel;
