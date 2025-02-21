import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/NFTDetail/HeroSection";
import Section1 from "@/components/NFTDetail/Section1";
import Section2 from "@/components/NFTDetail/Section2";

export default function TopCollection() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
      </div>
    );
  }