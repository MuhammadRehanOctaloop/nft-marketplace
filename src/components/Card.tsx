import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageUrl: string;
  isSold?: boolean; 
  isNotMinted?: boolean; // New prop for Not Minted status
}

const Card: React.FC<CardProps> = ({ imageUrl, isSold, isNotMinted }) => {
  return (
    <div
      className="relative w-[308px] h-[411px] rounded-3xl shadow-lg hover:scale-105 transition"
      style={{
        backgroundImage: "url('/card/cardbg.png')",
      }}
    >
      <div className="absolute p-3 pt-7 w-[292px] h-[411px] object-contain">
        <div className="flex absolute w-full h-[53.18px] object-contain">
          <Image
            src="/card/cardUser.png"
            alt="Card Image"
            width={53.18}
            height={53.18}
          />
          <div className="ml-2 text-left my-auto">
            <p className="font-apex text-[18px] font-light leading-[21.6px] tracking-[0%]">
              Stella Nova
            </p>
            <p className="font-roboto text-[11px] font-light leading-[12.89px] tracking-[0%]">
              @Stella Nova
            </p>
          </div>
        </div>

        {/* Card Image */}
        <div className="absolute bottom-3 object-contain">
          <Image src={imageUrl} alt="Card Image" width={292} height={314} />
        </div>

        {/* Buttons */}
        {!isNotMinted && ( // Show Buy & Price buttons only if NOT Not Minted
          <div className="absolute flex gap-20 bottom-3 w-full object-contain p-3">
            {/* Buy Button */}
            <Link href="/NFTDetail">
              <button className="px-4 py-2 text-white w-[56px] h-[36px] font-semibold bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] rounded-lg shadow-lg hover:scale-105 transition">
                Buy
              </button>
            </Link>

            {/* Price Button */}
            <div className="flex items-center w-[123.07px] h-[36.07px] bg-white shadow-md px-3 py-1 rounded-lg hover:scale-105 transition">
              <span className="text-gray-800 font-roboto font-bold text-[12px] leading-[14.06px] tracking-[4%]">
                Price:
              </span>
              <Image
                src="/card/crypto.png"
                alt="Crypto Icon"
                width={16}
                height={16}
                className="ml-2 mr-1"
              />
              <span className="text-gray-700 font-roboto font-normal text-[12px] leading-[14.06px] tracking-[4%]">
                142.02
              </span>
            </div>
          </div>
        )}

        {/* Sold Button */}
        {isSold && (
          <div className="absolute bottom-3 left-3 w-[280px] h-[300px] flex justify-center rounded-2xl items-center bg-black-800 bg-opacity-10 backdrop-blur-sm z-999">
            <button className="px-4 py-2 text-white w-[96px] h-[37px] font-semibold bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] rounded-lg shadow-lg hover:scale-105 transition">
              Sold
            </button>
          </div>
        )}

        {/* Not Minted Button (conditionally displayed) */}
        {isNotMinted && (
          <div className="absolute bottom-6 left-6 w-[90px] h-[36px] flex rounded-2xl z-999">
            <button className="p-2 text-[12px] justify-center items-centertext-black font-medium bg-white shadow-md rounded-lg hover:scale-105 transition">
              <Link href="/SellMethord">
              Not Minted
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
