import { ReactNode } from "react"
import Link from "next/link"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Image__Bg from "../components/section/tr-en_pages_modal/component/Image__Bg"
import Image__Logo from "../components/section/tr-en_pages_modal/component/Image__Logo"
import Lang__Select from "../components/section/tr-en_pages_modal/component/Lang__Select"

export default async function AuthLayout({children}:{children: ReactNode}){
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home")
  }

  return (
      <div className="items-center justify-center">
        <Image__Bg />
        <div className="absolute top-0 left-0 bg-gradient-to-t from-transparent via-black/80 to-black/80 w-screen max-h-[200px]">
          <div className="flex flex-row w-screen">
            <Image__Logo />
            <div className="absolute flex flex-row top-16 min-[350px]:top-7 max-[350px]:left-11 right-14 lg:right-48">
              <Lang__Select />
              <Link
                prefetch={false}
                href="/login"
                type="submit"
                className="w-20 h-8 bg-[#e50914] py-1.5 px-4 rounded-sm text-sm hover:opacity-90 font-semibold"
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