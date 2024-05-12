"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { SetStateAction, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"

interface CarouselModalProps {
  sliderButtonClass?: string;
  sliderClass?:string
  children: React.ReactNode[];
}

export default function CarouselModal ({
  children: slides,
  sliderButtonClass,
  sliderClass 
}: CarouselModalProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);

  //update slide width
  const firstSlide = sliderRef.current?.querySelector('.slide');
  const updateSlideWidth = () => {
    if (sliderRef.current) {
      if (firstSlide) {
        setSlideWidth(firstSlide.clientWidth);
      }
    }
  };

  useEffect(() => {
    updateSlideWidth()
    window.addEventListener('resize', updateSlideWidth)

    return () => {
      window.removeEventListener('resize', updateSlideWidth)
    }
  }, []);
  
  type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

  const breakpointConditions: Record<Breakpoint, (width: number) => boolean> = {
    sm: (width) => width >= 640 && width < 768,
    md: (width) =>  width >= 768 && width < 1024,
    lg: (width) => width >= 1024 && width < 1280,
    xl: (width) => width >= 1280,
  };

  const getBreakpointState = (breakpoint: Breakpoint): boolean => {
    const condition = breakpointConditions[breakpoint];
    return condition ? condition(window.innerWidth) : false;
  };

  const [isSm, setIsSm] = useState(getBreakpointState('sm'))
  const [isMd, setIsMd] = useState(getBreakpointState('md'))
  const [isLg, setIsLg] = useState(getBreakpointState('lg'))
  const [isXl, setIsXl] = useState(getBreakpointState('xl'))

  useEffect(() => {
    const handleResize = () => {
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

  const slidesPerView  = 
    isXl ? 6 :
    isLg ? 5 :
    isMd ? 4 :
    isSm ? 3 : 2;

  const slidesTotalSpace =
    isXl ? 40 :
    isLg ? 32 :
    isMd ? 24 :
    isSm ? 16 : 4;

    // console.log("currentSlide",currentSlide)
    // console.log("slideWidth",slideWidth)
    // console.log("sliderRef.current",sliderRef.current)

    const handleClick = (direction: "prev" | "next") => {
      const maxIndex = slides.length - slidesPerView;
      setIsTransitioning(true);

    if (direction === "prev" && currentSlide > 0) {
      setCurrentSlide((i) => Math.max(i - slidesPerView, 0));
    }
    if (direction === "next" && currentSlide < maxIndex) {
      //sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth });
      setCurrentSlide((i) => Math.min(i + slidesPerView, maxIndex));
    }
  };
  
  // console.log("currentSlide :",currentSlide);

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [currentSlide]);

  const transitionSettings = {
    type: 'tween',
    duration: 0.5,
    ease: 'easeInOut',
  };

  const translateX = -currentSlide * slideWidth;
  // console.log("translateX", translateX)

    // useEffect(() => {
    //   if (sliderRef.current) {
    //     const translateX = -currentSlide * slideWidth; // Negative translation for leftward motion
    //     sliderRef.current.style.transition = 'transform 0.5s';
    //     sliderRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
    //   }
    // }, [currentSlide, slideWidth]);

    const maxIndex = slides.length / slidesPerView;
    // console.log("maxIndex",Math.floor(maxIndex))
    const goToSlide = (slideNumber: number) => {
      setCurrentSlide(slideNumber);
    };
    // console.log(goToSlide)
    //  const goToSlide = (slideNumber: SetStateAction<number>) => {
    //   setCurrentSlide(slideNumber);
    // };

  return (
    <div className='max-sm:overflow-x-scroll max-sm:overflow-y-hidden overflow-css'>
      <div
        ref={sliderRef}
        className={`${sliderClass} relative flex`}
       
      >
        {slides.slice(currentSlide, currentSlide + slidesPerView)}
      </div>
      <div className='w-full relative  h-full'>
        <Button 
          onClick={() => handleClick("prev")}
          variant='link'
          className={
            `absolute bottom-0 -left-5 sm:-left-[3vw] xl:-left-[3.5vw] transition-all sm:w-[2.5vw] xl:w-[3vw] px-0 rounded-none 2xl:rounded-s-none 2xl:rounded-e-sm bg-black/80 hover:bg-black/90 group` +
            ` ${sliderButtonClass}`
          }
          style={{display: `${currentSlide<=0 ? "none" : "block"}`}}
        >
          <ChevronLeft className='w-3 sm:w-10 h-4 sm:h-10 text-transparent group-hover:text-white  max-md:pr-5'/>
          <div className="absolute -top-5 left-[1430px] ">
              <div className="flex items-center justify-center gap-1 ">
                {Array.from({ length: Math.round(slides.length/slidesPerView) }).map(
                    (_: number, i: number) => (
                      <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`
                          hover:cursor-pointer transition-all w-3 h-1 bg-red-700
                          ${i === currentSlide ? "bg-opacity-100" : "bg-opacity-50"}
                        `}
                        >{`${i}`}</div>
                        
                    )
                  )}
              </div>
          </div>
        </Button>
        <Button 
          onClick={() => handleClick("next")}
          variant='link'
          className={
            `absolute bottom-0 -right-5 sm:-right-[3vw] xl:-right-[3.5vw] transition-all sm:w-[2.5vw] xl:w-[3vw] px-0 rounded-none 2xl:rounded-s-none 2xl:rounded-e-sm bg-black/80 hover:bg-black/90 group` +
            ` ${sliderButtonClass}`
          }
          style={{ display: `${currentSlide >= slides.length - slidesPerView ? "none" : "block"}` }}
        >
          <ChevronRight className='w-3 sm:w-10 h-4 sm:h-10 text-transparent group-hover:text-white max-md:pr-5'/>
         {/* <div className="absolute -top-5 left-[1430px] ">
              <div className="flex items-center justify-center gap-1 ">
                {Array.from({ length:  Math.round(slides.length/slidesPerView)}).map(
                    (_: number, i: number) => (
                      <div
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`
                          hover:cursor-pointer transition-all w-3 h-1 bg-red-600
                          ${currentSlide === i ? "bg-opacity-100" : "bg-opacity-50"}
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