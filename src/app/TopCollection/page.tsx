import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/TopCollection/HeroSection";
import Section1 from "@/components/TopCollection/Section1";

export default function AuctionPage() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <HeroSection />
      <Section1 />
      <Footer />
      </div>
    );
  }