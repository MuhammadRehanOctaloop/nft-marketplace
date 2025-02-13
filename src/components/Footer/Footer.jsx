"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaDiscord,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const socialIcons = [
  { icon: <FaFacebookF />, key: "facebook" },
  { icon: <FaTelegramPlane />, key: "telegram" },
  { icon: <FaLinkedinIn />, key: "linkedin" },
  { icon: <FaDiscord />, key: "discord" },
  { icon: <FaInstagram />, key: "instagram" },
  { icon: <FaTiktok />, key: "tiktok" },
];

const Footer = () => {
  const [bgImage, setBgImage] = useState("url('/footer/bg.png'),");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 770) {
        setBgImage(""); // Remove bg.png on small screens
      } else {
        setBgImage("url('/footer/bg.png'), "); // Restore on larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-8 bg-white">
      {/* Heading Section */}
      <h1 className="text-[clamp(32px,6vw,64px)] leading-[clamp(40px,8vw,130px)] font-bold text-center font-oxanium tracking-wider">
        Ready for Next NFT Drop?
      </h1>

      {/* Email Subscription Box */}
      <div className="flex w-full max-w-[680px] h-auto md:h-[70px] lg:h-[96px] items-center border border-red-300 rounded-2xl shadow-md bg-white mt-6 px-4">
        <input
          type="email"
          placeholder="info@gmail.com"
          className="px-3 py-2 md:px-4 md:py-3 placeholder-red-500 text-red-500 text-base md:text-lg w-full outline-none bg-transparent"
        />
        <button className="bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white p-2 md:p-3 flex items-center justify-center rounded-2xl m-1">
          <FaTelegramPlane size={30} />
        </button>
      </div>

      {/* Footer Section */}
      <div
        className="w-full mt-10 max-w-[1320px] sm:h-auto lg:h-[358px] md:h-[358px] text-white p-6 md:p-8 rounded-lg flex flex-col items-center"
        style={{
          backgroundImage: `${bgImage} linear-gradient(90deg, #FF4D4D 0%, #FF0000 80%)`,
          backgroundSize: "contain, cover",
          backgroundPosition: "left, center",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="w-full max-w-[1064px] sm:h-auto lg:h-[264px] md:h-[264px] text-white rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* 1st Column - Logo */}
          <div className="w-full md:w-1/3 flex justify-center top-0">
            <Image
              src="/footer/logo.png"
              alt="Fry Networks Logo"
              width={195.01}
              height={130.91}
            />
          </div>

          {/* 2nd Column - Text & Social Icons */}
          <div className="w-full md:w-1/3 my-auto flex flex-col items-center text-center md:items-center">
            <p className="max-w-[320px] text-left text-[20px] leading-[36px] tracking-[0%] font-medium font-roboto">
              NFT ALGO is the world’s leading NFTs marketplace where you can
              discover, sell, and bid NFTs and get rich.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 mt-10">
              {socialIcons.map(({ icon, key }) => (
                <div
                  key={key}
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-md text-red-600 text-xl hover:bg-gray-200 transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* 3rd Column - Navigation Links */}
          <div className="w-full md:w-1/3 my-auto flex flex-col items-center md:items-end text-left md:text-left gap-4">
            <h2 className="text-[24px] mr-14 leading-[35.45px] tracking-[0%] font-roboto font-bold">
              About
            </h2>
            <ul className="mt-2 space-y-1 text-[20px] leading-[50.5px] tracking-[0%] font-roboto font-normal md:text-[20px]">
              {["About NFT", "Live Auctions", "Collection", "Activity"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
