import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { API_ROUTES } from "@/api";
import { Vehicle } from "@/types";
import { useAuthStore } from "@/zustand/store";
import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import toast from "react-hot-toast";
import { isValidCssColor } from "@/lib/utils";

// VehicleInfoComponent
type VehicleInfoProps = {
  vehicle: Vehicle;
};

const VehicleInfoComponent: React.FC<VehicleInfoProps> = ({ vehicle }) => {
  return (
    <div className="flex flex-col bg-neutral-800 rounded-lg border-4 border-neutral-700">
      <h3 className="text-3xl font-bold bg-neutral-700 p-4 rounded-t">
        Vehicle Info
      </h3>
      <div className="flex flex-col text-md font-semibold gap-1 p-4 text-neutral-300">
        <p className="flex items-center gap-1">
          Color:{" "}
          {isValidCssColor(vehicle.color) ? (
            <div
              className="w-6 h-6 rounded-full border-2"
              style={{
                backgroundColor: vehicle.color,
              }}
              title={vehicle.color}
            ></div>
          ) : (
            vehicle?.color
          )}
        </p>
        <div className="flex gap-2">
          Class: <p className="font-normal">{vehicle.VehicleClass.title}</p>
        </div>
        <div className="flex gap-2">
          Mileage: <p className="font-normal">{vehicle.mileage} km</p>
        </div>
        <div className="flex gap-1">
          VRM: <p className="font-normal">{vehicle.vrm}</p>
        </div>
      </div>
    </div>
  );
};

// VehicleImageComponent
type VehicleImageProps = {
  vehicle: Vehicle;
};

const VehicleImageComponent: React.FC<VehicleImageProps> = ({ vehicle }) => {
  return (
    <div className="h-96">
      <img
        src={`/images/${vehicle?.VehicleClass.title.toLowerCase()}.jpg`}
        className="h-full w-full object-cover rounded-lg border-4 border-neutral-600"
      />
    </div>
  );
};

// DateRangePickerComponent
type DateRangePickerProps = {
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  footer: JSX.Element;
};

const DateRangePickerComponent: React.FC<DateRangePickerProps> = ({
  range,
  setRange,
  footer,
}) => {
  return (
    <div className="flex gap-4">
      <DayPicker
        id="test"
        mode="range"
        defaultMonth={new Date()}
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
    </div>
  );
};

// TimePickerComponent
type TimePickerProps = {
  pickupTime: string;
  returnTime: string;
  handlePickupTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleReturnTimeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TimePickerComponent: React.FC<TimePickerProps> = ({
  pickupTime,
  returnTime,
  handlePickupTimeChange,
  handleReturnTimeChange,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col gap-2 bg-neutral-800 h-fit p-4 w-full rounded-md">
        <label htmlFor="pickupTime" className="text-xl font-semibold">
          Pickup time:
        </label>
        <input
          type="time"
          id="pickupTime"
          name="pickupTime"
          value={pickupTime}
          onChange={handlePickupTimeChange}
          className="text-black rounded-md h-10 text-xl pl-3 pr-2"
        />

        <label htmlFor="returnTime" className="text-xl font-semibold">
          Return time:
        </label>
        <input
          type="time"
          id="returnTime"
          name="returnTime"
          value={returnTime}
          onChange={handleReturnTimeChange}
          min={pickupTime}
          className="text-black rounded-md h-10 text-xl pl-3 pr-2"
        />
      </div>
    </div>
  );
};

// TotalComponent
type TotalProps = {
  vehicle: Vehicle | undefined;
  range: DateRange | undefined;
  pickupTime: string;
  returnTime: string;
};

const TotalComponent: React.FC<TotalProps> = ({
  vehicle,
  range,
  pickupTime,
  returnTime,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-between bg-neutral-800 h-fit p-4 w-full rounded-md flex-1">
      <p className="text-xl font-semibold">Total: </p>
      <p className="text-3xl">
        {vehicle &&
          (
            vehicle?.VehicleClass.pricePerHour *
            calculateHours(
              range?.from ?? new Date(),
              range?.to ?? new Date(),
              pickupTime,
              returnTime
            )
          ).toFixed(2)}{" "}
        UAH
      </p>
      <p className="text-sm text-neutral-500">
        *Insurance sum might be changed by the rent agent.
      </p>
    </div>
  );
};

// VehicleRental
const VehicleRental: React.FC = () => {
  const { id } = useParams();
  const { accessToken } = useAuthStore();

  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 2),
  };
  const [vehicle, setVehicle] = useState<Vehicle>();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const handlePickupTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPickupTime(event.target.value);
    if (event.target.value > returnTime) {
      setReturnTime("");
    }
  };

  const handleReturnTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value >= pickupTime) {
      setReturnTime(event.target.value);
    } else {
      toast.error("Return time cannot be earlier than pickup time.");
    }
  };

  useEffect(() => {
    const fetchVehicle = async () => {
      const response = await fetch(`${API_ROUTES.fleet.all}/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      setVehicle(data);
    };

    fetchVehicle();
  }, []);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <div className="flex justify-between p-8 gap-8">
      <div className="flex-1 rounded-md gap-3 flex flex-col">
        {vehicle && <VehicleImageComponent vehicle={vehicle} />}
        {vehicle && <VehicleInfoComponent vehicle={vehicle} />}
      </div>

      <div className="flex-1 flex flex-col gap-8">
        {vehicle && (
          <h1 className="text-5xl font-semibold">
            {vehicle.make} {vehicle.model} {vehicle.productionYear}
          </h1>
        )}
        {vehicle && (
          <>
            <div className="flex gap-3">
              <DateRangePickerComponent
                range={range}
                setRange={setRange}
                footer={footer}
              />
              <div className="flex w-full flex-col gap-3">
                <TimePickerComponent
                  pickupTime={pickupTime}
                  returnTime={returnTime}
                  handlePickupTimeChange={handlePickupTimeChange}
                  handleReturnTimeChange={handleReturnTimeChange}
                />
                <TotalComponent
                  vehicle={vehicle}
                  range={range}
                  pickupTime={pickupTime}
                  returnTime={returnTime}
                />
                <Button className="bg-indigo-400 text-xl h-12">
                  Create Rental
                </Button>
              </div>

              <div className="flex gap-1"></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const calculateHours = (
  startDate: Date,
  endDate: Date,
  pickupTime: string,
  returnTime: string
): number => {
  if (!pickupTime || !returnTime) return 0;

  const millisecondsPerHour = 1000 * 60 * 60;
  const hours = (endDate.getTime() - startDate.getTime()) / millisecondsPerHour;
  const pickupHour = parseFloat(pickupTime.split(":")[0]);
  const returnHour = parseFloat(returnTime.split(":")[0]);
  const hourDiff = returnHour - pickupHour;
  return Math.abs(hours) + hourDiff; // Return absolute value to handle negative durations
};

export default VehicleRental;
