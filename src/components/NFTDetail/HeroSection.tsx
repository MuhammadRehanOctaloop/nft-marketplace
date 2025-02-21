"use client";

import Image from "next/image";
import { IoMdTime } from "react-icons/io";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { PiTagLight } from "react-icons/pi"; // Tag icon
import { FiMenu } from "react-icons/fi"; // Menu icon
import { TbListDetails } from "react-icons/tb";
import { GrTextAlignFull } from "react-icons/gr";

const Hero = () => {
  const [openSections, setOpenSections] = useState<boolean[]>([true, true, true, true, true, true]); // Ensure all are open initially

  const toggleDropdown = (index: number) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="mt-40 m-10 mb-5">
      <div className="flex flex-col lg:flex-row justify-center max-w-[1320px] mx-auto gap-5">
        {/* Left Image Section */}
        <div className="relative w-full max-w-[546px] sm:w-[80%] md:w-[60%] justify-center mx-auto">
          <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-300">
            <Image
              src="/NFTDetail/hero/1.png"
              alt="NFT Character 1"
              width={546}
              height={610}
              className="rounded-xl shadow-md object-cover"
              unoptimized
            />
          </div>

          {/* Description */}
          <div className="bg-white mt-6 rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <GrTextAlignFull size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                Description
                </h3>
              </div>
              {openSections[0] ? (
                <FaChevronDown size={18} className="text-gray-600" />
              ) : (
                <FaChevronRight size={18} className="text-gray-600" />
              )}
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            {/* Dropdown Content */}
            {openSections[0] && (
              <div>
                <div className="grid grid-cols-1 text-[#808080] font-roboto border-b px-5 py-3">
                  <p className="text-[16px] mt-2">By <b className="text-black">Stella Nova</b></p>
                  <p className="text-[12px] mt-1 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu feugiat felis, in maximus neque. Morbi rutrum est interdum, suscipit erat et, mattis ante. Donec at diam pulvinar, pulvinar orci vitae, luctus mauris.</p>
                </div>
              </div>
            )}
          </div>

          {/* Traits */}
          <div className="bg-white mt-5 rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <PiTagLight size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                Traits
                </h3>
              </div>
              {openSections[0] ? (
                <FaChevronDown size={18} className="text-gray-600" />
              ) : (
                <FaChevronRight size={18} className="text-gray-600" />
              )}
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            {/* Dropdown Content */}
            {openSections[0] && (
              <div>
                <div className="grid grid-cols-3  text-[#808080] text-[10.31px] text-center px-5 pt-4 gap-1">
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% Floor: 12.75 ALGO </span>
                </div>
                <div className="grid grid-cols-3  text-[#808080] text-[10.31px] text-center px-5 pt-1 gap-1">
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% Floor: 12.75 ALGO </span>
                </div>
                <div className="grid grid-cols-3  text-[#808080] text-[10.31px] text-center px-5 pt-1 pb-4 gap-1">
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% <br/> Floor: 12.75 ALGO </span>
                  <span className="p-4 w-full max-w-[165px] h-full bg-[#F4F4F4] rounded-xl">EDITION <br/> <b className="text-black">Founders edition</b> 52% Floor: 12.75 ALGO </span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Right Details Section */}
        <div className="w-full max-w-[754px] lg:mx-5 mx-auto flex flex-col justify-center lg:justify-start">
          <h1 className="text-[#2B2B2B] font-apex font-normal text-[48px] md:text-[64px] leading-tight tracking-[0.04em] text-center lg:text-left mt-10 lg:mt-6">
            PIXACIO
          </h1>
          <p className="text-gray-500 text-sm lg:text-lg md:text-lg text-center lg:text-left">
            Owned by{" "}
            <span className="font-semibold text-black">Stella Nova</span>
          </p>

          {/* Price Section */}
          <div className="bg-white mt-8 rounded-xl flex flex-col gap-2 border-b-2 border-r-2 border-gray-300 shadow-[1px_1px_15px_rgba(0,0,0,0.20)]">
            {/* Sale Info */}
            <div className="rounded-lg flex items-center gap-2 p-4 pb-1 text-[#E7E7E7]">
              <IoMdTime className="text-gray-600 w-[28px] h-[28px]" />
              <span className="text-gray-600 text-[16px] font-roboto font-normal">
                Sale ends 18 November 2023 at 8:47 am
              </span>
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            <span className="text-bg-[#E7E7E7] text-[12px] font-roboto font-normal p-4 pt-2 pb-0">
              Current price
            </span>
            <span className="text-black text-[24px] font-roboto font-bold px-4">
              5.001 FRY
            </span>

            <div className="flex gap-4 p-4 pt-2">
              <button className="px-4 py-2 text-[16px] rounded-lg border-[2px] border-gray-300 text-black font-medium w-full">
                Buy now
              </button>
              <button className="px-4 py-2 text-[16px] rounded-lg bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white font-medium w-full">
                Make offer
              </button>
            </div>
          </div>

          {/* Listings */}
          <div className="bg-white mt-5 rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <PiTagLight size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                  Listings
                </h3>
              </div>
              {openSections[0] ? (
                <FaChevronDown size={18} className="text-gray-600" />
              ) : (
                <FaChevronRight size={18} className="text-gray-600" />
              )}
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            {/* Dropdown Content */}
            {openSections[0] && (
              <div>
                <div className="grid grid-cols-5 text-black text-[14px] border-b px-5 py-2 text-center lg:text-left md:text-left">
                  <span>Price</span>
                  <span>USD Price</span>
                  <span>Quantity</span>
                  <span>From</span>
                  <span></span>
                </div>

                <div className="grid grid-cols-5 items-center text-[14px] text-[#808080] font-medium px-5 p-3 text-center lg:text-left md:text-left">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>16DD55</span>
                  <button className="px-3 py-1 ml-auto w-full max-w-[54px] h-[32px] bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white rounded-lg text-[14px]">
                    Buy
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Offers */}
          <div className="bg-white mt-5 rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(1)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <FiMenu size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                  Offers
                </h3>
              </div>
              {openSections[1] ? (
                <FaChevronDown size={18} className="text-gray-600" />
              ) : (
                <FaChevronRight size={18} className="text-gray-600" />
              )}
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            {/* Dropdown Content */}
            {openSections[1] && (
              <div>
                <div className="grid grid-cols-5 text-black text-[14px] border-b px-5 py-2 text-center lg:text-left md:text-left">
                  <span>Price</span>
                  <span>USD Price</span>
                  <span>Quantity</span>
                  <span>Floor Difference</span>
                  <span className="ml-5">From</span>
                </div>

                <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3 text-center lg:text-left md:text-left">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
                <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3 text-center lg:text-left md:text-left">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
                <div className="grid grid-cols-5 mb-2 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3 text-center lg:text-left md:text-left">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="bg-white w-full max-w-[546px] mt-5 rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(2)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <TbListDetails size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                  Details
                </h3>
              </div>
              {openSections[2] ? (
                <FaChevronDown size={18} className="text-gray-600" />
              ) : (
                <FaChevronRight size={18} className="text-gray-600" />
              )}
            </div>

            {/* Divider */}
            <div className="h-[2px] bg-[#E7E7E7] w-full"></div>

            {/* Dropdown Content */}
            {openSections[2] && (
              <div>
                <div className="grid grid-cols-2 mt-2 items-center text-[14px]  text-[#808080] font-medium px-6 p-2">
                  <span>Contract Address</span>
                  <span className="text-right">0x5848...1713</span>
                </div>
                <div className="grid grid-cols-2 items-center text-[14px]  text-[#808080] font-medium px-6 p-2">
                  <span>Token ID</span>
                  <span className="text-right">7926</span>
                </div>
                <div className="grid grid-cols-2 items-center text-[14px] text-[#808080] font-medium px-6 p-2">
                  <span>Token Standard</span>
                  <span className="text-right">ERC-721</span>
                </div>
                <div className="grid grid-cols-2 items-center text-[14px]  text-[#808080] font-medium px-6 p-2">
                  <span>Chain</span>
                  <span className="text-right">Algorand</span>
                </div>
                <div className="grid grid-cols-2 mb-2 items-center text-[14px] text-[#808080] font-medium px-6 p-2">
                  <span>Creator Earnings</span>
                  <span className="text-right">6.5%</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
