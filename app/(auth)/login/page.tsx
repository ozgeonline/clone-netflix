import UserLoginModal from "@/app/components/input_modal/User_Login_Input"

export default function Login() {
  return (
    <UserLoginModal 
      title="Log in"
      buttonTitle="Log in"
      linkTitle="Need help? "
      linkInfo="Sign up now!"
      linkRef="/sign-up"
    />
  )
}