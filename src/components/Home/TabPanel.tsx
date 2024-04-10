import { Button } from "../ui/button";

const TabPanel = () => {
  const list = [
    "All",
    "Today`s Pickups",
    "Today`s Returns",
    "Tommorow`s Pickups",
    "Tommorow`s Returns",
  ];

  return (
    <ul className="flex gap-1 bg-neutral-100 dark:bg-neutral-950 p-1 w-full overflow-auto">
      {list.map((item) => (
        <li key={item}>
          <Button
            className="rounded-[2px] px-4
          hover:bg-neutral-300 dark:hover:bg-neutral-600 bg-neutral-100 text-neutral-950 dark:text-neutral-200 dark:bg-neutral-700"
          >
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TabPanel;
