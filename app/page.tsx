'use client';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroImagePage from "./components/HeroImage";
import Techstack from "./components/Techstack";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Earning from "./components/Earning";
import Launch from "./components/Launch";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
    <div className="bg-gradient-landing">
    <Navbar />
    <HeroSection />
    <HeroImagePage />
    </div>
    <Techstack />
    <Features />
    <Testimonial />
    <FAQ />
    <Earning />
    <Launch />
    <Footer />
    </>
  );
}
