"use client";

import Image from "next/image";

import TeamMember2 from "../assets/teams/israel.jpg";
import TeamMember3 from "../assets/teams/damilare.jpg";
import TeamMember4 from "../assets/teams/Mame.jpeg"
import Quote from "../assets/icons/quote.png";
import Navbar from "../../components/Navbar";
import Launch from "../../components/Launch";
import Footer from "../../components/Footer";
import "../styles/Product.css";

const Page = () => {
  return (
    <>
      <div className="bg-gradient-landing">
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-6 space-y-8 px-4 sm:px-8">
          <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold sm:mb-4">
            About ProductfindR
          </h2>
          <span className="border-custom border-solid border-[#FFFFFF4D] rounded-full p-3 sm:p-4 text-sm sm:text-base font-normal leading-snug text-center text-[#F2F4F8] px-6">
            Welcome to ProductFindR 🔎, where you can <br />
            Search smarter, find better, earn Bigger
          </span>
          <div>.</div>
        </div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
      <div className="container mx-auto mt-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E1E1E] mb-8">
          What&apos;s our Mission
        </h2>

        <span className="block">
          <div className="grid grid-cols-4 gap-4 items-center p-8">
            <div className="col-span-1">
              <Image
                src={Quote}
                alt="Description of image"
                className="w-16 h-16"
              />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2">
              <p className="text-2xl font-light">
                “Before ProductfindR, dApp testing was a guessing game. Now,
                their secure platform connects us with expert testers. We get
                transparent feedback, fix bugs early, and launch with
                confidence.”
              </p>
            </div>
          </div>
        </span>
        <div className="p-8">
          <p className="mb-4 text-xl font-light">
            Lorem ipsum dolor sit amet consectetur. Sed at odio quis facilisis
            enim lorem. Erat molestie at a auctor gravida bibendum. Pellentesque
            sit pretium ridiculus sed vel sem quisque ac. Malesuada porta
            porttitor consectetur quis. Quisque dolor vel urna vulputate
            ultrices cursus egestas hac. Fames ultrices ullamcorper ut in risus
            vulputate urna vitae. Amet id luctus velit sodales neque. Sit nisl
            at a tellus sed enim nisl.
          </p>
          <p className="mb-4 text-xl font-light">
            Ac habitant lacinia at velit duis id risus neque pharetra. Nulla
            arcu ac elit sapien tempus elit blandit praesent. Nunc non natoque
            sed leo donec adipiscing in magna pellentesque. Morbi sapien
            tristique iaculis nisl elit mauris eget. Mattis potenti et urna
            risus aliquet gravida. Sit pulvinar elit elementum massa laoreet
            pellentesque morbi duis elit. Libero in vel condimentum a senectus
            egestas pellentesque blandit. Ultrices adipiscing convallis semper
            elit eu quam. Pretium sem in tempor tellus.
          </p>
          <p className="mb-4 text-xl font-light">
            Augue cursus volutpat tortor sit tincidunt enim vulputate egestas.
            Porta amet posuere pharetra id ultrices. Lacus posuere libero
            integer sed vel gravida lacus nec magna. Libero auctor tristique
            eget et urna nisi vitae. Pellentesque malesuada luctus lectus
            imperdiet aliquam duis. Pulvinar aenean nisl facilisis neque.
          </p>
          <p className="mb-4 text-xl font-light">
            Eros morbi pulvinar aliquam viverra mi orci duis. Sollicitudin
            bibendum etiam donec urna pretium quam convallis leo senectus. At
            pharetra duis scelerisque platea pharetra. Morbi tortor mauris at
            ullamcorper et. Turpis etiam urna proin ullamcorper a consequat.
            Elit bibendum ullamcorper bibendum magnis diam pellentesque amet.
            Vestibulum nibh quis laoreet cursus odio lacus. Sit feugiat
            facilisis enim justo sit sed pharetra quis. Sodales ac nec nibh
            senectus amet malesuada aliquam mi egestas.
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1E1E1E] mb-8 text-center">
          Meet the Team
        </h2>
        <div className="flex flex-wrap -mx-4 py-4">
          {/* Team Member 1 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
              <Image src={TeamMember3} alt="Idris" className="rounded-md mb-6" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-4">Idris Olubisi</h3>
                <p className="text-gray-600">Blockchain Developer</p>
              </div>
              <a
                href="https://x.com/olanetsoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B30FF] hover:underline"
              >
                Olanetsoft
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
            <Image src={TeamMember2} alt="Idris" className="rounded-md mb-2" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-4">Ogedengbe Israel</h3>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
              <a
                href="https://x.com/techwithmide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B30FF] hover:underline"
              >
                Techwithmide
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
            <Image src={TeamMember3} alt="Idris" className="rounded-md mb-6" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-4">
                  Damilare Aregbesola
                </h3>
                <p className="text-gray-600">Marketing and Strategy</p>
              </div>
              <a
                href="https://x.com/Sir_Damilare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B30FF] hover:underline"
              >
                Sir_Damilare
              </a>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
            <Image src={TeamMember4} alt="Idris" className="rounded-md mb-2" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-4">Omomame Imafidon</h3>
                <p className="text-gray-600">Product Designer</p>
              </div>
              <a
                href="https://x.com/CreativeMame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9B30FF] hover:underline"
              >
                Creativemame
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Launch />
        <Footer />
      </div>
    </>
  );
};

export default Page;
