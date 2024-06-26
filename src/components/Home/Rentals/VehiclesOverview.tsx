import { Input } from "@/components/ui/input";
import VehicleCard from "./VehicleCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { API_ROUTES } from "@/api";
import { useAuthStore } from "@/zustand/store";
import { Vehicle } from "@/types";

const VehiclesOverview = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    // implement a separate hook to fetch cars by query
    const fetchCars = async () => {
      const response = await fetch(API_ROUTES.fleet.all, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(response);

      const data = await response.json();
      setVehicles(data);
    };

    console.log("access token is", accessToken);
    fetchCars();
  }, []);

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 h-full">
      <div className="w-full flex gap-2">
        <div className="flex gap-2">
          <h2 className="text-4xl pt-2 font-semibold">Vehicles overiew</h2>
        </div>
      </div>

      <div className="p-4 grid grid-cols-4 gap-3 h-full overflow-auto rounded-lg bg-neutral-800">
        {vehicles.length &&
          vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
      </div>
    </div>
  );
};

export default VehiclesOverview;
