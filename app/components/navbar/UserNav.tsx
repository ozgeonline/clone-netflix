import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import userImg from "../../../public/avatar.png"
import { Button } from "@/components/ui/button"
import { Pencil, FolderSync, UserRound, HelpCircle } from 'lucide-react'
import UserSignOutButton from "./UserSignOutButton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default async function UserButton() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return;
  }

  const avatarSrc = session.user?.image || "/avatar.png"
  const userShortName = session.user?.name?.slice(0, 2) || "un"
  const userName = session.user?.name
  const userMail = session.user?.email

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="rounded-sm uppercase">
              {userShortName}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 text-start rounded-none mt-4" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-row">
            <Image src={userImg} alt="user random image" className="rounded-sm w-7 h-7 hover:cursor-pointer"/>
            <div className="flex flex-col space-y-2 ps-2">
              <p className="text-sm font-medium leading-none  hover:underline hover:cursor-pointer">
                {userName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {userMail}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center hover:underline hover:cursor-pointer">
            <Pencil className="ms-0 opacity-100 w-6 h-6  text-zinc-400"/>
            <span className="ps-2">Manage Profiles</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center hover:underline hover:cursor-pointer">
            <FolderSync className="ms-0 opacity-100 w-6 h-6  text-zinc-400"/>
            <span className="ps-2">Transfer Profiles</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center hover:underline hover:cursor-pointer">
            <UserRound className="ms-0 opacity-100 w-6 h-6  text-zinc-400"/>
            <span className="ps-2">Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center hover:underline hover:cursor-pointer">
            <HelpCircle className="ms-0 opacity-100 w-6 h-6  text-zinc-400"/>
            <span className="ps-2">Help Center</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <UserSignOutButton />
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}