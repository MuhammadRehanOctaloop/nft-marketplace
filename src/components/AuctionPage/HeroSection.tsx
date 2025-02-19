"use client";

import Image from "next/image";

const auctionItems = [
  { id: 1, src: "/auction/hero/1.png", alt: "NFT 1" },
  { id: 2, src: "/auction/hero/2.png", alt: "NFT 2" },
  { id: 3, src: "/auction/hero/3.png", alt: "NFT 3" },
  { id: 4, src: "/auction/hero/4.png", alt: "NFT 4" },
];

export default function AuctionHero() {
  return (
    <div className="m-4 md:m-10 mt-32 md:mt-64">
      <div className="flex flex-col items-center">
        <h1 className="font-apex font-bold text-[75px] md:text-[150px] leading-[60px] md:leading-[180px] tracking-wide text-center text-[#FE0101]">
          AUCTION
        </h1>
        <div className="flex flex-wrap justify-center items-end gap-6 mt-6 md:mt-10 relative min-h-[293px]">
          {auctionItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative p-2 flex items-end justify-center overflow-hidden rounded-3xl
                shadow-[4px_4px_15px_0px_rgba(0,0,0,0.20)]
                ${index === 0 || index === auctionItems.length - 1
                  ? "w-[292px] h-[293px]"
                  : "w-[292px] h-[182px]"}
                `}
            >
              <div className="w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={292}
                  height={293}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
