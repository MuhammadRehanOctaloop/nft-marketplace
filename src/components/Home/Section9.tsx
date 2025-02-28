"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Section9() {
  const [isWideScreen, setIsWideScreen] = useState(true);

  // Monitor window width and update state
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1400);
    };

    // Initialize on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-16 sm:mt-40 m-10">
      <div className="flex flex-col lg:flex-row items-center max-w-[1316px] h-full mx-auto">
        {/* Left Column: Text & Button */}
        <div className="flex-1 text-center lg:text-left ml-10">
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left">
            BOOST YOUR NFTS:
            <br /> ENHANCE VISIBILITY
            <br /> AND VALUE
          </h1>
          <p className="mt-3 text-[14px] sm:text-[16px] md:text-[18px] leading-snug tracking-[3%] text-[#6B6B6B] font-light font-roboto">
            The Boost feature is a premium service that allows NFT creators and
            collectors to elevate their listings on our marketplace. By boosting
            an NFT, you can ensure it appears prominently in search results,
            featured sections, and on the homepage, maximizing exposure to
            potential buyers.
          </p>
          <button className="mt-16 px-4 py-2 bg-[#FE0101] text-white text-lg font-bold rounded-xl shadow-md hover:bg-[#E00000]">
            Boost 🚀
          </button>
        </div>

        {/* Right Column: Floating Images */}
        <div
          className={`relative flex-1 flex items-center justify-center w-[554] h-[611px] ${
            isWideScreen ? "" : "hidden"
          }`}
        >
          {/* Main Image with Shadow for Wide Screens */}
          <div className="absolute top-1 left-[7.7rem] z-5 rounded-2xl">
            <Image
              src="/home/section9/card.png"
              width={242}
              height={322.93}
              className="rounded-2xl border-2 border-dotted border-red-300"
              alt="Boosted NFT"
            />
          </div>
          <Image
            src="/home/section9/bg.png"
            width={62}
            height={70.39}
            className="absolute top-[12.5rem] left-[4.2rem] opacity-100"
            alt="Boosted NFT"
          />
          <Image
            src="/home/section9/bg.png"
            width={89}
            height={104.42}
            className="absolute top-[0.5rem] left-[21.3rem] rounded-2xl opacity-100"
            alt="Boosted NFT"
          />

          {/* Secondary Images */}
          <Image
            src="/home/section9/card.png"
            width={131.14}
            height={175}
            className="absolute bottom-[1.25rem] left-[10.5rem] rounded-2xl opacity-70 border-2 border-dotted border-red-300"
            alt="Regular NFT 1"
          />
          <Image
            src="/home/section9/card.png"
            width={183.6}
            height={245}
            className="absolute bottom-[3.7rem] right-[2.7rem] rounded-2xl opacity-70 border-2 border-dotted border-red-300"
            alt="Regular NFT 2"
          />
          <Image
            src="/home/section9/rightLine.png"
            width={138.5}
            height={150}
            className="absolute top-[10rem] right-[8.5rem] opacity-70"
            alt="Left line"
          />
          <Image
            src="/home/section9/leftLine.png"
            width={181.5}
            height={19.5}
            className="absolute bottom-[12rem] right-[14.1rem] opacity-70"
            alt="Right line"
          />
        </div>

        {/* Fallback Simple Card Image for Smaller Screens */}
        {!isWideScreen && (
          <div className="mt-10 relative flex-1 flex items-center w-[450px] justify-center">
            <Image
              src="/home/section9/card.png"
              width={308}
              height={411}
              className="rounded-2xl border-2 border-dotted border-red-300"
              alt="Fallback Card Image"
            />
          </div>
        )}
      </div>
    </div>
  );
}
