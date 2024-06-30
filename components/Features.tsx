import React from "react";
import Image from "next/image";

// Icons Importing
import scan from "../app/assets/icons/scan.png";
import security from "../app/assets/icons/security.png";
import cash from "../app/assets/icons/cash.png";
import rocket from "../app/assets/icons/rocket.png";

const Features: React.FC = () => {
  return (
    <div className="sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1E1E1E]">
            Features
          </h2>
          <div className="mt-6">
            <p className="text-sm sm:text-base md:text-lg font-light text-[#282828]">
              Check out our amazing features and experience
            </p>

            <span className="text-sm sm:text-base md:text-lg font-light text-[#282828]">
              Productfind<span className="text-[#9B30FF]">R</span>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center justify-center flex-col">
            <Image
              src={scan}
              alt="scan-icon"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Discover New
            </p>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Products
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center justify-center flex-col">
            <Image
              src={security}
              alt="security"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              OnChain
            </p>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Activities
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center justify-center flex-col">
            <Image
              src={cash}
              alt="cash"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Earn while Beta-testing
            </p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-2xl flex items-center justify-center flex-col">
            <Image
              src={rocket}
              alt="rocket"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Launch products
            </p>
            <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#282828] text-center">
              Onchain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
