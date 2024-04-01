import UserLoginModal from "@/app/components/input_modal/UserLoginInput"

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