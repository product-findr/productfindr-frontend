"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is ProductfindR?",
      answer:
        "ProductFindR is a beta-testing platform that empowers startups to launch onchain products to a global audience, while allowing users to earn rewards through testing.",
    },
    {
      question: "How does ProductFindr work?",
      answer:
        "Founders can launch new onchain products or add new onchain features to existing products through the [Launch a product] tab. These products are then tested by beta testers, who provide reviews upon completion.",
    },
    {
      question: "What are the benefits for beta tester on ProductFindr?",
      answer:
        "Beta testers earn points that can be exchanged for token or fiat rewards upon reaching specific milestones.",
    },
    {
      question: "what are the benefits for product owners on ProductFindr?",
      answer:
        "Onchain startups get early feedback on their products or features, validate their ideas, and quicken go-to-market time.",
    },
    {
      question: "Do I have to pay to use ProductFindr?",
      answer:
        "No. We have a free tier option available that any startup can use. However, you need to pay a fee to access a higher number and level of beta-testers.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto mt-16 gap-8 py-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center faqHeader">
          Frequently Asked Questions
        </h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <span className="mr-4 rounded-full bg-[#9B30FF80] w-5 h-5"></span>
                  <span
                    className={`font-bold text-xl r-2 ${
                      openIndex === index ? "text-[#9B30FF]" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className={`w-6 h-6 rounded-full transition-transform transform ${
                      openIndex === index
                        ? "rotate-0 text-[#9B30FF]"
                        : "text-[#9B30FF]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        openIndex === index ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"
                      }
                    />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="mt-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
