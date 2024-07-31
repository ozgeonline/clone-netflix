import { Bell } from "lucide-react"
import { links } from "./Navlinks.constant"
import NavLink from "./NavLink"
import Image__Logo from "../modals/logo-background__modal/ImageLogo"
import Link from "next/link"
import dynamic from 'next/dynamic';

const UserNav = dynamic(() => import('./UserNav'));
const ScrollingElementSSR = dynamic(() => import('./ScrollingElementSSR'));
const SearchMovieInput = dynamic(() => import('./SearchMovieInput'));
const DropdownMenu = dynamic(() => import('./DropdownMenu'));

export default function Navbar() {
  
  return (
    <ScrollingElementSSR>
      <div className="flex w-full justify-between items-start py-2 pl-2 md:p-5">
        <div className="flex mx-5">
          <Image__Logo logoStyle="relative flex items-center h-5 w-8 md:h-[1.7vw] sm:w-[11vw]" />
          <ul className="hidden lg:flex md:gap-x-3 lg:gap-x-5">
            {links.map((link) => (
              <NavLink key={link.id} path={link.href} label={link.name} />
            ))}
          </ul>
          
          <DropdownMenu>
            <ul className="flex flex-col items-center lg:hidden bg-black/90 w-[45vw] min-w-[135px] gap-x-5 space-y-8 -ml-10 border-t-white border first:pt-2 last:pb-2">
              {links.map((link) => (
                <NavLink key={link.id} path={link.href} label={link.name} />
              ))}
            </ul>
          </DropdownMenu>
        </div>
       
        <div className="relative flex items-center lg:space-x-5 space-x-2 px-5 sm:px-[3vw] xl:px-[3.5vw]">
          <SearchMovieInput />
          <Link className="hidden lg:flex cursor-pointer " href="/home/kids">Kids</Link>
          <Bell className="hidden lg:flex size-5 text-gray-300 cursor-not-allowed" />
          <UserNav />
        </div>
      </div>
    </ScrollingElementSSR>
  )
}