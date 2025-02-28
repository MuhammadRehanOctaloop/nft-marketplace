import Image from "next/image";
import { SlCursor } from "react-icons/sl";

export default function Section8() {
  return (
    <div className="mt-40">
      {/* Header */}
      <div className="flex flex-col lg:flex-row max-w-[1316px] mx-auto mb-10 gap-5 items-center lg:items-end lg:justify-between">
        {/* Heading */}
        <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex w-full text-center">
          Turn your imagination <br /> into digital Asset
        </p>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center h-[500px] sm:h-[600px] md:h-[700px] lg:h-[747px] max-w-[1316px] mx-auto">
        {/* Input Box */}
        <div className="relative flex w-full max-w-[737px] h-[60px] sm:h-[65px] md:h-[70px] border rounded-2xl z-50 bg-white shadow-lg">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full h-full py-3 px-6 rounded-full focus:outline-none"
          />
          <button className="absolute flex items-center justify-center gap-2 right-3 top-1/2 -translate-y-1/2 w-[100px] sm:w-[110px] md:w-[119px] h-[40px] sm:h-[45px] md:h-[50px] bg-[#FE0101] text-white font-roboto font-bold text-[16px] sm:text-[17px] md:text-[18px] leading-[21.09px] text-center rounded-xl hover:bg-[#E00000]">
            Generate
            <SlCursor size={10} />
          </button>
        </div>

        {/* Static Images with Fixed Positions */}
        <Image src="/home/section8/1.png" width={140} height={140} className="absolute bottom-[10rem] sm:bottom-[12rem] right-2 sm:right-3 rounded-xl hover:scale-105 transition" alt="icon-1" />
        <Image src="/home/section8/2.png" width={150} height={150} className="absolute bottom-[2rem] sm:bottom-[3rem] right-[10rem] sm:right-[14rem] rounded-xl hover:scale-105 transition" alt="icon-2" />
        <Image src="/home/section8/3.png" width={110} height={110} className="absolute bottom-[5rem] sm:bottom-[6.5rem] left-[10rem] sm:left-[16rem] rounded-xl hover:scale-105 transition" alt="icon-3" />
        <Image src="/home/section8/4.png" width={110} height={110} className="absolute bottom-[10rem] sm:bottom-[12rem] left-2 sm:left-3 rounded-xl hover:scale-105 transition" alt="icon-4" />
        <Image src="/home/section8/5.png" width={150} height={150} className="absolute top-[12rem] sm:top-[16rem] left-[3rem] sm:left-[4rem] rounded-xl hover:scale-105 transition" alt="icon-5" />
        <Image src="/home/section8/6.png" width={100} height={100} className="absolute top-[5rem] sm:top-[6rem] right-[3rem] sm:right-[4rem] rounded-xl hover:scale-105 transition" alt="icon-6" />
        <Image src="/home/section8/7.png" width={150} height={150} className="absolute top-0 right-[12rem] sm:right-[17.5rem] rounded-xl hover:scale-105 transition" alt="icon-7" />
        <Image src="/home/section8/8.png" width={110} height={110} className="absolute top-[3rem] sm:top-[4rem] left-[3rem] sm:left-[4rem] rounded-xl hover:scale-105 transition" alt="icon-8" />
      </div>
    </div>
  );
}
