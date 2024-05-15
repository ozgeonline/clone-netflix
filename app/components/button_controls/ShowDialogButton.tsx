"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface playProps {
  title: string,
  buttonStyle: string
  children: React.ReactNode
}

export default function ShowDialogButton({ 
  title,
  buttonStyle,
  children
 }:playProps) {

  const pathName = usePathname()

  return (
    <Link
      href={`${pathName}?showDialog=${encodeURIComponent(title)}`}
      className={buttonStyle}
      aria-label={`Open video player for ${title}`}
      scroll={false}
    >
      {children}
    </Link>
  )
}