import { ROUTES } from "@/api";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      <aside className="relative flex flex-col w-64 border-r-2 bg-neutral-900 border-neutral-800 px-2 py-2">
        <Link to={ROUTES.admin.assignEmployee} className="sticky top-2">
          <Button className="bg-primary w-full text-lg py-6">
            Assign Employees
          </Button>
        </Link>
        <Link to={ROUTES.admin.revokeAccess} className="sticky top-2">
          <Button className="bg-primary w-full text-lg py-6">
            Revoke Access
          </Button>
        </Link>
      </aside>
      <main className="w-full bg-neutral-100 dark:bg-neutral-900">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
