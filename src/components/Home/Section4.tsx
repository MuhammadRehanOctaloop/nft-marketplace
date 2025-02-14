import Image from "next/image";

const sellers = [
  { name: "Jacob Jones", img: "/home/section4/1.png" },
  { name: "Jacob Jones", img: "/home/section4/2.png" },
  { name: "Jacob Jones", img: "/home/section4/3.png" },
  { name: "Jacob Jones", img: "/home/section4/4.png" },
  { name: "Jacob Jones", img: "/home/section4/5.png" },
  { name: "Jacob Jones", img: "/home/section4/6.png" },
  { name: "Jacob Jones", img: "/home/section4/7.png" },
  { name: "Jacob Jones", img: "/home/section4/8.png" },
];

export default function TopSellers() {
  return (
    <div className="m-8 mt-40">
      <div className="p-6 max-w-[1316px] mx-auto justify-between">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex w-full text-center lg:text-left">
            Trending NFT’s
          </p>
          <a
            href="#"
            className="text-red-500 hover:underline w-[150px] font-roboto font-medium text-[22px] leading-[25.78px] text-center"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-4 mt-16 gap-6">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={seller.img}
                  alt={seller.name}
                  width={116}
                  height={116}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-end h-full">
                <p className="font-roboto font-bold text-[22px] leading-[25.78px] tracking-[0.5%]">
                  {seller.name}
                </p>
                <p className="font-roboto font-bold text-[14px] leading-[16.41px] tracking-[0.5%] text-gray-500">
                  246.5 FRY
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
