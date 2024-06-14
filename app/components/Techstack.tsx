import React from "react";
import Image from "next/image";

{
  /* Logo Importing */
}
import coinbase from "../assets/logo/coinbase.png";
import stripe from "../assets/logo/stripe.png";
import fleek from "../assets/logo/fleek.png";
import base from "../assets/logo/base.png";
import xmtp from "../assets/logo/xmtp.png";

const Techstack: React.FC = () => {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl leading-tight text-[#1E1E1E] mt-16">
              Using Top Technologies such as
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-5">
            <div className="flex justify-center items-center transition-transform duration-500 transform hover:-translate-x-2">
              <Image
                src={coinbase}
                alt="Coinbase Logo"
                width={60}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center transition-transform duration-500 transform hover:-translate-x-2">
              <Image
                src={stripe}
                alt="Stripe Logo"
                width={60}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center transition-transform duration-500 transform hover:-translate-x-2">
              <Image
                src={fleek}
                alt="Fleek Logo"
                width={60}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center transition-transform duration-500 transform hover:-translate-x-2">
              <Image
                src={base}
                alt="Base Logo"
                width={60}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center transition-transform duration-500 transform hover:-translate-x-2">
              <Image
                src={xmtp}
                alt="XMTP Logo"
                width={60}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
