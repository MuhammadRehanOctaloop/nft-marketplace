"use client";

import Image from "next/image";
import { BsCaretDown } from "react-icons/bs";
import Link from "next/link";

const sellers = [
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/1.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/2.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/3.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/4.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/5.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/6.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/7.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/8.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/9.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/Section1/10.png"],
  },
];

export default function Section6() {
  return (
    <div className="mt-16 sm:mt-40 m-10">
      <div className="max-w-[1316px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center w-full mb-6 gap-10">
          {/* Collection Button */}
          <button className="flex w-full max-w-[140px] h-[49px] text-[18px] text-[#FE0101] border-2 border-[#FE0101] justify-center items-center p-2 rounded-lg font-normal transition hover:bg-gray-100">
          <Link href="/Artist">
            Collection
          </Link>
          </button>

          {/* Filter Button */}
          <button className="w-[142px] h-[49px] rounded-lg border-2 border-[#FE0101] text-[#FE0101] text-[18px] font-normal p-2 flex items-center justify-center"
          >
            Newest
            <BsCaretDown size={18} className="ml-2" />
          </button>
        </div>

        {/* Change grid to flex with wrapping */}
        <div className="max-w-[1316px] flex flex-wrap justify-center gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="relative bg-white w-[417px] h-full rounded-xl shadow-lg p-3 flex flex-col hover:scale-105 transition-all duration-300 border-gradient"
            >
              <div className="flex items-center h-[65.19px] mb-2 space-x-3">
                <div>
                  <p className="font-roboto font-bold text-[18px] leading-[21.09px] tracking-[0.5%]">
                    {seller.name}
                  </p>
                  <p className="font-roboto mt-2 font-normal text-[14px] leading-[16.41px] tracking-[0.09em] text-gray-500 flex items-center gap-1">
                    <span>
                      items <b>1.5K</b>
                    </span>
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="mx-auto mt-1 flex justify-center items-center relative">
                {seller.images.slice(0).map((image, idx) => (
                  <div key={idx} className="relative">
                    <Image
                      src={image}
                      alt="Artwork"
                      width={387}
                      height={181}
                      className="rounded-2xl shadow-md"
                    />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-[2px] mt-1 bg-[#DBDBDB] w-[90%] mx-auto"></div>
              {/* Divider */}
              <div className="h-[2px] mt-1 bg-[#DBDBDB] w-[85%] mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
