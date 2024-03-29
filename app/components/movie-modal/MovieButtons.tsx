"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, Play } from "lucide-react"
import { useState } from "react"
// import PlayVideoModal from "./PlayVideoModal"

interface iAppProps {
  overview: string
  videoSource: string
  age: number
  title: string
  releaseDate: number
  duration: number
  id: number
  movieId: number
  wachtListId: string
  watchList: boolean
  cast: string
  genre: string
  category: string
  imageString: string
}

export default function MovieButtons({
    age,
    duration,
    id,
    overview,
    releaseDate,
    title,
    videoSource,
    movieId,
    wachtListId,
    watchList,
    cast,
    genre,
    category,
    imageString
  }: iAppProps) {

  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button 
        onClick={() => setOpen(true)} 
        className=" text-base lg:text-lg font-medium w-18 h-8 lg:w-32 lg:h-12"
      >
        <Play className="h-4 w-4 lg:h-7 lg:w-7 text-black me-2 rounded-full fill-inherit" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-base lg:text-lg font-medium bg-neutral-700/80 hover:bg-white/30 text-white w-36 h-8 lg:w-44 lg:h-12 max-sm:mt-2 ms-0 min-[270px]:ms-2"
      >
        <InfoIcon className="mr-2 h-4 w-4 lg:h-7 lg:w-7" />More Info
      </Button>

      {/* <PlayVideoModal
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        videoSource={videoSource}
        movieId={movieId}
        wachtListId={wachtListId}
        watchList={watchList}
        cast={cast} 
        genre={genre}
        category={category}
        imageString={imageString}
      /> */}
    </div>
  )
}