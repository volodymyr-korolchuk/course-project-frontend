import LeasingDataTable from "@/components/Employee/CarRental/Reservations/LeasingDataTable/LeasingDataTable";
import TabPanel from "@/components/Employee/CarRental/Reservations/TabPanel";
import { columns } from "@/components/Employee/CarRental/Reservations/LeasingDataTable/columns";
import { useEffect, useState } from "react";
import { Rental } from "@/types";
import { useAuthStore } from "@/zustand/store";
import { API_ROUTES } from "@/api";

const Leasings = () => {
  const [tableData, setTableData] = useState<Rental[]>([]);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ROUTES.rentals.all, {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();

        setTableData(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <TabPanel setTableData={setTableData} />
      <LeasingDataTable columns={columns} data={tableData} />
    </div>
  );
};

export default Leasings;
