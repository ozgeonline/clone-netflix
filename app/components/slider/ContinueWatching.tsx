"use client"

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  imageString: string
  // onVideoEnd: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, imageString }) => {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [savedTime, setSavedTime] = useState<number | null>(null)

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

  return (
      <video
        ref={videoRef}
        preload="none"
        poster={imageString}
        controls
        onTimeUpdate={handleVideoTimeUpdate}
        onEnded={handleVideoEnded}
        className='object-cover rounded-sm flex  w-60 h-32'
        
      >
        <source src={videoUrl} type="video/mp4" className=''/>
        Your browser does not support the video tag.
      </video>
  )
}

export default VideoPlayer


