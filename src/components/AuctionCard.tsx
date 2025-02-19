import Image from "next/image";

interface AuctionCardProps {
  imageUrl: string;
  timeLeft: string; // Format: HH:MM:SS
  inStock: number;
  hideStockPriceInfo?: boolean; // New prop to control visibility
}

const AuctionCard: React.FC<AuctionCardProps> = ({
  imageUrl,
  timeLeft,
  inStock,
  hideStockPriceInfo = false, // Default value is false
}) => {
  return (
    <div
      className="relative w-[308px] h-[411px] rounded-3xl shadow-lg transition hover:scale-105 group overflow-hidden"
      style={{
        backgroundImage: "url('/card/cardbg.png')",
      }}
    >
      <div className="absolute p-3 pt-7 w-[292px] h-[411px] object-contain">
        {/* User Info */}
        <div className="flex absolute w-full h-[53.18px] object-contain">
          <Image
            src="/card/cardUser.png"
            alt="User Avatar"
            width={53.18}
            height={53.18}
          />
          <div className="ml-2 text-left my-auto">
            <p className="font-apex text-[18px] font-light">Stella Nova</p>
            <p className="font-roboto text-[11px] font-light">@Stella Nova</p>
          </div>
        </div>

        {/* NFT Image */}
        <div className="absolute bottom-3 object-contain">
          <Image src={imageUrl} alt="NFT Image" width={292} height={314} />
        </div>

        {/* Stock & Price Info (Hidden if hideStockPriceInfo is true) */}
        {!hideStockPriceInfo && (
          <div className="absolute flex justify-between bottom-3 w-full object-contain p-3">
            <div className="flex items-center w-[91.68px] h-[36.07px] bg-white shadow-md px-3 py-1 rounded-lg hover:scale-105 transition">
              <span className="text-gray-800 font-roboto font-bold text-[12px]">
                In Stock
              </span>
              <span className="ml-3 text-gray-700 font-roboto font-normal text-[12px]">
                {inStock}
              </span>
            </div>
            <div className="flex mr-2 items-center w-[123.07px] h-[36.07px] bg-white shadow-md px-3 py-1 rounded-lg hover:scale-105 transition">
              <span className="text-gray-800 font-roboto font-bold text-[12px]">
                Price:
              </span>
              <Image
                src="/card/crypto.png"
                alt="Crypto Icon"
                width={16}
                height={16}
                className="ml-2 mr-1"
              />
              <span className="text-gray-700 font-roboto font-normal text-[12px]">
                142.02
              </span>
            </div>
          </div>
        )}

        {/* Timer & Place a Bid Button */}
        <div className="absolute flex flex-col bottom-3 ml-[7px] overflow-hidden justify-center rounded-2xl items-center left-1/2 transform -translate-x-1/2 w-[281px] h-[302px] transition-all duration-500 group bg-transparent group-hover:bg-black group-hover:bg-opacity-50">
          {/* Place a Bid Button */}
          <button className="px-1 py-1 mt-2 mx-auto text-white w-[91.68px] h-[36.07px] font-semibold text-[12px] leading-[14.06px] tracking-[0.04em] rounded-lg shadow-lg border-3 bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] transition-all duration-1000 opacity-100 translate-y-[200px] group-hover:translate-y-[-0]">
            Place a Bid
          </button>
          {/* Timer Button */}
          <div className="mb-3 font-bold bg-transparent shadow-md px-3 py-3 items-center justify-center rounded-lg text-center text-[#2B2B2B] w-[143px] h-[44px] tracking-[0.11em] text-[18.91px] leading-[22.16px] font-roboto transition-all duration-1000 group-hover:translate-y-[30px] bg-white bg-opacity-80">
            {timeLeft}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
