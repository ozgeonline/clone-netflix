import UserLoginInput from "@/app/components/input_modal/UserLoginInput"

export default function Login() {
  return (
    <UserLoginInput 
      title="Log in"
      buttonTitle="Log in"
      linkTitle="Need help? "
      linkInfo="Sign up now!"
      linkRef="/sign-up"
    />
  )
}