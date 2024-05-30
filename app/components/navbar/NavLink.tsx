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
    <>
      {pathName === path ? (
        <li>
          <Link
            href={path}
            className="text-white font-semibold text-xs xl:text-sm tracking-wider cursor-default"
            prefetch={true}
          >
            {label}
          </Link>
        </li>
        ) : (
        <li>
          <Link
            className="text-white text-xs xl:text-sm tracking-wider hover:text-[#b3b3b3] transition-colors ease-in"
            href={path}
            prefetch={true}
          >
            {label}
          </Link>
        </li>
    )}
  </>
  )
}