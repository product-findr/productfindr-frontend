"use client";
import React, { useState, useEffect } from "react";
import ProductNavbar from "@/components/ProductNavbar";
import { useWriteContract, useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { convertEmbedLink } from "@/utils/utils";
import {
  ProductFindRMainAddress,
  ProductFindRMainABI,
} from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import LinkIcon from "../../assets/icons/Link.png";
import Notification from "@/components/Notification";
import AddReview from "@/components/AddReview";
import stack from "@/stacks/stacks";
import "../../styles//Product.css";

const BetaTestingDetails = ({ params: { id } }) => {
  const { writeContractAsync } = useWriteContract();
  const { address: account } = useAccount();

  const [fetchedProductDetails, setFetchedProductDetails] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const { data: fetchedProductDetail } = useReadContract({
    abi: ProductFindRMainABI,
    address: ProductFindRMainAddress,
    functionName: "getProduct",
    args: [id],
  });

  const formatDate = (timestamp) => {
    // Convert BigInt to Number
    const timestampNumber = Number(timestamp);
    const date = new Date(timestampNumber * 1000);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    if (fetchedProductDetail) {
      // Ensure the data is in the expected format
      const productDetails = Array.isArray(fetchedProductDetail)
        ? fetchedProductDetail
        : [fetchedProductDetail];
      setFetchedProductDetails(productDetails);
      setLoading(false);
    }
  }, [fetchedProductDetail]);

  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto px-4 py-8">
        <Link
          className="flex items-center text-lg text-gray-800 hover:text-[#9B30FF]"
          href="/beta-products"
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
          {loading ? (
            <>
              <main className="col-span-1 md:col-span-3 bg-white p-4 md:block">
                <div className="flex justify-center items-center mt-16">
                  <div className="loader"></div>
                </div>{" "}
              </main>
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
          ) : (
            <>
              <main className="col-span-1 md:col-span-3 bg-white p-4 md:block">
                {fetchedProductDetails.map((item, index) => {
                  console.log("Product Details: ", fetchedProductDetails);
                  const { product, betaTestingDetails } = item;
                  const { id, upvotes, details } = product;

                  const {
                    productName,
                    thumbNail,
                    tagLine,
                    productLink,
                    description,
                    betaTestingLink,
                  } = details;

                  const {
                    contractAddress,
                    goals,
                    startingDate,
                    endingDate,
                    featureLoomLink,
                    testingGoal,
                  } = betaTestingDetails;

                  return (
                    <div
                      key={id}
                      className="border border-[#9B30FF] rounded-xl container mx-auto py-2 px-4 sm:px-6 lg:px-8 p-8 rounded-2xl mt-8"
                    >
                      <div className="flex items-center justify-between p-4 rounded-lg">
                        <div className="flex items-center">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${thumbNail}`}
                            alt="Product Logo"
                            width={52}
                            height={52}
                          />
                          <div className="ml-4">
                            <h2 className="text-xl font-bold">{productName}</h2>
                            <p className="text-[#282828] mt-2">{tagLine}</p>
                            <div className="flex items-center mt-2">
                              <Image
                                src={LinkIcon}
                                alt="Link Icon"
                                className="w-4 h-4 mr-2"
                              />
                              <a
                                href={`${productLink}`}
                                className="text-[#282828] hover:underline"
                              >
                                {productLink}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[#9B30FF] my-4"></div>
                      <p className="font-semibold text-start text-2xl mt-8">
                        Description
                      </p>
                      <p className="spacious-text">{description}</p>
                      <p className="font-bold text-start text-2xl mt-8">
                        Contract Address ✅
                      </p>
                      <p
                        className="text-gray-600 text-sm"
                        style={{ marginTop: "20px" }}
                      >
                        {contractAddress}
                      </p>
                      <p className="font-semibold text-start text-2xl mt-8">
                        Goals Beta Testing
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                        {goals.map((goal, index) => (
                          <div
                            key={index}
                            className="bg-[#90EE90] font-semibold text-gray-800 text-sm p-2 rounded-md text-center"
                          >
                            {goal}
                          </div>
                        ))}
                      </div>
                      <p className="font-semibold text-start text-2xl mt-8">
                        New Features to Test
                      </p>
                      <p className="mt-4 text-gray-700 text-base leading-relaxed">
                        {testingGoal}
                      </p>
                      <p className="font-bold text-start text-2xl mt-8">
                        Beta Testing Guide
                      </p>
                      <div className="featureLoomLink mt-4">
                        <iframe
                          src={`${convertEmbedLink(featureLoomLink)}`}
                          frameBorder="0"
                          allowFullScreen
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                          }}
                        ></iframe>
                      </div>
                      <p className="font-bold text-start text-2xl mt-8">
                        Testing Period
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 mt-4">
                        <div className="flex flex-col">
                          <span className="text-gray-800 font-semibold mb-1">
                            Start Date
                          </span>
                          <span className="text-lg">
                            {formatDate(startingDate)}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-800 font-semibold mb-1">
                            End Date
                          </span>
                          <span className="text-lg">
                            {formatDate(endingDate)}
                          </span>
                        </div>
                      </div>
                      <p className="font-semibold text-start text-2xl mt-8">
                        Beta Test App
                      </p>
                      <a
                        href={`${betaTestingLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-gray-700 text-base leading-relaxed underline hover:text-blue-600"
                      >
                        Click Here
                      </a>
                      {account !== undefined ? (
                        <AddReview id={id} />
                      ) : (
                        <p className="text-lg text-center font-semibold text-red-600 bg-white p-4 rounded shadow mt-8">
                          Please connect your account to add a review.
                        </p>
                      )}
                    </div>
                  );
                })}
              </main>
            </>
          )}
          <aside className="hidden md:block col-span-1 p-4">
            {fetchedProductDetails.map((item, index) => {
              const { product } = item;
              const { details } = product;
              const { category } = details;

              const categoriesArray = category
                .split(",")
                .map((cat) => cat.trim());

              return (
                <div key={index}>
                  <p className="font-bold text-start text-[#9B30FF] text-2xl underline mt-8">
                    Categories
                  </p>
                  <span className="block mb-12 mt-8">
                    {categoriesArray.map((cat, catIndex) => (
                      <div
                        key={catIndex}
                        className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4"
                      >
                        {cat}
                      </div>
                    ))}
                  </span>
                </div>
              );
            })}
          </aside>
          {showNotification && (
            <Notification
              message={notificationMessage}
              onClose={() => setShowNotification(false)}
              type={notificationType}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BetaTestingDetails;
