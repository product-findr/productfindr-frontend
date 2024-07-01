"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TimerIcon from "../app/assets/timer-icon.png";
import { useSendTransaction, useWriteContract, useAccount } from "wagmi";
import { parseEther } from "viem";
import { publicClient } from "@/config/client";
import { config } from "@/config/wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { ProductfindrAddress, ProductfindrABI } from "@/constant/constant";
import { usdToETH } from "@/utils/utils";
import stack from "@/stacks/stacks";

const BetaForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    contractAddress: "",
    targetNumberOfTesters: "",
    testingGoal: "",
    loomLink: "",
    goals: [],
    startingDate: "",
    endingDate: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({ name: "", amount: "" });

  const { writeContractAsync } = useWriteContract();

  const { data: hash, sendTransaction } = useSendTransaction();

  const account = useAccount();
  const connectionStatus = account.status;

  const handlePayWithStripe = async (amount) => {
    let url = "";

    if (amount === "1000") {
      url = "https://buy.stripe.com/test_9AQbLwb7E3rJdhecMM";
    } else {
      url = "https://buy.stripe.com/test_8wM5nlbnK6b32pW5kl";
    }

    const newTab = window.open(url, "_blank");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Delay for 1 minute (60000 milliseconds)
    await delay(30000);

    const callWebhook = async () => {
      const payload = {
        id: "evt_test_webhook",
        object: "event",
        created: Math.floor(Date.now() / 1000),
        data: {
          object: {
            amount: amount,
            billing_details: {
              email: "customer@example.com",
            },
            receipt_email: "customer@example.com",
            receipt_url: "https://example.com/receipt",
            payment_method_details: {},
            billing_details: {},
            currency: "usd",
          },
        },
        type: "payment_intent.succeeded",
      };

      try {
        const response = await fetch("/api/webhook/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Stripe-Signature": process.env.STRIPE_WEBHOOK_SECRET,
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log("Data: ", data);

        if (data.status === "success") {
          alert("Webhook call was successful!");
        } else {
          alert("Webhook call failed.");
        }
      } catch (error) {
        console.error("Error calling webhook:", error);
        alert("Error calling webhook.");
      }
    };

    await callWebhook();
  };

  const handlePayWithSmartWallet = async (amount) => {
    console.log(`handlePayWithSmartWallet called with: ${amount}`);
    const usdToSend = await usdToETH(amount);
    console.log("amount in eth: ", usdToSend);
    sendTransaction({
      to: "0x3dAeC2cBC6f7272a30969AADEe406E2Eb9435D5f",
      value: parseEther(1),
    });
  };

  const payModalPage = (name, amount) => () => {
    console.log(`payModalPage called with: ${name}, ${amount}`);
    setSelectedPlan({ name, amount });
    if (step === 2) {
      setStep(3);
    }
  };

  const validateField = (name, value) => {
    let error = "";

    if (typeof value === "string") {
      if (value.trim() === "") {
        error = `${name.replace(/([A-Z])/g, " $1").toLowerCase()} is required.`;
      } else if (
        name === "loomLink" &&
        !value.startsWith("https://www.loom.com/")
      ) {
        error = "Must be a valid loom video link.";
      }
    } else if (
      name === "targetNumberOfTesters" &&
      (value <= 0 || !Number.isInteger(Number(value)))
    ) {
      error = "Target number of testers must be a positive integer.";
    } else if (name === "startingDate" || name === "endingDate") {
      if (!value) {
        error = `${name.replace(/([A-Z])/g, " $1").toLowerCase()} is required.`;
      } else if (
        name === "endingDate" &&
        formData.startingDate &&
        value < formData.startingDate
      ) {
        error = "Ending date cannot be earlier than starting date.";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error;
  };

  const validateContractAddress = async () => {
    try {
      const bytecode = await publicClient.getBytecode({
        address: formData.contractAddress,
      });

      if (!bytecode) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error("Byte Code Error: ", error);
      return false;
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedGoals = [...formData.goals];

    if (checked) {
      updatedGoals.push(value);
    } else {
      updatedGoals = updatedGoals.filter((goal) => goal !== value);
    }

    setFormData({
      ...formData,
      goals: updatedGoals,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (connectionStatus !== "connected") {
      setErrors((prev) => ({
        ...prev,
        connection: "Please connect your wallet to proceed.",
      }));

      return;
    }

    const betaTestingFields = [
      "productName",
      "contractAddress",
      "targetNumberOfTesters",
      "testingGoal",
      "loomLink",
      "startingDate",
      "endingDate",
    ];

    let valid = true;

    for (const field of betaTestingFields) {
      const error = validateField(field, formData[field] || "");
      if (error) {
        valid = false;
        console.log(`Field '${field}' validation failed: ${error}`);
        setErrors((prev) => ({
          ...prev,
          [field]: error,
        }));
      }
    }

    // Validate goals
    if (formData.goals.length === 0) {
      setErrors((prev) => ({
        ...prev,
        goals: "At least one goal must be selected.",
      }));
      valid = false;
      console.log("No goals selected.");
    } else {
      setErrors((prev) => ({
        ...prev,
        goals: "",
      }));
    }

    try {
      const isValidContractAddress = await validateContractAddress(
        formData.contractAddress
      );
      if (!isValidContractAddress) {
        valid = false;
        setErrors((prev) => ({
          ...prev,
          contractAddress: "Must be a base sepolia contract",
        }));
      }
    } catch (error) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        contractAddress: "Error validating contract address.",
      }));
    }

    // Proceed to next step if all validations passed
    if (valid) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const tx = await writeContractAsync({
        abi: ProductfindrABI,
        address: ProductfindrAddress,
        functionName: "storeBetaTestingData",
        args: [
          formData.productName,
          formData.targetNumberOfTesters,
          formData.testingGoal,
          formData.loomLink,
          formData.goals,
          formData.startingDate,
          formData.endingDate,
        ],
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: tx,
      });

      if (transactionReceipt.status === "success") {
        const addPoints = await stack.track("beta_testing", {
          points: 20,
          account: account.address,
          uniqueId: account.address,
        });
        console.log("Add Points: ", addPoints.success === "true");
        setSuccess(true);
        setLoading(false);
      } else {
        alert("Failed to apply for beta testing. Please try again.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error Message: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-[#2828280D] container mx-auto py-2 px-4 sm:px-6 lg:px-8 p-8 rounded-2xl">
        <h2 className="text-[#9B30FF] text-3xl font-bold mb-6 text-start py-6">
          Beta testing🚀{" "}
        </h2>{" "}
        <form
          className="space-y-4 p-4"
          onSubmit={step < 3 ? handleNext : handleSubmit}
        >
          {step === 1 && (
            <>
              <div>
                <label
                  htmlFor="productName"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Name of the product{" "}
                  <span className="text-[#9B30FF] pl-2"> * </span>{" "}
                </label>{" "}
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  required
                  className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                  placeholder="Type the name of the product here"
                  value={formData.productName}
                  onChange={handleChange}
                />{" "}
                {errors.productName && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {" "}
                    {errors.productName}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <br />
              <div>
                <label
                  htmlFor="contractAddress"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Contract address of product{" "}
                  <span className="text-[#9B30FF] pl-2"> * </span>{" "}
                </label>{" "}
                <input
                  type="text"
                  id="contractAddress"
                  name="contractAddress"
                  required
                  className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                  placeholder="Copy the CA of the product"
                  value={formData.contractAddress}
                  onChange={handleChange}
                />{" "}
                {errors.contractAddress && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {" "}
                    {errors.contractAddress}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <br />
              <div>
                <label
                  htmlFor="targetNumberOfTesters"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Target number of Testers{" "}
                  <span className="text-[#9B30FF] pl-2"> * </span>{" "}
                </label>{" "}
                <input
                  type="number"
                  id="targetNumberOfTesters"
                  name="targetNumberOfTesters"
                  required
                  className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                  placeholder="input the numbers of testers you are targeting"
                  value={formData.targetNumberOfTesters}
                  onChange={handleChange}
                />{" "}
                <span className="flex justify-start mt-2 sm:text-xs md:text-base">
                  You have up to 10 free testers, to target more testers, click
                  the pricing link to get more testers{" "}
                </span>{" "}
                {errors.targetNumberOfTesters && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {" "}
                    {errors.targetNumberOfTesters}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <br />
              <div>
                <label
                  htmlFor="testingGoal"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Testing goal <span className="text-[#9B30FF] pl-2"> * </span>{" "}
                </label>{" "}
                <input
                  type="text"
                  id="testingGoal"
                  name="testingGoal"
                  required
                  className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                  placeholder="input the main goal for the product beta testing"
                  value={formData.testingGoal}
                  onChange={handleChange}
                />{" "}
                {errors.testingGoal && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {" "}
                    {errors.testingGoal}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <br />
              <div>
                <label
                  htmlFor="loomLink"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Loom Demo Link🔗{" "}
                  <span className="text-[#9B30FF] pl-2"> * </span>{" "}
                </label>{" "}
                <input
                  type="url"
                  id="loomLink"
                  name="loomLink"
                  required
                  className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                  placeholder="insert a link for the interactive demo"
                  value={formData.loomLink}
                  onChange={handleChange}
                />{" "}
                {errors.loomLink && (
                  <p className="text-red-500 text-xs md:text-sm">
                    {" "}
                    {errors.loomLink}{" "}
                  </p>
                )}{" "}
              </div>{" "}
              <br />
              <div>
                <label
                  htmlFor="goals"
                  className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
                >
                  Testing goal{" "}
                </label>{" "}
                <p className="text-sm text-gray-500 mb-4">
                  Check the goals you would like the testers to perform{" "}
                </p>{" "}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal1"
                      name="goals"
                      value="Usability test"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("Usability test")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal1"> Usability test </label>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal2"
                      name="goals"
                      value="Bug reporting"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("Bug reporting")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal2"> Bug reporting </label>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal3"
                      name="goals"
                      value="User interface"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("User interface")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal3"> User interface </label>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal4"
                      name="goals"
                      value="User experience"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("User experience")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal4"> User experience </label>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal5"
                      name="goals"
                      value="Feature feedback"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("Feature feedback")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal5"> Feature feedback </label>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="goal6"
                      name="goals"
                      value="Others"
                      className="border-[1px] border-[#9B30FF] text-[#9B30FF]"
                      checked={formData.goals.includes("Others")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    <label htmlFor="goal6"> Others </label>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <br />
              <div className="text-start mb-6">
                <p className="font-bold text-md text-gray-600 mb-8">
                  Duration⏰{" "}
                </p>{" "}
                <p className="text-md text-gray-600 mb-4">
                  Kindly include the duration for the beta testing{" "}
                </p>{" "}
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div className="flex-1">
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      htmlFor="startingDate"
                    >
                      Starting date
                    </label>
                    <input
                      type="date"
                      id="startingDate"
                      name="startingDate"
                      placeholder="Select starting date"
                      className="bg-transparent mt-1 block w-full border-[1px] border-[#282828] rounded-3xl py-2 px-3 text-gray-700"
                      value={formData.startingDate}
                      onChange={handleChange}
                    />
                    {errors.startingDate && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">
                        {errors.startingDate}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      htmlFor="endingDate"
                    >
                      Ending date
                    </label>
                    <input
                      type="date"
                      id="endingDate"
                      name="endingDate"
                      placeholder="Select ending date"
                      className="bg-transparent mt-1 block w-full border-[1px] border-[#282828] rounded-3xl py-2 px-3 text-gray-700"
                      value={formData.endingDate}
                      onChange={handleChange}
                    />
                    {errors.endingDate && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">
                        {errors.endingDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>{" "}
              <br />
              {errors.connection && (
                <p className="text-red-500 text-xs md:text-sm flex justify-end">
                  {errors.connection}
                </p>
              )}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-white border-[1px] border-[#9B30FF] text-[#9B30FF] px-4 py-4 rounded-2xl text-lg flex items-center space-x-2"
                >
                  Start beta testing️️{" "}
                </button>{" "}
              </div>{" "}
            </>
          )}{" "}
          {step === 2 && (
            <>
              {" "}
              {success === true ? (
                <>
                  <div class="text-center">
                    <h2 class="text-[#9B30FF] text-3xl font-bold mb-6">
                      Congratulations🎉{" "}
                    </h2>{" "}
                    <p className="text-lg">
                      {formData.productName}&nbsp;have successfully applied for
                      beta testing program
                    </p>
                    <Image
                      src={TimerIcon}
                      alt="success"
                      class="rounded-lg mt-6 mx-auto"
                      width={400}
                      height={300}
                    />
                    <div class="mt-6 flex justify-center space-x-4">
                      <Link
                        href="/"
                        className="bg-white border-[1px] border-[#9B30FF] text-[#9B30FF] px-4 py-4 rounded-2xl text-lg flex items-center space-x-2"
                      >
                        Go Home{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </>
              ) : (
                <>
                  <h3 className="text-[#282828] text-2xl mb-6 text-start py-6">
                    Pricing offers{" "}
                  </h3>{" "}
                  <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-[#9B30FF] xl:p-8">
                        <h3 className="mb-4 text-2xl text-[#9B30FF] font-semibold">
                          Free Starter{" "}
                        </h3>{" "}
                        <div className="flex justify-center items-baseline my-4">
                          <span className="mr-2 text-5xl font-extrabold">
                            {" "}
                            $0{" "}
                          </span>{" "}
                        </div>{" "}
                        <p className="font-light text-[#282828] sm:text-lg mb-6">
                          Perfect for testing basic concepts or prototypes.{" "}
                        </p>{" "}
                        <div className="border-t border-[#9B30FF80]"> </div>{" "}
                        <ul
                          role="list"
                          className="mb-8 space-y-4 text-left mt-6"
                        >
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                            <span> Free product listing </span>{" "}
                          </li>{" "}
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                            <span> Up to 10 beta testers </span>{" "}
                          </li>{" "}
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                            <span> Basic feedback reports </span>{" "}
                          </li>{" "}
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                            <span> Overall sentiment analysis </span>{" "}
                          </li>{" "}
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>{" "}
                            </svg>{" "}
                            <span> Access to core platform features </span>{" "}
                          </li>{" "}
                        </ul>{" "}
                        <a
                          className="text-[#9B30FF] bg-transparent border border-[#9B30FF] font-medium rounded-full text-sm px-5 py-3 text-center w-full max-w-xs md:max-w-sm lg:max-w-md block mx-auto"
                          onClick={handleSubmit}
                        >
                          {loading ? "choosing..." : "Choose this plan"}{" "}
                        </a>{" "}
                      </div>{" "}
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-[#9B30FF] xl:p-8">
                        <h3 className="mb-4 text-2xl text-[#9B30FF] font-semibold">
                          Pro Growth
                        </h3>
                        <div className="flex justify-center items-baseline my-4">
                          <span className="mr-2 text-5xl font-extrabold">
                            $1000
                          </span>
                        </div>
                        <p className="font-light text-[#282828] sm:text-lg mb-6">
                          Ideal for gathering in-depth feedback for early-stage
                          products.
                        </p>
                        <div className="border-t border-[#9B30FF80]"></div>
                        <ul
                          role="list"
                          className="mb-8 space-y-4 text-left mt-6"
                        >
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>Up to 50 beta testers</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>Detailed feedback reports</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              Targeted tester demographics selection based on
                              basic criteria (age, interests)
                            </span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>Priority customer support</span>
                          </li>
                        </ul>
                        <button
                          onClick={() =>
                            payModalPage("Pro Growth Package", "1000")()
                          }
                          className="text-[#9B30FF] bg-transparent border border-[#9B30FF] font-medium rounded-full text-sm px-5 py-3 text-center w-full max-w-xs md:max-w-sm lg:max-w-md block mx-auto"
                        >
                          Choose this plan
                        </button>
                      </div>
                      <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-[#9B30FF] xl:p-8">
                        <h3 className="mb-4 text-2xl text-[#9B30FF] font-semibold">
                          Premium Launch
                        </h3>
                        <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">
                            $5000
                          </span>
                        </div>
                        <p className="font-light text-[#282828] sm:text-lg mb-6">
                          Designed for comprehensive pre-launch testing and
                          targeted audience insights.
                        </p>
                        <div className="border-t border-[#9B30FF80]"></div>
                        <ul
                          role="list"
                          className="mb-8 space-y-4 text-left mt-6"
                        >
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>100+ beta testers</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              Advanced tester demographics selection (e.g.,
                              income level, tech savviness)
                            </span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>In-depth feedback analysis</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                              fill="#9B30FF"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              Dedicated account manager for personalized support
                            </span>
                          </li>
                        </ul>
                        <button
                          onClick={() =>
                            payModalPage("Premium Launch Package", "5000")()
                          }
                          className="text-[#9B30FF] bg-transparent border border-[#9B30FF] font-medium rounded-full text-sm px-5 py-3 text-center w-full max-w-xs md:max-w-sm lg:max-w-md block mx-auto"
                        >
                          Choose this plan
                        </button>
                      </div>
                    </div>
                  </section>{" "}
                </>
              )}{" "}
            </>
          )}{" "}
          {step === 3 && (
            <>
              <div className="text-lg font-semibold mb-4 text-center">
                You have selected
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center py-6">
                {selectedPlan.name}
              </h2>
              <div className="flex flex-col items-center">
                <button className="text-white bg-[#9B30FF] border border-[#9B30FF] font-medium rounded-lg text-sm px-8 sm:px-16 py-2 sm:py-4 mb-3">
                  Price{" "}
                  <span className="text-lg font-bold">
                    {" "}
                    ${selectedPlan.amount}
                  </span>
                </button>

                <div className="border-t border-[#9B30FF] w-full my-8"></div>

                <button
                  onClick={() => handlePayWithStripe(selectedPlan.amount)}
                  className="text-[#9B30FF] bg-black text-white font-bold text-lg px-8 py-4 mb-3 rounded-lg"
                >
                  Pay with Stripe
                </button>
                <span className="text-[#9B30FF] mb-3">or</span>
                <button
                  onClick={() => handlePayWithSmartWallet(selectedPlan.amount)}
                  className="text-[#9B30FF] bg-white font-bold text-lg px-8 py-4 mb-3 rounded-lg"
                >
                  Pay with coinbase
                </button>
              </div>
            </>
          )}
        </form>{" "}
      </div>{" "}
    </>
  );
};

export default BetaForm;
