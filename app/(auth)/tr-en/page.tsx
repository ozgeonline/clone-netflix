import CardAnimationWatch from "@/app/components/section/tr-en_pages_modal/CardAnimationWatch"
import FAQ from "@/app/components/section/tr-en_pages_modal/FAQ"
import Footer from "@/app/components/section/Footer"
import UserGetStartedInput from "@/app/components/section/tr-en_pages_modal/UserGetStartedInput"

export default  function Tr() {
  
  return (
    <div>
      <div className="text-center flex flex-col items-center justify-center h-screen px-8 max-[350px]:pt-0 sm:pt-20">
        <h1 className="max-[350px]:text-lg text-[32px] md:text-5xl font-black sm:flex-wrap px-1 max-[350px]:-mt-48 -mt-48 sm:mt-3">Unlimited movies, TV shows, and more</h1>
        <h2 className="max-[350px]:text-base text-[18px] md:text-[24px] mt-1 sm:mt-4 sm:flex-wrap">Watch anywhere. Cancel anytime.</h2>
        <h2 className="max-[350px]:text-base text-[18px] md:text-[20px] mt-1 sm:mt-4 sm:flex-wrap">Ready to watch? Enter your email to create or restart your membership.</h2>
        <UserGetStartedInput />
      </div>
      <div className="max-[350px]:-mt-[300px] -mt-[292px] sm:-mt-10">
        <CardAnimationWatch />
        <FAQ />
        <Footer />
      </div>

    </div>
  )  
}