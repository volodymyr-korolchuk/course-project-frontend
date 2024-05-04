import Sidebar from "@/components/Employee/Sidebar";
import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div className="flex h-full bg-primary overflow-hidden">
      <Sidebar />
      <main className="w-[calc(100%-240px)] flex-1 h-full bg-neutral-100 dark:bg-neutral-900">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeLayout;
