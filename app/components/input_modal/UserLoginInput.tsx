"use client"

import Link from "next/link"
import GithubSignInButton from "../button_modal/Github_Signin_Button"
import GoogleSignInButton from "../button_modal/Google_Signin_Button"
import UserLoginInput_Modal from "./UserLoginInput_Modal"
import Footer from "../section/Footer"

  type formInfo = {
    title: string
    buttonTitle: string
    linkTitle: string
    linkInfo: string
    linkRef: string
  }

  export default function UserLoginInput({
    title,
    buttonTitle,
    linkTitle,
    linkInfo,
    linkRef
  }: formInfo) {
    return (
      <div className="mt-0 md:mt-28 z-10">
        <div 
          className="flex flex-col w-screen md:max-w-md items-center justify-center
          md:mx-auto px-10 sm:px-32 py-40 md:p-8  
          rounded bg-black md:bg-black/80"
        >
          <form 
            method="post"
            action="/api/auth/signin"
            encType="multipart/form-data"
            className="w-full md:w-[314px]"
          >
            <h1 className="text-3xl font-semibold text-white pt-2">
              {title}
            </h1>
            <div className="space-y-7 mt-5">
              <UserLoginInput_Modal />
              <button
                type="submit"
                className="bg-[#e50914] w-full md:w-[314px] py-3 rounded-sm"
              >
                {buttonTitle}
              </button>

              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    aria-label="checkbox"
                    className="cursor-not-allowed w-4 h-4 opacity-50"
                    checked
                    disabled
                  />
                  <label
                    htmlFor="checkbox"
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
            {linkTitle}
            <Link 
              className="text-white hover:underline"
              href={linkRef}
              prefetch={false}
            >
              {linkInfo}
            </Link>
          </div>

          <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            <GithubSignInButton />
            <GoogleSignInButton />
          </div>

          <div className="text-gray-500 text-xs mt-5 w-full md:w-[314px]">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. 
            <span className="text-blue-600 hover:underline hover:cursor-pointer">
              Learn more.
            </span>
          </div>
        </div>
        
        <div className="md:mt-14">
          <Footer />
        </div>
      </div>
    )
  }