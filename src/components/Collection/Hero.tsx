import Image from "next/image";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
import { BiGlasses } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="mt-40 m-10">
      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-[1320px] mx-auto w-full gap-10">
        {/* Left Image Section */}
        <div className="relative flex justify-center p-4 items-center bg-slate-100 rounded-3xl shadow-md w-full sm:w-[80%] md:w-[60%] lg:w-auto">
          <Image
            src="/collection/hero/1.png"
            alt="NFT Character 1"
            width={482}
            height={461}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
            unoptimized
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center w-full max-w-[674px] lg:w-[674px] mx-4">
          {/* Title */}
          <h1 className="text-[#2B2B2B] font-apex font-normal text-[48px] md:text-[64px] lg:text-[64px] leading-tight tracking-[0.04em] text-center md:text-left lg:text-left">
            PIXACIO
          </h1>

          {/* Stats Section */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start lg:justify-start">
            <div className="bg-white px-6 py-3 w-full sm:w-[280px] md:w-[320px] h-auto rounded-lg shadow-md text-[14px] text-[#808080] font-roboto flex items-center justify-between border border-gray-300">
              <span>Items listed</span>
              <span className="font-bold text-[#808080]">3,027</span>
            </div>

            <div className="bg-white px-6 py-3 w-full sm:w-[280px] md:w-[320px] h-auto rounded-lg shadow-md text-[14px] text-[#808080] font-roboto flex items-center justify-between border border-gray-300">
              <span>Num of Sold Items</span>
              <span className="font-bold text-[#808080]">120</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start lg:justify-start">
            <div className="bg-white px-6 py-3 mt-6 w-full sm:w-[280px] md:w-[320px] h-auto rounded-lg shadow-md text-[14px] text-[#808080] font-roboto flex items-center justify-between border border-gray-300">
              <span>Vol FRY</span>
              <span className="font-bold text-[#808080]">18.5 FRY</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[2px] bg-red-500 w-full my-6"></div>

          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start lg:justify-start">
            <button className="bg-white px-3 py-2 rounded shadow-md flex items-center gap-2 border border-gray-300">
              <IoGlobeOutline className="text-black w-5 h-5" />
            </button>
            <button className="bg-white px-3 py-2 rounded shadow-md flex items-center gap-2 border border-gray-300">
              <BsTwitter className="text-black w-5 h-5" />
              <span className="bg-[#FFCCCC] px-2 py-1 text-[10px] font-bold rounded">
                12.3k
              </span>
            </button>
            <button className="bg-white px-3 py-2 rounded shadow-md flex items-center gap-2 border border-gray-300">
              <BsDiscord className="text-black w-5 h-5" />
              <span className="bg-[#FFCCCC] px-2 py-1 text-[10px] font-bold rounded">
                12.3k
              </span>
            </button>
            <button className="bg-white px-3 py-2 rounded shadow-md flex items-center gap-2 border border-gray-300">
              <BiGlasses className="text-black w-5 h-5" />
              <span className="bg-[#FFCCCC] px-2 py-1 text-[10px] font-bold rounded">
                12.3k
              </span>
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-xs md:text-sm mt-6 leading-relaxed text-center md:text-left lg:text-left font-roboto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod vulputate ipsum, non molestie magna facilisis a. Cras tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus purus. In gravida eros ac aliquam facilisis. Suspendisse at elementum metus. Proin elementum maximus placerat. Suspendisse sapien justo, interdum sit amet sollicitudin quis, porttitor a metus. In eu accumsan dolor, eu venenatis eros. Aliquam erat volutpat. Etiam suscipit placerat mi. Mauris diam purus, sagittis eu feugiat eu, sodales a quam. Cras elit enim. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
