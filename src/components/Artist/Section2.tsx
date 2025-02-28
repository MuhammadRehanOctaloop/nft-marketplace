"use client";

import { BsCaretDown } from "react-icons/bs";
import Card from "@/components/Card";
import { useState } from "react";

const categories = [
  "All",
  "Generated",
  "Minted",
  "On Sale",
  "Auction",
  "Sold",
];

const cards = [
  { id: 1, imageUrl: "/home/section2/cardImages/1.png" },
  { id: 2, imageUrl: "/home/section2/cardImages/2.png" },
  { id: 3, imageUrl: "/home/section2/cardImages/3.png" },
  { id: 4, imageUrl: "/home/section2/cardImages/4.png" , isSold: true},
  { id: 5, imageUrl: "/home/section2/cardImages/1.png" },
  { id: 6, imageUrl: "/home/section2/cardImages/2.png" , isSold: true},
  { id: 7, imageUrl: "/home/section2/cardImages/3.png" },
  { id: 8, imageUrl: "/home/section2/cardImages/4.png" , isSold: true},
];

export default function Section2(){
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="m-10 mt-40 mb-40">
      {/* Header */}
      <div className="flex flex-col lg:flex-row max-w-[1316px] mx-auto gap-5 items-center lg:items-end lg:justify-between">
        {/* Categories List */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[14px] sm:text-[16px] md:text-[18px] font-normal text-gray-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 h-[49] rounded-md transition-all duration-300 ${
                  activeCategory === category
                    ? "border border-red-500 text-red-500"
                    : "hover:text-red-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        {/* Filter Button */}
        <button className="w-[142px] h-[49px] rounded-lg border-2 border-red-600 bg-white text-red-600 text-[14px] sm:text-[16px] md:text-[18px] font-medium p-2 lg:py-1 flex items-center justify-center">
        Newest
          <BsCaretDown size={18} className="ml-2" />
        </button>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1316px] mx-auto mt-16 flex flex-wrap gap-8 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex justify-center w-full sm:w-[300px]"
          >
            <Card imageUrl={card.imageUrl}  isSold={card.isSold} />
          </div>
        ))}
      </div>
    </div>
  );
};
