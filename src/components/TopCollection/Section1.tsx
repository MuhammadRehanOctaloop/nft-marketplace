"use client";

import Image from "next/image";
import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Link from "next/link";

const categories = [
  "Popular",
  "Trending",
  "Sports",
  "Art",
  "Fantasy",
  "Photography",
  "Space",
];

const sellers = [
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon1.png",
    images: ["/TopCollection/section1/cardimg/1.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon2.png",
    images: ["/TopCollection/section1/cardimg/2.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/3.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/4.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/5.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/6.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/1.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/2.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/5.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/4.png"],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: ["/TopCollection/section1/cardimg/1.png"],
  },
];

export default function Section6() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  return (
    <div className="m-10 mt-40">
      <div className="max-w-[1316px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 gap-10">
          {/* Title */}
          <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left">
            Explore Collections
          </p>

          {/* Categories List */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-lg font-medium text-gray-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 h-[49] rounded-md transition-all duration-300 ${
                  activeCategory === category
                    ? "border border-red-500 text-red-500"
                    : "hover:text-red-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Change grid to flex with wrapping */}
        <div className="max-w-[1316px] flex flex-wrap justify-center gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="relative bg-white w-[417px] h-[276px] rounded-xl shadow-lg p-2 flex flex-col hover:scale-105 transition-all duration-300 border-gradient"
            >
              <div className="flex items-center h-[65.19] mb-2 space-x-3">
                <Image
                  src={seller.img}
                  alt={seller.name}
                  width={65.19}
                  height={65.19}
                />
                <div>
                  <p className="font-roboto font-bold text-[18px] leading-[21.09px] tracking-[0.5%]">
                    {seller.name}
                  </p>
                  <p className="font-roboto font-normal text-[14px] leading-[16.41px] tracking-[0.09em] text-gray-500 flex items-center gap-1">
                    <span>
                      Created by <b>Jacob Jones </b>
                    </span>
                    <BsPatchCheckFill className="text-[#785EF0] w-4 h-4" />
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="mx-auto mt-1 flex justify-center items-center">
                {seller.images.slice(0).map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt="Artwork"
                    width={397}
                    height={178}
                  />
                ))}
              </div>

              {/* Button at Bottom */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
      <Link href="/Collection">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg shadow-md">
          Items <span className="font-bold">1.5k</span>
        </button>
      </Link>
    </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
