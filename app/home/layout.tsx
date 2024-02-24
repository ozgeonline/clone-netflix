import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect("/tr-en")
  }
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl">
        {children}
      </main>
    </>
  )
}