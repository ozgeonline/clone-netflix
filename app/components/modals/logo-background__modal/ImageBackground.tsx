"use client"

import Image from "next/image"
import { useState } from "react";

export default function Image__Bg() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div 
          className="absolute top-0 left-0 w-screen h-[80vh] sm:h-[95vh] bg-main-dark"
          aria-label="background image"
        ></div>
      )}
      <div className="absolute top-0 left-0 w-screen h-[80vh] sm:h-[95vh]">
        <Image
          onLoad={handleImageLoad}
          style={loading ? { visibility: 'hidden' } : {}}
          src="https://utfs.io/f/f641c1e7-df9e-4fba-8867-2d01bb86c303-9ysoom.webp"
          alt="background image"
          aria-label="Background image"
          className="-z-10 brightness-50 object-cover"
          fill
          priority
          sizes="(min-height:640px) 95vh, 80vh, width:100vw"
        />
      </div>
    </>
  )
}