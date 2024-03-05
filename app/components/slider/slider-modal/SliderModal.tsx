"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { SetStateAction, useState } from 'react'


export default function CarouselModal ({children: slides}) {

  let [current, setCurrent] = useState<number>(0)
  
  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrent(slideIndex);
  };
  return (
    <div className='relative'>
      <div
        className='flex space-x-2 transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${current * 235}px)` , }}
      > 
        {slides}
      </div>
      <div className='relative -top-32'>
        <Button 
          onClick={prev} 
          className='absolute top-0 -left-[63px] h-32 w-14 rounded-e-sm bg-black/60 hover:bg-black/70 z-10 group'
          style={{display: `${current<=0 ? "none" : "block"}`}}
        >
          <ChevronLeft className='w-6 h-6 text-transparent group-hover:text-white'/>
        </Button>
        <Button 
          onClick={next} 
          className='absolute top-0 right-0 h-32 w-14 rounded-e-none rounded-s-sm bg-black/60 hover:bg-black/70 z-10 group'
          // style={{display: `${current === slides.length ? "none" : "block"}`}}  
        >
          <ChevronRight className='w-12 h-12 text-transparent group-hover:text-white'/>
        </Button>
      </div>
      <div className="absolute -top-8 right-5">
        <div className="flex items-center justify-center gap-1">
          {slides.map((_: number, i: number) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
              hover:cursor-pointer transition-all w-3 h-1 bg-neutral-600
              ${current === i ? "p-0" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
