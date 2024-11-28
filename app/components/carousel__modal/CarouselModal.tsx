"use client"

import { ChevronRight, ChevronLeft } from 'lucide-react'
import React from 'react';
import {  useEffect, useRef, useState } from 'react'
import { useSliderSettings } from '../useSliderSettings';
import { useCardContext } from '../card_modals/CardContext';
import { useVideoContext } from '../movie__modal/VideoContext';
import "./carousel.css"

interface CarouselModalProps {
  sliderButtonSection?: boolean;
  sliderButtonSectionTop10?: boolean;
  carouselWrapperOpacity?:string;
  children: React.ReactNode[];
  sectionTitle?:string
  source?:string
  id?:number[];
  filterWatchedVideos?: boolean;
  title?:string;
}

export default function CarouselModal ({
  children: slides,
  sliderButtonSection,
  sliderButtonSectionTop10,
  carouselWrapperOpacity,
  sectionTitle,
  source,
  id,
  filterWatchedVideos=false,
  title
  
}: CarouselModalProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const { isHover } = useCardContext();
  const {
    isWatched,
    hasSavedTime
  } = useVideoContext();
  
  const { sliderWidth, slidesPerView } = useSliderSettings(sliderRef);
    
  const handleClick = (direction: "prev" | "next") => {
    setClickCount((prev)=>prev+1)
    console.log(clickCount)
    if (isTransitioning) return;

    const totalSlides = slides.length;
    //console.log(totalSlides)
    
    const slideItems = Array.from(sliderRef.current?.children || []);
    //console.log(slideItems)

    setIsTransitioning(true);

    if (direction === "prev") {
      // if (currentSlide === 0) {
       
      //   for (let i = 0; i < slidesPerView-1; i++) {
      //     const addStartSlide = slideItems[totalSlides - slidesPerView + i];
      //     sliderRef.current?.insertAdjacentElement("afterbegin", addStartSlide);
      //   }
      //   setCurrentSlide(slidesPerView);
      // } else {
      //   setCurrentSlide((i) => Math.max(i - slidesPerView, 0));
      // }
  
      // setTimeout(() => {
      //   setIsTransitioning(false);
      // }, 600);
      setIsTransitioning(true)
      const maxIndex = slides.length -1- slidesPerView;
      setCurrentSlide((i) => Math.max(i + slidesPerView, 0));
      for (let i = 0; i < slidesPerView; i++) {
        const lastSlide = slideItems[slideItems.length -1- i];
        sliderRef.current?.insertAdjacentElement("afterbegin", lastSlide);
      }
      
      setTimeout(() => { setCurrentSlide(1) }, 500);
      setTimeout(() => setIsTransitioning(false), 500);
      
      // if (currentSlide <= 0) {
      //   for (let i = 0; i < slidesPerView - 1; i++) {
      //     const lastSlide = slideItems[slideItems.length -1- i];
      
      //       sliderRef.current?.insertAdjacentElement("afterbegin", lastSlide);
            
      //       console.log("prev",lastSlide)
          
      //   }
  
      //   // Adjust the transition for smooth scrolling
      //   sliderRef.current!.style.transition = "none";
      //   setCurrentSlide((prev) => prev);
      
      //   setTimeout(() => {
      //     sliderRef.current!.style.transition = "transform 0.6s ease";
      
      //     setTimeout(() => {
      //       sliderRef.current!.style.transition = "none";
      //       setIsTransitioning(false);
      //     }, 0); // Match the transition duration
      //   }, 600);
  
      //   setCurrentSlide((prev) => prev-1 );
      //   setTimeout(() => setIsTransitioning(false), 500);
      // } else {
      //   for (let i = 0; i < slidesPerView +1; i++) {
      //     const lastSlide = slideItems[slideItems.length -1- i];
      
      //       sliderRef.current?.insertAdjacentElement("afterbegin", lastSlide);
      //       console.log("prev",lastSlide)
          
      //   }
  
      //   // Adjust the transition for smooth scrolling
      //   sliderRef.current!.style.transition = "none";
      //   setCurrentSlide((prev) => prev-1);
      
      //   setTimeout(() => {
      //     sliderRef.current!.style.transition = "transform 0.6s ease";
      
      //     setTimeout(() => {
      //       sliderRef.current!.style.transition = "none";
      //       setIsTransitioning(false);
      //     }, 0); // Match the transition duration
      //   }, 600);
  
      //   setCurrentSlide((prev) => prev );
      //   setTimeout(() => setIsTransitioning(false), 500);
      // }
      
    } else if (direction === "next") {
      setIsTransitioning(true)
      const maxIndex = slides.length -1- slidesPerView;
      setCurrentSlide((i) => Math.min(i + slidesPerView, maxIndex));
      
      for (let i = 0; i < slidesPerView; i++) {
        const addEndSlide = slideItems[i];
        sliderRef.current?.insertAdjacentElement("beforeend", addEndSlide);
        //console.log("beforeend i+",i)
      }

      setTimeout(() => {
        setCurrentSlide(1);
        // const slideWidth = sliderWidth / slidesPerView;
        // const newTransform = -currentSlide * slideWidth;
        // sliderRef.current!.style.transition = 'transform 0.6s ease';
        // sliderRef.current.style.transform = `translateX(${newTransform}px)`;

        // setTimeout(() => {
        //   sliderRef.current!.style.transition = 'none ';
        //   setIsTransitioning(false);
        // }, 500);
      }, 500);
      setTimeout(() => setIsTransitioning(false), 500);
      //console.log("addEndSlide",addEndSlide)
    }

  };

  //console.log("currentSlide",currentSlide);

  // const handleClick = (direction: "prev" | "next") => {
  //   setClickCount((prev)=>prev+1)
  //   if (isTransitioning) return;

  //   const totalSlides = slides.length;
  //   const maxIndex = (totalSlides *2) - slidesPerView;

  //   setIsTransitioning(true);

  //   if (direction === "prev") {
  //     setIsLoading(true)
  //     if (currentSlide <= slidesPerView) {
  //       setCurrentSlide((current) => current - slidesPerView);
  //       console.log("currentSlide <= slidesPerView", currentSlide)
  //       setTimeout(() => {
  //         sliderRef.current!.style.transition = 'none';
  //         setCurrentSlide(totalSlides + (currentSlide - slidesPerView));
  //         console.log("setTimeout", currentSlide)
  //         setTimeout(() => {
  //           sliderRef.current!.style.transition = 'transform 0.6s ease';
  //           setIsTransitioning(false);
  //         }, 1);
  //       }, 600);
  //     } else {
  //       setCurrentSlide((i) => i - slidesPerView);
  //       setTimeout(() => setIsTransitioning(false), 600);
  //     }
  //     setIsLoading(false)
  //   } else if (direction === "next") {
  //     //console.log(maxIndex)
  //     if (currentSlide >= maxIndex) {
  //       setCurrentSlide((current) => current + slidesPerView);
  //       //console.log("currentSlide >= maxIndex",currentSlide)

  //       setTimeout(() => {
  //         sliderRef.current!.style.transition = 'none';

  //         setCurrentSlide((currentSlide - totalSlides) + slidesPerView);
  //         //console.log("setTimeout current",currentSlide)

  //         setTimeout(() => {
  //           sliderRef.current!.style.transition = 'transform 0.6s ease';
  //           setIsTransitioning(false);
  //         }, 1);
  //       }, 600);
  //     } else {
  //       setCurrentSlide((i) => i + slidesPerView);
  //       //console.log("else",currentSlide)
  //       setTimeout(() => setIsTransitioning(false), 600);
  //     }
  //   }
  //   //console.log("max",maxIndex)
  // };

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderWidth / slidesPerView;
      const newTransform = -currentSlide * slideWidth;
      sliderRef.current.style.transition = isTransitioning ? 'transform  0.5s ease' : 'none';
      sliderRef.current.style.transform = `translateX(${newTransform}px)`;
    }
  }, [currentSlide, sliderWidth, slidesPerView, isTransitioning]);

  const handleImageLoad = () => {
    setIsContentLoaded(true);
  };

  const renderSlides = slides.map((child, index) => {
    if (!React.isValidElement(child)) return null;

    const shouldHideSlide = filterWatchedVideos && !hasSavedTime(id[index]);

    return (
      <div
        key={index}
        aria-label={`${id[index]} : carousel slide`}

        // className={shouldHideSlide ? "w-0 overflow-hidden" : `w-[${sliderWidth / slidesPerView}px]`}
        style={{
          width: shouldHideSlide ? "0px" : `${sliderWidth / slidesPerView}px`,
        }}
      >
        <div
          style={{
            width: shouldHideSlide ? "0px" : `${sliderWidth / slidesPerView}px`,
          }}
          className={!isWatched ? "pr-[0.5vw]" : "px-[0.5vw]"}
          onLoad={handleImageLoad}
        >
          {child}
        </div>
      </div>
    );
  });
  
   
  //console.log(`Slide ${id} -hasSavedTime(${id}): ${hasSavedTime(id)}`);
  //console.log(`Total slides to render: ${slides.length}`);

  return (
    <div 
      className={`
        animate-slide-X
        carouselWrapper
        ${carouselWrapperOpacity}
         ${isHover ? 'opacity-100 z-50' : 'opacity-95'}
      `}
      aria-label='Carousel wrapper'
    >
      {isContentLoaded && (
        <h2 className="relative title sm:text-2xl px-2">
          {sectionTitle}
        </h2>
      )}
       <div
        ref={sliderRef}
        className="flex"
      >
        {renderSlides}
      </div>

      <div className='relative w-full h-full z-50'>
        {isContentLoaded && (
          <div>
            <button 
              onClick={() => handleClick("prev")}
              aria-label='Previous Button'
              className={
                "prevButton carouselButtons group/prev " +
                `${sliderButtonSection && "sliderButtonSectionSize"} `+
                `${sliderButtonSectionTop10 && "sliderButtonSectionTop10Size"} `+
                `${clickCount<=0 ? "hidden" : "block"}`
              }
            >
              <ChevronLeft className='buttonIcon group-hover/prev:text-white' />
            </button>
            <button
              onClick={() => handleClick("next")}
              aria-label='Next Button'
              className={
                "nextButton carouselButtons group/next  " +
                `${sliderButtonSection && "sliderButtonSectionSize"} `+
                `${sliderButtonSectionTop10 && "sliderButtonSectionTop10Size"} `+
                `${slides.length < slidesPerView ? "hidden" : "block"} `
              } 
            >
              <ChevronRight className='buttonIcon group-hover/next:text-white' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}