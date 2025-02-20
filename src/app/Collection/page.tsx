import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Collection/Hero";
import Section1 from "@/components/Collection/Section1";

export default function Collection() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <Hero />
      <Section1 />
      <Footer />
      </div>
    );
  }