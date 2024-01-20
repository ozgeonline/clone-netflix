import Link from "next/link"
import links from "../../data/link"
import { Languages } from "lucide-react"

export default function Footer() {
  return (
    <div className="py-20 border-t-8">
      <div className="max-w-[1170px] lg:ml-[170px] md:ml-16 ml-4  mt-[-1rem]">
        <div className="mb-2">
          <Link href={`#`} className="underline text-[#ffffffb3]">Questions? Contact us.</Link>
        </div>
        <div className="grid xs:grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
          {links.map((link) => (
            <div key={link.id} className="mt-3">
              <Link href={`#`} className="text-sm underline text-[#ffffffb3]">
                {link.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-[122px] mt-5 border border-gray-500 rounded-sm">
          <div className="relative space-x-4 bg-neutral-900/70 rounded-sm w-32">
            <Languages className="w-4 h-4 absolute top-2 left-2 "/>
            <select className=" py-1 px-3 outline-none bg-neutral-900/10 rounded-sm">
              <option value="0" className="bg-slate-50 text-black">English</option>
              <option value="1" className="bg-slate-50 text-black">Türkçe</option>
            </select>
          </div>
        </div>
        <p className="text-[#ffffffb3] text-sm mt-5">Netflix Türkiye</p>
      </div>
    </div>
  )
}