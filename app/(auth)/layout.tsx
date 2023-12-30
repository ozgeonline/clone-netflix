import { ReactNode } from "react";
import Image from "next/image";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";
import { Languages } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({children}:{children: ReactNode}){
  return (
    <div className="relative flex h-[700px] w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image 
        src={BackgroundImage}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <div className="flex flex-row sm:flex-col">
      <Link href="/home">
        <Image
          src={Logo}
          alt="Logo"
          width={148}
          height={40}
          style={{marginLeft: "110px"}}
          priority
          className="absolute left-4 top-4 object-contain md:left-10 lg:left-16 md:top-6"
        />
      </Link>
        <div>
          <div className="absolute flex right-4 top-4 md:top-6  mr-[17rem] border border-gray-500 rounded-sm">
            <div className="flex space-x-4 bg-neutral-900/70 rounded-sm w-32">
              <Languages className="w-4 h-4 absolute top-2 left-2 "/>
              <select className=" py-1 px-3 outline-none bg-neutral-900/10 rounded-sm">
                <option value="0" className="bg-slate-50 text-black">English</option>
                <option value="1" className="bg-slate-50 text-black">Türkçe</option>
              </select>
            </div>
          </div>
          <Link
            href="/login"
            type="submit"
            className="absolute right-4 top-4 w-20 h-8 bg-[#e50914] md:top-6 mr-[11rem] py-1.5 px-4 rounded-sm text-sm hover:opacity-90">Sign In
          </Link>
        </div>
      </div>

      {children}
    </div>
  )
}