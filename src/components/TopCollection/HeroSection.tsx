import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-40 m-10 flex justify-center">
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-[1320px] mx-auto w-full">
        {/* Left Text Section */}
        <div className="text-center flex flex-col items-center">
          <h1 className="text-[#FE0101] font-apex font-bold text-[110px] leading-[132px] tracking-[4%] uppercase sm:text-[220px] sm:leading-[264px]">
            NFT
          </h1>
          <h2 className="text-[#2B2B2B] font-apex font-bold text-[32px] leading-[38.4px] tracking-[4%] sm:text-[64px] sm:leading-[76.8px]">
            Collections
          </h2>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full flex justify-center mt-5">
          <Image
            src="/TopCollection/hero/1.png"
            alt="NFT Character 1"
            width={714}
            height={687}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
