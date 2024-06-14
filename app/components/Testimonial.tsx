import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div className="sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-left mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#282828]">
            Productfind<span className="text-[#9B30FF]">R</span> Testimonials
          </h2>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-2xl flex flex-col h-full">
            <p className="text-base sm:text-lg text-[#282828] text-center">
              “We had an exclusive beta testing of new payment feature using
              ProductfindR.”
            </p>

            <div className="mt-16 text-left">
              <span className="font-semibold text-gray-900">Stripe</span>
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
