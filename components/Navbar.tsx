import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../app/assets/productfindr.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="py-2 md:py-2">
        <div className="container mx-auto flex justify-between items-center py-2 pl-4">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Productfindr Logo" className="w-26 h-9" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <ul className="flex space-x-6 mt-1">
              <li className="group relative text-lg">
                <Link
                  href={"/launch"}
                  className={`${
                    pathname === "/launch"
                      ? "text-[#ECECEC]"
                      : "text-white"
                  }`}
                  aria-label="Go to Home"
                >
                  Launch a product
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#191970] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform"></div>
              </li>
              <li className="group relative text-lg">
                <Link
                  href={"/about"}
                  className={`${
                    pathname === "/about" ? "text-[#ECECEC]" : "text-white"
                  }`}
                >
                  About us
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#191970] transform scale-x-0 group-hover:scale-x-100 origin-bottom transition-transform"></div>
              </li>
            </ul>

            <a
              href="/earning"
              className="bg-[#ECECEC] border-1px text-[#0B081C] px-4 py-2 rounded-full text-lg"
            >
              Start to earn
            </a>
          </div>
          <div className="md:hidden pr-3">
            <button onClick={toggleNavbar} className="text-[#203475]">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="white"
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
                <a href="/launch" className="text-[#ECECEC]">
                  Launch a product
                </a>
              </li>
              <li className="text-lg">
                <a href="/about" className="text-[#ECECEC]">
                  About us
                </a>
              </li>
            </ul>
            <div className="mt-3">
              <a
                href="/earning"
                className="bg-[#ECECEC] text-[#0B081C] px-4 py-1 rounded-md text-lg"
              >
                Start to earn
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
