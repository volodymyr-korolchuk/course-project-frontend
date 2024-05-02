import { IoMdCheckmark } from "react-icons/io";

const RentalCreated = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-6xl font-semibold">Rental was created!</h2>
        <IoMdCheckmark size={96} color="lightgreen" />
      </div>
      <p className="pr-12">Thanks for trusting us.</p>
    </div>
  );
};

export default RentalCreated;
