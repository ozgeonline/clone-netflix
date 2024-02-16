import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/netflix_logo.svg"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import ScrollingElementSSR from "./NavbarAnimation"

export default function Navbar() {

  return (
    <ScrollingElementSSR>
      <div className="flex items-center">
        <Link href="/home" prefetch={false}>
          <Image src="https://utfs.io/f/d33f8566-a121-4424-9710-828f8b0bf2d8-bauwjc.svg" alt="Netflix logo" priority width={93} height={30}/>
        </Link>
        <ul className="lg:flex gap-x-5 ml-10 hidden">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-7">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <p className="cursor-pointer">Kids</p>
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </ScrollingElementSSR>
  )
}