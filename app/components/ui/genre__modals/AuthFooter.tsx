"use client"
import { Facebook, Instagram, Twitter, Youtube   } from 'lucide-react';
import links from "@/app/data/link_authFooter";
import { usePathname } from 'next/navigation';

export default function AuthFooter() {
  const pathname = usePathname();
  const marginFooter = 
      pathname === "/home" ? "" 
    : pathname === "/home/new" ? "pt-[36rem]" 
    : "pt-[30rem]"
  
  return (
    <div 
      className={`
        ${marginFooter}
        flex flex-col max-w-[980px] mx-auto mb-0 px-[4%] items-start
      `}
    >
      <div className="flex *:w-9 *:mr-4 mb-4 *:cursor-pointer">
        <Facebook className="fill-white"/>
        <Instagram />
        <Twitter className="fill-white"/>
        <Youtube />
      </div>
      <ul 
        className="
          grid mb-3 max-[350px]:grid-cols-1 grid-cols-2 md:grid-cols-4 
        *:text-grayColor_700 *:text-[13px] *:pr-10 *:mb-3 *:cursor-pointer"
      >
        {links.map((link)=> (
          <li key={link.id} className="hover:underline">
            {link.title}
          </li>
        ))}
      </ul>
      <div className="mb-5">
        <button className="text-grayColor_700 hover:text-white cursor-pointer text-sm border p-2">
          Service Code
        </button>
      </div>
      <p className="text-grayColor_700 text-xs mb-4 cursor-default">
        © 1992-2024 ozflix, I.
      </p>
    </div>
  )
}