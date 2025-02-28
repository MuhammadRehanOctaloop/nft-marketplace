import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Artist/Hero";
import Section1 from "@/components/Artist/Section1";
import Section2 from "@/components/Artist/Section2";

export default function Artist() {
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