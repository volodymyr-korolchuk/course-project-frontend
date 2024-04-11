import LeasingDataTable from "@/components/Home/CarRental/Reservations/LeasingDataTable/LeasingDataTable";
import TabPanel from "@/components/Home/CarRental/Reservations/TabPanel";
import {
  Rental,
  columns,
} from "@/components/Home/CarRental/Reservations/LeasingDataTable/columns";
import { useEffect, useState } from "react";

async function getData(): Promise<Rental[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "2",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "5",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "3",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
    {
      id: "728ed52f",
      customerEmail: "m@example.com",
      pickupDate: new Date().toUTCString().slice(0, -4),
      returnDate: new Date().toUTCString().slice(0, -4),
      pickupLocation: "Office",
      vehicleClass: "Car Class",
      vehicle: "Car",
      totalPrice: 1200,
      status: "pending",
    },
  ];
}

const Reservations = () => {
  const [tableData, setTableData] = useState<Rental[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
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

export default Reservations;
