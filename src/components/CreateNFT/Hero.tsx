"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";

const nfts = [
  { id: 1, image: "/CreateNFT/1.png" },
  { id: 2, image: "/CreateNFT/2.png" },
  { id: 3, image: "/CreateNFT/3.png" },
  { id: 4, image: "/CreateNFT/2.png" },
];

export default function NFTSelection() {
  const [selectedNFT, setSelectedNFT] = useState<number | null>(null);
  const [showMintButton, setShowMintButton] = useState<{ [key: number]: boolean }>({});

  const handleSelect = (id: number) => {
    if (selectedNFT === id) {
      setSelectedNFT(null);
      setShowMintButton((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setShowMintButton((prev) => ({ ...prev, [id]: false }));
      }, 3000);
    } else {
      setSelectedNFT(id);
    }
  };

  return (
    <div className="mt-40 m-10">
      <div className="w-full max-w-[1320px] mx-auto rounded-lg">
        {/* Top Controls */}
        <div className="flex items-center justify-between mb-4">
          {/* Left Side Buttons */}
          <div className="flex items-center w-full gap-5 lg:gap-10 text-[#808080] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px]">
            <button className="px-4 py-2 w-full max-w-[172px] h-[58px] rounded-lg border hover:bg-gray-100 transition">
              Single NFT
            </button>
            <p>4/4 Generated</p>
          </div>
          {/* Right Side Button - Aligned to End */}
          <div className="flex w-full items-center gap-2 ml-auto justify-end">
            <p className="text-gray-500 text-[16px] hidden sm:block">
              Select an NFT to mint
            </p>
            <Link href="/MintNFT">
            <button
              className="px-4 py-2 rounded-lg w-full max-w-[96px] h-[37px] text-[12px] text-white font-medium transition bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]"
            >
              Mint NFT
            </button>
            </Link>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="flex mt-14 justify-center flex-wrap gap-x-14 gap-y-8 lg:justify-start">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="relative w-[288px] h-auto cursor-pointer rounded-lg overflow-hidden transition duration-300 flex flex-col items-center"
              onClick={() => handleSelect(nft.id)}
            >
              <div className="w-[288px] h-[265px] relative">
                <Image
                  src={nft.image}
                  alt={`NFT ${nft.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {selectedNFT === nft.id && (
                  <div className="absolute inset-0 rounded-2xl bg-black bg-opacity-80 transition duration-300"></div>
                )}
                {selectedNFT === nft.id && (
                  <div className="absolute right-2 top-2 text-white p-1 rounded-full">
                    <FaRegCircleCheck size={30} />
                  </div>
                )}
              </div>
              {showMintButton[nft.id] && (
                <button
                  className="mt-2 px-4 py-2 border-4 border-red-400 bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white rounded-xl text-sm font-medium hover:bg-red-700 transition"
                >
                  MINT NFT
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
