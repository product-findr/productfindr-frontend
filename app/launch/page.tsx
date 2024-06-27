import React from "react";
import ProductNavbar from "../components/ProductNavbar";
import LaunchForm from "../components/LaunchForm";
import "../styles/Product.css";

const Launch = () => {
  return (
    <div className="flex flex-col">
      <ProductNavbar />
      <div className="container mx-auto py-8 p-4">
        <LaunchForm />
      </div>
    </div>
  );
};

export default Launch;
