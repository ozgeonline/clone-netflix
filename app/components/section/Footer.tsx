import Link from "next/link"
import links from "../../data/link"
import { Languages } from "lucide-react"

export default function Footer() {
  return (
    <div className="py-20 border-t-8 bg-black">
      <div className="max-w-[1170px] lg:ml-[170px] md:ml-16 ml-4">
        <div className="mb-2">
          <Link 
            href={`#`}
            className="underline text-[#ffffffb3]"
            prefetch={false}
          >
            Questions? Contact us.
          </Link>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {links.map((link) => (
            <div key={link.id} className="mt-3">
              <Link 
                href={`#`} 
                prefetch={false} 
                className="text-sm underline text-[#ffffffb3]"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-[122px] mt-5 border border-gray-500 rounded-sm">
          <div className="relative space-x-4 bg-neutral-900/70 rounded-sm w-32">
            <Languages className="w-4 h-4 absolute top-2 left-2 "/>
            <label className="hidden" htmlFor="language-select" aria-label="Language Choice">Language:</label>
            <select aria-labelledby="Language Choice" id="language-select" name="language-select" className=" py-1 px-3 outline-none bg-neutral-900/10 rounded-sm">
              <option aria-labelledby="Language Choice" aria-label="hidden" value="lang-1" className="bg-slate-50 text-black">English</option>
              <option aria-labelledby="Language Choice" aria-label="hidden" value="lang-2" className="bg-slate-50 text-black">Türkçe</option>
            </select>
          </div>
        </div>
        <p className="text-[#ffffffb3] text-sm mt-5">Netflix Türkiye</p>
      </div>
    </div>
  )
}