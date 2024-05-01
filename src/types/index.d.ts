export type Rental = {
  id: string;
  email: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  vehicleClass: string;
  vehicle: string;
  totalPrice: number;
  status: string; // TODO: define a proper set of statuses
};

export type ParkingLocation = {
  address: string;
};

export type VehicleClass = {
  title: string;
  pricePerHour: number;
};

export type Vehicle = {
  id: number;
  make: string;
  model: string;
  productionYear: unmber;
  color: string;
  classId: number;
  VehicleClass: VehicleClass;
  mileage: number;
  vrm: string;
  parkingLocationId: number;
  ParkingLocation: ParkingLocation;
};
