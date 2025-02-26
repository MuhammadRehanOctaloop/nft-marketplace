"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

export default function NFTInputBars() {
  const [supply, setSupply] = useState(10);
  const [selected, setSelected] = useState("Single NFT");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleGenerate = () => {
    if (selected === "Single NFT") {
      router.push("/CreateNFT");
    } else {
      router.push("/CreateCollection");
    }
  };

  return (
    <div className="mx-10 mt-16">
      <div className="flex flex-col w-full max-w-[1320px] items-center gap-6 mx-auto">
        {/* First Bar */}
        <div className="flex items-center w-full h-[70px] border bg-white max-w-[1002px] rounded-2xl">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="flex-grow px-4 py-3 text-gray-700 outline-none h-full rounded-2xl"
          />
          <button
            onClick={handleGenerate}
            className="w-[100px] h-[50px] mr-2 bg-[#FE0101] text-white font-roboto font-bold text-[14px] sm:text-[17px] md:text-[18px] leading-[21.09px] text-center rounded-xl hover:bg-[#E00000]"
          >
            Generate
          </button>
        </div>

        {/* Container */}
        <div className="flex flex-wrap gap-8 w-full max-w-[715px] justify-center text-[#808080] font-roboto text-[16px] sm:text-[17px] md:text-[18px] leading-[21.09px] tracking-[3%]">
          {/* NFT Type Dropdown (234px) */}
          <div className="relative w-[234px] h-[58px]">
            <button
              onClick={() => setOpen(!open)}
              className="w-full max-w-[201px] h-full border flex items-center justify-between rounded-2xl bg-white px-4"
            >
              {selected} <FaChevronDown className="text-black" size={18} />
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute left-0 mt-2 w-full border border-gray-300 rounded-lg bg-white shadow-lg z-10">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected("Single NFT");
                    setOpen(false);
                  }}
                >
                  Single NFT
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected("Multiple NFTs");
                    setOpen(false);
                  }}
                >
                  Multiple NFTs
                </div>
              </div>
            )}
          </div>

          {/* Supply Input (216px) */}
          <div className="flex items-center w-[216px] h-[58px] px-4">
            <span>Supply</span>
            <div className="relative flex bg-white border p-1 rounded-2xl items-center ml-3">
              <input
                type="number"
                value={supply}
                onChange={(e) => setSupply(Number(e.target.value))}
                className="w-16 h-[38px] text-center outline-none bg-white rounded-md"
              />
              <div className="flex flex-col mx-3 gap-2">
                <button
                  onClick={() => setSupply(supply + 1)}
                  className="w-6 h-1/2 flex items-center justify-center bg-white hover:bg-gray-100"
                >
                  <FaChevronUp className="text-black" size={18} />
                </button>
                <button
                  onClick={() => setSupply(supply - 1)}
                  className="w-6 h-1/2 flex items-center justify-center bg-white hover:bg-gray-100"
                >
                  <FaChevronDown className="text-black" size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Add Styles Button (198px) */}
          <button className="w-[198px] h-[58px] rounded-2xl border bg-white flex items-center justify-center gap-4">
            Add Styles
            <GoPlus className="text-black" size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
