import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/Home/Section2";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-pink-200">
    <Navbar />
    <Hero />
    <div className="mx-8 ">
    <Section2 />
    </div>
    <Footer />
    </div>
  );
}
