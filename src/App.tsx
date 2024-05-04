import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./App.layout";
import CustomerLayout from "./pages/Customer/Customer.layout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Leasings from "./components/Employee/CarRental/Reservations/Leasings";
import { ThemeProvider } from "./contexts/ThemeProvider";
import RequireAuth from "./components/Auth/RequireAuth";
import { ROLES } from "./constants/roles";
import Unauthorized from "./components/Auth/Unauthorized";
import EmployeeLayout from "./pages/Employee/Employee.layout";
import AdminLayout from "./pages/Admin/Admin.layout";
import VehiclesOverview from "./components/Home/Rentals/VehiclesOverview";
import VehicleRental from "./components/Home/Rentals/VehicleRental";
import PersistLogin from "./components/Auth/PersistLogin";
import "react-day-picker/dist/style.css";
import Success from "./components/Home/Rentals/Success";
import Failure from "./components/Home/Rentals/Failure";
import Garage from "./components/Employee/Garage/Garage";
import Invoices from "./components/Employee/Invoices/Invoices";
import InvoiceDetails from "./components/Employee/Invoices/InvoiceDetails";
import Payments from "./components/Employee/Payments/Payments";
import GrantAccess from "./components/Admin/GrantAccess";
import RevokeAccess from "./components/Admin/RevokeAccess";
import MyInvoices from "./components/Home/Invoices/MyInvoices";
import Analytics from "./components/Employee/Analytics/Analytics";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin]} />}
        >
          <Route path="home" element={<CustomerLayout />}>
            <Route path="my-invoices" element={<MyInvoices />}></Route>
            <Route path="vehicle-rental" element={<VehiclesOverview />}></Route>
            <Route
              path="vehicle-rental/:id"
              element={<VehicleRental />}
            ></Route>
            <Route path="vehicle-rental/success" element={<Success />}></Route>
            <Route path="vehicle-rental/failure" element={<Failure />}></Route>
          </Route>
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Employee, ROLES.Admin]} />}
        >
          <Route path="employee" element={<EmployeeLayout />}>
            <Route path="leasings" element={<Leasings />}></Route>
            <Route path="garage" element={<Garage />}></Route>
            <Route path="vehicle-properties" element={<Garage />}></Route>
            <Route path="invoices" element={<Invoices />}></Route>
            <Route path="invoices/:id" element={<InvoiceDetails />}></Route>
            <Route path="payments" element={<Payments />}></Route>
            <Route path="payments/:id" element={<InvoiceDetails />}></Route>
            <Route path="analytics" element={<Analytics />}></Route>
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="assign-employee" element={<GrantAccess />}></Route>
            <Route path="revoke-access" element={<RevokeAccess />}></Route>
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
