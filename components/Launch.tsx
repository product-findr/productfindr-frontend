import React from "react";

const Launch: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#9B30FF] p-12 md:p-8 flex justify-center">
      <div className="shadow-lg p-6 md:p-8 rounded-2xl flex items-center justify-center flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center text-[#282828]">
          Our powerful Onchain Beta testing.
        </h2>

        <div className="py-4">
          <p className="text-xs sm:text-sm md:text-base text-[#282828] text-center mb-1">
            Unlock the power of beta testing onchain with ProductfindR. Launch
            your product
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#282828] text-center mt-0">
            and get transparent reviews to our thousands of users.
          </p>
        </div>

        <button className="border border-[#282828] text-[#282828] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full">
          Launch a product
        </button>
      </div>
    </div>
  );
};

export default Launch;
