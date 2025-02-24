"use client";

import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Section1 = () => {
  const [openSections, setOpenSections] = useState<boolean[]>([true]);
  const [filter, setFilter] = useState("");

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
            <HiMiniArrowsUpDown size={28} className="text-gray-600" />
            <h3 className="text-gray-600 p-1 text-[16px] font-roboto font-normal">
              Item Activity
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

        {/* Filter Bar */}
        {openSections[0] && (
          <div className="p-4 flex-wrap  flex w-full justify-center">
            <select
              className="w-full flex-wrap p-3 border-2 border-[#E7E7E7] rounded-lg text-black cursor-not-allowed"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              disabled
            >
              <option value="">Filter</option>
              <option value="list">List</option>
              <option value="sale">Sale</option>
              <option value="transfer">Transfer</option>
            </select>
          </div>
        )}

        {/* Dropdown Content */}
        {openSections[0] && (
          <div>
            <div className="grid grid-cols-5 text-black text-[14px] border-b px-5 py-2">
              <span>Event</span>
              <span>Price</span>
              <span>From</span>
              <span>To</span>
              <span>Date</span>
            </div>

            <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
              <span>List</span>
              <span className="font-bold text-black">0.008 FRY</span>
              <span>294693</span>
              <span></span>
              <span>1 days</span>
            </div>

            <div className="grid grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
              <span>List</span>
              <span className="font-bold text-black"></span>
              <span>199016</span>
              <span>126673</span>
              <span>2mo ago</span>
            </div>
            <div className="grid mb-4 grid-cols-5 items-center text-[14px] border-b text-[#808080] font-medium px-5 p-3">
              <span>Sale</span>
              <span className="font-bold text-black">0.008 FRY</span>
              <span>294693</span>
              <span>294693</span>
              <span>2mo ago</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section1;
