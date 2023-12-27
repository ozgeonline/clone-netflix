import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/netflix_logo.svg"
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";
import { links } from "./Navlinks.constant";
import NavLink from "./NavLink";

export default function Navbar() {
  
  return (
    <header className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <nav className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link) => (
            <NavLink key={link.id} path={link.href} label={link.name} />
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </header>
  )
}