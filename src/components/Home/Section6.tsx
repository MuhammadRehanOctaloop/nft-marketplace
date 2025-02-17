import Image from "next/image";

const sellers = [
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon1.png",
    images: [
      "/home/section6/nft_algo_1/1.png",
      "/home/section6/nft_algo_1/2.png",
      "/home/section6/nft_algo_1/3.png",
      "/home/section6/nft_algo_1/4.png",
      "/home/section6/nft_algo_1/5.png",
      "/home/section6/nft_algo_1/6.png",
      "/home/section6/nft_algo_1/7.png",
    ],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon2.png",
    images: [
      "/home/section6/nft_algo_2/1.png",
      "/home/section6/nft_algo_2/2.png",
      "/home/section6/nft_algo_2/3.png",
      "/home/section6/nft_algo_2/4.png",
      "/home/section6/nft_algo_2/5.png",
      "/home/section6/nft_algo_2/6.png",
      "/home/section6/nft_algo_2/7.png",
    ],
  },
  {
    name: "Wonderful ARTWORK",
    img: "/home/section6/icon3.png",
    images: [
      "/home/section6/nft_algo_3/1.png",
      "/home/section6/nft_algo_3/2.png",
      "/home/section6/nft_algo_3/3.png",
      "/home/section6/nft_algo_3/4.png",
      "/home/section6/nft_algo_3/5.png",
      "/home/section6/nft_algo_3/6.png",
      "/home/section6/nft_algo_3/7.png",
    ],
  },
  // Add more sellers if needed
];

export default function TopSellers() {
  return (
    <div className="m-4 sm:m-6 md:m-8 mt-20 sm:mt-28 md:mt-40">
      <div className="max-w-[1316px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <p className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left w-full">
            Top collections
          </p>
          <a
            href="#"
            className="text-red-500 w-[300px] hover:underline font-roboto font-medium text-[22px] sm:text-[20px] md:text-[22px] leading-[25.78px] text-center mt-6 lg:mt-0"
          >
            View More Collection
          </a>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-16 sm:mt-12 md:mt-16">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white w-[417] h-[301px] rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105"
            >
              {/* Image Grid */}
              <div className="grid mt-1 grid-cols-2 gap-2">
                {seller.images.slice(0, 2).map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt="Artwork"
                    width={181}
                    height={95}
                    className="rounded-lg object-cover w-full h-24"
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {seller.images.slice(2, 5).map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt="Artwork"
                    width={83}
                    height={73}
                    className="rounded-lg object-cover w-full h-20"
                  />
                ))}
              </div>

              {/* Profile Section */}
              <div className="flex items-center mt-4 space-x-3">
                <div className="relative">
                  <Image
                    src={seller.img}
                    alt={seller.name}
                    width={68}
                    height={68}
                  />
                </div>
                <div>
                  <p className="font-roboto font-bold text-[18px] leading-[21.09px] tracking-[0.5%]">
                    {seller.name}
                  </p>
                  <p className="font-roboto font-normal text-[14px] leading-[16.41px] tracking-[0.09em] text-gray-500">
                  Created by Jacob Jones
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
