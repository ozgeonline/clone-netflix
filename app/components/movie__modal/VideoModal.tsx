"use client";

import React, { useEffect, forwardRef, useRef, useImperativeHandle , useState, Ref } from 'react';
import { useVideoContext } from './VideoContext';

type VideoProps = {
  id:number;
  imageString: string;
  source: string;
  alt: string;
  videoStyle: string;
  enableControls?:boolean;
  enableAutoPlay?:boolean;
  enablePlay?: boolean;
  enableLoop?:boolean;
  enableTimeUpdate?: boolean;
  enableEnded?: boolean;
  enableLoadedMetadata?: boolean;
  isMovieVideo?: boolean;
  onUpdateTime?: (currentTime: number) => void;
};
// export type ModalRef = {
//   videoModalRef: React.RefObject<HTMLVideoElement | null>;
// }
const VideoModal = forwardRef<HTMLVideoElement, VideoProps>((
  { 
    id,
    imageString, 
    source, 
    alt, 
    videoStyle,
    enableControls,
    enableAutoPlay = false,
    enablePlay = true,
    enableLoop,
    enableTimeUpdate = true,
    enableEnded = true,
    enableLoadedMetadata = true, 
    isMovieVideo=true,
    onUpdateTime
  }, ref) => {//+
    
    const { 
      isActive,
      currentVideoRef,
      currentVideoPause,
      continueWatchingVideoElement,
      currentVideoPlay,
      isWatched,
      markAsWatched,
      watchedVideos,
      handleVideoTimeUpdate,
      handleVideoEnded,
      resetSavedTime,
      savedTime,
      isDialogOpen
    } = useVideoContext();

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    //const [currentTime, setCurrentTime] = useState<number>(0);
    
    const videoModalRef =useRef<HTMLVideoElement | null>(null);
    useImperativeHandle(ref, () => videoModalRef.current );

    // console.log("videoModalRef",videoModalRef.current)
    // console.log("currentVideoRef",currentVideoRef.current)
    // console.log("continueWatchingVideoElement",continueWatchingVideoElement.current)
    //console.log("active",isActive)

    useEffect(() => {
      if (videoModalRef?.current && savedTime[id] ) {
        videoModalRef.current.currentTime = savedTime[id];
        handleVideoTimeUpdate(id, savedTime[id]);
        setIsLoaded(true);
      }
    }, [isDialogOpen]);

    const handleEnded = () => {
      markAsWatched(id, true);
      handleVideoEnded(id);
    };

    const handleTimeUpdate = () => {
      if (videoModalRef?.current) {
        //console.log(`${id}`,"Time Update Triggered", videoModalRef.current.currentTime);
        const updateTime = videoModalRef.current.currentTime;
        handleVideoTimeUpdate(id, updateTime);
        //onUpdateTime(videoModalRef.current.currentTime);
      } else {
        console.log("onTimeUpdate is not a function");
      }
    };

    useEffect(() => {
      const handlePause = () => {
        if (videoModalRef?.current && currentVideoRef?.current  && !isActive) {
          currentVideoRef.current?.pause();
          currentVideoPause();
        }
        //console.log("paused video")
      };

      const playCurrentVideo = () => {
        if (videoModalRef?.current && currentVideoRef?.current &&  isActive) {
          currentVideoRef.current?.play();
          currentVideoPlay();
        }
        //console.log("Play current video")
      };
  
      handlePause();
      playCurrentVideo();
  
      const videoElement = videoModalRef.current;
      if (videoElement) {
        videoElement.addEventListener('play', playCurrentVideo);
        videoElement.addEventListener('pause', handlePause);
        videoElement.addEventListener('ended', handleEnded);
        !isMovieVideo && videoElement.addEventListener('timeupdate', handleTimeUpdate);
      }
  
      return () => {
        if (videoElement) {
          videoElement.removeEventListener('play', playCurrentVideo);
          videoElement.removeEventListener('pause', handlePause);
          videoElement.removeEventListener('ended', handleEnded);
          !isMovieVideo && videoElement.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }, [ enableTimeUpdate]);
  
    const handleVideoClick = () => {
      if(!isMovieVideo) {
        const allVideos = document.querySelectorAll('.continueVideo') as NodeListOf<HTMLVideoElement>;
        allVideos.forEach((video: HTMLVideoElement) => {
          if (video !== videoModalRef.current) {
            video.pause();
          }
        });
      };

      if (isWatched(id)) {
        markAsWatched(id, false);
        resetSavedTime(id);
      }
    };
  
    const handleVideoLoadedData = () => {
      // if (enableLoadedMetadata) {
        setIsLoaded(true);
      // }
    };

    return (
      <>
        <video
          ref={videoModalRef}
          poster={imageString}
          aria-label={alt}
          muted
          playsInline
          className={`${videoStyle} continueVideo`}
          loop={enableLoop}
          autoPlay={enableAutoPlay}
          controls={enableControls}

          onLoadedMetadata={enableLoadedMetadata && handleVideoLoadedData}
          onPlay={enablePlay ? handleVideoClick : null}
          onTimeUpdate={enableTimeUpdate ? handleTimeUpdate : null}
          onEnded={enableEnded ? handleEnded : null}
        >
          <source src={source} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div 
          className="w-full absolute left-0 bottom-0 h-20 -z-10 bg-gradient-to-b from-transparent bg-main-dark/80 to-main-dark"
        ></div> */}
      </>
   );
  })


export default VideoModal;
