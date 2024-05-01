import Sidebar from "@/components/Employee/Sidebar";
import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div className="flex h-screen bg-primary overflow-hidden pt-16">
      <Sidebar />
      <main className="w-full bg-neutral-100 dark:bg-neutral-900">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeLayout;
