import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-36 m-10">
      {/* Background Image */}
      <div className="relative w-full max-w-[1360px] flex flex-col items-center mx-auto">
        {/* Main Title */}
        <h1 className="text-[24px] font-apex sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[64px] font-normal text-black text-center">
          Create your own
          <span className="relative ml-3 sm:ml-4 md:ml-6 p-3 sm:p-4 font-bold text-red-600 uppercase tracking-wide">
            MASTERPIECE
            <span className="absolute top-0 left-0 w-[140px] h-[40px] sm:w-[160px] sm:h-[45px] md:w-[183px] md:h-[49.5px] border-t-[3.7px] border-l-[3.7px] border-red-600"></span>
            <span className="absolute bottom-[0px] right-[0px] w-[140px] h-[40px] sm:w-[160px] sm:h-[45px] md:w-[183px] md:h-[49.5px] border-b-[3.7px] border-r-[3.7px] border-red-600"></span>
          </span>
        </h1>

        {/* Central Image */}
        <div className="relative mt-10 w-full flex justify-center">
          <Image
            src="/AiNFTGeneration/hero/baner.png"
            alt="Main Collection Image"
            width={1320}
            height={496}
          />

          {/* Bottom Text */}
          <p
            className="absolute bottom-0 text-gray-500 font-roboto font-normal text-[10px] leading-[14px] sm:text-[10px] md:text-[15px] lg:text-[16px] xlg:text-[18px]"
          >
            Get Onboard And Earn Money Like A Pro
          </p>
        </div>
      </div>
    </div>
  );
}
