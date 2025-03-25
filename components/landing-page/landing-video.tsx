"use client";

import Image from "next/image";
import React from "react";

const LandingVideo = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-black text-white">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <iframe
          className="w-full mt-2 border-4 border-gray-300 rounded-lg aspect-video"
          src={"https://www.youtube.com/embed/9kulvM1-Fig?si=qzNt3NruEkRvbx25"}
          title="VetmentorAI Overview Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default LandingVideo;
