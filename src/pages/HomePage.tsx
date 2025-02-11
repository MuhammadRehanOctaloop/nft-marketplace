import Hero from "@/components/HomeHeroSection/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export default function HomePage() {
  return (
    <>
    <Navbar />
    {/* <div className="h-[1200px]"> */}
    <Hero />
    {/* </div> */}
    <Footer />
    </>
  );
}
