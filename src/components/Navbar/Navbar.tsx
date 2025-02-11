"use client"; // Ensure this is a client component

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Menu and Close Icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 flex backdrop-blur-[50px] bg-white/30 justify-center z-[1000] pb-[8px]">
      <nav className="w-full max-w-[1320px] h-[60px] md:h-[80px] flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Fry Networks Logo"
            width={60}
            height={60}
            className="p-[4px] md:w-[80px] md:h-[80px] md:p-[6px]"
          />
        </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-[35px] font-apex font-normal text-black">
          <li className="relative font-bold text-[#DE0308] text-[16px] md:text-[18px] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#DE0308]">
            HOME
          </li>
          <li className="text-black font-normal text-[16px] md:text-[18px]">
            AI NFT GENERATION
          </li>
        </ul>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-black">
          <Menu size={32} />
        </button>

        {/* Buttons Section (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4">
          <button className="w-[140px] h-[40px] md:w-[160px] md:h-[48px] text-[16px] md:text-[18px] rounded-md text-white bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]">
            Connect Wallet
          </button>

          <button className="w-[120px] h-[40px] md:w-[140px] md:h-[48px] text-[16px] md:text-[18px] rounded-md border-2 border-red-600 bg-white text-[#FE0101]">
            Create NFT
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"></div>

          {/* Sidebar */}
          <div className="fixed left-0 top-0 h-full w-[77%] bg-white z-[999] p-3 flex flex-col">
            {/* Close Button & Logo */}
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/logo.png"
                alt="Fry Networks Logo"
                width={60}
                height={60}
                className="md:w-[70px] md:h-[70px]"
              />
              <button onClick={() => setIsOpen(false)}>
                <X size={30} />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4">
              <li className="font-bold text-black">HOME</li>
              <li className="font-bold text-black">AI NFT GENERATION</li>
            </ul>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button className="w-[140px] min-h-[40px] px-[10px] text-[16px] rounded-md text-white bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]">
                Connect Wallet
              </button>
              <button className="w-[140px] min-h-[40px] px-[10px] text-[16px] rounded-md border-2 border-red-600 bg-white text-red-600">
                Create NFT
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
