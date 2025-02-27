"use client";

import Image from "next/image";
import { MdOutlineDoorBack } from "react-icons/md";

const Hero = () => {
  const collections = [
    {
      id: 1,
      name: "Wonderful Artwork",
      items: "1.5k",
      image: "/MintNFT/card.png",
    },
    {
      id: 2,
      name: "Wonderful Artwork",
      items: "1.5k",
      image: "/MintNFT/card.png",
    },
    {
      id: 3,
      name: "Wonderful Artwork",
      items: "1.5k",
      image: "/MintNFT/card.png",
    },
    {
      id: 4,
      name: "Wonderful Artwork",
      items: "1.5k",
      image: "/MintNFT/card.png",
    },
  ];

  return (
    <div className="mt-32 m-10 mb-5">
      <div className="flex flex-col lg:flex-row justify-center max-w-[1320px] w-full mx-auto gap-5">
        {/* Left Image Section */}
        <button className="flex mx-auto mb-6 w-full max-w-[126px] h-[64px] text-[20px] justify-center shadow-lg items-center gap-4 px-4 py-2 rounded-2xl bg-white text-[#2B2B2B] font-medium transition hover:bg-gray-100">
          <MdOutlineDoorBack size={28} />
          Back
        </button>

        {/* Right Details Section */}
        <div className="w-full max-w-[1164px] mx-auto flex flex-col justify-center lg:justify-start">
          {/* Card Container */}
          <div className="bg-white w-full mx-auto p-5 md:py-[35px] md:px-[88px] rounded-3xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] border border-gray-200">
            {/* Title */}
            <h2 className="text-center text-[#2B2B2B] font-[400] text-[26px] leading-[24px] tracking-[4%] sm:text-[40px] sm:leading-[48px] font-['Apex_Mk2'] mb-6">
              CHOOSE COLLECTION
            </h2>

            {/* Collection List */}
            <div className="flex flex-col mt-20 gap-4">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="flex mx-auto w-full max-w-[628px] h-[91px] justify-between items-center p-4 border-2 border-[#E7E7E7] rounded-xl"
                >
                  {/* Left Side: Image & Text */}
                  <div className="flex items-center gap-4">
                    <div className="w-[61px] h-[61px] flex items-center justify-center rounded-lg overflow-hidden">
                      <Image
                        src={collection.image}
                        alt={collection.name}
                        width={61}
                        height={61}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <p className="text-[#2B2B2B] text-[14px] sm:text-[18px] font-medium">
                        {collection.name}
                      </p>
                      <p className="text-[#808080] text-[12px] sm:text-[14px] font-normal">
                        Items <b className="text-black">{collection.items}</b>
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Select Button */}
                  <button className="px-4 py-2 w-full max-w-[115px] h-[51px] bg-[#F4F4F4] border-2 border-[#E7E7E7] rounded-lg text-black font-medium sm:max-w-[90px] sm:h-[45px] text-sm">
                    Select
                  </button>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <div className="w-full flex justify-end mt-6">
              <button className="w-full max-w-[139px] h-[53px] px-4 py-3 text-[18px] text-white font-medium rounded-xl bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] shadow-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
