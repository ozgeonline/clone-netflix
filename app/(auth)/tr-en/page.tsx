import { authOptions } from "@/app/utils/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ChevronRight } from 'lucide-react'
import CardAnimationWatch from "@/app/components/CardAnimationWatch"
import FAQ from "@/app/components/FAQ"
import Footer from "@/app/components/Footer"
import UserGetStartedInput from "@/app/components/UserGetStartedInput"

export default async function Tr() {

  const session = await getServerSession(authOptions)

  if(session) {
    redirect('/home')
  }
  
  return (
    <div className="">
      <div className="text-center  flex flex-col items-center justify-center h-screen px-8 sm:px-3 pt-32 sm:pt-20">
        <h1 className="text-[32px] md:text-[48px] font-black sm:flex-wrap px-1 ">Unlimited movies, TV shows, and more</h1>
        <div className="text-[18px] md:text-[24px] mt-4 sm:flex-wrap">Watch anywhere. Cancel anytime.</div>
        <div className="text-[18px] md:text-[20px] mt-4 sm:flex-wrap">Ready to watch? Enter your email to create or restart your membership.</div>
        <form method="post" action="/api/auth/signin" className="flex sm:flex-row flex-col items-center justify-center mt-4">
          <UserGetStartedInput />
          <button 
            type="submit" 
            className="
              flex rounded-sm text-lg sm:text-2xl bg-[#e50914] border border-[#e50914]  hover:brightness-90 
              pt-2 pl-4 sm:pl-6 sm:py-3 sm:pr-4 
              w-[160px] sm:w-[205px] h-[48px] sm:h-[56px] mt-3 sm:mt-0 ml-2">
              Get Started 
              <ChevronRight className="ml-2" size="32px"/>
          </button>
        </form>
      </div>
      <div className="-mt-[4.5rem] md:mt-4">
        <CardAnimationWatch />
        <FAQ />
        <Footer />
      </div>

    </div>
  )  
}