import UserLoginModal from "@/app/components/input_modal/User_Login_Input"

export default function SignUp() {
  return (
    <UserLoginModal
      title="Sign Up"
      buttonTitle="Sign Up"
      linkTitle="Alredy Have a account? "
      linkInfo="Log in now."
      linkRef="/login"
    />
  )
}