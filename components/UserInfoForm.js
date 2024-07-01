"use client";
import React, { useState, useEffect } from "react";
import { UserInfoAddress, UserInfoABI } from "@/constant/constant";
import { useWriteContract, useAccount, useReadContract } from "wagmi";
import { config } from "@/config/wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";

const UserInfoForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    bio: "",
    interests: [""],
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [accountRegistered, setAccountRegistered] = useState(false);
  const { address: account } = useAccount();

  const { writeContractAsync } = useWriteContract();

  const { data: fetchedUserData, loading: fetchLoading } = useReadContract({
    abi: UserInfoABI,
    address: UserInfoAddress,
    functionName: "getUser",
    args: [account],
  });

  useEffect(() => {
    if (fetchedUserData) {
      setUserData({
        username: fetchedUserData[0],
        email: fetchedUserData[1],
        bio: fetchedUserData[2],
        interests: fetchedUserData[3],
      });
      setAccountRegistered(true);
    }
  }, [fetchedUserData]);

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleInterestChange = (index, value) => {
    const newInterests = [...userData.interests];
    newInterests[index] = value;
    setUserData({
      ...userData,
      interests: newInterests,
    });
  };

  const handleAddInterest = () => {
    setUserData({
      ...userData,
      interests: [...userData.interests, ""],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const tx = await writeContractAsync({
        abi: UserInfoABI,
        address: UserInfoAddress,
        functionName: "addUser",
        args: [
          account,
          userData.username,
          userData.email,
          userData.bio,
          userData.interests,
        ],
      });

      const transactionReceipt = await waitForTransactionReceipt(config, {
        hash: tx,
      });
      console.log("Transaction Receipt: ", transactionReceipt);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (fetchLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form className="space-y-4 p-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
          >
            Username
            <span className="text-[#9B30FF] pl-2"> * </span>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="hunterxyz"
            required
            className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
            value={userData.username}
            onChange={handleUserDataChange}
            disabled={!userData.username === ""} // Disable input while loading
          />
          {errors.username && (
            <p className="text-red-500 text-xs md:text-sm">{errors.username}</p>
          )}
        </div>
        <br />
        <div>
          <label
            htmlFor="email"
            className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
          >
            Email <span className="text-[#9B30FF] pl-2"> * </span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="hunterxyz@gmail.com"
            required
            className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
            value={userData.email}
            onChange={handleUserDataChange}
            disabled={isLoading} // Disable input while loading
          />
          {errors.email && (
            <p className="text-red-500 text-xs md:text-sm">{errors.email}</p>
          )}
        </div>
        <br />
        <div>
          <label
            htmlFor="bio"
            className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
          >
            Bio
            <span className="text-[#9B30FF] pl-2"> * </span>
          </label>
          <input
            type="text"
            id="bio"
            name="bio"
            placeholder="I am a product tester"
            required
            className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
            value={userData.bio}
            onChange={handleUserDataChange}
            disabled={isLoading} // Disable input while loading
          />
          {errors.bio && (
            <p className="text-red-500 text-xs md:text-sm">{errors.bio}</p>
          )}
        </div>
        <br />
        <div>
          <label
            htmlFor="interests"
            className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
          >
            Interests
            <span className="text-[#9B30FF] pl-2"> * </span>
          </label>
          {userData.interests.map((interest, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                id={`interest-${index}`}
                name="interests"
                placeholder="blockchain, DeFi, Gaming..."
                required
                className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
                value={interest}
                onChange={(e) => handleInterestChange(index, e.target.value)}
                disabled={isLoading} // Disable input while loading
              />
              {index === userData.interests.length - 1 && (
                <button
                  type="button"
                  className="ml-2 bg-[#9B30FF] text-white px-4 py-2 rounded-2xl"
                  onClick={handleAddInterest}
                  disabled={isLoading} // Disable button while loading
                >
                  Add
                </button>
              )}
            </div>
          ))}
          {errors.interests && (
            <p className="text-red-500 text-xs md:text-sm">
              {errors.interests}
            </p>
          )}
        </div>
        <div className="flex justify-start pt-6">
          <button
            type="submit"
            className="bg-white border-[1px] border-[#9B30FF] text-[#9B30FF] px-4 py-4 rounded-2xl text-lg flex items-center space-x-2"
            disabled={accountRegistered === true} // Disable button while loading
          >
            {isLoading ? <span>saving...</span> : <>Save Changes 📁</>}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserInfoForm;
