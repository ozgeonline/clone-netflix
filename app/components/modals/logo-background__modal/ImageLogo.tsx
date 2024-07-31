"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

interface logoProps {
  logoStyle: string
}

export default function Image__Logo({logoStyle}:logoProps) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  
  return (
    <>
      {loading && (
        <div 
          className="absolute top-0 left-0 size-4 mx-10 md:mx-44 my-5 border border-main-red border-y-2"
          aria-label="logo"
        ></div>
      )}
      <Link href="/" className={logoStyle} prefetch={false}>
        <Image
          onLoad={handleImageLoad}
          style={loading ? { visibility: 'hidden' } : {}}
          src="https://utfs.io/f/8f183cec-55a9-438f-b696-74fb636a2a29-52h3ko.svg"
          alt="Logo"
          fill
          sizes="100%"
          aria-label="Netflix Logo"
          className="z-50"
          priority
        />
      </Link>
    </>
    
  )
}