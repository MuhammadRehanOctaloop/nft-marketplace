"use client";

import { useState } from "react";
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
  const slideAmount = 345; // Ensure this matches actual card width + margin

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex w-full max-w-[1391px] my-10 flex-wrap mx-auto">
      <div className="flex flex-col w-full lg:flex-row text-left mb-10 items-center lg:items-end">
        <div className="w-full">
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
        <div className="flex flex-row gap-6 text-center mt-5 mr-8">
          <button
            onClick={handlePrev}
            className="items-center justify-center hover:scale-105 transition"
          >
            <Image
              src="/home/section2/leftButton.png"
              alt="left Button"
              width={50}
              height={50}
              className="sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[67.88px] lg:h-[67.88px]"
            />
          </button>
          <button
            onClick={handleNext}
            className="items-center justify-center hover:scale-105 transition"
          >
            <Image
              src="/home/section2/rightButton.png"
              alt="right Button"
              width={50}
              height={50}
              className="sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[67.88px] lg:h-[67.88px]"
            />
          </button>
        </div>
      </div>

      {/* Sliding Cards Container */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-6 flex-nowrap" // Prevents wrapping, maintains proper spacing
          animate={{ x: -currentIndex * slideAmount }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {cards.map((card) => (
            <div key={card.id} className="min-w-[325px]">
              {" "}
              {/* Ensures cards don’t shrink */}
              <Card imageUrl={card.imageUrl} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section2;
