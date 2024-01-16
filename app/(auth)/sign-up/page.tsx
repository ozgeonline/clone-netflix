import Link from "next/link";
import GithubSignInButton from "@/app/components/GithubSignInButton"
import GoogleSignInButton from "@/app/components/GoogleSignInButton"
import { Checkbox } from "@/components/ui/checkbox"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/utils/auth"
import { redirect } from "next/navigation"
import UserInput from "@/app/components/UserLoginInput";
import { Button } from "@/components/ui/button";
import Footer from "@/app/components/Footer";

export default async function Login() {

  const session = await getServerSession(authOptions)

  if(session) {
    redirect("/home")
  } 

  return (
    <div className="mt-36">
      <div className="
        flex flex-col items-center justify-center 
        md:mx-auto px-18 sm:px-32 py-40 p-6 md:p-14 
        w-screen md:max-w-md rounded bg-black md:bg-black/80"
      >
        <form method="post" action="/api/auth/signin">
          <h1 className="text-3xl font-semibold text-white pt-2">Sign Up</h1>
          <div className="space-y-4 mt-5">
            <UserInput />
            <Button
              type="submit"
              variant="destructive"
              className="bg-[#e50914] w-full md:w-[336px] mt-10"
            >
              Sign Up
            </Button>
      
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked disabled/>
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <p className="text-xs cursor-pointer text-[#959393] hover:underline">Need help?</p>
            </div>
          </div>
        </form>
        <div className="text-gray-500 text-sm mt-2">
          Alredy Have a account?{" "}
          <Link className="text-white hover:underline" href="/login">
            Log in now.
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>
        <p
          className="text-gray-500 text-xs mt-5"
        >
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
          <span className="text-blue-600 hover:underline hover:cursor-pointer">Learn more.</span>
        </p>
      </div>
      <div className="md:mt-[4.5rem]">
        <Footer />
      </div>
    </div>
  )
}