"use client"

import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp, VolumeX, Volume2, PauseCircle, Plus, Play, Check } from "lucide-react"
import { useRef, useState } from "react";
import { addTowatchlist, deleteFromWatchlist } from "../action";
import { usePathname } from "next/navigation"

interface iAppProps {
  movieId: number
  watchList: boolean
  wachtListId: string
  videoSource: string
}

export default function PlayVideoModalButton ({
    movieId,
    wachtListId,
    watchList,
    videoSource
  }: iAppProps) {

  const [like, setLike] = useState(true)
  const pathName = usePathname()

  const random = Math.floor(Math.random()*50)+45
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState<boolean>(true)
  const [playing, setPlaying] = useState<boolean>(true)

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setPlaying(true)
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <div>
      <video 
        src={videoSource} 
        ref={videoRef}  
        className="w-full h-[500px]" 
        playsInline
        muted
      />
      <div className="flex justify-between -mt-36 mx-10">
        <div className="flex space-x-3">
          <Button onClick={handlePlayToggle} className="text-lg font-extrabold w-32 h-10 bg-white hover:brightness-125 hover:cursor-pointer z-50">
            { playing ? <Play className="mr-2 h-7 w-7 text-black fill-inherit" /> : <PauseCircle className="mr-2 h-7 w-7" /> }
            { playing ? "Play" : "Pause" }
          </Button>
          <div className="">
            {watchList ? (
              <form action={deleteFromWatchlist} >
                <input type="hidden" name="watchlistId" value={wachtListId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button variant="link" size="icon" className="border rounded-full bg-[#141414] border-[#ffffffb3] opacity-60 hover:brightness-150 hover:ease-out hover:duration-300 hover:transition-all">
                  <Check className="w-5 h-5" />
                </Button>
              </form>
            ) : (
              <form action={addTowatchlist} >
                <input type="hidden" name="movieId" value={movieId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button variant="link" size="icon" className="border rounded-full bg-[#141414] border-[#ffffffb3] opacity-60 hover:brightness-150 hover:ease-out hover:duration-300 hover:transition-all">
                  <Plus className="w-7 h-7" />
                </Button>
              </form>
            )}
          </div>
          <div className="">
            {
              like ? (
                <button onClick={() => setLike(!like)} className="p-2 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-300 hover:transition-all">
                  <ThumbsUp className="h-6 w-6" />
                </button>
              ) : (
                <button onClick={() => setLike(!like)} className="p-2 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-300 hover:transition-all">
                  <ThumbsDown className="h-6 w-6" />
                </button>
              )
            }
          </div>
        </div>
        <Button 
          onClick={handleMuteToggle}
          variant="link"
          size="icon"
          className="text-lg font-medium bg-[#141414] border border-[#ffffffb3] opacity-60 rounded-full hover:opacity-70 hover:brightness-150 hover:ease-out hover:duration-300 hover:transition-all"
        >
        {
          muted 
          ? <VolumeX className="h-10 w-10 px-2"/> 
          : <Volume2 className="h-10 w-10 px-2"/>
        }
      </Button>
      </div>
    </div>
  )
}