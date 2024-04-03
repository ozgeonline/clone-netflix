import Link from "next/link";

export default function Signin_Button() {
  return (
    <Link
      prefetch={false}
      href="/sign-up"
      type="submit"
      className=" bg-[#e50914] py-1.5 px-4 rounded-sm text-sm hover:opacity-90 font-semibold"
      aria-label="Sign In Button"
    >
      Sign In
    </Link>
  )
}