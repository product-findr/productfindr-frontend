"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileIcon from "../assets/icons/profile-pic.png"
import ProductNavbar from "@/components/ProductNavbar";
import Footer from "@/components/Footer";
import stack from "@/stacks/stacks";

const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboards = await stack.getLeaderboard();
        setLeaderboardData(leaderboards.leaderboard);
      } catch (error) {
        console.error("Error fetching leaderboard data: ", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
      <ProductNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-3xl">
            <h1 className="text-3xl font-bold text-center py-6 text-[#282828]">
              Leaderboard
            </h1>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-4 px-12 bg-[#9B30FF] text-left text-white font-semibold">
                    User
                  </th>
                  <th className="py-4 px-6 bg-[#9B30FF] text-left text-white font-semibold">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((user, index) => (
                  <tr
                    key={index}
                    className={`border-t ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-4 px-6 text-[#282828] flex items-center">
                      <Image
                        src={ProfileIcon}
                        alt="Profile Icon"
                        width={40}
                        height={40}
                        className="inline-block mr-2 rounded-full"
                      />
                     {truncateAddress(user.address)}
                    </td>
                    <td className="py-4 px-6 text-[#282828]">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Leaderboard;
