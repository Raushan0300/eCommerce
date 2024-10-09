import Header from "@/components/Header";
import Hero from "@/components/HomePage/Hero";
import MostPurchased from "@/components/HomePage/MostPurchased";
import Recent from "@/components/HomePage/Recent";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Hero />
      <Recent />
      <MostPurchased />
    </div>
  );
};

export default HomePage;
