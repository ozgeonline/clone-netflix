"use client"

import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
  videoUrl: string
  // onVideoEnd: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

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
        controls
        onTimeUpdate={handleVideoTimeUpdate}
        onEnded={handleVideoEnded}
        className='object-contain rounded-sm flex bg-blue-700 w-60 h-32'
        
      >
        <source src={videoUrl} type="video/mp4" className='bg-red-500'/>
        Your browser does not support the video tag.
      </video>
  )
}

export default VideoPlayer


