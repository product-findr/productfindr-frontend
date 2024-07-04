import React, { useState, useEffect } from "react";

const Notification = ({ message, onClose, type }) => {
  const [isVisible, setIsVisible] = useState(true);
  let bgColor = "";
  let textColor = "";

  // Set styles based on the message type
  if (type === "error") {
    bgColor = "bg-red-500";
    textColor = "text-white";
  } else if (type === "success") {
    bgColor = "bg-green-600";
    textColor = "text-white";
  } else if (type === "warning") {
    bgColor = "bg-yellow-400";
    textColor = "text-black";
  } else {
    bgColor = "bg-gray-500";
    textColor = "text-white";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    isVisible && (
      <div
        className={`fixed top-0 right-0 m-4 p-4 rounded shadow-md ${bgColor} ${textColor} animate-wobble`}
      >
        <p>{message}</p>
      </div>
    )
  );
};

export default Notification;
