'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is an NFT?",
    answer:
      "An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.",
  },
  {
    question: "How do I buy an NFT?",
    answer:
      "To buy an NFT, you'll need a digital wallet and cryptocurrency. Browse NFT marketplaces, connect your wallet, and make a purchase.",
  },
  {
    question: "How do I sell an NFT?",
    answer:
      "To sell an NFT, list it on an NFT marketplace, set your price, and wait for a buyer to complete the transaction.",
  },
  {
    question: "What cryptocurrencies do you accept?",
    answer:
      "Most NFT platforms accept Ethereum (ETH), but some also accept other cryptocurrencies like Solana (SOL) or Polygon (MATIC).",
  },
];

const Section10: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mt-16 sm:mt-40 m-10"> 

    <div className="flex items-center justify-center max-w-[1056] h-full mx-auto">
      <div className="w-full max-w-2xl">
        <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight tracking-wide font-apex text-center mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-300 bg-white rounded-2xl shadow-md">
              <div
                className="w-full text-left flex justify-between bg-white rounded-2xl items-center"
                onClick={() => toggleFAQ(index)}
              >
                <div className={`w-full text-left p-4  cursor-pointer transition-all duration-300 text-black rounded-2xl ${openIndex === index ? 'bg-red-100 text-black font-bold  m-2' : 'bg-white hover:bg-gray-200'}`}>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
                <span>{faq.question}</span>
                </div>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-600 rounded-2xl">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section10;
