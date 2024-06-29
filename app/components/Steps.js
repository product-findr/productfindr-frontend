import React from "react";
import "../styles/Product.css";

const Steps = () => {
  return (
    <>
      <div className="container mx-auto p-4 mt-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#1E1E1E] mb-8">
            Steps on how to earn as a User 💸
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#282828] mb-12">
            Here’s a step-by-step process on how to earn as a user
          </p>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-sm flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="bg-[#9B30FF] text-white rounded-full w-14 h-14 flex items-center justify-center">
                  1
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl text-[#9B30FF] font-bold mb-2">
                  Create an account
                </h2>
                <p className="text-lg">
                  Start by connecting your wallet to create an account on chain
                  and filling and updating your info
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#9B30FF] flex-1 p-4 rounded-xl flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="border-2 border-gray-200 text-white rounded-full w-14 h-14 flex items-center justify-center">
                  02
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl text-white font-bold mb-2">
                  Search for products
                </h2>
                <p className="text-lg text-gray-300">
                  You can search for products to beta-test on the platform
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="border-2 border-gray-200 text-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
                  03
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-2">Test applications</h2>
                <p className="text-lg text-gray-400">
                  Beta-test exclusive features of products before they launch
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="border-2 border-gray-200 text-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
                  04
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-2">Submit feedbacks</h2>
                <p className="text-lg text-gray-400">
                  Attach your comment and media feedbacks
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 flex">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <div className="border-2 border-gray-200 text-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
                  05
                </div>
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl font-bold mb-2">Earn points</h2>
                <p className="text-lg text-gray-400">
                  Earn points after submitting feedbacks for beta tested
                  products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
