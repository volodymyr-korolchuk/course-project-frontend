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
    <ul className="flex gap-1 bg-primary text-white p-1 w-full overflow-auto">
      {list.map((item) => (
        <li key={item}>
          <Button className="rounded-[2px] hover:bg-neutral-600 bg-neutral-700">
            {item}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TabPanel;
