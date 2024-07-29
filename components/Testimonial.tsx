import React from "react";
import Image from "next/image";
import Quote from "../app/assets/icons/quote.png";

const Testimonial: React.FC = () => {
  return (
    <div className="sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E1E1E] mb-8">
          Productfind<span className="text-[#9B30FF]">R</span> Testimonials
        </h2>

        <span className="block mb-12">
          <div className="grid grid-cols-4 gap-4 items-center p-8">
            <div className="col-span-1">
              <Image
                src={Quote}
                alt="Description of image"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-2">
            <p className="text-xl font-light">
                “Before ProductfindR, dApp testing was a guessing game. Now,
                their secure platform connects us with expert testers. We get
                transparent feedback, fix bugs early, and launch with
                confidence.”
              </p>
            </div>
            <div className="col-span-1">
            </div>
          </div>
        </span>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-2xl flex flex-col h-full">
            <p className="text-base sm:text-lg text-[#282828] text-center">
              “I love this! Beta test to earn - is something all web3 projects should do to incentivize early beta users”
            </p>

            <div className="mt-16 text-left">
              <span className="font-semibold text-gray-900">Jose_BlueSocial</span>
            </div>
            <div className="mt-4 flex justify-left">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-2xl flex flex-col h-full">
            <p className="text-base sm:text-lg text-[#282828] text-center">
              “What a joy ro be able to have exclusive access to beta features
              from my favorite product and to top it up, getting rewarded too.”
            </p>
            <div className="mt-12 text-left">
              <span className="font-semibold text-gray-900">Mayowa</span>
            </div>
            <div className="mt-4 flex justify-left">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>

          <div className="bg-white shadow-lg p-4 rounded-2xl flex flex-col h-full">
            <p className="text-base sm:text-lg text-[#282828] text-center">
              “We had a seamless launch process, i will recommend to any one
              that wants a transparent launch process”
            </p>
            <div className="mt-12 text-left">
              <span className="font-semibold text-gray-900">Dancaaa</span>
            </div>
            <div className="mt-4 flex justify-left">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
