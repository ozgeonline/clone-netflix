import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import UserSignOutButton from "./button/UserSignOutButton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-none">
              {userName}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {userMail}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <UserSignOutButton />
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}