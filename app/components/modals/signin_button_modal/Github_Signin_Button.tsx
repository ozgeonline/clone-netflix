"use client"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"

export default function GithubSignInButton() {
  return (
    <Button onClick={()=> signIn('github')} variant="outline" size="icon" aria-label="github">
      <GithubIcon className="size-4"/>
    </Button>
  )
}