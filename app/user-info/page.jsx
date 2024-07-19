"use client";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { truncateAddress } from "@/utils/utils";
import Image from "next/image";
import ProfileImg from "../assets/icons/profile-pic.png";
import Wallet from "../assets/icons/wallet.png";
import ProductNavbar from "../../components/ProductNavbar";
import UserInfoForm from "../../components/UserInfoForm";
import { UserInfoAddress, UserInfoABI } from "@/constant/constant";
import { useReadContract } from "wagmi";
import stack from "@/stacks/stacks";
import "../styles/Product.css";

const UserInfo = () => {
  const [username, setusername] = useState("hunterxyz");
  const { address: account } = useAccount();

  const [connectedUserPoints, setConnectedUserPoints] = useState("");

  const { data: fetchedUserData, loading: fetchLoading } = useReadContract({
    abi: UserInfoABI,
    address: UserInfoAddress,
    functionName: "getUser",
    args: [account],
  });

  useEffect(() => {
    if (fetchedUserData) {
      const fetchedUsername = fetchedUserData[0];
      if (fetchedUsername) {
        setUsername(fetchedUsername);
      }
    }
  }, [fetchedUserData]);

  useEffect(() => {
    const fetchPoints = async () => {
      if (account) {
        try {
          const userPoints = await stack.getPoints(account);
          setConnectedUserPoints(userPoints);
        } catch (error) {
          console.error("Error fetching points: ", error);
        }
      } else {
        console.error("account is not defined or empty");
      }
    };

    fetchPoints();
  }, [account]);

  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          <aside className="col-span-1 border border-[#9B30FF] rounded-xl p-4">
            <div>
              <div className="flex justify-center mb-4">
                <Image
                  src={ProfileImg}
                  alt="profile"
                  className="items-center justify-center rounded-lg mt-8"
                />
              </div>
              <p className="font-bold text-center text-gray-600 text-lg mt-8">
                {username}
              </p>
              <p className="font-bold text-center text-[#9B30FF] text-2xl mt-8">
                Level 1
              </p>
              <div className="border-t border-[#9B30FF] my-4"></div>
              <p className="font-bold text-center text-sm mt-4">
                Total Points:
              </p>
              <p className="font-bold text-center text-lg">
                {connectedUserPoints}
              </p>
              <p className="font-bold text-center text-sm mt-4">
                No. of products Beta- tested:
              </p>
              <p className="font-bold text-center text-lg">25</p>
              <p className="font-bold text-center text-sm mt-4">
                {" "}
                No. of products launched{" "}
              </p>
              <p className="font-bold text-center text-lg">0</p>
              <div className="flex justify-center space-x-2 p-4 mt-8">
                <Image src={Wallet} alt="Wallet Icon" className="h-6 w-6" />
                <span className="text-sm text-gray-600">
                  {account
                    ? truncateAddress(account)
                    : "No address available"}
                </span>
              </div>
            </div>
          </aside>
          <main className="col-span-3 bg-white p-4">
            <UserInfoForm />
          </main>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
