import React from "react";


const HeroSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-6 space-y-8 px-4 sm:px-8">
        <span className="border-custom border-solid border-[#FFFFFF4D] rounded-full p-4 text-xl font-normal leading-custom-line text-center text-[#F2F4F8] px-6">
          Welcome to ProductFindR 🔎, where you can
        </span>
        <div className="text-center">
          <h2 className="gradient-text text-4xl sm:text-5xl md:text-7xl font-bold">
            Search smarter, find
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold m-5">
            <span className="gradient-text">better, earn BIGGER</span> 💸
          </h2>
          <div className="py-4">
            <span className="block text-xl sm:text-2xl md:text-3xl font-light text-white">
              Get Started on making money while{" "}
              <span className="font-bold">beta testing</span> exclusive
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-light text-white m-1">
              features <span className="font-bold">Onchain</span> from your
              favorite products
            </span>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button className="bg-[#ECECEC] text-[#0B081C] text-lg sm:text-xl font-bold py-4 px-12 rounded-full">
              Start to earn
            </button>
            <button className="border text-[#ECECEC] text-lg sm:text-xl font-bold py-4 px-12 rounded-full">
              Launch a product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
