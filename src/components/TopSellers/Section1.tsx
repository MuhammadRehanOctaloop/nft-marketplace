import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";

const TopCollections = () => {
  const collections = [
    {
      id: "01",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 100,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/1.png",
    },
    {
      id: "02",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 150,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/2.png",
    },
    {
      id: "03",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/3.png",
    },
    {
      id: "04",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/4.png",
    },
    {
      id: "05",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 33,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/5.png",
    },
    {
      id: "01",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 100,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/1.png",
    },
    {
      id: "02",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 150,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/2.png",
    },
    {
      id: "03",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/3.png",
    },
    {
      id: "04",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/4.png",
    },
    {
      id: "05",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 33,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/5.png",
    },
    {
      id: "01",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 100,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/1.png",
    },
    {
      id: "02",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 150,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/2.png",
    },
    {
      id: "03",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/3.png",
    },
    {
      id: "04",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 75,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/4.png",
    },
    {
      id: "05",
      name: "Jacob Jones",
      volume: "154.00",
      followers: 33,
      percent: "237.67%",
      price: "4,901",
      items: "9.8k",
      img: "/TopSellers/user/5.png",
    },
  ];

  return (
    <div className="mt-40 mx-auto w-full max-w-[1320px] px-4">
      {/* button */}
      <div className="grid grid-cols-2 h-[102px] items-center">
        <button className="flex items-center justify-between bg-white text-black text-[14px] font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition w-[130px] h-[45px]">
          Category
          <SlArrowDown size={18} />
        </button>

        {/* Second Button */}
        <button className="bg-white ml-auto w-full max-w-[115px] h-full max-h-[48px] text-black text-[14px] font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition">
          Last 30 days
        </button>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-3 md:grid-cols-6 h-[102px] items-center bg-white text-black text-[20px] sm:text-[22px] font-semibold border-[3px] border-[#E7E7E7] py-5 px-6 hover:scale-105 transition text-center lg:text-left">
        <span>Collections</span>
        <span className="text-center">Volume</span>
        <span>Followers</span>
        <span className="hidden md:block">24%</span>
        <span className="hidden md:block text-left">Floor price</span>
        <span className="hidden md:block">Items</span>
      </div>

      {/* Collection Rows */}
      {collections.map((collection, index) => (
        <div
          key={index}
          className="grid grid-cols-3 md:grid-cols-6 items-center h-[102px] bg-white text-black text-[16.4px] font-semibold border-[3px] border-[#E7E7E7] py-3 px-6 mt-4 hover:scale-105 transition text-center lg:text-left"
        >
          {/* Collection Name & Image */}
          <div className="flex items-center gap-2">
            <span>{collection.id}</span>
            <Image
              src={collection.img}
              alt={collection.name}
              width={74}
              height={74}
              className="rounded-lg hidden sm:block"
            />
            <span className="w-[135px]">{collection.name}</span>
          </div>

          {/* Other Columns */}
          <span className="flex items-center gap-1 mx-auto">
            <Image
              src="/TopSellers/user/icon.png"
              alt="Volume Icon"
              width={15}
              height={15}
              className="hidden sm:block"
            />
            {collection.volume}
          </span>
          <span>{collection.followers}</span>
          <span className="hidden md:block text-green-500">
            +{collection.percent}
          </span>
          <span className="hidden md:flex items-center gap-1 lg:mx-0">
            <Image
              src="/TopSellers/user/icon.png"
              alt="Floor Price Icon"
              width={15}
              height={15}
              className="hidden sm:block"
            />
            {collection.price}
          </span>
          <span className="hidden md:block">{collection.items}</span>
        </div>
      ))}
    </div>
  );
};

export default TopCollections;
