import LeasingDataTable from "@/components/Home/LeasingDataTable/LeasingDataTable";
import TabPanel from "@/components/Home/TabPanel";
import { Payment, columns } from "@/components/Home/LeasingDataTable/columns";
import { useEffect, useState } from "react";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exampwefionwele.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@ex23d2j3ample.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exawe23oimple.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exampwefionwele.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@ex23d2j3ample.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exawe23oimple.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exampwefionwele.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@ex23d2j3ample.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@exawe23oimple.com",
    },
  ];
}

const Home = () => {
  const [tableData, setTableData] = useState<Payment[]>([]);

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
        <div className="w-full md:px-32 px-16 pb-16">
          <LeasingDataTable columns={columns} data={tableData} />
        </div>
      </section>
    </div>
  );
};

export default Home;
