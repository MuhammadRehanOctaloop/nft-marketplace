import Image from "next/image";

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
      {/* Header Row */}
      <div className="grid grid-cols-6 h-[102px] items-center bg-white text-black text-[22px] font-semibold border-[3px] border-[#E7E7E7] py-5 px-6 hover:scale-105 transition">
        <span>Collections</span>
        <span className="text-center">Volume</span>
        <span>Followers</span>
        <span>24%</span>
        <span>Floor price</span>
        <span>Items</span>
      </div>

      {/* Collection Rows */}
      {collections.map((collection, index) => (
        <div
          key={index}
          className="grid grid-cols-6 items-center h-[102px] bg-white text-black text-[16.4px] font-semibold border-[3px] border-[#E7E7E7] py-3 px-6 mt-4 hover:scale-105 transition"
        >
          {/* Collection Name & Image */}
          <div className="flex items-center gap-2">
            <span>{collection.id}</span>
            <Image
              src={collection.img}
              alt={collection.name}
              width={74}
              height={74}
              className="rounded-lg hidden sm:hidden md:hidden lg:block"
            />

            <span className="w-[135px]">{collection.name}</span>
          </div>

          {/* Other Columns */}
          <span className="flex items-center gap-2 mx-auto">
            <Image
              src="/TopSellers/user/icon.png"
              alt="Volume Icon"
              width={15}
              height={15}
              className="hidden sm:hidden md:hidden lg:block"
            />
            {collection.volume}
          </span>
          <span>{collection.followers}</span>
          <span className="text-green-500">+{collection.percent}</span>
          <span className="flex items-center gap-2">
            <Image
              src="/TopSellers/user/icon.png"
              alt="Floor Price Icon"
              width={15}
              height={15}
              className="hidden sm:hidden md:hidden lg:block"
            />
            {collection.price}
          </span>
          <span>{collection.items}</span>
        </div>
      ))}
    </div>
  );
};

export default TopCollections;
