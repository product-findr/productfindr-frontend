import React from "react";
import ProductNavbar from "../components/ProductNavbar";
import BetaForm from "../components/BetaForm";
import "../styles/Product.css";


const BetaTesting = () => {


    return (
        <>
        <div className="flex flex-col">
            <ProductNavbar />
            <div className="container mx-auto py-8 p-4">
                <BetaForm />
            </div>
        </div>
        </>
    );
}


export default BetaTesting;