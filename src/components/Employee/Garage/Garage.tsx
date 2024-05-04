import { API_ROUTES } from "@/api";
import { Vehicle } from "@/types";
import { useAuthStore } from "@/zustand/store";
import { useState, useEffect } from "react";
import GarageVehicleCard from "./GarageVehicleCard";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const Garage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const { accessToken } = useAuthStore();

  useEffect(() => {
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

    fetchCars();
  }, []);

  const handleExport = async () => {
    try {
      const response = await fetch(API_ROUTES.fleet.export, {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        toast.success("Garage was exported!");
      } else {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 h-full">
      <Button className="w-32 self-end" onClick={handleExport}>
        Export Garage
      </Button>
      <div className="p-4 grid grid-cols-4 gap-3 h-full overflow-auto rounded-lg bg-neutral-800">
        {vehicles.length &&
          vehicles.map((vehicle) => (
            <GarageVehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
      </div>
    </div>
  );
};

export default Garage;
