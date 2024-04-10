import Sidebar from "@/components/Home/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex h-screen bg-primary overflow-hidden bg-green-100 pt-16">
      <Sidebar />
      <section className="w-full bg-red-400">
        <Outlet />
      </section>
    </main>
  );
};

export default Home;
