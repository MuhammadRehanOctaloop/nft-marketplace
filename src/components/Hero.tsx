import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gradient-to-b from-white to-[#FFECEC]">
      <h1 className="text-[64px] md:text-[96px] leading-[72px] md:leading-[102px] tracking-[4%] font-[Apex Mk2] font-normal text-black text-center uppercase">
        DISCOVER, CREATE & SELL ARTWORKS.
      </h1>
      <p className="mt-4 text-[16px] md:text-[18px] leading-[24px] md:leading-[28.8px] font-roboto text-gray-600 max-w-[600px]">
        Discover and trade unique digital art pieces on our NFT website, where creativity meets blockchain technology.
      </p>
    </section>
  );
};

export default Hero;
