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
