import Link from "next/link"
import links from "../../data/link"
import Lang__Select from "../ui_components/Lang__Select"

export default function Footer() {
  return (
    <div className="py-20 border-t-8 bg-black">
      <div className="max-w-[1170px] lg:ml-[170px] md:ml-16 ml-4">
        <div className="mb-2">
          <Link 
            href="/"
            className="underline text-[#ffffffb3]"
            prefetch={false}
          >
            Questions? Contact us.
          </Link>
        </div>
        <div className="grid max-[350px]:grid-cols-1 grid-cols-2 md:grid-cols-4">
          {links.map((link) => (
            <div key={link.id} className="mt-3">
              <Link 
                href="/"
                prefetch={false} 
                className="text-sm underline text-[#ffffffb3]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-16 sm:w-[122px] mt-5">
          <Lang__Select/>
        </div>
        <p className="text-[#ffffffb3] text-sm mt-5">
          Netflix Türkiye
        </p>
      </div>
    </div>
  )
}