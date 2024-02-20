import UserLoginModal from "@/app/components/button/authInputModal/UserLoginModal";

export default function SignUp() {

  return (
    <UserLoginModal
      title={"Sign Up"}
      buttonTitle={"Sign Up"}
      linkTitle={"Alredy Have a account? "}
      linkInfo={"Log in now."}
      linkRef={"/login"}
    />
  )
}