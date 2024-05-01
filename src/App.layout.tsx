import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <div className="pt-16 h-screen">
        <Outlet />
      </div>
    </Suspense>
  );
};

export default React.memo(AppLayout);
