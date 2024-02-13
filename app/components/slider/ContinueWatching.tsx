"use client"

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

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
      preload="none"
      controls
      onTimeUpdate={handleVideoTimeUpdate}
      onEnded={handleVideoEnded}
      onPlay={handleVideoClick}
      onLoadedData={handleVideoLoadedData}
      className={`object-cover rounded-sm flex w-60 h-32 ${isLoaded ? 'bg-opacity-10' : 'bg-opacity-100'}`}
    >
      <source src={videoUrl} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  ) 
}

export default VideoPlayer


