"use client"

import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Check, Plus, Play, ChevronDown } from "lucide-react"
import PlayVideoModal from "../PlayVideoModal"
import { useState } from "react";
import { addTowatchlist, deleteFromWatchlist } from "../../action"
import { usePathname } from "next/navigation"

interface iAppProps {
  wachtListId: string
  movieId: number
  title: string
  overview: string
  watchList: boolean
  videoSource: string
  year: number
  age: number
  time: number
  
}

export function MovieCard({
    movieId,
    wachtListId,
    overview,
    title,
    watchList,
    videoSource,
    age,
    year,
    time
  }: iAppProps) {

  const [open, setOpen] = useState(false)
  const [like, setLike] = useState(true)
  const pathName = usePathname()

  const random = Math.floor(Math.random()*50)+45

  return (
    <div className="flex flex-col max-w-[480px]">
      <h1 className="font-bold text-lg line-clamp-1 left-3 top-28 absolute  [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">{title}</h1>
      <div className="mt-40">
        <div 
          className="flex flex-row justify-between"
        >
          <div className="flex flex-row items-center">
            <Button 
              onClick={() => setOpen(true)}
              size="icon"
              variant="link"
              className="ms-2"
            >
              <Play className="h-6 w-6 p-1 ps-[6px]  text-black bg-white rounded-full fill-inherit" />
            </Button>

            { watchList ? (
              <form action={deleteFromWatchlist} className="w-5 h-5">
                <input type="hidden" name="watchlistId" value={wachtListId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button 
                  variant="link"
                  size="icon"
                  className="h-6 w-6 p-1 border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-out hover:duration-500 z-40"
                >
                  <Check />
                </Button>
              </form>
            ) : (
              <form action={addTowatchlist} className="w-5 h-5">
                <input type="hidden" name="movieId" value={movieId} />
                <input type="hidden" name="pathname" value={pathName} />
                <Button 
                  variant="link" 
                  size="icon" 
                  className="p-1 h-6 w-6 border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-out hover:duration-500 z-40"
                >
                  <Plus />
                </Button>
              </form>
            )}
            
            {
              like ? (
                <Button 
                  onClick={() => setLike(!like)} 
                  variant="link" 
                  size="icon" 
                  className="mt-1 ms-3 p-1 h-6 w-6 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-500"
                >
                  <ThumbsUp />
                </Button>
              ) : (
                <Button 
                  onClick={() => setLike(!like)} 
                  variant="link" 
                  size="icon" 
                  className="mt-1 ms-3 p-1 h-6 w-6 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-500"
                >
                  <ThumbsDown />
                </Button>
              )
            }
          </div>
         
          <Button 
            onClick={() => setOpen(true)} 
            variant="link" size="icon" 
            className="mt-2 me-4 pt-[2px] h-6 w-6 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-500"
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-x-2 items-center mx-2 mt-2">
          <p className="font-semibold text-[10px] text-[#46d369]">
            {random}% Match
          </p>
          <p className="font-normal border py-0 px-1 border-gray-400 text-[10px] text-gray-400">
            {age}+
          </p>
          <p className="font-normal border py-0 px-1 border-gray-400 text-[10px] text-gray-400">
            HD
          </p>
          <p className="font-normal text-[10px] text-gray-400">
            {time} h
          </p>
        </div>

        <p className="line-clamp-1 text-[10px] text-gray-200 pt-3 mx-2">
          {overview}
        </p>
      </div>

      <PlayVideoModal
        videoSource={videoSource}
        key={movieId}
        wachtListId={wachtListId}
        watchList={watchList}
        title={title}
        overview={overview}
        state={open}
        changeState={setOpen}
        age={age}
        duration={time}
        release={year}
        movieId={movieId}
      />
    </div>
  )
}