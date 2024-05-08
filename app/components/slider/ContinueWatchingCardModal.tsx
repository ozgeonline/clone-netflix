"use client"

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  imageString: string
}

const ContinueWatchingCardModal: React.FC<VideoPlayerProps> = ({ videoUrl,imageString }) => {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [savedTime, setSavedTime] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const storedTime = localStorage.getItem('videoTime')
    setSavedTime(storedTime ? parseFloat(storedTime) : null)
  }, [])

  useEffect(() => {
    if (videoRef.current && savedTime !== null) {
      videoRef.current.currentTime = savedTime
      videoRef.current.play()
    }
  }, [savedTime])

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem('videoTime', videoRef.current.currentTime.toString())
    }
  }

  const handleVideoEnded = () => {
    if (videoRef.current !== null) {
      
      videoRef.current.remove()
      localStorage.removeItem('videoTime')
    }
  }
 
  const handleVideoClick = () => {
    document.querySelectorAll('video').forEach((video: HTMLVideoElement) => {
      if (video !== videoRef.current) {
        video.pause()
      }
    })
  }

  const handleVideoLoadedData = () => {
    setIsLoaded(true)
  }

  return (
     <video
        ref={videoRef}
        poster={isLoaded ? "" : imageString}
        preload="none"
        controls
        muted
        onTimeUpdate={handleVideoTimeUpdate}
        onEnded={handleVideoEnded}
        onPlay={handleVideoClick}
        onLoadedMetadata={handleVideoLoadedData}
        className={`object-cover rounded-sm flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw] overflow-hidden`}
    >
      <source src={videoUrl} type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
  ) 
}

export default ContinueWatchingCardModal


