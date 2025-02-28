"use client";

import Card from "@/components/Card";
import { FiSearch } from "react-icons/fi";

const cards = [
  { id: 6, imageUrl: "/auction/card/6.png" },
  { id: 4, imageUrl: "/auction/card/4.png" },
  { id: 1, imageUrl: "/auction/card/1.png" },
  { id: 7, imageUrl: "/auction/card/7.png" },
  { id: 2, imageUrl: "/auction/card/2.png" },
  { id: 3, imageUrl: "/auction/card/3.png" },
  { id: 5, imageUrl: "/auction/card/5.png" },
  { id: 8, imageUrl: "/auction/card/8.png" },
  { id: 9, imageUrl: "/auction/card/2.png" },
  { id: 10, imageUrl: "/auction/card/4.png" },
  { id: 11, imageUrl: "/auction/card/6.png" },
  { id: 12, imageUrl: "/auction/card/8.png" },
];

const Section2 = () => {
  return (
    <div className="mt-16 sm:mt-40 m-10">
      <div className="flex flex-col max-w-[1316px] mx-auto mb-10 gap-5 items-end">
        {/* Search Bar */}
        <div className="relative w-full max-w-[613px] h-[55px] sm:w-[400px] self-end">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search by name"
            className="w-full h-full pl-12 pr-4 text-gray-600 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1316px] mx-auto mt-16 flex flex-wrap gap-8 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex justify-center w-full sm:w-[300px]"
          >
            <Card imageUrl={card.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
