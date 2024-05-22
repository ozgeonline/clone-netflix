import { getServerSession } from "next-auth"
import { ReactNode, Suspense } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"
import Loading_Animate from "../components/Loading_Animate"
import Footer from "../components/section/tr_en-page/Footer"

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)

  if(!session) {
    redirect("/tr-en")
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full">
        <Suspense fallback={<Loading_Animate />}>
          {children}
        </Suspense>
      </div>
      {/* <Footer /> */}
    </div>
  )
}