"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useWriteContract, useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import {
  ProductFindRMainAddress,
  ProductFindRMainABI,
} from "@/constant/constant";
import Image from "next/image";
import VectorIcon from "../assets/icons/vector.png";
import ProductNavbar from "@/components/ProductNavbar";
import "../styles/Product.css";

const ProductPage = () => {
  const [fetchedProductDetail, setFetchedProductDetail] = useState([]); 
  const { data: fetchedData, isLoading: fetchLoading } = useReadContract({
    abi: ProductFindRMainABI,
    address: ProductFindRMainAddress,
    functionName: "getListedProducts",
  });

  const { writeContractAsync } = useWriteContract();
  const { address: account } = useAccount();

  const handleUpvote = async (id) => {
    try {
      const tx = await writeContractAsync({
        abi: ProductFindRMainABI,
        address: ProductFindRMainAddress,
        functionName: "upvoteProduct",
        args: [id, account],
      });
      console.log("Upvote transaction:", tx); 
    } catch (error) {
      console.error("Error upvoting product:", error);
    }
  };


  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setFetchedProductDetail(fetchedData);
      console.log("Fetch Detail: ", fetchedData);
    }
  }, [fetchedData]);

  if (fetchLoading) {
    return (
      <>
        <ProductNavbar />
        <div className="container mx-auto p-4">
          <div className="bg-gray-100 p-4 rounded-xl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Welcome to Productfind<span className="text-[#9B30FF]">R</span> 🔎
            </h2>
            <p className="text-gray-600 mb-2">
              &quot;Search smarter, find better, earn BIGGER&quot; 💸
            </p>
            <p className="text-gray-600">
              Get Started on making money while beta testing exclusive features
              Onchain from your favorite products
            </p>
          </div>
          <div className="flex items-center justify-between p-4 rounded-lg">
            <div className="flex items-center">
              <span className="text-xl font-bold mb-4">
                Most Popular Product
              </span>
            </div>
            <div className="p-4">
              <span className="mr-6">Featured</span>
              <span>All</span>
            </div>
          </div>
          <div className="border-t border-[#28282880]"></div>
          <div className="flex justify-center items-center mt-16">
            <div className="loader"></div>
          </div>
        </div>
        <style jsx>{`
          .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #9b30ff;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto p-4">
        <div className="bg-gray-100 p-4 rounded-xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Welcome to Productfind<span className="text-[#9B30FF]">R</span> 🔎
          </h2>
          <p className="text-gray-600 mb-2">
            &quot;Search smarter, find better, earn BIGGER&quot; 💸
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
        <div>
          <div className="product-list">
            {fetchedProductDetail.map((product, index) => {
              const { id, details } = product;
              const { productName, thumbNail, tagLine } = details;

              return (
                <div
                  key={id}
                  className="flex space-x-8 bg-[#2828280D] rounded-2xl p-4 mt-4"
                >
                  <div className="flex-none">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${thumbNail}`}
                      alt="Logo"
                      width={52}
                      height={52}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                  <Link href={`/productDetails/${id}/`} className="text-xl font-bold mb-1 hover:underline">
                    {productName}
                  </Link>
                    <span className="text-[#9B30FF]">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-center mb-1">{tagLine}</p>
                    <p className="text-gray-500 text-center">Followers: 100k</p>
                  </div>
                  <div className="flex flex-col-4 flex-grow items-center justify-end">
                    <div
                      className="bg-[#2828280D] p-4 rounded-xl"
                      onClick={() => handleUpvote(id)}
                    >
                      <Image
                        src={VectorIcon}
                        alt="vector"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;