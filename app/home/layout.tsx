import { getServerSession } from "next-auth"
import { ReactNode, Suspense } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"
//import Loading_Animate from "../components/Loading_Animate"
import AuthFooter from "../components/section/AuthFooter"

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect("/tr-en")
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        {children}
      </div>
     <AuthFooter />
    </div>
  )
}