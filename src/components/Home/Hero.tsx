"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [containerHeight, setContainerHeight] = useState("100vh");
  const [showHands, setShowHands] = useState(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const handsHeight = 300; // Estimated height of hands (adjust if needed)
        const viewportHeight = window.innerHeight;
        const requiredHeight = viewportHeight + handsHeight;
        setContainerHeight(`${requiredHeight}px`);
      }

      // Show hands only if the width is greater than or equal to 1600px
      setShowHands(window.innerWidth >= 1600);
    };

    handleResize(); // Set initial height and visibility
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 1;
        if (sectionTop < triggerPoint) setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: containerHeight }}>
      {/* Heading Section */}
      <div className="absolute text-center w-full top-[13%] left-1/2 transform -translate-x-1/2 px-4">
        <h1 className="font-apex font-normal tracking-wider text-[clamp(32px,8vw,96px)] leading-[clamp(40px,10vw,102px)] mb-0">
          DISCOVER, CREATE & <br /> SELL ARTWORKS.
        </h1>
        <p className="font-Roboto tracking-wide text-[clamp(14px,4vw,18px)] leading-[clamp(18px,5vw,21px)] mb-0">
          Discover and trade unique digital art pieces on our NFT website,
          <br /> where creativity meets blockchain technology.
        </p>
        <div className="absolute lg:hidden flex items-center justify-center w-full left-1/2 transform -translate-x-1/2 mt-20">
        <Image src="/home/herosection/3.png" alt="Hero Image 3" width={308.36} height={410.96} />
        </div>

      </div>

      {/* Image Section (Visible only on lg screens and above) */}
      <div className="hidden lg:block">
        <div className="absolute flex items-center justify-center sm:flex-row flex-row top-[40%] left-[49%] transform -translate-x-1/2">
          <motion.div
            className="absolute bg-red-500 opacity-30 shadow-lg sm:block blur-[100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 6 }}
          />

          {/* Hero Images with Looping Animations */}
          <motion.div
            className="absolute -rotate-4 sm:left-[-180px] sm:top-[42px] sm:block opacity-100"
            animate={{ x: [-170, 0, -170] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image src="/home/herosection/1.png" alt="Hero Image 1" width={225.69} height={300.71} priority />
          </motion.div>

          <motion.div
            className="absolute -rotate-4 sm:left-[-100px] sm:top-[50px] sm:block opacity-100"
            animate={{ x: [-100, 0, -100] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image src="/home/herosection/2.png" alt="Hero Image 2" width={266.67} height={355.31} priority />
          </motion.div>

          <motion.div
            className="relative z-20 rounded-lg sm:block opacity-100"
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image src="/home/herosection/3.png" alt="Hero Image 3" width={308.36} height={410.96} priority />
          </motion.div>

          <motion.div
            className="absolute rotate-4 sm:right-[-180px] sm:top-[42px] sm:block opacity-100"
            animate={{ x: [170, 0, 170] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image src="/home/herosection/5.png" alt="Hero Image 5" width={225.69} height={300.71} priority />
          </motion.div>

          <motion.div
            className="absolute rotate-4 sm:right-[-100px] sm:top-[50px] sm:block opacity-100"
            animate={{ x: [100, 0, 100] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image src="/home/herosection/4.png" alt="Hero Image 4" width={266.67} height={355.31} priority />
          </motion.div>
        </div>
      </div>

      {/* Background Hands (Hidden when width < 1600px) */}
      {showHands && (
        <div className="relative top-[50%]" ref={sectionRef}>
          <motion.div
            className="absolute sm:block left-[-6%] object-contain opacity-100"
            initial={{ x: -200, opacity: 0 }}
            animate={animate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Image src="/home/herosection/left-hand.png" alt="Left Background" width={548.8} height={613.89} priority />
          </motion.div>
          <motion.div
            className="absolute sm:block right-[-6%] object-contain opacity-100"
            initial={{ x: 200, opacity: 0 }}
            animate={animate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Image src="/home/herosection/right-hand.png" alt="Right Background" width={548.8} height={613.89} priority />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
