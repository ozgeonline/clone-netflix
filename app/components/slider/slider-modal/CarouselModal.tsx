"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import React from 'react';
import {  useEffect, useRef, useState } from 'react'

interface CarouselModalProps {
  sliderButtonClass?: string;
  sliderClass?:string
  children: React.ReactNode[];
  title?:string
}

export default function CarouselModal ({
  children: slides,
  sliderButtonClass,
  sliderClass,
  title
}: CarouselModalProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sliderWidth, setSliderWidth] = useState<number>();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0)
  const [newslides, setNewSlides] = useState(slides);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState<boolean[]>(Array(slides.length).fill(true));
  

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

  const updateSliderWidth = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      setSliderWidth(width);
    }
  };

  useEffect(() => {
    updateSliderWidth();
    window.addEventListener('resize', updateSliderWidth);
    return () => {
      window.removeEventListener('resize', updateSliderWidth);
    };
  }, []);

  const slidesPerView  = 
    isXl ? 6 :
    isLg ? 5 :
    isMd ? 4 :
    isSm ? 3 : 2;

  //console.log(sliderRef.current)

  const handleClick = (direction: "prev" | "next") => {
    setClickCount((prev)=>prev+1)
    if (isTransitioning) return;

    const totalSlides = slides.length;
    const maxIndex = (totalSlides *2) - slidesPerView;

    setIsTransitioning(true);

    if (direction === "prev") {
      setIsLoading(true)
      if (currentSlide <= slidesPerView) {
        setCurrentSlide((current) => current - slidesPerView);
        console.log("currentSlide <= slidesPerView", currentSlide)
        setTimeout(() => {
          sliderRef.current!.style.transition = 'none';
          setCurrentSlide(totalSlides + (currentSlide - slidesPerView));
          console.log("setTimeout", currentSlide)
          setTimeout(() => {
            sliderRef.current!.style.transition = 'transform 0.6s ease';
            setIsTransitioning(false);
          }, 1);
        }, 600);
      } else {
        setCurrentSlide((i) => i - slidesPerView);
        setTimeout(() => setIsTransitioning(false), 600);
      }
      setIsLoading(false)
    } else if (direction === "next") {
      //console.log(maxIndex)
      if (currentSlide >= maxIndex) {
        setCurrentSlide((current) => current + slidesPerView);
        //console.log("currentSlide >= maxIndex",currentSlide)

        setTimeout(() => {
          sliderRef.current!.style.transition = 'none';

          setCurrentSlide((currentSlide - totalSlides) + slidesPerView);
          //console.log("setTimeout current",currentSlide)

          setTimeout(() => {
            sliderRef.current!.style.transition = 'transform 0.6s ease';
            setIsTransitioning(false);
          }, 1);
        }, 600);
      } else {
        setCurrentSlide((i) => i + slidesPerView);
        //console.log("else",currentSlide)
        setTimeout(() => setIsTransitioning(false), 600);
      }
    }
    //console.log("max",maxIndex)
  };
  console.log("currentSlide",currentSlide)

  

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderWidth / slidesPerView;
      const newTransform = -currentSlide * slideWidth;
      sliderRef.current.style.transition = isTransitioning ? 'transform 0.6s ease' : 'none';
      sliderRef.current.style.transform = `translateX(${newTransform}px)`;
    }
  }, [currentSlide, sliderWidth, slidesPerView, isTransitioning]);

  const handleImageLoad = () => {
    const images = sliderRef.current?.querySelectorAll('img');
    setIsLoading(true);
    if (images) {
      const allLoaded = Array.from(images).every((img) => img.complete);
      if (allLoaded) {
        setIsLoading(false);
      }
    }
    //console.log("img",images[0])
  };

  useEffect(() => {
    handleImageLoad();
  }, []);

  
  return (
    <div className='max-sm:overflow-x-scroll max-sm:overflow-y-hidden overflow-css'>
      {/* {isLoading && (
        <div 
          ref={sliderRef} 
          className={`flex ${isLoading ? 'visible' : 'invisible'}`}
          style={{ width: `${sliderWidth / slidesPerView}px`, backgroundColor: "red"}}>
          loading
        </div>
      )} */}
      <h2 className="relative title sm:text-2xl px-2 z-40">{title}</h2>
      <div
        ref={sliderRef}
        className="flex"
        // className={`flex relative ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
      >
       {slides.concat(slides,slides).map((child, index) => (
          <div
            key={index}
            aria-label={`${index}-slide item`}
            className=""
          >
            <div 
              style={{ width: `${sliderWidth / slidesPerView}px` }}
              className='px-2 '
            >
             {React.cloneElement(child as React.ReactElement, {
                onLoad: handleImageLoad,
                children: child
              })}
            </div>
          </div>
        ))}
      </div>
    
      <div className='w-full relative h-full'>
        <Button 
          onClick={() => handleClick("prev")}
          variant='link'
          aria-label='Previous Button'
          className={
            `${sliderButtonClass} group/prev absolute bottom-0 -left-5 sm:-left-[3vw] xl:-left-[3.5vw] sm:w-[2.5vw] xl:w-[3vw] ` +
            `transition-all ease-in px-0 rounded-none 2xl:rounded-s-none 2xl:rounded-e-sm bg-black/80 `+
            `${sliderButtonClass} ${clickCount<=0 ? "hidden" : "block"}`
          }
        >
          <ChevronLeft className='w-3 sm:w-10 h-4 sm:h-10 text-transparent group-hover/prev:text-white max-md:pr-5'/>
          
        </Button>
        <Button 
          onClick={() => handleClick("next")}
          variant='link' 
          aria-label='Next Button'
          className={
            `absolute group/next bottom-0 -right-5 sm:-right-[3vw] xl:-right-[3.5vw] transition-all sm:w-[2.5vw] xl:w-[3vw] px-0 rounded-none 2xl:rounded-e-none 2xl:rounded-s-sm bg-black/80 ` +
            ` ${sliderButtonClass} ${slides.length <= slidesPerView ? "hidden" : "block"}`
          }
          
        >
          <ChevronRight className='w-3 sm:w-10 h-4 sm:h-10 text-transparent group-hover/next:text-white max-md:pr-5'/>
        </Button>
      </div>
    </div>
  )
}