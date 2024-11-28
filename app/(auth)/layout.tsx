import { ReactNode } from "react"
import dynamic from "next/dynamic"

const Image__Bg = dynamic(() => import("../components/ui/logo-bg__modals/ImageBackground"));
const Image__Logo = dynamic(() => import("../components/ui/logo-bg__modals/ImageLogo"));
const Lang__Select = dynamic(() => import("../components/ui/non-auth-section__modals/LangSelect"));
const Signin_Button = dynamic(() => import("../components/signin-button__modals/Signin_Button"));

export default function AuthLayout({children}:{children: ReactNode}){
  return (
    <div className="flex relative flex-col">
      <Image__Bg />
      <div 
        className="absolute top-0 left-0 h-[10vw] w-screen bg-gradient-to-t from-transparent via-black/80 to-black/80"
      ></div>
      <div className="absolute w-screen h-[80vh] sm:h-[95vh]">
        <Image__Logo logoStyle="absolute top-0 left-0 h-6 md:h-10 w-24 md:w-36 mx-10 md:mx-44 my-5" />
        <div className="z-50 flex absolute items-center space-x-2 top-10 sm:top-0 sm:right-0 h-6 md:h-8 my-5 mx-10 md:me-44">
          <Lang__Select />
          <Signin_Button />
        </div>
      </div>
      {children}
    </div>
  )
}