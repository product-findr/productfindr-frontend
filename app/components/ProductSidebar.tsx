"use client";
import React from "react";

const ProductSidebar: React.FC = () => {
  return (
    <div className="fixed top-16 left-0 h-full w-36 flex flex-col items-center justify-start hidden md:flex">
      <div className="my-12 text-white w-full">
        <button className="sidebar-button bg-[#ECECEC] text-[#0B081C] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md">
          Main Info
        </button>
        <button className="sidebar-button bg-[#ECECEC] text-[#0B081C] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md mt-4 m-2">
          <a href="/launch">Media</a>
        </button>
        <button className="sidebar-button bg-[#ECECEC] text-[#0B081C] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md mt-4">
          Builders/team
        </button>
        <button className="sidebar-button bg-[#ECECEC] text-[#0B081C] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md mt-4">
          <a href="/launch">Extras</a>
        </button>
        <button className="sidebar-button bg-[#ECECEC] text-[#0B081C] text-base sm:text-lg font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-md mt-4">
          <a href="/launch">Checklist</a>
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;
