import { ReactNode } from "react";
import Image from "next/image";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";
import { Languages } from "lucide-react";
import Link from "next/link";
import CardAnimationWatch from "../components/CardAnimationWatch";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import {useMediaQuery } from "@mui/material";

export default function AuthLayout({children}:{children: ReactNode}){
  
  
  return (
    <>
      <div className="relative flex h-[700px] sm:h-[512px] md:h-[700px] w-screen flex-col md:items-center md:justify-center md:bg-transparent bg-gradient-to-t from-transparent via-black/20 to-black/60">
        <Image 
          src={BackgroundImage}
          alt="background image"
          className="flex object-cover -z-10 brightness-50 scale-x-125 "
          priority
          fill
        />
        <div className="flex flex-row">
          <Link href="/home">
            <div className="absolute w-[88px] h-6 md:w-[148px] md:h-[40px] md:left-[4rem] md:top-7 left-[-5rem] top-7">
              <Image
                src={Logo}
                alt="Logo"
                fill
                style={{marginLeft: "110px"}}
                priority
                className="absolute left-1 top-7 object-contain md:left-10 lg:left-16 md:top-6"
              />
            </div>
          </Link>
          <div className="absolute flex-row flex top-16 sm:ml-2 ml-7 sm:right-[-3rem] sm:top-7">
            <div className="flex space-x-4 w-32 bg-neutral-900/70 mr-[1rem] border border-gray-500 rounded-sm">
              <Languages className="w-4 h-4 absolute top-2 left-2 "/>
              <select className=" py-1 px-3 outline-none bg-neutral-900/10 rounded-sm">
                <option value="0" className="bg-slate-50 text-black">English</option>
                <option value="1" className="bg-slate-50 text-black">Türkçe</option>
              </select>
            </div>
            <Link
              href="/login"
              type="submit"
              className="w-20 h-8 bg-[#e50914]  mr-[15rem] py-1.5 px-4 rounded-sm text-sm hover:opacity-90 font-semibold">Sign In
            </Link>
          </div>
        </div>

        {children}
      </div>
      <CardAnimationWatch />
      <FAQ />
      <Footer />
    </>
  )
}