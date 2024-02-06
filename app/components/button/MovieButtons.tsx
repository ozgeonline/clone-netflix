"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, PlayCircle } from "lucide-react"
import { useState } from "react"
import PlayVideoModal from "../PlayVideoModal"

interface iAppProps {
  overview: string;
  videoSource: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
  movieId: number
  wachtListId: string
  watchList: boolean
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
  watchList
}: iAppProps) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium w-32 h-12">
        <PlayCircle className="mr-2 h-7 w-7" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-neutral-700/80 hover:bg-white/30 text-white w-44 h-12"
      >
        <InfoIcon className="mr-2 h-7 w-7" />More Info
      </Button>

      <PlayVideoModal
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
      />
    </div>
  )
}