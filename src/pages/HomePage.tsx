import Hero from "@/components/Home/HomeHeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/Home/Section2/Section2";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-pink-200">
    <Navbar />
    {/* <div className="h-[1200px]"> */}
    <Hero />
    {/* </div> */}
    <Section2 />
    <Footer />
    </div>
  );
}
