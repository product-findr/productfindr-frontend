import React from "react";
import ProductNavbar from "../../components/ProductNavbar";
import BetaForm from "../../components/BetaForm";
import "../styles/Product.css";

const BetaTesting = () => {
  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <aside className="hidden md:block col-span-1 rounded-xl p-4">
            <div className="flex flex-col items-center space-y-12 my-12">
              <button className="w-1/2 h-12 bg-gray-600 text-white rounded-lg my-1">
                Main Info
              </button>
              <button className="w-1/2 h-12 bg-gray-600 text-white rounded-lg my-1">
                Images and Media
              </button>
              <button className="w-1/2 h-12 bg-gray-600 text-white rounded-lg my-1">
                Builders/Team
              </button>
              <button className="w-1/2 h-12 bg-gray-600 text-white rounded-lg my-1">
                Extra
              </button>
              <button className="w-1/2 h-12 bg-gray-600 text-white rounded-lg my-1">
                Launch Checklist
              </button>
            </div>

            <div className="border-t border-[#9B30FF] my-4"></div>
            <div className="flex flex-col items-center space-y-12">
              <button className="w-1/2 h-12 bg-[#9B30FF] text-white rounded-lg my-1">
                Beta test product
              </button>
            </div>
          </aside>

          <main className="col-span-1 md:col-span-3 bg-white p-4 md:block">
            <BetaForm />
          </main>
        </div>
      </div>
    </>
  );
};

export default BetaTesting;
