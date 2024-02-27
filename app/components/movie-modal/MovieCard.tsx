"use client"

import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Check, Plus, Play, ChevronDown } from "lucide-react"
import PlayVideoModal from "./PlayVideoModal"
import { useState } from "react"
import { addTowatchlist, deleteFromWatchlist } from "../../action"
import { usePathname } from "next/navigation"
import Link from "next/link"

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
  cast: string
  genre: string
  category: string
  imageString: string
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
    time,
    cast,
    genre,
    category,
    imageString
  }: iAppProps) {

  const [open, setOpen] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(true)
  const pathName = usePathname()

  const random = Math.floor(Math.random()*50)+45

  return (
    <div 
      className="absolute top-0 pt-5 left-0 w-full z-50 bg-[#141414] rounded-b-sm shadow-md shadow-black/90 hover:transition-transform hover:duration-500">
      <h1 className="font-bold text-lg line-clamp-1 left-3 top-28   [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]">
        {title}
      </h1>
      <div className="">
        <div className="flex flex-row justify-between">
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
            
            { like ? (
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
         
          {/* <Button 
            onClick={() => setOpen(true)} 
            variant="link" size="icon" 
            className="mt-2 me-2 h-6 w-6 bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-out hover:duration-500"
          >
            <ChevronDown className="h-5 w-5" />
          </Button> */}
          <Link
            href={`../../${pathName}?showDialog=y`}
          >
            <button onClick={window.close}>
              <ChevronDown className="h-5 w-5" />
            </button>
          </Link>
        </div>

        <div className="flex gap-x-2 items-center mx-2 mt-2">
          <div className="font-semibold text-[10px] text-[#46d369]">
            {random}% Match
          </div>
          <div className="font-normal border py-0 px-1 border-gray-400 text-[10px] text-gray-400">
            {age}+
          </div>
          <div className="font-normal border py-0 px-1 border-gray-400 text-[10px] text-gray-400">
            HD
          </div>
          <div className="font-normal text-[10px] text-gray-400">
            {time} h
          </div>
        </div>

        <div className="line-clamp-1 text-[10px] text-gray-200 pt-3 mx-2">
          {overview}
        </div>
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
        cast={cast}
        genre={genre}
        category={category}
        imageString={imageString}
      />
    </div>
  )
}