import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/SellerCollections/Hero";
import Section1 from "@/components/SellerCollections/Section1";

export default function SellerCollections() {
    return (
      <div className="bg-gradient-to-b from-white to-pink-200">
      <Navbar />
      <Hero />
      <Section1 />
      <Footer />
      </div>
    );
  }