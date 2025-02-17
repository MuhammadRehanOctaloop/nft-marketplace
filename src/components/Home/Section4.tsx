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
    <div className="m-4 sm:m-6 md:m-8 mt-20 sm:mt-28 md:mt-40">
      <div className="max-w-[1316px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <p className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left w-full">
            TOP SELLER
          </p>
          <a
            href="#"
            className="text-red-500 w-[180px] hover:underline font-roboto font-medium text-[22px] sm:text-[20px] md:text-[22px] leading-[25.78px] text-center mt-6 lg:mt-0"
          >
            View All
          </a>
        </div>

        {/* Changed grid to flex with wrapping */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 mt-10 sm:mt-12 md:mt-16">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 rounded-xl hover:scale-105 transition-transform duration-300 p-2 w-[310px]"
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
              <div className="flex flex-col !justify-end h-full">
                <p className="font-roboto font-bold text-[22px] sm:text-[20px] md:text-[22px] leading-[25.78px] tracking-[0.5%]">
                  {seller.name}
                </p>
                <p className="font-roboto font-bold text-[14px] sm:text-[14px] leading-[16.41px] tracking-[0.5%] text-gray-500">
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
