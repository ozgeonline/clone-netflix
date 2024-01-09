import { authOptions } from "@/app/utils/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ChevronRight } from 'lucide-react'

export default async function Tr() {

  const session = await getServerSession(authOptions)

  if(session) {
    redirect('/home')
  }
  
  return (
    <div className="text-center mt-32 sm:mt-24 flex flex-col items-center justify-center h-[512px] md:h-screen px-3">
      <h1 className="text-[32px] md:text-[48px] font-black sm:flex-wrap px-1">The best is right here</h1>
      <div className="text-[18px] md:text-[24px] mt-4 sm:flex-wrap">Blockbuster movies, hit series and exclusive originals. All in one place.</div>
      <div className="text-[18px] md:text-[20px] mt-4 sm:flex-wrap">Ready to watch? Enter your email to create or restart your membership.</div>
      <form method="post" action="/api/auth/signin" className="flex sm:flex-row flex-col items-center justify-center mt-4">
        <input 
          type="email"
          name="email"
          placeholder="Email address"
          className="p-3 sm:p-4 w-[250px] sm:w-[375px] rounded-sm bg-neutral-900/70 border border-white/25 mr-2"
        />
        <button 
          type="submit" 
          className="flex pt-2 pl-4 sm:py-3 sm:pr-4 sm:pl-6 w-[160px] h-[48px] sm:w-[205px] sm:h-[56px] text-lg mt-3 sm:mt-0 sm:text-2xl rounded-sm bg-[#e50914] border border-[#e50914]  hover:opacity-90">
            Get Started <ChevronRight className="ml-2" size="32px"/>
        </button>
      </form>
    </div>
  )  
}