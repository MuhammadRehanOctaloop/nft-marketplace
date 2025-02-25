"use client";

import { useState } from "react";
import Image from "next/image";

const nfts = [
  { id: 1, image: "/CreateNFT/1.png" },
  { id: 2, image: "/CreateNFT/1.png" },
  { id: 3, image: "/CreateNFT/1.png" },
  { id: 4, image: "/CreateNFT/1.png" },
];

export default function NFTSelection() {
  const [selectedNFT, setSelectedNFT] = useState<number | null>(null);

  return (
    <div className="mt-40 m-10">
      <div className="w-full max-w-[1320px] mx-auto rounded-lg">
        {/* Top Controls */}
        <div className="flex items-center justify-between mb-4">
          {/* Left Side Buttons */}
          <div className="flex items-center w-full gap-10">
            <button className="px-4 py-2 w-full max-w-[172px] h-[58px] text-[22px] text-[#808080] rounded-lg hover:bg-gray-300 transition">
              Single NFT
            </button>
            <p className="text-gray-500 text-[22px]">4/4 Generated</p>
          </div>

          {/* Right Side Button - Aligned to End */}
          <div className="flex w-full items-center gap-2 ml-auto justify-end">
            <p className="text-gray-500 text-[16px] hidden sm:block">
              Select an NFT to mint
            </p>
            <button
              disabled={selectedNFT === null}
              className={`px-4 py-2 rounded-lg w-full max-w-[96px] h-[37px] text-[12px] text-white font-medium transition bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] ${
                selectedNFT !== null
                  ? "hover:bg-red-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Mint NFT
            </button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="flex gap-10 mt-14 justify-center">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className={`relative w-[288px] h-[265] cursor-pointer rounded-lg overflow-hidden border-2 ${
                selectedNFT === nft.id
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedNFT(nft.id)}
            >
              <Image
                src={nft.image}
                alt={`NFT ${nft.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
