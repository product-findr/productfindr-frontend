import React from "react";
import Image from "next/image";
import ProductfindrLogo from "../assets/productfindr.png"; 

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#9B30FF] to-[#1F0438] p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="text-white flex flex-col space-y-4 md:space-y-6 md:flex-grow">
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Address</h2>
            <p className="text-gray-300 text-sm">Onchain</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Social Links</h2>
            <a href="https://twitter.com" className="text-gray-400 block text-sm">
              Twitter
            </a>
            <a href="https://facebook.com" className="text-gray-400 block text-sm">
              Instagram
            </a>
            <a href="https://instagram.com" className="text-gray-400 block text-sm">
              Tik Tok
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 self-end">
          <Image src={ProductfindrLogo} alt="Logo" width={150} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
