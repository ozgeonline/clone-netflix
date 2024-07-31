import links from "@/app/data/link_tr-footer"
import dynamic from "next/dynamic";

const Lang__Select = dynamic(() => import("@/app/components/modals/non-auth-page__modal/LangSelect"));

export default function Footer() {
  return (
    <div className="py-20 border-t-8 bg-black">
      <div className="max-w-[1170px] lg:ml-44 md:ml-16 ml-4">
        <div className="mb-2 underline text-main-white_100 cursor-pointer">
          Questions? Contact us.
        </div>
        <ul className="grid max-[350px]:grid-cols-1 grid-cols-2 md:grid-cols-4">
          {links.map((link) => (
            <li key={link.id} className="text-sm underline text-main-white_100 mt-3 cursor-pointer">
               {link.title}
            </li>
          ))}
        </ul>
        <div className="w-16 sm:w-32 mt-5 cursor-default">
          <Lang__Select/>
        </div>
        <p className="text-main-white_100 text-sm mt-5">
          Netflix Türkiye
        </p>
      </div>
    </div>
  )
}