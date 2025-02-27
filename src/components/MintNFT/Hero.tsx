"use client";

import Image from "next/image";
import { MdOutlineDoorBack } from "react-icons/md";
import { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  const [traits, setTraits] = useState(["blue : fox"]);
  const [royalties, setRoyalties] = useState(false);

  return (
    <div className="mt-40 m-10no">
      <div className="flex flex-col lg:flex-row justify-center max-w-[1320px] mx-auto gap-5">
        {/* Left Image Section */}
        <div className="relative w-full max-w-[256px] sm:w-[80%] md:w-[60%] justify-center mx-auto">
          <button className="flex mb-6 w-full max-w-[126px] h-[64px] text-[20px] justify-center shadow-lg items-center gap-4 px-4 py-2 rounded-2xl bg-white text-[#2B2B2B] font-medium transition hover:bg-gray-100">
            <MdOutlineDoorBack size={28} />
            Back
          </button>
          <div className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-300">
            <Image
              src="/MintNFT/img.png"
              alt="NFT Character 1"
              width={256}
              height={269}
              className="rounded-xl shadow-md object-cover"
              unoptimized
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 m-4 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold tracking-wide">
                SELECTED
              </span>
            </div>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="w-full max-w-[994px] mx-auto flex flex-col justify-center lg:justify-start">
          <button className="flex mb-9 w-full text-[16px] text-[#808080] max-w-[129px] h-[51px] border-2 justify-center items-center gap-4 px-4 py-2 rounded-2xl bg-white font-medium transition hover:bg-gray-100">
            Single NFT
          </button>

          {/* Price Section */}
          <div className="bg-white w-full mx-auto p-5 md:py-[35px] md:px-[88px] rounded-3xl shadow-[0px_4px_15px_0px_rgba(0,0,0,0.10)] border border-gray-200">
            <h2 className="text-center text-[#2B2B2B] font-[400] text-[26px] leading-[24px] tracking-[4%] sm:text-[40px] sm:leading-[48px] font-['Apex_Mk2'] mb-6">
              MINT YOUR NFT
            </h2>

            {/* Form Fields */}
            <div className="flex flex-col mt-10 gap-6">
              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Item Name*
                </label>
                <input
                  type="text"
                  className="w-full py-3 px-5 border max-w-[817px] h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="Name your NFT"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Token Symbol*
                </label>
                <input
                  type="text"
                  className="w-full py-3 px-5 border max-w-[817px] h-[58px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="$ CGPT, for example"
                />
              </div>

              <div>
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Description
                </label>
                <label className="block mt-2 text-[#2B2B2B] text-[18px] font-normal">
                  The description will be included on the items detail page
                  underneath its image.
                </label>
                <textarea
                  className="w-full py-3 px-5 border max-w-[817px] font-[400] text-[18px] border-gray-300 rounded-xl mt-1 bg-gray-100 outline-none"
                  placeholder="Provide a detailed description of your item"
                  rows={3}
                ></textarea>
              </div>
            </div>

            {/* Choose Collection */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label className="block text-[#2B2B2B] text-[20px] font-medium">
                  Choose Collection
                </label>
                <Link href="/ChooseCollection">
                  <span className="text-[#808080] text-[16px] font-normal cursor-pointer underline">
                    Choose From Existed
                  </span>
                </Link>
              </div>
              <label className="block mt-2 text-[#808080] text-[16px] font-normal">
                (This is the collection where your item will appear)
              </label>

              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-2">
                <Link
                  href="/CreateNFTCollection"
                  className="w-full max-w-[396] h-[91]"
                >
                  <button className="flex w-full max-w-[396] h-[91] items-center gap-4 px-4 py-3 border border-gray-300 rounded-xl text-sm outline-none">
                    <div className="w-[61px] h-[61px] flex items-center justify-center bg-[#E7E7E7] rounded-lg">
                      <IoMdAdd className="text-gray-600 text-xl" />
                    </div>
                    <p className="block text-left text-[#2B2B2B] text-[18px] font-medium">
                      Create new collection
                      <span className="block mt-2 text-[#808080] text-[14px] font-normal">
                        Type to create
                      </span>
                    </p>
                  </button>
                </Link>
                <button className="flex items-center gap-4 px-4 py-3 border border-gray-300 rounded-xl w-full max-w-[396] h-[91] text-sm outline-none">
                  <div className="w-[61px] h-[61px] flex items-center justify-center bg-[#E7E7E7] rounded-lg">
                    <Image
                      src="/MintNFT/card.png"
                      alt="Collection"
                      width={61}
                      height={61}
                      className="rounded"
                    />
                  </div>
                  <p className="block text-left text-[#2B2B2B] text-[18px] font-medium">
                    Wonderful Artwork
                    <span className="block mt-2 text-[#808080] text-[14px] font-normal">
                      Items <b className="text-black">1.5k</b>
                    </span>
                  </p>
                </button>
              </div>
            </div>

            {/* Add Traits */}
            <div className="mt-4">
              <label className="block text-[#2B2B2B] text-[20px] font-medium">
                Add Traits
              </label>
              <label className="block mt-2 text-[#2B2B2B] text-[18px] font-normal">
                Traits describe attributes of your item. They appear as filters
                inside your collection page and are also listed out inside your
                item page.
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {traits.map((trait, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full max-w-[817px] h-[58px] bg-[#F4F4F4] px-10 py-3 rounded-xl font-medium text-black text-[18px]"
                  >
                    {trait}
                    <div className="flex items-center gap-4">
                      <FaRegEdit
                        size={24}
                        className="text-[#2B2B2B] cursor-pointer"
                        onClick={() => setTraits([])}
                      />
                      <IoMdClose
                        size={24}
                        className="ml-0 sm:ml-10 text-[#2B2B2B] cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-[1px] my-6 bg-[#E7E7E7] w-full"></div>

              <button className="flex items-center justify-between text-[#808080] text-[18px] px-8 py-5 border border-gray-300 rounded-xl text-sm w-full max-w-[195px] h-[58px] bg-gray-100">
                Add Traits
                <IoMdAdd size={28} className="text-black" />
              </button>
            </div>

            {/* Royalties */}
            <div className="mt-4 flex-row items-center justify-between">
              <span className="text-[20px] font-medium">Royalties</span>
              <button
                onClick={() => setRoyalties(!royalties)}
                className={`relative w-[59px] h-[28px] mt-3 flex items-center rounded-full transition-colors ${
                  royalties ? "bg-red-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    royalties ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Mint Button */}
            <div className="w-full flex justify-end mt-6">
              <Link href="/ArtistProfile">
                <button className="w-full max-w-[139px] h-[53px] px-4 py-3 text-[18px] text-white font-medium rounded-xl bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] shadow-lg">
                  Mint NFT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
