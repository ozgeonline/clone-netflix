"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { ReactNode } from 'react'

export default function SliderModal ({children}:{children:ReactNode}) {

  
 return (
  <div
    className=' flex flex-row space-x-2'
  >
    <Button className='absolute top-0 left-2 h-32 w-14 rounded-e-none rounded-s-sm bg-black/60 hover:bg-black/70 z-20 group'>
      <ChevronLeft className='w-12 h-12 z-50 text-transparent group-hover:text-white'/>
    </Button>
    
    <Button className='absolute top-0 right-[3.95rem] h-32 w-14 rounded-e-none rounded-s-sm bg-black/60 hover:bg-black/70 z-20 group'>
      <ChevronRight className='w-12 h-12 z-50 text-transparent group-hover:text-white'/>
    </Button>
    {children}
  </div>
 )
}