"use client";

import { FiMenu } from "react-icons/fi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Section1 = () => {

    const [openSections, setOpenSections] = useState<boolean[]>([true]); // Ensure all are open initially
    
      const toggleDropdown = (index: number) => {
        setOpenSections((prev) =>
          prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
      };

  return (
    <div className="mt-0 m-10">
    <div className="bg-white mt-5 w-full max-w-[1320px] mx-auto rounded-xl border-b-2 border-r-2 border-gray-200 shadow-[1px_1px_15px_rgba(0,0,0,0.20)] relative overflow-hidden">
            {/* Dropdown Header */}
            <div
              className="flex items-center p-4 pb-2 justify-between cursor-pointer"
              onClick={() => toggleDropdown(0)}
            >
              <div className="flex p-1 pt-0 items-center gap-2">
                <FiMenu size={28} className="text-gray-600" />
                <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
                  Offers
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
                <div className="grid grid-cols-5 text-black text-[14px] border-b px-5 py-2">
                  <span>Price</span>
                  <span>USD Price</span>
                  <span>Quantity</span>
                  <span>Floor Difference</span>
                  <span className="ml-5">From</span>
                </div>

                <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
                <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
                <div className="grid grid-cols-5 mb-2 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
                  <span className="font-bold text-black">0.008 FRY</span>
                  <span>$4.25</span>
                  <span>2</span>
                  <span>44% below</span>
                  <span className="ml-5">16DD55</span>
                </div>
              </div>
            )}
    </div>
    </div>
  );
};

export default Section1;
