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
            className="text-white font-semibold text-sm"
            prefetch={false}
          >
            {label}
          </Link>
        </li>
        ) : (
        <li>
          <Link
            className="text-white font-thin text-sm"
            href={path}
            prefetch={false}
          >
            {label}
          </Link>
        </li>
    )}
  </div>
  )
}