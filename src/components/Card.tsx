import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div
        className="w-[308px] h-[411px] rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/home/section2/cardbg.png')", // Removed the extra comma
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={imageUrl} alt="image url" width={308} height={411} className="h-auto w-auto" />
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default Card;
  