"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, Play } from "lucide-react"
import { usePathname } from "next/navigation"
import Dialog from "../Dialog"
import Link from "next/link"

interface iAppProps {
  //id: number,
  imageString: string,
  videoSource:string,
  title: string,
  overview: string,
  category: string,
  cast: string,
  genres: string,
  age: number,
  release:  number,
  duration: number,
  watchList: boolean
  wachtListId: string,
  movieId: number,
}

export default function MovieButtons({
    //id,
    age,
    duration,
    overview,
    release,
    title,
    videoSource,
    imageString,
    cast,
    genres,
    // category,
    movieId,
    wachtListId,
    watchList,
  }: iAppProps) {

  const pathName = usePathname() 

  const onClose = () => {
    console.log("Closed")
  }

  return (
    <div className="flex items-center justify-start">
      <Dialog
        title={title}
        onClose={() => onClose()}
        key={movieId}
        imageString={imageString}
        videoSource={videoSource}
        // id={id} 
        age={age}
        duration={duration}
        overview={overview}
        release={release}
        cast={cast} 
        genres={genres} 
        // category={category} 
        movieId={movieId}
        wachtListId={wachtListId}
        watchList={watchList}
      />
        
      <Button 
        className="text-[3vw] sm:text-lg font-bold me-3 rounded-sm
        w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw] 
        h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]" 
      >
        <Link 
          href={`../../${pathName}?showDialog=${title}`} 
          className="flex items-center"
        >
          <Play className="h-[2vw] w-[2vw] text-black me-[0.75vw] rounded-full fill-inherit" /> Play
        </Link>
      </Button>

      <Button 
        className="text-[3vw] sm:text-lg font-medium rounded-sm bg-neutral-700/80 hover:bg-white/30 text-white
        w-[25vw] sm:w-[17vw] lg:w-[12vw] 
        h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]"
      >
        <Link 
          href={`../../${pathName}?showDialog=${title}`} 
          className="flex items-center"
        >
          <InfoIcon className="h-[3vw] sm:h-[2vw] w-[3vw] sm:w-[2vw] me-2" />More Info
        </Link>
      </Button>
    </div>
  )
}