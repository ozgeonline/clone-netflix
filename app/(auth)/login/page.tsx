import UserLoginModal from "@/app/components/auth_modal/authInputModal/UserLoginInput"
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Login() {

  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  }

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