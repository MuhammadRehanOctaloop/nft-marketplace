import Image from "next/image";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
import { BiGlasses } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";

const Hero = () => {
  return (
    <div className="mt-40 m-10">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1320px] mx-auto gap-5">
        {/* Left Image Section */}
        <div className="relative bg-white p-4 rounded-2xl shadow-lg w-full sm:w-[80%] md:w-[60%] lg:w-auto border border-gray-300">
          <Image
            src="/NFTDetail/hero/1.png"
            alt="NFT Character 1"
            width={514}
            height={572}
            className="rounded-xl shadow-md object-cover w-full h-auto"
            unoptimized
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full max-w-[674px] mx-5 flex flex-col gap-4">
          <h1 className="text-[#2B2B2B] font-apex font-normal text-[48px] md:text-[64px] lg:text-[64px] leading-tight tracking-[0.04em] text-center md:text-left lg:text-left">
            PIXACIO
          </h1>
          <p className="text-gray-500 text-lg">
            Owned by{" "}
            <span className="font-semibold text-black">Stella Nova</span>
          </p>

          {/* Price Section */}
          <div className="bg-white p-4 rounded-lg flex flex-col gap-2 border-b-2 border-r-2  border-gray-300 shadow-[1px_1px_15px_rgba(0,0,0,0.20)]">
            {/* Sale Info */}
            <div className=" rounded-lg flex items-center gap-2 border">
              <IoMdTime className="text-gray-600 w-5 h-5" />
              <span className="text-gray-600 text-sm">
                Sale ends 18 November 2023 at 8:47 am
              </span>
            </div>

            <span className="text-gray-600 text-sm mt-6">Current price</span>
            <span className="text-black text-2xl font-bold">5.001 FRY</span>
            <div className="flex gap-4 mt-2">
              <button className="px-4 py-2 rounded-lg border border-gray-300 text-black font-medium w-full">
                Buy now
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium w-full">
                Make offer
              </button>
            </div>
          </div>

          {/* Listings */}
          <div className="bg-white mt-6 p-4 rounded-lg border-b-2 border-r-2  border-gray-300 shadow-[1px_1px_10px_rgba(0,0,0,0.20)]">
            <h3 className="text-gray-600 text-sm font-semibold">Listings</h3>
            <div className="flex justify-between text-gray-500 text-sm mt-2 border-b pb-2">
              <span>Price</span>
              <span>USD Price</span>
              <span>Quantity</span>
              <span>From</span>
            </div>
            <div className="flex justify-between items-center text-black font-medium mt-2">
              <span>0.008 FRY</span>
              <span>$4.25</span>
              <span>2</span>
              <span>16DD55</span>
              <button className="px-3 py-1 bg-red-500 text-white rounded-lg">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
