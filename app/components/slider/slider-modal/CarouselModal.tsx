"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function CarouselModal ({children: slides}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState<number>(0);
 
  type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  const breakpointConditions: Record<Breakpoint, (width: number) => boolean> = {
    xs: (width) => width < 640,
    sm: (width) => width >= 640 && width < 768,
    md: (width) =>  width >= 768 && width < 1024,
    lg: (width) => width >= 1024 && width < 1280,
    xl: (width) => width >= 1280,
  };

  const getBreakpointState = (breakpoint: Breakpoint): boolean => {
    const condition = breakpointConditions[breakpoint];
    return condition ? condition(window.innerWidth) : false;
  };

  const [isXs, setIsXs] = useState(getBreakpointState('xs'))
  const [isSm, setIsSm] = useState(getBreakpointState('sm'))
  const [isMd, setIsMd] = useState(getBreakpointState('md'))
  const [isLg, setIsLg] = useState(getBreakpointState('lg'))
  const [isXl, setIsXl] = useState(getBreakpointState('xl'))

  useEffect(() => { 
    const handleResize = () => {
      setIsXs(getBreakpointState('xs'))
      setIsSm(getBreakpointState('sm'))
      setIsMd(getBreakpointState('md'))
      setIsLg(getBreakpointState('lg'))
      setIsXl(getBreakpointState('xl'))
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  // const calculateTranslate = (index: number) => {
  //   const slideWidth = 10 + '%'; 
  //   return index * -slideWidth;
  // };

  console.log("slidesToShow :",slidesToShow);

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      //setSlidesToShow((i) => (i === 0 ? slides.length - 1 : i - 1))
      sliderRef.current.style.transform = `translate3d(0, 0, 0)`
    }
    if (direction === "next" ) {
      //setSlidesToShow((i) => (i === slides.length-1 ? 0 : i + 1))
      
      const element = [slides[0],slides[1],slides[2],slides[3],slides[4],slides[5]]

      const newElements = [slides[4],slides[5],slides[6],slides[7],slides[8],slides[9]];
      setIsXl(slides.splice(0,6,...newElements))
      
      //slides.filter((_,index)=> index>6) ?  setIsXl(slides.splice(0,6,...newElements)) : isXl
      console.log("isXl",isXl)

      //sliderRef.current.style.transform = `translate3d(0, 0, 0)`
      
    }
  }
  // const goToSlide = (slideNumber: SetStateAction<number>) => {
  //  setSlideNumber(slideNumber);
  // };

  return (
    <div className='mb-10 z-0 max-sm:overflow-x-scroll max-sm:overflow-y-hidden overflow-css'>
      <div
        ref={sliderRef}
        className='relative transition-transform ease-out duration-500 flex space-x-[0.5vw]'
      >
          {isXs && slides.slice(0, slides.length-8)}
          {isSm && slides.slice(0, slides.length-7)}
          {isMd && slides.slice(0, slides.length-6)}
          {isLg && slides.slice(0, slides.length-5)}
          {isXl && slides.slice(0, slides.length-4)}
      </div>
      <div className='w-full relative max-sm:invisible h-full'>
        <Button 
          onClick={() => handleClick("prev")}
          variant='link'
          className='absolute bottom-0 -left-5 sm:-left-[3vw] xl:-left-[3.5vw]
          h-[20vw] md:h-[11vw] xl:h-[8.3vw] sm:w-[2.5vw] xl:w-[3vw] px-0 
          rounded-none 2xl:rounded-s-none 2xl:rounded-e-sm bg-black/80 hover:bg-black/90 group'
          //style={{display: `${slideNumber<=0 ? "none" : "block"}`}}
        >
          <ChevronLeft className='w-5 sm:w-10 h-5 sm:h-10 text-transparent group-hover:text-white max-sm:p-1'/>
          {/* <div className="absolute -top-5 left-[1430px] ">
              <div className="flex items-center justify-center gap-1 invisible group-hover:visible">
                {Array.from({ length: Math.round(slides.length-5) }).map(
                    (_: number, i: number) => (
                      <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`
                          hover:cursor-pointer transition-all w-3 h-1 bg-neutral-600
                          ${slideNumber === i ? "bg-opacity-100" : "bg-opacity-50"}
                        `}
                      ></div>
                    )
                  )}
              </div>
          </div> */}
        </Button>
        <Button 
          onClick={() => handleClick("next")}
          variant='link'
          className='absolute bottom-0 -right-5 sm:-right-[3vw] xl:-right-[3.5vw]
          h-[20vw] md:h-[11vw] xl:h-[8.3vw] sm:w-[2.5vw] xl:w-[3vw] px-0 
          rounded-none 2xl:rounded-e-none 2xl:rounded-s-sm bg-black/80 hover:bg-black/90  group
          transition-all ease-linear'
          //style={{ display: `${slides.length <= numVisibleSlides ? "none" : "block"}` }}
        >
          <ChevronRight className='w-5 sm:w-10 h-5 sm:h-10 text-transparent group-hover:text-white'/>
          {/* <div className="absolute -top-5 right-5 ">
              <div className="flex items-center justify-center gap-1 invisible group-hover:visible">
              {Array.from({ length: Math.round(slides.length-5) }).map(
                  (_: number, i: number) => (
                    <div
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`
                        hover:cursor-pointer transition-all w-3 h-1 bg-neutral-600
                        ${slideNumber === i ? "bg-opacity-100" : "bg-opacity-50"}
                      `}
                    ></div>
                  )
                )}
              </div>
          </div> */}
        </Button>
      </div>
    </div>
  )
}