import { ReactNode } from "react"
import Image__Bg from "../../components/ImageBackground"
import Image__Logo from "../../components/ImageLogo"
import Lang__Select from "../../components/LangSelect"
import Signin_Button from "../components/button_modal/Signin_Button"

export default async function AuthLayout({children}:{children: ReactNode}){
  return (
      <div className="flex relative flex-col">
        <Image__Bg />
        <div className="absolute top-0 left-0 h-[10vw] w-screen bg-gradient-to-t from-transparent via-black/80 to-black/80">
        </div>
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