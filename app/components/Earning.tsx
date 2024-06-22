import React from "react";

const Earning: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-8 flex justify-center">
      <div className="bg-white shadow-lg p-6 md:p-8 rounded-2xl flex items-center justify-center flex-col w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center text-[#282828] mb-6">
          Earn as a User 💸
        </h2>
        <div className="space-y-2 py-4">
          <p className="text-xs sm:text-sm text-[#282828] text-center">
            Unlock the power of beta testing onchain with ProductfindR. Launch
            your product
          </p>
          <p className="text-xs sm:text-sm text-[#282828] text-center">
            and get transparent reviews to our thousands of users.
          </p>
        </div>

        <button className="bg-[#9B30FF] text-[#FFFFFF] text-lg sm:text-xl font-bold py-3 px-10 rounded-full mt-4">
          Start earning
        </button>
      </div>
    </div>
  );
};

export default Earning;
 
