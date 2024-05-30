import Link from "next/link"
import links from "@/app/data/link_tr-footer"
import dynamic from "next/dynamic";

const Lang__Select = dynamic(() => import("@/app/components/modals/select_modal/LangSelect"));

export default function Footer() {
  return (
    <div className="py-20 border-t-8 bg-black">
      <div className="max-w-[1170px] lg:ml-44 md:ml-16 ml-4">
        <div className="mb-2">
          <Link 
            href="/"
            className="underline text-whiteColor_100"
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
                className="text-sm underline text-whiteColor_100"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-16 sm:w-32 mt-5">
          <Lang__Select/>
        </div>
        <p className="text-whiteColor_100 text-sm mt-5">
          Netflix Türkiye
        </p>
      </div>
    </div>
  )
}