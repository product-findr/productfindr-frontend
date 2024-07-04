"use client";
import React, { useState, useEffect } from "react";
import ProductNavbar from "@/components/ProductNavbar";
import { useWriteContract, useAccount } from "wagmi";
import { useReadContract } from "wagmi";
import { convertEmbedLink } from "@/utils/utils";
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
import Notification from "@/components/Notification";
import "../../styles//Product.css";

const ProductDetail = ({ params: { id } }) => {
  const { writeContractAsync } = useWriteContract();
  const { address: account } = useAccount();

  const [fetchedProductDetails, setFetchedProductDetails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const { data: fetchedProductDetail } = useReadContract({
    abi: ProductFindRMainABI,
    address: ProductFindRMainAddress,
    functionName: "getProduct",
    args: [id],
  });

  const handleUpvote = async () => {
    setVoting(true);
    try {
      const tx = await writeContractAsync({
        abi: ProductFindRMainABI,
        address: ProductFindRMainAddress,
        functionName: "upvoteProduct",
        args: [id, account],
      });
      console.log("Transaction Details: ", tx);
      if (tx && tx !== "undefined") {
        setNotificationMessage("Upvote transaction success.");
        setNotificationType("success");
        setShowNotification(true);
        setVoting(false);
      } else {
        setVoting(false);
        console.log("error");
      }
    } catch (error) {
      if (error.message.includes("Connector not connected.")) {
        setNotificationMessage("Please connect your wallet to proceed.");
        setNotificationType("warning");
        setShowNotification(true);
        setVoting(false);
      }
      console.error("Error upvoting product: ", error.message);
      setVoting(false);
    }
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
                {fetchedProductDetails.map((product, index) => {
                  const { id, upvotes, details } = product;

                  const {
                    productName,
                    thumbNail,
                    tagLine,
                    productLink,
                    description,
                    mediaFile,
                    loomLink,
                    twitterLink,
                    offer,
                    promoCode,
                    expirationDate,
                  } = details;

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
                                href="https://www.stripe.com"
                                className="text-[#282828] hover:underline"
                              >
                                {productLink}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#2828280D] flex justify-between p-4 rounded-xl"
                          onClick={handleUpvote}
                        >
                          <Image
                            src={VectorIcon}
                            alt="vector"
                            className="rounded-lg"
                          />
                          <span className="text-gray=200 ml-2">
                            {voting ? "..." : upvotes.toString()}
                          </span>
                        </div>
                      </div>
                      <div className="border-t border-[#9B30FF] my-4"></div>
                      <p className="font-semibold text-start text-2xl mt-8">
                        Description
                      </p>
                      <p className="spacious-text">{description}</p>
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
                      <div className="loomVideo">
                        <iframe
                          src={`${convertEmbedLink(loomLink)}`}
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
                      <p className="text-[#282828] mt-8">
                        Loom Video Link 🔗{" "}
                        <a
                          href={`${loomLink}`}
                          className="text-[#9B30FF] hover:underline"
                        >
                          watch
                        </a>
                      </p>
                      <p className="font-bold text-start text-2xl mt-8">
                        Social Links 🔗
                      </p>
                      <a
                        href={`${twitterLink}`}
                        className="text-[#9B30FF] text-sm hover:underline"
                        style={{ marginTop: "20px" }}
                      >
                        Twitter/X Link
                      </a>
                      <h2 className="font-bold text-start text-2xl mt-8">
                        Special Offer
                      </h2>
                      {offer !== "yes" ? (
                        <p className="text-gray-600">
                          No special offer for this product.
                        </p>
                      ) : (
                        <>
                          <p className="text-gray-600 mb-1">
                            Use promo code{" "}
                            <span className="font-bold text-[#9B30FF]">
                              {promoCode}
                            </span>{" "}
                            for 20% off!
                          </p>
                          <p className="text-gray-500">
                            Expires on{" "}
                            <span className="font-bold">{expirationDate}</span>
                          </p>
                        </>
                      )}
                    </div>
                  );
                })}
              </main>
            </>
          )}
          <aside className="hidden md:block col-span-1 p-4">
            {fetchedProductDetails.map((product, index) => {
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

export default ProductDetail;
