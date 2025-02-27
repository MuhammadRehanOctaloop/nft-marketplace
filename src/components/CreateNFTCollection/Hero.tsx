import Image from "next/image";
import { MdOutlineDoorBack } from "react-icons/md";

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
          {/* Button */}
          <button className="flex mt-10 w-full text-[16px] text-[#808080] max-w-[129px] h-[51px] shadow border-2 justify-center items-center gap-4 px-4 py-2 rounded-2xl bg-white font-medium transition hover:bg-gray-100">
            Choose file
          </button>
        </div>

        {/* Right Details Section */}
        <div className="w-full max-w-[994px] mx-auto flex flex-col justify-center lg:justify-start">
          <button className="flex mb-9 w-full text-[16px] text-[#808080] max-w-[129px] h-[51px] border-2 justify-center items-center gap-4 px-4 py-2 rounded-2xl bg-white font-medium transition hover:bg-gray-100">
            Collection
          </button>

          {/* Price Section */}
          <div className="bg-white w-full mx-auto p-5 md:py-[35px] md:px-[88px] rounded-3xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] border border-gray-200">
            <h2 className="text-center text-[#2B2B2B] font-[400] text-[26px] leading-[24px] tracking-[4%] sm:text-[40px] sm:leading-[48px] font-['Apex_Mk2'] mb-6">
              create a collection
            </h2>

            {/* Form Fields */}
            <div className="flex flex-col mt-10 gap-6">
              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Collection Name*
                </label>
                <input
                  type="text"
                  className="w-full py-3 px-5 border max-w-[817px] h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="Name your Collection"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Token Symbol*
                </label>
                <input
                  type="text"
                  className="w-full py-3 px-5 border max-w-[817px] h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="$ CGPT, for example"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Description
                </label>
                <label className="block mt-2 text-[#2B2B2B] text-[18px] font-normal">
                  The description will be included on the items detail page
                  underneath its image.
                </label>
                <textarea
                  className="w-full py-3 px-5 border max-w-[817px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="Provide a detailed description of your item"
                  rows={3}
                ></textarea>
              </div>
            </div>

            {/* Continue Button */}
            <div className="w-full flex justify-end mt-6">
              <button className="w-full max-w-[139px] h-[53px] px-4 py-3 text-[18px] text-white font-medium rounded-xl bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] shadow-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
