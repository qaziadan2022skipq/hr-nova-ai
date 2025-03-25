"use client";

import Image from "next/image";
import React from "react";

const CustomBrandedSection = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Left Section - Logos */}
      <div className="w-full md:w-1/2 flex flex-wrap justify-center md:justify-start gap-4">
        <Image
          src="/branding.png"
          width={500}
          height={500}
          alt="Company Logos"
          className="w-full max-w-lg object-contain"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="text-[#01E0FF] text-sm uppercase font-semibold mb-2 border-l-4 border-[#01E0FF] pl-2">
          HR Nova AI – Customized Training, Built for Your Business
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Custom-Branded. Tailored to Your Workforce.
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          HR Nova AI isn’t just another one-size-fits-all solution. Our platform
          is fully customizable to match your company’s unique needs, culture,
          and workforce. From benefits walkthroughs to onboarding and compliance
          training, everything is built to reflect your branding, your voice,
          and your priorities—not ours.
        </p>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          Your employees will engage with interactive avatars and video content
          that look and feel like a seamless extension of your company—because
          they are.
        </p>
      </div>
    </div>
  );
};

export default CustomBrandedSection;
