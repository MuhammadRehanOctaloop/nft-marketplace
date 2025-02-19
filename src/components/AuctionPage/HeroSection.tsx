"use client";

import Image from "next/image";

const auctionItems = [
  { id: 1, src: "/nft1.png", alt: "NFT 1", bgColor: "bg-purple-100" },
  { id: 2, src: "/nft2.png", alt: "NFT 2", bgColor: "bg-blue-100" },
  { id: 3, src: "/nft3.png", alt: "NFT 3", bgColor: "bg-gray-100" },
  { id: 4, src: "/nft4.png", alt: "NFT 4", bgColor: "bg-yellow-100" },
];

export default function AuctionHero() {
  return (
    <div className="m-10 mt-40">
      <div className="flex flex-col items-center">
        <h1 className="font-apex font-bold text-[150px] leading-[180px] tracking-[4%] text-center text-[#FE0101]">
          AUCTION
        </h1>
        <div className="flex gap-4">
          {auctionItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-2 shadow-lg ${item.bgColor}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
