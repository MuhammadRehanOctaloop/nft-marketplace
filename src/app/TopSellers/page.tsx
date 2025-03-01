import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/TopSellers/Hero";
import Section1 from "@/components/TopSellers/Section1";

export default function TopCollection() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <Hero />
      <Section1 />
      <Footer />
      </div>
    );
  }