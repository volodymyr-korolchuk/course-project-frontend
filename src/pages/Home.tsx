import Sidebar from "@/components/Home/Sidebar";

const Home = () => {
  return (
    <main className="flex bg-primary h-full overflow-hidden">
      <Sidebar />
      <section className="flex-1">main section</section>
    </main>
  );
};

export default Home;
