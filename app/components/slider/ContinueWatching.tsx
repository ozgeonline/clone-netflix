"use client"

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  imageString: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl,imageString }) => {

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
        className={`object-cover rounded-sm flex h-[17vw] sm:h-[8.3vw] w-[30vw] sm:w-[14.8vw] min-w-[150px] min-h-[85px]`}
    >
      <source src={videoUrl} type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
  ) 
}

export default VideoPlayer


