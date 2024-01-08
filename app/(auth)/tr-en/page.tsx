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
    <div className="text-center mt-24">
      <h1 className="text-[48px] font-black">The best is right here</h1>
      <h2 className="text-[24px] mt-4">Blockbuster movies, hit series and exclusive originals. All in one place.</h2>
      <h3 className="text-[20px] mt-4">Ready to watch? Enter your email to create or restart your membership.</h3>
      <form method="post" action="/api/auth/signin" className="flex justify-center mt-4">
        <input 
          type="email"
          name="email"
          placeholder="Email address"
          className="py-4 px-4 w-[375px] rounded-sm bg-neutral-900/70 border border-white/25 mr-2"
        />
        <button 
          type="submit" 
          className="flex py-3 pr-4 pl-6 w-[205px] rounded-sm bg-[#e50914] border border-[#e50914] text-2xl hover:opacity-90">
            Get Started <ChevronRight className="ml-2" size="32px"/>
        </button>
      </form>
    </div>
  )  
}