"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <div className="m-10">
      <div className="w-full max-w-[817px] mx-auto flex flex-col justify-center items-center gap-6">
        {/* Form Fields */}
        <div className="flex w-full flex-col gap-6">
          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
              Display Name
            </label>
            <input
              type="text"
              className="w-full py-3 px-5 border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-4 bg-white outline-none"
              placeholder="Enter your Name"
            />
          </div>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
              Bio
            </label>
            <textarea
              className="w-full py-3 px-5 border font-[400] text-[18px] border-gray-300 rounded-xl mt-4 bg-white outline-none"
              placeholder="Enter Bio"
              rows={5}
            ></textarea>
          </div>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
              E-Mail
            </label>
            <input
              type="text"
              className="w-full py-3 px-5 border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-4 bg-white outline-none"
              placeholder="Enter Email"
            />
          </div>

          <h2 className="text-left mt-10 text-[#2B2B2B] font-[400] text-[26px] leading-[24px] tracking-[4%] sm:text-[40px] sm:leading-[48px] font-['Apex_Mk2'] mb-6">
            Social Links
          </h2>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
              Website
            </label>
            <input
              type="text"
              className="w-full py-3 px-5 border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-4 bg-white outline-none"
              placeholder="http://"
            />
          </div>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
            X(Twitter)
            </label>
            <div className="relative w-full mt-4">
              <input
                type="text"
                className="w-full py-3 px-5 pr-[100px] border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl bg-white outline-none"
                placeholder="@username"
              />
              <button className="absolute w-full items-center justify-center flex max-w-[101px] h-[34px] top-1/2 right-3 transform -translate-y-1/2 p-2 text-white font-medium rounded-lg bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] transition hover:opacity-90">
                Connect
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
            Discord
            </label>
            <div className="relative w-full mt-4">
              <input
                type="text"
                className="w-full py-3 px-5 pr-[100px] border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl bg-white outline-none"
                placeholder="@username"
              />
              <button className="absolute w-full items-center justify-center flex max-w-[101px] h-[34px] top-1/2 right-3 transform -translate-y-1/2 p-2 text-white font-medium rounded-lg bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] transition hover:opacity-90">
                Connect
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[#2B2B2B] text-[20px] font-bold">
            Instagram
            </label>
            <div className="relative w-full mt-4">
              <input
                type="text"
                className="w-full py-3 px-5 pr-[100px] border h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl bg-white outline-none"
                placeholder="@username"
              />
              <button className="absolute w-full items-center justify-center flex max-w-[101px] h-[34px] top-1/2 right-3 transform -translate-y-1/2 p-2 text-white font-medium rounded-lg bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] transition hover:opacity-90">
                Connect
              </button>
            </div>
          </div>

          {/* Mint Button */}
            <Link href="/ArtistProfile">
              <button className="w-full mt-5 max-w-[179px] h-[53px] p-2 items-center justify-center text-[18px] text-white font-medium rounded-xl bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] shadow-lg">
              Save changes
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
