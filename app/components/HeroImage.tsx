import React from "react";
import Image from "next/image";
import HeroImage from "../assets/Wrapper.png";

const HeroImagePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-cente mt-16">
      <Image src={HeroImage} alt="Hero Image" className="max-w-full h-auto" />
    </div>
  );
};

export default HeroImagePage;
