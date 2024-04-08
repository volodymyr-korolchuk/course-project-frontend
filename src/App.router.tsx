import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";
import AppLayout from "./App.layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const RouterBuilder = () => {
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Navigate to="/sign-in" replace />,
    },
  ];

  const routes: RouteObject[] = [
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
  ];

  return routes;
};

export default RouterBuilder;
