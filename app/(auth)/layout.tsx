import { ReactNode } from "react"
import Image from "next/image"
import { Languages } from "lucide-react"
import { ChevronDown } from 'lucide-react'
import Link from "next/link"

export default function AuthLayout({children}:{children: ReactNode}){

  return (
      <div className="items-center justify-center">
        <div className="absolute top-0 left-0 w-screen h-[60vh] sm:h-[95vh]">
          <Image
            src="https://utfs.io/f/f641c1e7-df9e-4fba-8867-2d01bb86c303-9ysoom.webp"
            alt="background image"
            className="flex -z-10 brightness-50 object-cover"
            fill
            priority
            quality={50}
          />
        </div>
        <div className="absolute top-0 left-0 bg-gradient-to-t from-transparent via-black/80 to-black/80 w-screen max-h-[200px]">
          <div className="flex flex-row w-screen">
            <Link href="/home" prefetch={false}>
              <div className="absolute w-20 md:w-36 h-6 md:h-[40px] mx-11 md:mx-44 top-7">
                <Image
                  src="https://utfs.io/f/d33f8566-a121-4424-9710-828f8b0bf2d8-bauwjc.svg"
                  alt="Logo"
                  fill
                  sizes="100vw"
                  quality={50}
                  priority
                />
              </div>
            </Link>
            <div className="absolute flex flex-row top-16 min-[350px]:top-7 max-[350px]:left-11 right-14 lg:right-48">
              <div className="flex space-x-4 w-16 sm:w-32 bg-neutral-900/70 mr-[1rem] border border-gray-500 rounded-sm">
                <Languages className="w-4 h-4 absolute top-2 left-2 "/>
                <label htmlFor="language" aria-labelledby="select" className="hidden"></label>
                <select  aria-label="hidden" aria-labelledby="Aria Language" name="language" id="language" className="py-1 px-3 outline-none bg-neutral-900/10 rounded-sm -mt-48 sm:mt-0">
                  <option value="language-1" aria-label="hidden" className="bg-slate-50 text-black">English</option>
                  <option value="language-2" aria-label="hidden" className="bg-slate-50 text-black">Türkçe</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute top-2 left-5 sm:hidden inline-block" />
              </div>
              <Link
                prefetch={false}
                href="/login"
                type="submit"
                className="w-20 h-8 bg-[#e50914] py-1.5 px-4 rounded-sm text-sm hover:opacity-90 font-semibold">Sign In
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
  )
}