import HeroSection from "@/components/AuctionPage/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section1 from "@/components/AuctionPage/Section1"
import Section2 from "@/components/AuctionPage/Section2"


export default function AuctionPage() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Footer />
      </div>
    );
  }
  