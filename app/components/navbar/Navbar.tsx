import Link from "next/link"
import Image from "next/image"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import ScrollingElementSSR from "./ScrollingElementSSR"
import Image__Logo from "../section/tr-en_pages_modal/component/Image__Logo"
import { preload } from "react-dom"

export default function Navbar() {

  return (
    <ScrollingElementSSR>
      <div className="relative flex w-screen justify-between items-center px-2 pt-5 pb-2 sm:p-5">
        <div className="flex">
          <Link href="/home" prefetch={false} rel="preload">
            <div className="relative flex items-center h-[5vw] md:h-[1.7vw] w-[8vw] sm:w-[11vw] min-w-[5rem] ">
              <Image__Logo />
            </div>
          </Link>
          <ul className="lg:flex gap-x-5 hidden">
            {links.map((link) => (
              <NavLink key={link.id} path={link.href} label={link.name} />
            ))}
          </ul>
        </div>
       
        <div className="flex items-center lg:space-x-5 space-x-0 pr-5 sm:pr-10">
          <Search className="lg:flex hidden w-5 h-5 text-gray-300 cursor-pointer" />
          <p className="lg:flex hidden cursor-pointer">Kids</p>
          <Bell className="lg:flex hidden h-5 w-5 text-gray-300 cursor-pointer" />
          <UserNav />
        </div>
      </div>
    </ScrollingElementSSR>
  )
}