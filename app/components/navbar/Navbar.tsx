import Link from "next/link"
import Image from "next/image"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import ScrollingElementSSR from "./ScrollingElementSSR"

export default function Navbar() {

  return (
    <ScrollingElementSSR>
      <div className="relative flex items-center">
        <Link href="/home" prefetch={false}>
          <div className="absolute -top-5 -left-10 sm:-top-3 lg:top-0 sm:left-0 h-8 w-16 sm:w-24">
            <Image
              src="https://utfs.io/f/d33f8566-a121-4424-9710-828f8b0bf2d8-bauwjc.svg"
              alt="Netflix logo"
              fill
              sizes="100vw"
              quality={50}
              className="w-full h-full"
            />
          </div>
        </Link>
        <ul className="lg:flex gap-x-5 ml-36 hidden">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-5">
        <Search className="lg:flex hidden w-5 h-5 text-gray-300 cursor-pointer" />
        <p className="lg:flex hidden cursor-pointer">Kids</p>
        <Bell className="lg:flex hidden h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </ScrollingElementSSR>
  )
}