import { FaRegCopy } from "react-icons/fa";
import Image from "next/image";

const prompts = [
  {
    title: "DRAGON WORLD",
    description:
      "Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
    image: "/AiNFTGeneration/card/1.png",
  },
  {
    title: "FANTASY",
    description:
      "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
    image: "/AiNFTGeneration/card/2.png",
  },
  {
    title: "DRAGON HOUSE",
    description:
      "Sed vitae orci mollis, ultricies augue id, laoreet tellus. Sed vulputate fermentum neque.",
    image: "/AiNFTGeneration/card/3.png",
  },
  {
    title: "PRINCESS",
    description:
      "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
    image: "/AiNFTGeneration/card/4.png",
  },
  {
    title: "SPACE TEAM",
    description:
      "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue..",
    image: "/AiNFTGeneration/card/5.png",
  },
  {
    title: "SEA CREATURE",
    description:
      "Pmied vitae orci mollis, ultricies augue id, laoreet tellus. Sed vulputate fermentum neque.",
    image: "/AiNFTGeneration/card/6.png",
  },
  {
    title: "PIXEL GIRL",
    description:
      "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
    image: "/AiNFTGeneration/card/7.png",
  },
  {
    title: "SHADOW FIGHTER",
    description:
      "Sed vitae orci mollis, ultricies augue id, laoreet tellus. Sed vulputate fermentum neque.",
    image: "/AiNFTGeneration/card/8.png",
  },
];

export default function Section2() {
  return (
    <div className="mt-40 m-10">
      <div className="w-full max-w-[1320] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 gap-10">
          {/* Title */}
          <p className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex text-center lg:text-left">
            Prompt examples
          </p>
        </div>

        {/* Card */}
        <div className="flex flex-wrap justify-center gap-6">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row w-full max-w-[577px] rounded-3xl overflow-hidden bg-white border hover:shadow-lg transition"
            >
              {/* Image Container */}
              <div className="relative w-full sm:w-[310px] object-cover p-4 mx-auto">
                <Image
                  width={310}
                  height={232}
                  src={prompt.image}
                  alt={prompt.title}
                  className="rounded-lg w-full sm:w-[310px] h-auto"
                />

                {/* Copy Button - Hidden on Small Screens, Visible on sm+ */}
                <button className="absolute top-1/2 right-[-2.5rem] transform -translate-x-1/2 -translate-y-1/2 w-[58px] h-[58px] border-2 border-white bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white rounded-full p-1 text-[12px] hover:bg-red-600 transition items-center justify-center gap-1  hidden sm:flex">
                  <span>Copy</span>
                  <FaRegCopy size={18} />
                </button>
                {/* Copy Button - Visible Only on Small Screens */}
              <button className="absolute flex left-1/2 bottom-[-2.5rem] transform -translate-x-1/2 -translate-y-1/2 sm:hidden w-[58px] h-[58px] border-2 border-white bg-gradient-to-tl from-[#FD0000] via-[#FD3B3B] to-[#FF9292] text-white rounded-full p-1 text-[12px] hover:bg-red-600 transition items-center justify-center gap-1">
                <span>Copy</span>
                <FaRegCopy size={18} />
              </button>
              </div>

              {/* Text Content - Ensures Flex Behavior */}
              <div className="relative p-4 pl-6 flex flex-col justify-start text-left w-full sm:flex-1">
                <h3 className="text-[22px] font-[400] leading-[26.4px] tracking-[0%] text-[#2B2B2B] font-apex">
                  {prompt.title}
                </h3>

                <p className="text-[14px] font-[400] leading-[16.41px] tracking-[0%] text-[#6B6B6B] font-roboto mt-2">
                  {prompt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
