import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import AppLayout from "./App.layout";
import HomeLayout from "./pages/Home/Home.layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TabPanel from "./components/Home/TabPanel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="home" element={<HomeLayout />}>
        <Route path="" element={<TabPanel />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
