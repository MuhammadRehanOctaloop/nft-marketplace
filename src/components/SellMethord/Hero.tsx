import Image from "next/image";
import { MdOutlineDoorBack } from "react-icons/md";
import { CheckCircle } from "lucide-react";
import { SlCalender } from "react-icons/sl";

const Hero = () => {
  return (
    <div className="mt-40 m-10">
      <div className="flex flex-col lg:flex-row justify-center max-w-[1320px] mx-auto gap-5">
        {/* Left Image Section */}
        <div className="relative w-full max-w-[256px] sm:w-[80%] md:w-[60%] justify-center mx-auto">
          <button className="flex mb-6 w-full max-w-[126px] h-[64px] text-[20px] justify-center shadow-lg items-center gap-4 px-4 py-2 rounded-2xl bg-white text-[#2B2B2B] font-medium transition hover:bg-gray-100">
            <MdOutlineDoorBack size={28} />
            Back
          </button>
          <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-300">
            <Image
              src="/MintNFT/img.png"
              alt="NFT Character 1"
              width={256}
              height={269}
              className="rounded-xl shadow-md object-cover"
              unoptimized
            />
          </div>

          <p className="font-roboto mt-5 font-medium text-[22px] leading-[25.78px] tracking-[4%] text-black">
            Preview your item
          </p>
        </div>

        {/* Right Details Section */}
        <div className="w-full mt-20 max-w-[994px] mx-auto flex flex-col justify-center lg:justify-start">
          {/* Price Section */}
          <div className="bg-white w-full mx-auto p-5 md:py-[35px] md:px-[88px] rounded-3xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] border border-gray-200">
            <h2 className="text-center text-[#2B2B2B] font-[400] text-[26px] leading-[24px] tracking-[4%] sm:text-[40px] sm:leading-[48px] font-['Apex_Mk2'] mb-6">
              Royal Samurai
            </h2>

            {/* Select Sell Method */}
            <div>
              <label className="block text-[#2B2B2B] text-[26px] font-bold mb-3">
                Select Your Sell Method
              </label>
              <div className="flex gap-4">
                {/* Fixed Price */}
                <div className="w-[207px] h-[217px] flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow-md cursor-pointer relative">
                  {/* Checkmark Icon */}
                  <div className="absolute top-2 right-2">
                    <CheckCircle size={24} className="text-black" />
                  </div>

                  {/* Icon with Circular Background */}
                  <div className="w-[125px] h-[125px] flex items-center justify-center bg-white rounded-full">
                    <div className="w-[99px] h-[99px] bg-[#45ADEB] flex items-center justify-center rounded-full">
                      <Image
                        src="/SellMethord/1.png"
                        alt="Fixed Price"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="mt-2 text-[20px] font-medium text-black">
                    Fixed Price
                  </p>
                </div>

                {/* Auction */}
                <div className="w-[207px] h-[217px] flex flex-col items-center justify-center bg-white rounded-xl shadow-md cursor-pointer relative">
                  {/* Checkmark Icon */}
                  <div className="absolute top-2 right-2">
                    <CheckCircle size={24} className=" text-black" />
                  </div>

                  {/* Icon with Circular Background */}
                  <div className="w-[125px] h-[125px] flex items-center justify-center bg-gray-100 rounded-full">
                    <div className="w-[99px] h-[99px] bg-[#F7A940] flex items-center justify-center rounded-full">
                      <Image
                        src="/SellMethord/2.png"
                        alt="Fixed Price"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <p className="mt-2 text-[20px] font-medium text-black">
                    Auction
                  </p>
                </div>
              </div>
            </div>

            {/* Price Field */}
            <div className="mt-6">
              <label className="block text-[#2B2B2B] text-[20px] font-normal">
                Price
              </label>
              <div className="flex items-center justify-center">
                {/* Currency Icon & Label */}
                <div className="flex w-full border-2 border-gray-300 max-w-[126] h-[58px] justify-center items-center gap-2 bg-white px-3 py-2 rounded-xl">
                  <Image
                    src="/card/crypto.png"
                    alt="Crypto Icon"
                    width={24}
                    height={24}
                  />
                  <span className="text-gray-800 font-medium text-[18px]">
                    FRY
                  </span>
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  className="ml-5 pl-5 w-full max-w-[671px] h-[58px] border-2 border-gray-300 rounded-xl outline-none bg-transparent text-[18px] placeholder-gray-500"
                  placeholder="Enter price for one item"
                />
              </div>
            </div>

            {/* Duration Field */}
            <div className="mt-6">
              <label className="block text-[#2B2B2B] text-[20px] font-normal">
                Duration
              </label>
              <select className="w-full h-[58px] py-3 px-4 border border-gray-300 rounded-xl bg-white outline-none text-[18px] text-gray-500">
                <option>Select time</option>
                <option>1 Day</option>
                <option>3 Days</option>
                <option>1 Week</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="block text-[#2B2B2B] text-[20px] font-normal">
                Schedule Listing
              </label>
              <div className="relative mt-4">
                <input
                  type="text"
                  className="w-full py-3 px-5 border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl bg-white outline-none placeholder-gray-400 pl-12"
                  placeholder="1 month"
                />
                <SlCalender className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-[20px]" />
              </div>
            </div>

            {/* Continue Button */}
            <div className="w-full flex justify-end mt-10">
              <button className="w-full max-w-[139px] h-[53px] px-4 py-3 text-[18px] text-white font-medium rounded-xl bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
