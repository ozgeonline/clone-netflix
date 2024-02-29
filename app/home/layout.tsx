import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)
  // const data = await getData()


  if(!session) {
    redirect("/tr-en")
  }
  // async function onClose() {
  //   "use server"
  //   console.log("Modal has closed")

  // }

  return (
    <>
      <Navbar />
      <main className="w-full me-0">
      
        
          {children}
      </main>
    </>
  )
}