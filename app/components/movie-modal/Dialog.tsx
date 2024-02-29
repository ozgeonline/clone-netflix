"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useRef, useEffect } from 'react'

type Props = {
  title: string,
  onClose: () => void,
  children: React.ReactNode,
  movieId:number
}

export default function Dialog({ title, onClose,children,movieId }: Props) {

  const pathName = usePathname()
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const searchParams = useSearchParams() //access query parameters
  const showDialog = searchParams.get('showDialog') //Getting the value of the query parameter

  

  useEffect(() => {
    if (showDialog === title ) {
        dialogRef.current?.showModal()
    } else {
        dialogRef.current?.close()
    }
  }, [showDialog])

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
  }

  const dialog: JSX.Element | null = showDialog === title
    ? (
        <dialog
          ref={dialogRef}
          className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50"
          key={movieId}
        >
          <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
            <div className="mb-4 pt-2 px-5 bg-yellow-400">
              <h1>{title}</h1>
              <button
                onClick={closeDialog}
                className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
              >
                <Link href={pathName}>
                  x
                </Link>
              </button>
            </div>
              {children}
          </div>
        </dialog>
    ) : null

    return dialog
}