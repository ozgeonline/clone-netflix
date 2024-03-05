"use client"

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Props = {
  title: string,
  onClose: () => void,
  children: React.ReactNode,
}

export default function Dialog({ title, onClose, children }: Props) {

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
          className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-sm bg-[#181818] backdrop:bg-black/80"
          key={title}
        >
          <div className="w-[850px] max-w-full flex flex-col">
            <div className="mb-4 pt-2 px-4 justify-end flex">
              <Button
                onClick={closeDialog}
                className="mb-2 cursor-pointer rounded-full border-none bg-[#181818] brightness-150 text-white hover:bg-[#181818] hover:brightness-150"
                size='icon'
              >
                <Link href={pathName}>
                  <X className='w-6 h-6'/>
                </Link>
              </Button>
            </div>
              {children}
          </div>
        </dialog>
    ) : null

    return dialog
}