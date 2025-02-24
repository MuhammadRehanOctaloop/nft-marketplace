"use client";

import Card from "@/components/Card";

const cards = [
  { id: 1, imageUrl: "/NFTDetail/section2/1.png" },
  { id: 2, imageUrl: "/NFTDetail/section2/2.png" },
  { id: 3, imageUrl: "/NFTDetail/section2/3.png" },
  { id: 4, imageUrl: "/NFTDetail/section2/4.png" },
  { id: 5, imageUrl: "/NFTDetail/section2/5.png" },
  { id: 6, imageUrl: "/NFTDetail/section2/6.png" },
  { id: 7, imageUrl: "/NFTDetail/section2/7.png" },
  { id: 8, imageUrl: "/NFTDetail/section2/8.png" },
];

const Section2 = () => {
  return (
    <div className="m-10 mt-40">
      {/* Header */}
      <div className="flex flex-col lg:flex-row max-w-[1316px] mx-auto mb-10 gap-5 items-center lg:items-end lg:justify-between">
        {/* Heading */}
        <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex w-full text-center lg:text-left">
        More from this collection
        </p>
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
