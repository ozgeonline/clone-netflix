import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import ScrollingElementSSR from "./ScrollingElementSSR"
import Image__Logo from "../modals/image_modal/ImageLogo"
import SearchComponent from "../modals/input_modal/SearchInputComponent"
import Link from "next/link"

export default function Navbar() {
  return (
    <ScrollingElementSSR>
      <div className="flex w-full justify-between items-center p-2 sm:p-5">
        <div className="flex">
          <Image__Logo logoStyle="relative flex items-center h-8 md:h-[1.7vw] w-20 sm:w-[11vw]" />
          <ul className="hidden md:flex gap-x-5">
            {links.map((link) => (
              <NavLink key={link.id} path={link.href} label={link.name} />
            ))}
          </ul>
        </div>
       
        <div className="relative flex items-center lg:space-x-5 space-x-0 pr-5 sm:pr-10">
          {/* <Search className="hidden lg:flex w-5 h-5 text-gray-300 cursor-pointer" /> */}
          <SearchComponent />
          <Link className="hidden lg:flex cursor-pointer " href="/home/kids">Kids</Link>
          <Bell className="hidden lg:flex h-5 w-5 text-gray-300 cursor-not-allowed" />
          <UserNav />
        </div>
      </div>
    </ScrollingElementSSR>
  )
}