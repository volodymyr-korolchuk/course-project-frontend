import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import RouterBuilder from "./App.router";

function App() {
  const routes = useMemo(() => RouterBuilder(), []);
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
