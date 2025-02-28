"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);

  const profileInputRef = useRef<HTMLInputElement | null>(null);
  const bannerInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = (type: "profile" | "banner") => {
    if (type === "profile" && profileInputRef.current) {
      profileInputRef.current.click();
    } else if (type === "banner" && bannerInputRef.current) {
      bannerInputRef.current.click();
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "profile" | "banner"
  ) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      if (type === "profile") setProfileImage(imageUrl);
      else setBannerImage(imageUrl);
    }
  };
  return (
    <div className="mt-36 m-10">
      {/* Background Image */}
      <div className="relative w-full max-w-[1320px] flex flex-col items-center mx-auto">
        {/* Banner Upload Section */}
        <div className="relative w-full h-[305px] bg-[#D9D9D9] rounded-lg overflow-hidden flex justify-center items-center">
          {bannerImage && (
            <Image
              src={bannerImage}
              alt="Banner"
              layout="fill"
              objectFit="cover"
            />
          )}
          <button
            className="absolute px-4 py-2 bg-white border rounded-lg shadow text-gray-600 text-sm font-medium transition hover:bg-gray-100"
            onClick={() => handleButtonClick("banner")}
          >
            Upload Banner
          </button>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={bannerInputRef}
            onChange={(e) => handleImageChange(e, "banner")}
          />
        </div>

        {/* Profile Upload Section */}
        <div className="relative -mt-10">
          <div className="w-[100px] h-[100px] rounded-full border-2 border-dashed border-gray-500 flex justify-center items-center bg-[#D9D9D9] overflow-hidden">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-[40px] font-normal text-gray-500">+</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={profileInputRef}
            onChange={(e) => handleImageChange(e, "profile")}
          />
        </div>

        <button
          className="mt-5 px-4 py-2 bg-white border rounded-lg shadow text-gray-600 text-sm font-medium transition hover:bg-gray-100"
          onClick={() => handleButtonClick("profile")}
        >
          Upload Profile
        </button>
      </div>
    </div>
  );
}
