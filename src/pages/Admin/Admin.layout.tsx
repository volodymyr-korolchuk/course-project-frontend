import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-primary overflow-hidden pt-16">
      <main className="w-full bg-neutral-100 dark:bg-neutral-900">
        this is the admin page
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
