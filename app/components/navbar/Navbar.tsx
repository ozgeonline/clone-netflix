import { Bell } from "lucide-react"
import { links } from "../../data/Navlinks.constant"
import NavLink from "./ui-controls/NavLink"
import Image__Logo from "../ui/logo-bg__modals/ImageLogo"
import Link from "next/link"
import dynamic from 'next/dynamic';

const UserNav = dynamic(() => import('./user-controls-button/UserNavServer'));
const ScrollingElementSSR = dynamic(() => import('./ui-controls/ScrollingElementSSR'));
const SearchMovieInput = dynamic(() => import('./ui-controls/SearchMovieInput'));
const DropdownNavbarMenu = dynamic(() => import('./ui-controls/DropdownNavbarMenu'));

export default function Navbar() {
  return (
    <ScrollingElementSSR>
      <div className="flex w-full justify-between items-start py-2 pl-2 md:p-5">
        <div className="flex mx-5">
          <Image__Logo 
            logoStyle="relative flex items-center h-5 md:h-[1.7vw] w-8 sm:w-[11vw]" 
          />
          <ul className="hidden lg:flex md:gap-x-3 lg:gap-x-5">
            {links.map((link) => (
              <NavLink
                key={link.id}
                path={link.href}
                label={link.name}
              />
            ))}
          </ul>
          
          <DropdownNavbarMenu>
            <ul className="dropdown-navbar-wrapper" >
              {links.map((link) => (
                <NavLink 
                  key={link.id} 
                  path={link.href} 
                  label={link.name}
                />
              ))}
            </ul>
          </DropdownNavbarMenu>
        </div>
       
        <div className="padding-layout relative flex items-center lg:space-x-5 space-x-2">
          <SearchMovieInput />
          <Link 
            className="hidden lg:flex cursor-pointer" 
            href="/home/kids"
          >
            Kids
          </Link>
          <Bell className="hidden lg:flex size-5 text-gray-300 cursor-not-allowed" />
          <UserNav />
        </div>
      </div>
    </ScrollingElementSSR>
  )
}