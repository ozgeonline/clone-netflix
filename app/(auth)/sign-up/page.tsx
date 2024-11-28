import UserAuthLoginPage from "@/app/components/ui/non-auth-section__modals/login-ui-controls/UserAuthLoginPage"
import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function SignUp() {

  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }

  return (
    <UserAuthLoginPage
      title="Sign Up"
      buttonTitle="Sign Up"
      linkTitle="Alredy Have a account? "
      linkInfo="Log in now."
      linkRef="/login"
    />
  )
}