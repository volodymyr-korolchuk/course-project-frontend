import { Rental } from "@/types";
import { Button } from "../../../ui/button";
import { API_ROUTES } from "@/api";
import { useAuthStore } from "@/zustand/store";
import toast from "react-hot-toast";
import { useRental } from "@/hooks/useRental";

interface TabPanelProps {
  setTableData: React.Dispatch<React.SetStateAction<Rental[]>>;
}

const TabPanel: React.FC<TabPanelProps> = ({ setTableData }) => {
  const { accessToken } = useAuthStore();
  const {
    getAll,
    getTodaysPickups,
    getTodaysReturns,
    getTomorrowsPickups,
    getTomorrowsReturns,
  } = useRental();
  const filtersTitles = [
    { title: "All", callback: getAll },
    { title: "Today`s Pickups", callback: getTodaysPickups },
    { title: "Today`s Returns", callback: getTodaysReturns },
    { title: "Tomorow`s Pickups", callback: getTomorrowsPickups },
    { title: "Tomorow`s Returns", callback: getTomorrowsReturns },
  ];

  const handleClick = async (callback: () => Promise<any>) => {
    try {
      const data = await callback();
      console.log("data:", data);

      setTableData(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex gap-1 pr-4 justify-between bg-neutral-100 dark:bg-neutral-950 p-1 flex-1 h-fit border-b border-neutral-800 shadow-md">
      <ul className="flex gap-1">
        {filtersTitles.map((item) => (
          <li key={item.title}>
            <Button
              className="px-4 font-light
           dark:hover:bg-neutral-800  dark:text-neutral-200 dark:bg-neutral-700 border border-neutral-600"
              onClick={() => handleClick(item.callback)}
            >
              {item.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabPanel;
