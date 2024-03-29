"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { SetStateAction, useState } from 'react'
// import Image from "next/image"
// import { MovieCard } from '../../movie__modal/MovieCard'



export default function CarouselModal ({children: slides}) {

  const [current, setCurrent] = useState<number>(0)

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === slides.length-1 ? 0 : i + 1))

  const goToSlide = (slideIndex: SetStateAction<number>) => {
   setCurrent(slideIndex);
  }; 

  console.log("current :",current);

  //max-lg:overflow-x-auto max-lg:overflow-y-hidden overflow-css

  return (
    <div className='w-screen relative mt-3 '  >
      <div
        className=' transition-transform ease-out duration-500
        w-screen max-h-32 0 flex space-x-2 '
        style={{ transform: `translateX(-${(current) *235.5}px)` , }}
        
      > 
       {slides}
      </div>
      <div className='absolute w-full'>
        {/*  invisible lg:visible */}
        <Button 
          onClick={prev}
          variant='link'
          className='absolute bottom-0 -left-[48px] h-[17vw] sm:h-[8.3vw] w-[2.6vw] min-h-[85px] px-0 sm:pe-3 
          rounded-none 2xl:rounded-s-none 2xl:rounded-e-sm bg-black/60 hover:bg-black/70 group '
          style={{display: `${current<=0 ? "none" : "block"}`}}
        >
          <ChevronLeft className='w-10 h-10 left-0 text-transparent group-hover:text-white'/>
          <div className="absolute -top-5 left-[1430px] ">
              <div className="flex items-center justify-center gap-1 invisible group-hover:visible">
                {Array.from({ length: Math.round(slides.length%6) }).map(
                    (_: number, i: number) => (
                      <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`
                          hover:cursor-pointer transition-all w-3 h-1 bg-neutral-600
                          ${current === i ? "bg-opacity-100" : "bg-opacity-50"}
                        `}
                      ></div>
                    )
                  )}
              </div>
          </div>
        </Button>
        <Button 
          onClick={next}
          variant='link'
          className='absolute bottom-0 right-4  h-[17vw] sm:h-[8.3vw] w-[4vw] min-h-[85px] px-0 sm:ps-3 
            rounded-none 2xl:rounded-e-none 2xl:rounded-s-sm bg-black/60 hover:bg-black/70  group'
          style={{display: `${slides.length<=6 ? "none" : "block"}`}}
        >
          <ChevronRight className='w-5 sm:w-10 h-5 sm:h-10 text-transparent group-hover:text-white'/>
          <div className="absolute -top-5 right-5 ">
              <div className="flex items-center justify-center gap-1 invisible group-hover:visible">
              {Array.from({ length: Math.round(slides.length%6) }).map(
                  (_: number, i: number) => (
                    <div
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`
                        hover:cursor-pointer transition-all w-3 h-1 bg-neutral-600
                        ${current === i ? "bg-opacity-100" : "bg-opacity-50"}
                      `}
                    ></div>
                  )
                )}
              </div>
          </div>
        </Button>
      </div>
    </div>
  )
}
