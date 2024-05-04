import { ROUTES } from "@/api";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="flex bg-primary h-full">
      <aside className="relative flex flex-col w-64 border-r-2 bg-neutral-900 border-neutral-800 px-2 py-2">
        <Link to={ROUTES.home.vehiclesRental} className="sticky top-2">
          <Button className="bg-primary w-full text-lg py-6">View Cars</Button>
        </Link>
        {/* <Link to={`${ROUTES.home.index}/my-invoices`} className="sticky top-2">
          <Button className="bg-primary w-full text-lg py-6">View Cars</Button>
        </Link> */}
      </aside>
      <main className="w-full bg-neutral-100 dark:bg-neutral-900 flex">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default CustomerLayout;
