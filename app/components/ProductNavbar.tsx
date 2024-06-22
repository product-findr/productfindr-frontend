"use client";
import React, { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { truncateAddress } from "../../utils/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../assets/productfindr-black.png";
import WalletIcon from "../assets/icons/wallet.png";
import Link from "next/link";

const ProductNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="py-2 md:py-2">
        <div className="container mx-auto flex justify-between items-center py-2 pl-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Productfindr Logo" className="w-18 h-9" />
            </Link>
          </div>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#2828280D] pl-12 py-2 rounded-full text-black w-80 md:w-96"
            />
            <div className="absolute left-0 top-0 mt-3 ml-3">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6 mt-1">
              <li className="group relative text-lg">
                <Link
                  href={"/product"}
                  className={`${
                    pathname === "/product"
                      ? "text-[#9B30FF]"
                      : "text-[#282828]"
                  }`}
                  aria-label="Go to Home"
                >
                  Products
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#9B30FF] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform"></div>
              </li>
              <li className="group relative text-lg">
                <Link
                  href={"/launch"}
                  className={`${
                    pathname === "/launch" ? "text-[#9B30FF]" : "text-[#282828]"
                  }`}
                >
                  Launch Product
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#9B30FF] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform"></div>
              </li>
            </ul>
            <div>
              {connectors.map((connector) =>
                account.status === "connected" ? (
                  <button
                    key={connector.uid}
                    type="button"
                    className="bg-[#ECECEC] border-[1px] border-[#9B30FF] text-[#0B081C] px-4 py-2 rounded-full text-lg flex items-center space-x-2"
                    onClick={() => disconnect()}
                  >
                    <Image
                      src={WalletIcon}
                      alt="Wallet Icon"
                      className="w-5 h-5"
                    />
                    <span>{truncateAddress(account.address)}</span>
                  </button>
                ) : (
                  <button
                    key={connector.uid} // Added key for each button
                    type="button"
                    className="bg-[#ECECEC] border-1px text-[#0B081C] px-4 py-2 rounded-full text-lg flex items-center space-x-2"
                    onClick={() => connect({ connector })}
                  >
                    <span>connect wallet</span>
                    <Image
                      src={WalletIcon}
                      alt="Wallet Icon"
                      className="w-5 h-5"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          <div className="md:hidden pr-3">
            <button onClick={toggleNavbar} className="text-[#9B30FF]">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="#282828"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 pl-4">
            <ul className="flex flex-col space-y-3">
              <li className="text-lg mt-4">
                <a href="/product" className="text-[#282828]">
                  Products
                </a>
              </li>
              <li className="text-lg">
                <a href="/launch" className="text-[#9B30FF]">
                  Launch Product
                </a>
              </li>
            </ul>
            <div>
              {connectors.map((connector) =>
                account.status === "connected" ? (
                  <button
                    key={connector.uid}
                    type="button"
                    className="bg-[#ECECEC] border-[1px] border-[#9B30FF] text-[#0B081C] px-4 py-2 rounded-md text-lg flex items-center mt-4 space-x-2"
                    onClick={() => disconnect()}
                  >
                    <Image
                      src={WalletIcon}
                      alt="Wallet Icon"
                      className="w-5 h-5"
                    />
                    <span>{truncateAddress(account.address)}</span>
                  </button>
                ) : (
                  <button
                    key={connector.uid} // Added key for each button
                    type="button"
                    className="bg-[#ECECEC] border-1px text-[#0B081C] px-4 py-2 rounded-md text-lg flex items-center mt-4 space-x-2"
                    onClick={() => connect({ connector })}
                  >
                    <span>connect wallet</span>
                    <Image
                      src={WalletIcon}
                      alt="Wallet Icon"
                      className="w-5 h-5"
                    />
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ProductNavbar;
