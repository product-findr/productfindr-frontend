import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6 space-y-8 px-4 sm:px-8">
        <span className="border-custom border-solid border-[#FFFFFF4D] rounded-full p-3 sm:p-4 text-sm sm:text-base font-normal leading-snug text-center text-[#F2F4F8] px-6">
          Welcome to ProductFindR 🔎, where you can
        </span>

        <div className="text-center">
          <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold sm:mb-4">
            Search smarter, find
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold m-0 sm:m-4">
            <span className="gradient-text">better, earn BIGGER</span> 💸
          </h2>
          <div className="py-4">
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-light text-white">
              Get Started on making money while{" "}
              <span className="font-bold">beta testing</span> exclusive
            </span>
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-light text-white mt-1">
              features <span className="font-bold">Onchain</span> from your
              favorite products
            </span>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button className="bg-[#ECECEC] text-[#0B081C]  text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full">
              Start to earn
            </button>
            <button className="border text-[#ECECEC] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full">
              Launch a product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
