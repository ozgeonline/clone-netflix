import { ReactNode } from "react"
import Image__Bg from "../components/modals/image_modal/ImageBackground"
import Image__Logo from "../components/modals/image_modal/ImageLogo"
import Lang__Select from "../components/modals/select_modal/LangSelect"
import Signin_Button from "../components/modals/signin_button_modal/Signin_Button"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"

export default async function AuthLayout({children}:{children: ReactNode}){

  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }
  
  return (
      <div className="flex relative flex-col">
        <Image__Bg />
        <div 
          className="absolute top-0 left-0 h-[10vw] w-screen bg-gradient-to-t from-transparent via-black/80 to-black/80"
        ></div>
        <div className="absolute w-screen h-[80vh] sm:h-[95vh]">
          <Image__Logo logoStyle={"absolute top-0 left-0 h-6 md:h-10 w-24 md:w-36 my-5 mx-10 md:mx-44"} />
          <div className="flex items-center absolute top-10 sm:top-0 sm:right-0 space-x-2 h-6 md:h-8 my-5 mx-10 md:me-44 z-50">
            <Lang__Select />
            <Signin_Button />
          </div>
        </div>
        {children}
      </div>
  )
}