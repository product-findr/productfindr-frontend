"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProductNavbar from "@/components/ProductNavbar";
import { useWriteContract, useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { config } from "@/config/wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import {
  ProductFindRMainAddress,
  ProductFindRMainABI,
} from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import VectorIcon from "../../assets/icons/vector.png";
import LinkIcon from "../../assets/icons/Link.png";
import StripeIcon from "../../assets/icons/stripe.png";
import Stripe1 from "../../assets/products-card/stripe1.png";
import Stripe2 from "../../assets/products-card/stripe2.png";
import Stripe3 from "../../assets/products-card/stripe3.png";
import Stripe4 from "../../assets/products-card/stripe4.png";

import "../../styles//Product.css";
import { useEffect } from "react";

const ProductDetail = ({ params: { id } }) => {
  const router = useRouter();
  const { writeContractAsync } = useWriteContract();
  const account = useAccount();

  const [fetchedProductDetails, setFetchedProductDetails] = useState([]);

  const { data: fetchedProductDetail } = useReadContract({
    abi: ProductFindRMainABI,
    address: ProductFindRMainAddress,
    functionName: "getProduct",
    args: [id],
  });

  useEffect(() => {
    if (fetchedProductDetail) {
      // Ensure the data is in the expected format
      const productDetails = Array.isArray(fetchedProductDetail)
        ? fetchedProductDetail
        : [fetchedProductDetail];
      setFetchedProductDetails(productDetails);
    }
  }, [fetchedProductDetail]);

  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto px-4 py-8">
  <Link
    className="flex items-center text-lg text-gray-800 hover:text-[#9B30FF]"
    href="/products"
  >
    <div className="bg-transparent border border-[#9B30FF] rounded-full flex items-center justify-center w-12 h-12 mr-4">
      <Image
        src={LeftArrowIcon}
        alt="Left Arrow Icon"
        width={24}
        height={24}
      />
    </div>
    <span>Go back</span>
  </Link>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
    <main className="col-span-1 md:col-span-3 bg-white p-4 md:block">
      {fetchedProductDetails.map((product, index) => {
        const { id, details } = product;
        const { productName, thumbNail, tagLine, productLink, description, mediaFile, category } = details;

        return (
          <div key={id} className="border border-[#9B30FF] rounded-xl container mx-auto py-2 px-4 sm:px-6 lg:px-8 p-8 rounded-2xl mt-8">
            <div className="flex items-center justify-between p-4 rounded-lg">
              <div className="flex items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${thumbNail}`}
                  alt="Product Logo"
                  width={52}
                  height={52}
                />
                <div>
                  <h2 className="text-xl font-bold">
                    {productName}
                  </h2>
                  <p className="text-[#282828] mt-2">{tagLine}</p>
                  <div className="flex items-center mt-2">
                    <Image
                      src={LinkIcon}
                      alt="Link Icon"
                      className="w-4 h-4 mr-2"
                    />
                    <a
                      href="https://www.stripe.com"
                      className="text-[#282828] hover:underline"
                    >
                     {productLink}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#2828280D] p-4 rounded-xl">
                <Image
                  src={VectorIcon}
                  alt="vector"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="border-t border-[#9B30FF] my-4"></div>
            <p className="font-semibold text-start text-2xl mt-8">
              Description
            </p>
            <p className="spacious-text">
             {description}
            </p>
            <p className="font-bold text-start text-2xl mt-8">
              Gallery
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="col-span-1">
                <Image
                  src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${mediaFile}`}
                  alt="Gallery Image 1"
                  className="rounded-lg"
                  width={300} 
                  height={200}              
                />
              </div>
            </div>
            <p className="font-bold text-start text-2xl mt-8">
              Video
            </p>
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg mt-4">
              <span className="text-gray-600">
                Video Placeholder
              </span>
            </div>
            <p className="text-[#282828] mt-4">
              Loom Video Link 🔗{" "}
              <a
                href="https://www.loom.com/share/some-video-id"
                className="text-[#9B30FF] hover:underline"
              >
                watch
              </a>
            </p>
          </div>
        );
      })}
    </main>
    <aside className="hidden md:block col-span-1 p-4">
      <p className="font-bold text-start text-[#9B30FF] text-2xl underline mt-8">
        Categories
      </p>
      <span className="block mb-12 mt-8">
        <div className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4">
         Productivity
        </div>
        <div className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4">
          Financial Technology
        </div>
      </span>
      <p className="font-bold text-start text-[#9B30FF] text-2xl underline mt-8">
        Similar products
      </p>
    </aside>
  </div>
</div>

    </>
  );
};

export default ProductDetail;
