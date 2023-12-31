"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export default function NavLink({ path, label }: Props) {
  const pathName = usePathname();
  
  return (
    <div>
      {pathName === path ? (
        <li>
          <Link
            href={path}
            className="text-white font-semibold underline text-sm"
          >
            {label}
          </Link>
        </li>
        ) : (
        <li>
          <Link
            className="text-gray-300 font-normal text-sm"
            href={path}
          >
            {label}
          </Link>
        </li>
    )}
  </div>
  )
}