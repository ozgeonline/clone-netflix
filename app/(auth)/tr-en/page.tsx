import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import { ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const UserLoginInput = dynamic(() => import("@/app/components/modals/input_modal/UserLoginInput"));
const CardAnimationWatch = dynamic(() => import("@/app/components/section/CardAnimationWatch"));
const FAQ = dynamic(() => import("@/app/components/section/FAQ"));
const Footer = dynamic(() => import("@/app/components/section/Footer"));

export default async function Tr() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center items-center justify-center h-[80vh] sm:h-[95vh] px-8 space-y-8 sm:space-y-4">
        <div className="space-y-2">
          <h1 className="max-[350px]:text-lg text-3xl md:text-5xl font-black">
            Unlimited movies, TV shows, and more
          </h1>
          <h2 className="md:text-4xl">
            Watch anywhere. Cancel anytime.
          </h2>
          <h2 className="md:text-xl">
            Ready to watch? Enter your email to create or restart your membership.
          </h2>
        </div>
       
        <>
          <form 
            method="post" 
            action="/api/auth/signin" 
            className="flex flex-col sm:flex-row w-full items-center justify-center sm:space-x-2 max-sm:space-y-2"
          >
            <UserLoginInput
              inputWrapper="flex flex-col max-sm:w-full relative"
              inputStyle="bg-bg_main sm:w-[370px] h-12 sm:h-14"
              errorMsgColor="text-errTextColor"
              valueAndValidateTrueColor="border-2 border-[#2bb871]"
              valueAndValidateFalseColor="border-2 border-errTextColor"
            />
            <button 
              type="submit"
              className="z-10 flex items-center justify-center rounded-sm text-lg sm:text-2xl bg-background_red hover:brightness-90 w-40 sm:w-[13rem] h-12 sm:h-14"
            >
              Get Started <ChevronRight className="ml-2 max-sm:p-1" size="32px"/>
            </button>
          </form>
        </>
      </div>
      <div>
        <CardAnimationWatch />
        <FAQ />
        <Footer />
      </div>
    </div>
  )  
}