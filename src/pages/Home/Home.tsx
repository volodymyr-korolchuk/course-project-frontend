import Sidebar from "@/components/Home/Sidebar";
import TabPanel from "@/components/Home/TabPanel";

const Home = () => {
  return (
    <main className="flex h-screen bg-primary overflow-hidden bg-green-100 pt-16">
      <Sidebar />
      <section className="w-full bg-red-400">
        <TabPanel />
      </section>
    </main>
  );
};

export default Home;
