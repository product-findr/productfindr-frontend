"use client";
import React, { useState } from "react";

const UserInfoForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    bio: "",
    interests: [],
  });

  const [errors, setErrors] = useState({});

  return (
    <>
      <div className="bg-[#2828280D] container mx-auto py-2 px-4 sm:px-6 lg:px-8 p-8 rounded-2xl">
        <h2 className="text-[#9B30FF] text-3xl font-bold mb-6 text-start py-6">
          Info ℹ️
        </h2>
        <div className="border-t border-[#9B30FF] my-4"></div>
        <form className="space-y-4 p-4">
          <div>
            <label
              htmlFor="username"
              className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
            >
              Username
              <span className="text-[#9B30FF] pl-2"> * </span>{" "}
            </label>{" "}
            <input
              type="text"
              id="username"
              name="username"
              required
              className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
              placeholder="Hunterxyz"
            />{" "}
            {errors.username && (
              <p className="text-red-500 text-xs md:text-sm">
                {" "}
                {errors.username}{" "}
              </p>
            )}{" "}
          </div>{" "}
          <br />
          <div>
            <label
              htmlFor="email"
              className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
            >
              Email <span className="text-[#9B30FF] pl-2"> * </span>{" "}
            </label>{" "}
            <input
              type="text"
              id="email"
              name="email"
              required
              className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
              placeholder="Hunterxyz@gmail.com"
            />{" "}
            {errors.email && (
              <p className="text-red-500 text-xs md:text-sm">
                {" "}
                {errors.email}{" "}
              </p>
            )}{" "}
          </div>{" "}
          <br />
          <div>
            <label
              htmlFor="username"
              className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
            >
              Bio
              <span className="text-[#9B30FF] pl-2"> * </span>{" "}
            </label>{" "}
            <input
              type="text"
              id="bio"
              name="bio"
              required
              className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
              placeholder="I just want to test my favourite projects"
            />{" "}
            {errors.bio && (
              <p className="text-red-500 text-xs md:text-sm"> {errors.bio} </p>
            )}{" "}
          </div>{" "}
          <br />
          <div>
            <label
              htmlFor="interests"
              className="block text-md font-bold text-gray-700 mb-4 sm:text-xs md:text-base"
            >
              Interests
              <span className="text-[#9B30FF] pl-2"> * </span>{" "}
            </label>{" "}
            <input
              type="text"
              id="interests"
              name="interests"
              required
              className="bg-transparent mt-1 block w-full border border-[#282828] rounded-2xl pl-4 h-14 sm:text-xs md:text-base"
              placeholder="blockchain, financial technology"
            />{" "}
            {errors.interests && (
              <p className="text-red-500 text-xs md:text-sm">
                {" "}
                {errors.interests}{" "}
              </p>
            )}{" "}
          </div>{" "}
          <div className="flex justify-start pt-6">
            <button
              type="submit"
              className="bg-white border-[1px] border-[#9B30FF] text-[#9B30FF] px-4 py-4 rounded-2xl text-lg flex items-center space-x-2"
            >
              Save Changes 📁
            </button>{" "}
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default UserInfoForm;
