import Image from "next/image";

export default function ImageGenerator() {
  return (
    <div className="mt-40 m-4">
      {/* Header */}
      <div className="flex flex-col lg:flex-row max-w-[1316px] mx-auto mb-10 gap-5 items-center lg:items-end lg:justify-between">
        {/* Heading */}
        <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex w-full text-center">
          Turn your imagination <br /> into digital Asset
        </p>
      </div>

      {/* Main Content */}
      <div
        className="relative flex items-center justify-center h-[747px] max-w-[1316px] mx-auto"
      >
        {/* Input Box */}
        <div className="relative flex w-[737px] h-[70px] border rounded-2xl bg-white shadow-lg">
          <input
            type="text"
            placeholder="Fantasy Creature holding a sword..."
            className="w-full h-full py-3 px-6 rounded-full focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-[119px] h-[50px] bg-[#FE0101] text-white font-roboto font-bold text-[18px] leading-[21.09px] tracking-[0%] text-center rounded-2xl hover:bg-[#E00000]">
            Generate
          </button>
        </div>

        {/* Static Images with Fixed Positions */}
        <Image
          src="/home/section8/1.png"
          width={160}
          height={160}
          className="absolute bottom-[12rem] right-3 rounded-xl"
          alt="icon-1"
        />
        <Image
          src="/home/section8/2.png"
          width={170}
          height={170}
          className="absolute bottom-[3rem] right-[14rem] rounded-xl"
          alt="icon-2"
        />
        <Image
          src="/home/section8/3.png"
          width={120}
          height={120}
          className="absolute bottom-[6.5rem] left-[16rem] rounded-xl"
          alt="icon-3"
        />
        <Image
          src="/home/section8/4.png"
          width={120}
          height={120}
          className="absolute bottom-[12rem] left-3 rounded-xl"
          alt="icon-4"
        />
        <Image
          src="/home/section8/5.png"
          width={170}
          height={170}
          className="absolute top-[16rem] left-[4rem] rounded-xl"
          alt="icon-5"
        />
        <Image
          src="/home/section8/6.png"
          width={110}
          height={110}
          className="absolute top-[6rem] right-[4rem] rounded-xl"
          alt="icon-6"
        />
        <Image
          src="/home/section8/7.png"
          width={170}
          height={170}
          className="absolute top-0 right-[17.5rem] rounded-xl"
          alt="icon-7"
        />
        <Image
          src="/home/section8/8.png"
          width={120}
          height={120}
          className="absolute top-[4rem] left-[4rem] rounded-xl"
          alt="icon-8"
        />
      </div>
    </div>
  );
}
