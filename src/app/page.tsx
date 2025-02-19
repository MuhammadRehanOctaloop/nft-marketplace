import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";
import Section7 from "@/components/Home/Section7";
import Section8 from "@/components/Home/Section8";
import Section9 from "@/components/Home/Section9";
import Section10 from "@/components/Home/Section10";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-200">
    <Navbar />
    <Hero />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
    <Section10 />
    <Footer />
    </div>
  );
}
