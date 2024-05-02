import { MdSyncProblem } from "react-icons/md";

const Failure = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-6xl font-semibold">Failed to create a rental...</h2>
        <MdSyncProblem size={96} color="red" />
      </div>
      <p className="pr-12">Something went wrong.</p>
    </div>
  );
};

export default Failure;
