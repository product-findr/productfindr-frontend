"use client";
import React from "react";
import ProductNavbar from "@/components/ProductNavbar";
import Image from "next/image";
import Link from "next/link";
import LeftArrowIcon from "../assets/icons/LeftArrowIcon.svg";
import VectorIcon from "../assets/icons/vector.png";
import LinkIcon from "../assets/icons/Link.png";
import StripeIcon from "../assets/icons/stripe.png";
import Stripe1 from "../assets/products-card/stripe1.png";
import Stripe2 from "../assets/products-card/stripe2.png";
import Stripe3 from "../assets/products-card/stripe3.png";
import Stripe4 from "../assets/products-card/stripe4.png";
import "../styles/Product.css";

const BetaTestDetail: React.FC = () => {
  return (
    <>
      <ProductNavbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <main className="col-span-1 md:col-span-3 bg-white p-4 md:block">
          <Link
              className="flex items-center text-lg text-gray-800 hover:text-[#9B30FF]"
              href="/products"
            >
              <div className="bg-transparent border border-[#9B30FF] rounded-full flex items-center justify-center w-12 h-12 mr-4">
                <Image
                  src={LeftArrowIcon}
                  alt="Left Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>
              <span>Go back</span>
            </Link>
            <div className="border border-[#9B30FF] rounded-xl container mx-auto py-2 px-4 sm:px-6 lg:px-8 p-8 rounded-2xl mt-8">
              <div className="flex items-center justify-between p-4 rounded-lg">
                <div className="flex items-center">
                  <Image
                    src={StripeIcon}
                    alt="Product Logo"
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-bold">Stripe</h2>
                    <p className="text-[#282828] mt-2">
                      Making payments easier
                    </p>
                    <div className="flex items-center mt-2">
                      <Image
                        src={LinkIcon}
                        alt="Link Icon"
                        className="w-4 h-4 mr-2"
                      />
                      <a
                        href="https://www.stripe.com"
                        className="text-[#282828] hover:underline"
                      >
                        www.stripe.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-[#2828280D] p-4 rounded-xl">
                  <Image src={VectorIcon} alt="vector" className="rounded-lg" />
                </div>
              </div>
              <div className="border-t border-[#9B30FF] my-4"></div>
              <div className="text-lg mt-8">
                Token Points Rewards: <span className="font-semibold">500</span>
              </div>
              <div className="mt-6">
                Start Date:{" "}
                <span className="font-semibold">24 - June - 2024</span>
              </div>
              <div className="mt-6">
                End Date:{" "}
                <span className="font-semibold">13 - July - 2024</span>
              </div>
              <p className="font-semibold text-start text-xl mt-16">
                Testing goal
              </p>
              <p className="spacious-text">
                Tempus pellentesque pulvinar sit nunc lectus libero magnis. Nibh
                ac non sed vitae facilisis pellentesque eget. Ac sed malesuada
                urna urna odio eu. Metus leo quam et nisl faucibus rhoncus
                mauris. Cursus quis varius id a suspendisse vitae enim. Feugiat
                nunc accumsan etiam a nunc velit nibh.
              </p>
              <div className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4">
                Usability Testing
              </div>
              <div className="flex justify-end pt-6 mb-12">
                <button
                  type="submit"
                  className="bg-[#9B30FF] text-white px-4 py-4 rounded-2xl text-lg flex items-center space-x-2"
                >
                  Start beta testing️️{" "}
                </button>{" "}
              </div>{" "}
              <div className="border-t border-[#9B30FF]"></div>
              <p className="font-semibold text-start text-xl mt-8">
                Description
              </p>
              <p className="spacious-text">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper iaculis et
                mi ante duis sed tincidunt sed. Quis a placerat aliquet cras
                sapien non congue. Gravida faucibus pulvinar metus bibendum a
                molestie sit mollis. Volutpat nibh suspendisse convallis egestas
                egestas lectus. Adipiscing fermentum mauris malesuada duis.
                Dignissim ipsum rutrum cursus turpis mauris turpis turpis vitae.
                Dolor interdum urna felis varius tempus nulla morbi gravida.
                Nibh vitae quam sem ac. Nisi etiam pulvinar morbi a orci nisl
                maecenas augue. Mattis nisl venenatis tortor id pellentesque
                eleifend faucibus vel. Faucibus orci est ullamcorper
                pellentesque blandit lobortis libero ac. Elit ridiculus turpis
                purus quis purus egestas varius. Sem pulvinar eget orci
                ultricies in mi ac ullamcorper. Tempus pellentesque pulvinar sit
                nunc lectus libero magnis. Nibh ac non sed vitae facilisis
                pellentesque eget. Ac sed malesuada urna urna odio eu. Metus leo
                quam et nisl faucibus rhoncus mauris. Cursus quis varius id a
                suspendisse vitae enim. Feugiat nunc accumsan etiam a nunc velit
                nibh. Risus ipsum ipsum sed maecenas non blandit ut fames nulla.
                Amet molestie ultrices tempor sit. Dictumst ac eget et maecenas
                consectetur tempor egestas nibh purus. Pellentesque sed nunc
                scelerisque tellus elit felis lectus magna pellentesque. Id sed
                natoque in bibendum lobortis leo. Nunc sit pretium consequat
                felis massa. Id tempus hendrerit purus arcu viverra. In enim
                aenean vitae molestie nulla. Aliquam luctus augue sed leo
                feugiat sodales. Fames faucibus est dictum pharetra quisque.
                Quis nibh odio enim non erat ut nibh ut. Ut praesent in diam
                neque quam nisi. Viverra interdum morbi dolor ullamcorper quis.
                Nascetur mauris duis urna porttitor at nunc posuere. Sed semper
                vitae ultrices odio. In lacinia diam sit leo. Ut nulla nascetur
                dui condimentum platea enim gravida ultricies nibh. Erat sit at
                sed hendrerit ornare. Aliquam tempor magnis sed eros. Tellus eu
                a blandit euismod sed quis arcu tellus netus
              </p>
              <p className="font-bold text-start text-2xl mt-8">Gallery</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <div className="col-span-1">
                  <Image
                    src={Stripe1}
                    alt="Gallery Image 1"
                    className="rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={Stripe2}
                    alt="Gallery Image 2"
                    className="rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={Stripe3}
                    alt="Gallery Image 3"
                    className="rounded-lg"
                  />
                </div>
                <div className="col-span-1">
                  <Image
                    src={Stripe4}
                    alt="Gallery Image 4"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <p className="font-bold text-start text-2xl mt-8">Video</p>
              <div className="bg-gray-200 w-full h-64 flex items-center justify-center rounded-lg mt-4">
                <span className="text-gray-600">Video Placeholder</span>
              </div>
              <p className="text-[#282828] mt-4">
                Loom Video Link 🔗{" "}
                <a
                  href="https://www.loom.com/share/some-video-id"
                  className="text-[#9B30FF] hover:underline"
                >
                  watch
                </a>
              </p>
            </div>
          </main>
          <aside className="hidden md:block col-span-1 p-4">
            <p className="font-bold text-start text-[#9B30FF] text-2xl underline mt-8">
              Categories
            </p>
            <span className="block mb-12 mt-8">
              <div className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4">
                Payment
              </div>
              <div className="bg-gray-200 text-gray-600 text-center rounded-full w-48 h-12 flex items-center justify-center my-4">
                Financial Technology
              </div>
            </span>

            <p className="font-bold text-start text-[#9B30FF] text-2xl underline mt-8">
              Similar products
            </p>
          </aside>
        </div>
      </div>
    </>
  );
};

export default BetaTestDetail;
