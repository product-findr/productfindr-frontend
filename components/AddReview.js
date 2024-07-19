import React, { useState, useEffect } from "react";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { config } from "@/config/wagmi";
import {
  ProductFindRMainAddress,
  ProductFindRMainABI,
} from "@/constant/constant";
import Notification from "./Notification";
import stack from "@/stacks/stacks";

const truncateAddress = (address) => {
  if (!address) return "";
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

const AddReview = ({ id }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewing, setReviewing] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const [error, setError] = useState("");

  const { address: account } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const { data: fetchedData, isLoading: fetchLoading } = useReadContract({
    abi: ProductFindRMainABI,
    address: ProductFindRMainAddress,
    functionName: "getReviews",
    args: [id],
  });

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleAddReview = async () => {
    if (!reviewText || rating === 0) {
      setError("Please enter a review and select a rating.");
      return;
    }

    setError("");
    setReviewing(true);
    try {
      const tx = await writeContractAsync({
        abi: ProductFindRMainABI,
        address: ProductFindRMainAddress,
        functionName: "addReview",
        args: [account, parseInt(id), reviewText, rating],
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: tx,
      });

      if (transactionReceipt.status === "success") {
        const addPoints = await stack.track("addReview", {
          points: 15,
          account: account,
          uniqueId: account,
        });

        console.log("Added Points: ", addPoints.status);
        setNotificationMessage("Review has been added!");
        setNotificationType("success");
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Error adding review: ", error);
    } finally {
      setReviewing(false);
    }

    setReviewText("");
    setRating(0);
  };

  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp) * 1000); // Convert Unix timestamp to milliseconds
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (fetchedData && fetchedData.length > 0) {
      setReviews(fetchedData);
    }
  });

  return (
    <div className="flex flex-col space-y-4">
      <label className="font-bold text-start text-2xl mt-8">Add Feedback</label>
      <textarea
        className="resize-none border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9B30FF]"
        rows="6"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write a feedback for the tested features..."
      />

      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            onClick={() => handleRating(star)}
            className={`w-6 h-6 ms-1 cursor-pointer ${
              star <= rating ? "text-yellow-300" : "text-gray-300"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <span className="ml-2 text-lg font-medium text-gray-700">
          {rating} / 5
        </span>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleAddReview}
        className="bg-[#9B30FF] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#8a1eaa] focus:outline-none focus:ring-2 focus:ring-[#9B30FF] mx-auto block"
      >
        {reviewing ? "Submitting..." : "Submit"}
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Feature Feedback</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.timestamp}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm mb-4"
            >
              <p className="font-semibold mb-2">
                <a
                  href={`https://sepolia.basescan.org/address/${review.reviewer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {truncateAddress(review.reviewer)}
                </a>
              </p>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? "text-yellow-300"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
                <span className="ml-2 text-lg font-medium text-gray-700">
                  {review.rating}
                </span>
              </div>
              <p className="mt-2 mb-2">{review.content}</p>
              <p className="text-gray-500 text-sm">
                {formatDate(review.timestamp)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          type={notificationType}
        />
      )}
    </div>
  );
};

export default AddReview;
