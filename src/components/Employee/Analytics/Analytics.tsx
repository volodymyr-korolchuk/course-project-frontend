import { useAuthStore } from "@/zustand/store";
import { useEffect, useState } from "react";

const Analytics = () => {
  const { accessToken } = useAuthStore();
  const [analytics, setAnalytics] = useState();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/employees/analytics",
          {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          console.log(data);

          setAnalytics(data);
        }
      } catch (error) {}
    };

    fetchAnalytics();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-2">
      <h2 className="text-3xl font-semibold">Analytics</h2>
      <div className="bg-neutral-800 border border-neutral-600 rounded-md p-4">
        {analytics?.length > 0 &&
          analytics.map((item) => {
            return (
              <div className="flex w-full py-2 border-b border-neutral-600">
                <div className="flex gap-1 w-24">
                  <h3 className="font-semibold">ID:</h3>
                  <p>{item.id}</p>
                </div>
                <div className="flex gap-1 w-56">
                  <h3 className="font-semibold">Raw Income:</h3>
                  <p>{item.leasingsIncome} UAH</p>
                </div>
                <div className="flex gap-1 w-44">
                  <h3 className="font-semibold">Taxes:</h3>
                  <p>{item.taxesPaid} UAH</p>
                </div>
                <div className="flex gap-1 w-56">
                  <h3 className="font-semibold">Maintenance:</h3>
                  <p>{item.maintenanceExpenses} UAH</p>
                </div>
                <div className="flex gap-1 w-56">
                  <h3 className="font-semibold">Fuel expenses:</h3>
                  <p>{item.fuelExpenses} UAH</p>
                </div>
                <div className="flex gap-1 w-56">
                  <h3 className="font-semibold">Created On:</h3>
                  <p>{item.createdOn.slice(0, 10)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Analytics;
