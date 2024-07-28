"use client";

import Image from "next/image";

import TeamMember1 from "../assets/teams/idris.jpg";
import TeamMember2 from "../assets/teams/isreal1.png";
import TeamMember4 from "../assets/teams/Mame.jpeg";
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
                “From beta-testing to global launch, we transform onchain
                product development, enabling faster market entry and ensuring
                impactful innovation for a global audience. Join us in shaping
                the future of the onchain economy.”
              </p>
            </div>
          </div>
        </span>
        <div className="p-8">
          <p className="mb-4 text-xl font-light">
            From the outset, our vision has been ambitious yet straightforward:
            to transform the launch process for onchain products by seamlessly
            connecting them with beta-testers, facilitating rapid go-to-market
            strategies, and ultimately enabling the seamless launch of live
            projects to a global audience.
          </p>
          <p className="mb-4 text-xl font-light">
            <span className="font-semibold">Phase 1: </span>
            Connect Onchain Startups with Beta-Testers (1,000+ users) Our
            journey will begin with the goal of providing a platform where
            onchain founders can easily find and engage the services of
            beta-testers. Early feedback is crucial, and our platform serves as
            the bridge between innovative onchain startups and the initial users
            who help shape their products. By fostering these connections, we
            aim to hasten the development process and ensure products are
            validated before market.
          </p>
          <p className="mb-4 text-xl font-light">
            <span className="font-semibold">Phase 2:</span> Validate and Refine
            (10,000+ users) Once startups receive initial feedback, they need a
            space to refine and iterate on their products. Our platform will
            support this crucial phase by offering tools and resources to help
            founders optimize their offerings based on real user insights. This
            phase is all about validation, ensuring that each onchain product
            meets the needs and expectations of its target audience.
          </p>
          <p className="mb-4 text-xl font-light">
            <span className="font-semibold"> Phase 3: </span>
            Launch Live Projects to the Market (100,000+ users) With a validated
            and refined product, it is time to go live. Our platform will evolve
            to support startups launching their onchain projects to a wider
            audience. We aim to provide the infrastructure and network necessary
            to reach thousands of onchain users, helping founders transition
            from beta to full-scale deployment smoothly and efficiently.
          </p>
          <p className="mb-4 text-xl font-light">
            <span className="font-semibold">Phase 4:</span> Scale and Global
            Expansion (1M+ users) As startups grow, so does our platform. We are
            committed to supporting the global expansion of onchain projects,
            helping them scale securely and efficiently. By providing ongoing
            support and resources, we ensure that onchain startups can reach
            their full potential and significantly impact the onchain economy.
          </p>
          <p className="mb-4 text-xl font-light">
            <span className="font-semibold">Our mission is simple:</span> To
            make it easier for founders to launch products onchain and go to
            market faster. We believe in the power of the onchain economy to
            drive innovation and economic freedom globally. By connecting
            founders with beta-testers and supporting their journey from concept
            to live project, we are accelerating the future of onchain
            applications together. Join us as we accelerate the next wave of
            onchain innovation.
          </p>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1E1E1E] mb-8 text-center">
          Meet the Team
        </h2>
        <div className="flex flex-wrap -mx-4 py-4">
          {/* Team Member 1 */}
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
              <Image
                src={TeamMember1}
                alt="Idris"
                className="rounded-md mb-6"
              />
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
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
              <Image
                src={TeamMember2}
                alt="Idris"
                className="rounded-md mb-2"
              />
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
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="border border-gray-300 rounded-lg p-6 text-center">
              <Image
                src={TeamMember4}
                alt="Idris"
                className="rounded-md mb-2"
              />
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
