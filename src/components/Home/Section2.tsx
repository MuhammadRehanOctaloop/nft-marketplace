"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import Image from "next/image";

const cards = [
  { id: 1, imageUrl: "/home/Section2/cardImages/1.png" },
  { id: 2, imageUrl: "/home/Section2/cardImages/2.png" },
  { id: 3, imageUrl: "/home/Section2/cardImages/3.png" },
  { id: 4, imageUrl: "/home/Section2/cardImages/4.png" },
  { id: 5, imageUrl: "/home/Section2/cardImages/1.png" },
  { id: 6, imageUrl: "/home/Section2/cardImages/2.png" },
  { id: 7, imageUrl: "/home/Section2/cardImages/3.png" },
  { id: 8, imageUrl: "/home/Section2/cardImages/4.png" },
  { id: 9, imageUrl: "/home/Section2/cardImages/1.png" },
];

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToScroll, setCardsToScroll] = useState(1);
  const cardWidth = 349.5; // Card width including margin

  // Detect screen width and update cards to scroll
  useEffect(() => {
    const updateCardsToScroll = () => {
      setCardsToScroll(window.innerWidth > 1100 ? 2 : 1);
    };

    updateCardsToScroll(); // Initial check
    window.addEventListener("resize", updateCardsToScroll);
    return () => window.removeEventListener("resize", updateCardsToScroll);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + cardsToScroll) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - cardsToScroll + cards.length) % cards.length
    );
  };

  return (
    <div className="mx-8 mt-40">
      <div className="flex w-full max-w-[1391px] my-10 flex-wrap mx-auto">
        <div className="flex flex-col w-full lg:flex-row mb-10 items-center lg:items-end">
          <div className="w-full text-center lg:text-left">
            <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-[4%] font-[400] font-apex">
              Featured Collection
            </p>
            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] leading-snug tracking-[3%] font-light font-roboto">
              Explore our exclusive featured collection, showcasing innovative
              campaigns and creative
              <br /> storytelling from top brands around the world.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row gap-4 text-center mt-3">
            <button
              onClick={handlePrev}
              className="items-center justify-center hover:scale-105 transition"
            >
              <Image
                src="/home/section2/leftButton.png"
                alt="left Button"
                width={40}
                height={40}
                className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]"
              />
            </button>
            <button
              onClick={handleNext}
              className="items-center justify-center hover:scale-105 transition"
            >
              <Image
                src="/home/section2/rightButton.png"
                alt="right Button"
                width={40}
                height={40}
                className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]"
              />
            </button>
          </div>
        </div>

        {/* Sliding Cards Container */}
        <div className="w-full h-[457px] overflow-hidden">
          <motion.div
            className="flex gap-5 h-full flex-nowrap"
            animate={{ x: -currentIndex * cardWidth }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {cards.map((card) => (
              <div key={card.id} className="min-w-[330px] my-auto">
                <Card imageUrl={card.imageUrl} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
