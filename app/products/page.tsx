import React from "react";
import Image from "next/image";
import VectorIcon from "../assets/icons/vector.png";
import Stripe from "../assets/icons/stripe.png";
import ProductNavbar from "@/components/ProductNavbar";
import "../styles/Product.css";

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-4 rounded-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Welcome to Productfind<span className="text-[#9B30FF]">R</span> 🔎
          </h2>
          <p className="text-gray-600 mb-2">
            "Search smarter, find better, earn BIGGER” 💸
          </p>
          <p className="text-gray-600">
            Get Started on making money while beta testing exclusive features
            Onchain from your favorite products
          </p>
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg">
          <div className="flex items-center">
            <span className="text-xl font-bold mb-4">Most Popular Product</span>
          </div>
          <div className="p-4">
            <span className="mr-6">Featured</span>
            <span>All</span>
          </div>
        </div>
        <div className="border-t border-[#28282880]"></div>
        <div className="flex space-x-8 bg-[#2828280D] rounded-2xl p-4 mt-4">
          <div className="flex-none">
            <Image
              src={Stripe}
              alt="Logo"
              width={52}
              height={52}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col flex-grow">
            {" "}
            {/* Added flex-grow */}
            <h2 className="text-xl font-bold mb-1">Stripe</h2>
            <span className="text-[#9B30FF]">⭐⭐⭐⭐⭐</span>
          </div>

          <div className="flex flex-col justify-center">
            {" "}
            {/* Center align content vertically */}
            <p className="text-gray-500 text-center mb-1">
              Make payments with ease
            </p>
            <p className="text-gray-500 text-center">Followers: 100k</p>
          </div>

          <div className="flex flex-none items-center justify-end">
            {" "}
            {/* Adjusted this div */}
            <div className="bg-[#2828280D] p-4 rounded-xl">
              <Image src={VectorIcon} alt="vector" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
