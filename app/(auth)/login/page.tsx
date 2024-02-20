"use client"

import UserLoginModal from "@/app/components/button/authInputModal/UserLoginModal"

export default function Login() {

  return (
    <UserLoginModal 
      title={"Log in"}
      buttonTitle={"Log in"}
      linkTitle={"Need help? "}
      linkInfo={"Sign up now!"}
      linkRef={"/sign-up"}
    />
  )
}