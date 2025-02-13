import Hero from "@/components/HomeHeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export default function HomePage() {
  return (
    <div className="overflow-hidden">
    <Navbar />
    {/* <div className="h-[1200px]"> */}
    <Hero />
    {/* </div> */}
    <Footer />
    </div>
  );
}
