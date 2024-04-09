import CardAnimationWatch from "@/app/components/section/CardAnimationWatch"
import FAQ from "@/app/components/section/FAQ"
import Footer from "@/app/components/section/Footer"
import UserGetStartedInput from "@/app/components/input_modal/UserGetStartedInput"
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Tr() {

  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-center items-center justify-center h-[80vh] sm:h-[95vh] px-8 space-y-2 sm:space-y-4">
        <h1 className="max-[350px]:text-lg text-3xl md:text-5xl font-black">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="max-[350px]:text-base text-lg md:text-4xl">
          Watch anywhere. Cancel anytime.
        </h2>
        <h2 className="max-[350px]:text-base text-lg md:text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </h2>
        <UserGetStartedInput />
      </div>
      <div>
        <CardAnimationWatch />
        <FAQ />
        <Footer />
      </div>
    </div>
  )  
}