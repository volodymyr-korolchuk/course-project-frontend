import { ROUTES } from "@/api";
import { Button } from "@/components/ui/button";
import { formatPricePerHour, isValidCssColor } from "@/lib/utils";
import { Link } from "react-router-dom";

interface VehicleCardProps {
  vehicle: any;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="rounded-md flex flex-col">
      <div className="relative w-full bg-white h-56 overflow-hidden rounded-t-md">
        <p className="text-neutral-600 absolute top-2 right-3 z-50">
          {vehicle.VehicleClass.title}
        </p>
        <p className="text-neutral-800 absolute top-2 left-3 z-50 uppercase font-bold">
          {formatPricePerHour(vehicle.VehicleClass.pricePerHour)}
        </p>

        <img
          src={`/images/${vehicle.VehicleClass.title.toLowerCase()}.jpg`}
          className="w-full h-full scale-75 hover:scale-90 object-cover transition-all"
          alt={`${vehicle.make} ${vehicle.model}`}
        />
      </div>

      <div className="flex flex-col gap-2 p-4 border-t-2 bg-indigo-100 rounded-b-md text-black border-neutral-600">
        <div className="flex justify-between">
          <h3
            className="font-semibold text-ellipsis text-nowrap overflow-hidden w-40 rounded-md"
            title={`${vehicle.make} ${vehicle.model} ${vehicle.productionYear}`}
          >
            {vehicle.make} {vehicle.model} {vehicle.productionYear}
          </h3>
          <Link
            to={`${ROUTES.home.vehiclesRental}/${vehicle.id}`}
            className="w-1/3"
          >
            <Button className="w-24 bg-indigo-400 font-semibold text-md hover:bg-neutral-200">
              Rent
            </Button>
          </Link>
        </div>

        <div>
          <div className="text-sm font-semibold flex items-center gap-1">
            Color:{" "}
            {isValidCssColor(vehicle.color) ? (
              <div
                className="w-4 h-4 rounded-full border-2"
                style={{
                  backgroundColor: vehicle.color,
                }}
                title={vehicle.color}
              ></div>
            ) : (
              vehicle.color
            )}
          </div>

          <div className="flex overflow-hidden text-nowrap items-center gap-1 ">
            <p className="font-semibold text-black text-sm">Pickup at:</p>{" "}
            <p
              className="text-neutral-600 text-sm overflow-hidden text-nowrap text-ellipsis"
              title={vehicle.ParkingLocation.address}
            >
              {vehicle.ParkingLocation.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
