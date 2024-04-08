import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <Outlet />
    </Suspense>
  );
};

export default React.memo(AppLayout);
