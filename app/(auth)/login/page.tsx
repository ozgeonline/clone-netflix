import Link from "next/link"
import GithubSignInButton from "@/app/components/button/authButton/GithubSignInButton"
import GoogleSignInButton from "@/app/components/button/authButton/GoogleSignInButton"
import { Checkbox } from "@/components/ui/checkbox"
import UserInput from "@/app/components/button/authInputModal/UserLoginInput"
import { Button } from "@/components/ui/button"
import Footer from "@/app/components/section/footer/Footer"

export default function Login() {

  return (
    <div className="mt-0 md:mt-28">
      <div className="flex flex-col items-center justify-center md:mx-auto px-18 py-40 sm:px-32 md:p-14 w-screen md:max-w-md rounded bg-black md:bg-black/80" >
        <form 
          method="post"
          action="/api/auth/signin"
          encType="multipart/form-data"
        >
          <h1 className="text-3xl font-semibold text-white pt-2">
            Log in
          </h1>
          <div className="space-y-4 mt-5">
            <UserInput />
            <Button
              type="submit"
              variant="destructive"
              className="bg-[#e50914] w-full md:w-[336px] mt-10"
              aria-label="Log in"
            >
              Log in
            </Button>

            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="check" checked disabled/>
                <label
                  htmlFor="check"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <div className="text-xs cursor-pointer text-[#959393] hover:underline">
                Need help?
              </div>
            </div>
          </div>
        </form>
        <div className="text-gray-500 text-sm mt-2">
          New to Neflix?{" "}
          <Link 
            className="text-white hover:underline"
            href="/sign-up"
            prefetch={false}
          >
            Sign up now!
          </Link>
        </div>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <GithubSignInButton />
          <GoogleSignInButton />
        </div>
        <div className="text-gray-500 text-xs mt-5">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. 
          <span className="text-blue-600 hover:underline hover:cursor-pointer">
            Learn more.
          </span>
        </div>
      </div>
      <div className="md:mt-11">
        <Footer />
      </div>
    </div>
  )
}