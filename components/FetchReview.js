// FetchReview.jsx
import React, { useState } from 'react';

const FetchReview = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'Great product! Highly recommend it.', wallet: '0x123...', rating: 5 },
    { id: 2, text: 'Had some issues with the installation.', wallet: '0x456...', rating: 3 }
  ]);

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-lg font-semibold text-gray-800">Reviews:</p>
      <div className="space-y-2">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <p className="font-semibold">Wallet: {review.wallet}</p>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default FetchReview;
