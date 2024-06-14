import React from "react";
import Image from "next/image";
import ProductfindrLogo from "../assets/productfindr.png"; // Adjust the path to your logo image

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#9B30FF] to-[#1F0438] p-12">
      <div className="max-w-7xl mx-auto flex justify-between items-start"> {/* Changed items-center to items-start */}
        <div className="text-white flex flex-col space-y-6">
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Address</h2>
            <p className="text-gray-300">Lagos island, Lagos state, Nigeria.</p> {/* Changed to <p> for address */}
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Social Link</h2>
            <a href="https://twitter.com" className="text-gray-400 block">
              Twitter
            </a>
            <a href="https://facebook.com" className="text-gray-400 block">
              Instagram
            </a>
            <a href="https://instagram.com" className="text-gray-400 block">
              Tik Tok
            </a>
          </div>
        </div>
        <div className="mt-4"> 
          <Image src={ProductfindrLogo} alt="Logo" width={150} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
