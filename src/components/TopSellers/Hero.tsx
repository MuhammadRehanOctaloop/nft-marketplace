import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-40 m-10 flex justify-center">
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-[1320px] mx-auto gap-10">
        {/* Left Text Section */}
        {/* Left Text Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[#2B2B2B] font-apex font-bold text-[32px] leading-[38.4px] tracking-[4%] sm:text-[64px] sm:leading-[76.8px]">
            Top
          </h2>
          <h1 className="text-[#FE0101] font-apex font-bold text-[64px] leading-[76.8px] tracking-[2.5px] uppercase sm:text-[128px] sm:leading-[153.6px]">
            SELLERS
          </h1>
        </div>

        {/* Right Image Section */}
        {/* <div className="relative w-full flex justify-center">
          <Image
            src="/TopSellers/hero/1.png"
            alt="NFT Character 1"
            width={495}
            height={525}
            unoptimized
          />
        </div> */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/TopSellers/hero/1.png"
            alt="NFT Character 1"
            width={495}
            height={525}
            className="w-[250px] h-[265px] sm:w-[350px] sm:h-[375px] md:w-[495px] md:h-[525px] lg:w-[495px] lg:h-[525px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
