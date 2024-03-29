import { ChevronDown, Languages } from "lucide-react";

export default function Lang__Select () {
  return (
    <div className="flex relative space-x-4 w-16 sm:w-32 bg-neutral-900/70 mt-6 border border-gray-500 rounded-sm">
      <Languages className="w-4 h-4 absolute top-2 left-2 "/>
      <label 
        htmlFor="language" 
        aria-labelledby="select" 
        className="hidden"
      ></label>
      <select 
        aria-label="hidden" 
        aria-labelledby="Aria Language" 
        name="language"
        id="language" 
        className="py-1 px-3 outline-none bg-neutral-900/10 rounded-sm -mt-60 sm:mt-0"
      >
        <option value="language-1" aria-label="hidden" className="bg-slate-50 text-black">English</option>
        <option value="language-2" aria-label="hidden" className="bg-slate-50 text-black">Türkçe</option>
      </select>
      <ChevronDown className="w-4 h-4 absolute top-2 left-5 sm:hidden inline-block" />
    </div>
  )
}