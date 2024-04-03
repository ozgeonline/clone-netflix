import Link from "next/link"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import ScrollingElementSSR from "./ScrollingElementSSR"
import Image__Logo from "../ui_components/Image__Logo"

export default function Navbar() {
  return (
    <ScrollingElementSSR>
      <div className="flex w-screen justify-between items-center p-2 sm:p-5">
        <div className="flex">
          <Link 
            href="/home" 
            prefetch={false} 
            className="relative flex items-center h-8 md:h-[1.7vw] w-20 sm:w-[11vw] "
          >
            <Image__Logo />
          </Link>

          <ul className="lg:flex gap-x-5 hidden">
            {links.map((link) => (
              <NavLink key={link.id} path={link.href} label={link.name} />
            ))}
          </ul>
        </div>
       
        <div className="flex items-center lg:space-x-5 space-x-0 pr-5 sm:pr-10">
          <Search className="hidden lg:flex w-5 h-5 text-gray-300 cursor-pointer" />
          <div className="hidden lg:flex cursor-pointer">Kids</div>
          <Bell className="hidden lg:flex h-5 w-5 text-gray-300 cursor-pointer" />
          <UserNav />
        </div>
      </div>
    </ScrollingElementSSR>
  )
}