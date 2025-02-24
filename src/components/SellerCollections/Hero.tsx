import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mt-36 m-10">
      {/* Background Image */}
      <div className="relative w-full max-w-[1360px] flex flex-col items-center mx-auto">
        {/* Main Title */}
        <h1 className="text-[36px] sm:text-[50px] md:text-[64px] lg:text-[96px] xl:text-[96px] font-bold text-red-600 text-center">
          JACOB JONES
        </h1>
        <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] xl:text-[64px] font-bold text-black text-center">
          COLLECTIONS
        </h1>

        {/* Central Image */}
        <div className="relative w-full flex justify-center">
          <Image
            src="/SellerCollections/hero/bg.png"
            alt="Main Collection Image"
            width={1320}
            height={631}
          />
        </div>
      </div>
    </div>
  );
}
