"use client"

import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp, VolumeX, Volume2, PauseCircle, Plus, Play, Check } from "lucide-react"
import { useRef, useState } from "react"
import { addTowatchlist, deleteFromWatchlist } from "../../../action";
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
    <div className="bg-[#141414]">
      <video 
        src={videoSource} 
        ref={videoRef}  
        className="w-full h-[500px] -mt-6" 
        playsInline
        muted
      />
      <div className="absolute bottom-60 w-screen h-12 bg-[#141414] -ms-20 shadow-[0_35px_70px_55px_rgba(0,0,0,1)] shadow-[#141414]  transform rotate-180">
      </div>
      <div className="flex justify-between -mt-36 mx-10">
        <div className="flex space-x-3">
          <Button onClick={handlePlayToggle} className="text-lg font-extrabold w-32 h-10 bg-white hover:brightness-125 hover:cursor-pointer z-50">
            { playing ? <Play className="mr-2 h-7 w-7 text-black fill-inherit" /> : <PauseCircle className="mr-2 h-7 w-7" /> }
            { playing ? "Play" : "Pause" }
          </Button>
          <div>
            {watchList ? (
              <form action={deleteFromWatchlist} >
                <input type="hidden" name="watchlistId" value={wachtListId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button variant="link" size="icon" className="border-2 rounded-full bg-neutral-800 border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in hover:duration-75 hover:transition-all">
                  <Check className="w-5 h-5" />
                </Button>
              </form>
            ) : (
              <form action={addTowatchlist} >
                <input type="hidden" name="movieId" value={movieId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button variant="link" size="icon" className="border-2 rounded-full bg-neutral-800 border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in hover:duration-75 hover:transition-all">
                  <Plus className="w-7 h-7" />
                </Button>
              </form>
            )}
          </div>
          <div>
            { like ? (
                <Button 
                  onClick={() => setLike(!like)} 
                  size="icon" 
                  variant="link" 
                  className="z-50 p-[10px] bg-neutral-800 border-2 border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in hover:duration-75 hover:transition-all"
                >
                  <ThumbsUp className="h-5 w-5" />
                </Button>
              ) : (
                <Button 
                  onClick={() => setLike(!like)} 
                  size="icon" 
                  variant="link" 
                  className="z-50 p-[10px] bg-neutral-800 border-2 border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in hover:duration-75 hover:transition-all"
                >
                  <ThumbsDown className="h-5 w-5" />
                </Button>
              )
            }
          </div>
        </div>
        <Button 
          onClick={handleMuteToggle}
          variant="link"
          size="icon"
          className="z-50 text-lg font-medium bg-neutral-800 bg-opacity-50 border-2 border-zinc-500 rounded-full hover:brightness-150 hover:ease-in hover:duration-75 transition-all"
        >
          {
            muted 
            ? <VolumeX className="h-10 w-10 px-2 text-zinc-500"/> 
            : <Volume2 className="h-10 w-10 px-2 text-zinc-500"/>
          }
        </Button>
      </div>
    </div>
  )
}