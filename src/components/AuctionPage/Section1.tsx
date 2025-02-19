"use client";

import AuctionCard from "@/components/AuctionCard";
import { GrPowerCycle } from "react-icons/gr";

const cards = [
  { id: 1, imageUrl: "/auction/card/1.png" },
  { id: 2, imageUrl: "/auction/card/2.png" },
  { id: 3, imageUrl: "/auction/card/3.png" },
  { id: 4, imageUrl: "/auction/card/4.png" },
  { id: 5, imageUrl: "/auction/card/5.png" },
  { id: 6, imageUrl: "/auction/card/6.png" },
  { id: 7, imageUrl: "/auction/card/7.png" },
  { id: 8, imageUrl: "/auction/card/8.png" },
  { id: 12, imageUrl: "/auction/card/2.png" },
  { id: 11, imageUrl: "/auction/card/4.png" },
  { id: 9, imageUrl: "/auction/card/6.png" },
  { id: 10, imageUrl: "/auction/card/8.png" },
];

const Section1 = () => {
  return (
    <div className="m-10 mt-40">
      {/* Header */}
      <div className="flex flex-col lg:flex-row max-w-[1316px] mx-auto mb-10 gap-5 items-center lg:items-end lg:justify-between">
        {/* Heading */}
        <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex w-full text-center lg:text-left">
          top listed
        </p>

        {/* Refresh Info (Centered Correctly) */}
        <div className="mr-5 flex items-center my-auto justify-center lg:justify-end w-[200px] h-[32px] font-roboto font-medium text-[12px] leading-[14.06px] text-[#7D7D7D] text-center gap-2">
          <div className="w-[32px] h-[32px] bg-white flex items-center justify-center border-[1px] border-gray-500 rounded-sm shadow-sm hover:scale-105 transition">
            <GrPowerCycle className="w-full h-full p-1 text-black" />
          </div>
          Refreshed A While Ago
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1316px] mx-auto mt-16 flex flex-wrap gap-8 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex justify-center w-full sm:w-[300px]"
          >
            <AuctionCard
              imageUrl={card.imageUrl}
              timeLeft={"3:06:59:18"}
              inStock={7}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
