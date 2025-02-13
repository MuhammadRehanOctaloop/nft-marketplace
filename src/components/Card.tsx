import Image from "next/image";

interface CardProps {
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl }) => {
  return (
    <div
      className="relative w-[308px] h-[411px] rounded-lg shadow-2lg"
      style={{
        backgroundImage: "url('/home/section2/cardbg.png')",
      }}
    >
      <div className="absolute p-3 pt-7 w-[292px] h-[411px] object-contain">
        <div className="flex absolute w-full h-[53.18] object-contain">
          <Image
            src="/home/section2/cardUser.png"
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
        <div className="absolute bottom-3 object-contain">
        <Image
        src={imageUrl}
        alt="Card Image"
        width={292}
        height={314}
        />
        </div>
      </div>
    </div>
  );
};

export default Card;
