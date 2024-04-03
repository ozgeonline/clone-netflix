import { ReactNode } from "react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Image__Bg from "../components/ui_components/Image__Bg"
import Image__Logo from "../components/ui_components/Image__Logo"
import Lang__Select from "../components/ui_components/Lang__Select"
import Signin_Button from "../components/button_modal/Signin_Button"
import Link from "next/link"

export default async function AuthLayout({children}:{children: ReactNode}){
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }

  return (
      <div className="flex relative flex-col">
        <div className="absolute top-0 left-0 h-[10vw] w-screen bg-gradient-to-t from-transparent via-black/80 to-black/80">
        </div>
        <Image__Bg />
        <div className="absolute w-screen h-[80vh] sm:h-[95vh]">
          <Link href="/" className="absolute top-0 left-0 h-6 md:h-10 w-24 md:w-36 my-5 mx-10 md:mx-44">
            <Image__Logo />
          </Link>
          <div className="flex items-center absolute top-10 sm:top-0 sm:right-0 space-x-2 h-6 md:h-8 my-5 mx-10 md:me-44 z-50">
            <Lang__Select />
            <Signin_Button />
          </div>
        </div>
        {children}
      </div>
  )
}