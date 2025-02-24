"use client";

import Image from "next/image";

const sellers = [
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/1.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/2.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/3.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/4.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/5.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/6.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/7.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/8.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/9.png"],
  },
  {
    name: "Wonderful ARTWORK",
    images: ["/SellerCollections/section1/10.png"],
  },
];

export default function Section6() {
  return (
    <div className="m-10 mt-40">
      <div className="max-w-[1316px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 gap-10">
          {/* Title */}
          <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left">
            Collections
          </p>
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
