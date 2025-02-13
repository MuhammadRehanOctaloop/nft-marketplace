import Hero from "@/components/Home/HomeHeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/Home/Section2/Section2";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
    <Navbar />
    {/* <div className="h-[1200px]"> */}
    <Hero />
    {/* </div> */}
    <div className="mt-5">
    <Section2 />
    </div>
    <Footer />
    </div>
  );
}
