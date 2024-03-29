import { ReactNode } from "react"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Image__Bg from "../components/ui_components/Image__Bg"
import Image__Logo from "../components/ui_components/Image__Logo"
import Lang__Select from "../components/ui_components/Lang__Select"

export default async function AuthLayout({children}:{children: ReactNode}){
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }

  return (
      <div className="items-center justify-center">
        <Image__Bg />
        <div className="absolute w-screen max-h-[200px] bg-gradient-to-t from-transparent via-black/80 to-black/80">
          <div className="flex justify-between flex-col sm:flex-row space-y-16 sm:space-y-0 w-screen">
            <div className="flex absolute h-[5.5vh] w-[20vw] sm:w-[25vw] min-w-[5rem] ms-5 md:ms-14 top-6">
              <Image__Logo />
            </div>
            <div className=" flex ms-5 sm:me-44 space-x-2">
              <Lang__Select />
              <Link
                prefetch={false}
                href="/login"
                type="submit"
                className="w-20 h-8 bg-[#e50914] py-1.5 px-4 mt-6 rounded-sm text-sm hover:opacity-90 font-semibold"
                aria-label="Sign In Button"
              >
                Sign In
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
  )
}