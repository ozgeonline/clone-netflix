import { getServerSession } from "next-auth"
import { ReactNode, Suspense } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"
import AuthFooter from "../components/section/AuthFooter"
import BoxLoading_Animation from "../components/slider/BoxLoading_Animation"

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect("/tr-en")
  }

  return (
    <div className="w-full">
      <Navbar />
      <Suspense fallback={<BoxLoading_Animation />}>
        <div className="w-full">
          {children}
        </div>
        <AuthFooter />
      </Suspense>
    </div>
  )
}