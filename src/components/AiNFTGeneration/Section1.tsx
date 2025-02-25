"use client";

import { useState } from "react";

export default function NFTInputBars() {
  const [supply, setSupply] = useState(10);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* First Bar */}
      <div className="flex items-center w-[1002px] h-[70px] border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Fantasy Creature holding a sword..."
          className="flex-grow px-4 py-3 text-gray-700 outline-none"
        />
        <button className="bg-red-600 text-white px-6 py-3 text-lg font-bold rounded-r-lg">
          Generate
        </button>
      </div>

      {/* Second Bar */}
      <div className="flex items-center w-[715px] h-[58px] border border-gray-300 rounded-lg overflow-hidden">
        {/* NFT Type Dropdown */}
        <select className="px-4 py-2 border-r border-gray-300 outline-none">
          <option>Single NFT</option>
          <option>Multiple NFTs</option>
        </select>

        {/* Supply Input */}
        <span className="px-4 text-gray-600">Supply</span>
        <input
          type="number"
          value={supply}
          onChange={(e) => setSupply(Number(e.target.value))}
          className="w-16 text-center border border-gray-300 outline-none"
        />

        {/* Add Styles Button */}
        <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-gray-100 border-l border-gray-300">
          Add Styles <span className="text-lg font-bold">+</span>
        </button>
      </div>
    </div>
  );
}
