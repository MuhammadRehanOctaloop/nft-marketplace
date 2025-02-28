import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mt-36 m-10">
      {/* Background Image */}
      <div className="relative w-full max-w-[1320px] flex flex-col items-center mx-auto">
        {/* Buttons Title */}
        <div className="flex justify-start w-full">
          <div className="flex items-center border rounded-lg p-2 shadow-md w-full max-w-[236px] h-[50px]">
            <button className="p-2 items-center justify-center flex text-[14px] font-medium text-white rounded-md transition-all w-full max-w-[90px] h-[34px] bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]">
              Profile
            </button>
            <Link href="/ArtistProfileSettings">
            <button className="p-2 items-center justify-center flex text-[14px] font-normal text-black rounded-md transition-all w-full max-w-[125px] h-[34px]">
              Profile Settings
            </button>
            </Link>
          </div>
        </div>

        {/* Central Image */}
        <div className="relative mt-8 w-full h-[505px] flex justify-center">
          {/* bg image section with button */}
          <div className="relative w-full h-[505px]">
            <Image
              src="/ArtistProfile/hero/bg.png"
              alt="Main Collection Image"
              width={1320}
              height={305} // Set this to maintain aspect ratio
              className="w-full h-[305px]"
            />
            <button className="absolute top-3 right-3 p-2 items-center justify-center flex text-[18px] font-bold text-white rounded-2xl transition-all w-full max-w-[103px] h-[53px] bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292]">
              Follow
            </button>
          </div>

          {/* User Details section */}
          <div className="absolute top-[16rem] w-full max-w-[353] items-center justify-center text-center">
            <div className="relative w-full flex justify-center items-center">
              <Image
                src="/ArtistProfile/hero/user.png" // Replace with actual image URL
                alt="Profile Picture"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-[28px] font-normal text-[#2B2B2B] leading-[48px] tracking-[4%] text-center sm:text-[40px] font-apex">
              WILLIAM AKARANA
            </h2>
            <div className="flex  justify-center gap-4 mt-2">
              <span className="font-normal text-[14px] text-[#808080]">
                {" "}
                <b className="font-bold size-[20px] text-black">
                  99
                </b> Followers{" "}
              </span>
              <span className="font-normal text-[14px] text-[#808080]">
                <b className="font-bold size-[20px] text-black">26</b> Following
              </span>
              <span className="font-normal text-[14px] text-[#808080]">
                <b className="font-bold size-[20px] text-black">12</b> Items
              </span>
            </div>
            {/* Button */}
            <button className="flex mt-5 mx-auto w-full text-[16px] text-[#808080] max-w-[162px] h-[53px] shadow border-[3px] justify-center items-center gap-2 p-2 rounded-2xl bg-white font-medium transition hover:bg-gray-100">
              <Image
                src="/ArtistProfile/hero/logo.png" // Replace with actual icon URL
                alt="Down arrow"
                width={19}
                height={19}
              />
              Choose file
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
