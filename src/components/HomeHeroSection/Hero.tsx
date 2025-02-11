"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.75;
      if (sectionTop < triggerPoint) setAnimate(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Heading Section */}
      <div className="absolute text-center w-full top-[13%] left-1/2 transform -translate-x-1/2 px-4">
        <h1 className="font-apex font-normal tracking-wider text-[clamp(32px,8vw,96px)] leading-[clamp(40px,10vw,102px)] mb-0">
          DISCOVER, CREATE & <br /> SELL ARTWORKS.
        </h1>
        <p className="font-Roboto tracking-wide text-[clamp(14px,4vw,18px)] leading-[clamp(18px,5vw,21px)] mb-0">
          Discover and trade unique digital art pieces on our NFT website,
          <br /> where creativity meets blockchain technology.
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute flex items-center justify-center sm:flex-row flex-col top-[63%] left-[49%] transform -translate-x-1/2">
        <motion.div
          className="absolute w-[800px] h-[400px] bg-red-500 opacity-30 shadow-lg sm:block blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 6 }}
        />

        {/* Hero Images with Looping Animations */}
        <motion.img
          src="/herosection/1.png"
          alt="Hero Image 1"
          width={225.69}
          height={300.71}
          className="absolute -rotate-4 sm:left-[-180px] sm:top-[42px] sm:block opacity-100"
          animate={{ x: [-200, 0, -200] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/herosection/2.png"
          alt="Hero Image 2"
          width={266.67}
          height={355.31}
          className="absolute -rotate-4 sm:left-[-100px] sm:top-[50px] sm:block opacity-100"
          animate={{ x: [-100, 0, -100] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/herosection/3.png"
          alt="Hero Image 3"
          width={308.36}
          height={410.96}
          className="relative z-20 rounded-lg sm:block opacity-100"
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/herosection/5.png"
          alt="Hero Image 5"
          width={225.69}
          height={300.71}
          className="absolute rotate-4 sm:right-[-180px] sm:top-[42px] sm:block opacity-100"
          animate={{ x: [200, 0, 200] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.img
          src="/herosection/4.png"
          alt="Hero Image 4"
          width={266.67}
          height={355.31}
          className="absolute rotate-4 sm:right-[-100px] sm:top-[50px] sm:block opacity-100"
          animate={{ x: [100, 0, 100] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Background Hands */}
      <div className="relative min-h-screen" ref={sectionRef}>
        <motion.img
          src="/herosection/left-hand.png"
          alt="Left Background"
          width={548.8}
          height={613.89}
          className="absolute sm:block top-[80%] left-[-6%] object-contain opacity-100"
          initial={{ x: -200, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
        <motion.img
          src="/herosection/right-hand.png"
          alt="Right Background"
          width={548.8}
          height={613.89}
          className="absolute sm:block top-[80%] right-[-6%] object-contain opacity-100"
          initial={{ x: 200, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
