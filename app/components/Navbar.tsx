import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/netflix_logo.svg"
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { links } from "./Navlinks.constant";
import NavLink from "./NavLink";

export default function Navbar() {
  
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-6 lg:px-14 flex">
      <div className="flex items-center">
        <Link href="/home">
          <Image src={Logo} alt="Netflix logo" priority width={148} height={40}/>
        </Link>
        <ul className="lg:flex gap-x-4 ml-10 hidden">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  )
}