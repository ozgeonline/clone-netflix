import { ReactNode } from "react"
import Image from "next/image"
import Logo from "../../public/netflix_logo.svg"
import { Languages } from "lucide-react"
import { ChevronDown } from 'lucide-react'
import Link from "next/link"

export default function AuthLayout({children}:{children: ReactNode}){
  
  return (
    <div>
      <div className="relative flex flex-col h-[800px] min-[320px]:h-[512px] md:h-[700px] w-screen items-center justify-center ">
        <div className="bg-gradient-to-t from-transparent via-black/80 to-black/80 w-screen h-[200px] -mt-[38rem]">
          <Image
            src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/0711d012-de63-4c4f-a3b4-9e9ece7267ac/TR-en-20240107-trifectadaily-perspective_alpha_website_small.jpg"
            alt="background image"
            className="flex -z-10 brightness-50 scale-x-125 object-cover"
            priority
            fill
          />
        
          <div className="flex flex-row">
            <Link href="/home" prefetch={false}>
              <div className="absolute w-20 md:w-36 h-6 md:h-[40px] -left-20 sm:-left-18 md:-left-16 lg:left-16 top-7">
                <Image
                  src={Logo}
                  alt="Logo"
                  fill
                  style={{marginLeft: "110px"}}
                  priority
                  className="absolute left-1 md:left-10 lg:left-16 top-7 object-contain"
                />
              </div>
            </Link>
            <div className="absolute flex flex-row top-16 -right-44 min-[320px]:top-7 min-[320px]:-right-52 sm:-right-[3rem] md:-right-48 lg:-right-14 ">
              <div className="flex space-x-4 w-16 sm:w-32 bg-neutral-900/70 mr-[1rem] border border-gray-500 rounded-sm">
                <Languages className="w-4 h-4 absolute top-2 left-2 "/>
                <select id="lang" className="py-1 px-3 outline-none bg-neutral-900/10 rounded-sm -mt-48 sm:mt-0">
                  <option value="eng" className="bg-slate-50 text-black">English</option>
                  <option value="tr" className="bg-slate-50 text-black">Türkçe</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute top-2 left-5 sm:hidden inline-block" />
              </div>
              <Link
                prefetch={false}
                href="/login"
                type="submit"
                className="w-20 h-8 bg-[#e50914] mr-[15rem] sm:mr-[5rem] md:mr-[15rem] py-1.5 px-4 rounded-sm text-sm hover:opacity-90 font-semibold">Sign In
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}