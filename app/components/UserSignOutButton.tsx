"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function UserSignOutButton() {

  return (
    <DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
  )
}