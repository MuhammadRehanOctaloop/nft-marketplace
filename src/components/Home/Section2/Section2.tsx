"use client";

import { useState } from "react";
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
  
  const [startIndex, setStartIndex] = useState(0); // Keeps track of which 4 cards are currently displayed

// Function to move forward by 2 cards when clicking the right button
const handleNext = () => {
  if (startIndex + 4 >= cards.length) {
    // If at the last set of cards, loop back to the first 4 cards
    setStartIndex(0);
  } else {
    // Move forward by 2 cards
    setStartIndex(startIndex + 2);
  }
};

const handlePrev = () => {
  if (startIndex === 0) {
    // Check if the total number of cards is even or odd
    const lastIndex = cards.length % 2 === 0 ? cards.length - 4 : cards.length - 3;

    // Jump to the last valid start index
    setStartIndex(lastIndex);
  } else {
    // Move backward by 2 cards
    setStartIndex(startIndex - 2);
  }
};

  return (
    <div className="flex w-full max-w-[1391px] my-10 flex-wrap mx-auto px-10">
      <div className="flex w-full flex-col lg:flex-row text-left lg:justify-start mb-10">
        <div className="w-full lg:w-auto">
          <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-[4%] font-[400] font-apex">
            Featured Collection
          </p>
          <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] leading-snug tracking-[3%] font-light font-roboto">
            Explore our exclusive featured collection, showcasing innovative
            campaigns and creative <br /> storytelling from top brands around the world.
          </p>
        </div>

        {/* Arrows - Hidden on sm & md */}
        <div className="hidden lg:flex gap-6 justify-end items-end mb-5 pr-5 ml-auto">
          <button onClick={handlePrev} className="flex items-center justify-center hover:scale-105 transition">
            <Image src="/home/section2/leftButton.png" alt="left Button" width={67.88} height={67.88} />
          </button>
          <button onClick={handleNext} className="flex items-center justify-center hover:scale-105 transition">
            <Image src="/home/section2/rightButton.png" alt="right Button" width={67.88} height={67.88} />
          </button>
        </div>
      </div>

      {/* Cards - Show only 4 at a time */}
      <div className="flex w-full flex-wrap gap-6 justify-center text-center">
        {cards.slice(startIndex, startIndex + 4).map((card) => (
          <Card key={card.id} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
