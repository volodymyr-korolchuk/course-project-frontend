import LeasingDataTable from "@/components/Employee/CarRental/Reservations/LeasingDataTable/LeasingDataTable";
import TabPanel from "@/components/Employee/CarRental/Reservations/TabPanel";
import { columns } from "@/components/Employee/CarRental/Reservations/LeasingDataTable/columns";
import { useEffect, useState } from "react";
import { Rental } from "@/types";
import { formatDate } from "@/lib/utils";
import { useAuthStore } from "@/zustand/store";

async function getData(): Promise<Rental[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Hatchback",
      vehicle: "Car",
      totalPrice: 1300,
      status: "pending",
    },
    {
      id: "2",
      email: "m@example.com",
      pickupDate: formatDate(new Date(2024, 12, 12, 12, 12)),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Sedan",
      vehicle: "Car",
      totalPrice: 1100,
      status: "pending",
    },
    {
      id: "5",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "SUV",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "3",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Van",
      vehicle: "Peugeout 204",
      totalPrice: 1200,
      status: "rent",
    },
    {
      id: "728ed52f",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Minivan",
      vehicle: "Car",
      totalPrice: 1200,
      status: "canceled",
    },
    {
      id: "1",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Hatchback",
      vehicle: "Car",
      totalPrice: 1300,
      status: "pending",
    },
    {
      id: "2",
      email: "m@example.com",
      pickupDate: formatDate(new Date(2024, 12, 12, 12, 12)),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Sedan",
      vehicle: "Car",
      totalPrice: 1100,
      status: "pending",
    },
    {
      id: "5",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "SUV",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "3",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Van",
      vehicle: "Peugeout 204",
      totalPrice: 1200,
      status: "rent",
    },
    {
      id: "728ed52f",
      email: "m@example.com",
      pickupDate: formatDate(new Date()),
      returnDate: formatDate(new Date()),
      pickupLocation: "Office",
      vehicleClass: "Minivan",
      vehicle: "Car",
      totalPrice: 1200,
      status: "canceled",
    },
  ];
}

const Leasings = () => {
  const [tableData, setTableData] = useState<Rental[]>([]);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/leasings", {
          method: "GET",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const rp = await response.json();
        console.log(rp);

        setTableData(rp);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-auto">
      <TabPanel />
      <section className="flex items-center justify-start flex-col">
        <div className="w-full md:px-4 px-12 pb-16">
          <LeasingDataTable columns={columns} data={tableData} />
        </div>
      </section>
    </div>
  );
};

export default Leasings;
