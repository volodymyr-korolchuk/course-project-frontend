import Sidebar from "@/components/Home/Sidebar";

const Home = () => {
  return (
    <main className="flex h-screen bg-primary overflow-hidden bg-green-100 pt-16">
      <Sidebar />
      <section className="flex-1 bg-red-400">main section</section>
    </main>
  );
};

export default Home;
