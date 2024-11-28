"use client"

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import MovieButtons from "./MovieVideoButtons"
import VideoModal from "./VideoModal";
import { useVideoContext } from "./VideoContext";
import { MovieProps } from "@/app/src/types/props";

interface videoProps extends MovieProps {
  id:number
}

const MovieVideo = forwardRef<HTMLVideoElement, videoProps>((
  {
  id,
  ...movieProps
},ref) => {
 
  const { currentVideoRef, isActive} = useVideoContext();
 useImperativeHandle(ref, () => currentVideoRef.current);
  //console.log("currentVideoRef",currentVideoRef)
  //console.log("isActive-MovieVideo",`${movieProps.movieId} : `, isActive)

  //const modalRef = useRef<ModalRef>(null)
  
  return (
    <div className="flex justify-start items-center w-full h-auto">
      <div className="flex relative top-0 left-0 w-full h-[80vw] md:h-[75vh] lg:h-[110vh]">
        <VideoModal
          // videoModalRef={currentVideoRef} 
          ref={currentVideoRef}
          isMovieVideo={true}
          enableControls={false}
          enableAutoPlay={true}
          enableLoop={true}
          enableTimeUpdate={false}
          enablePlay={false}
          enableEnded={false}
          // enableLoadedMetadata={false}
          imageString={movieProps.imageString}
          source={movieProps.videoSource }
          alt={`${movieProps.title}-video player home page`}
          videoStyle="w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%]" id={id}        />
        <div 
          className="w-full absolute left-0 bottom-0 h-20 -z-10 bg-gradient-to-b from-transparent bg-main-dark/95 to-main-dark"
        ></div>
      </div>
      <div className="absolute w-[70%] lg:w-[40%] pl-5 sm:pl-[3vw] xl:pl-[3.5vw] mt-[7vw] space-y-1 lg:space-y-4">
        <p className="text-white text-[5vw] sm:text-[3vw] line-clamp-1 font-bold">
          {movieProps.title}
        </p>
        <p className="text-white text-sm sm:text-lg hidden lg:line-clamp-2">
          {movieProps.overview}
        </p>
        <div className="relative">
          <MovieButtons
            {...movieProps}
          />
        </div>
      </div>
    </div>
  )
})

export default MovieVideo;