import Sidebar from "@/components/Home/Sidebar";

const Home = () => {
  return (
    <main className="flex bg-primary h-full overflow-hidden">
      <Sidebar />
      <section className="h-full">main section</section>
    </main>
  );
};

export default Home;
