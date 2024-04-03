"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, Play } from "lucide-react"
import { usePathname } from "next/navigation"
import Dialog from "../Dialog"
import Link from "next/link"

interface iAppProps {
  // id: number,
  // imageString: string,
  // videoSource:string,
  title: string,
  // overview: string,
  // cast: string,
  // genres: string,
  // age: number,
  // release:  number,
  // duration: number,
  // watchList: boolean
  // wachtListId: string,
  // movieId: number,
   //category: string,
}

export default function MovieButtons({
    // id,
    // age,
    // duration,
    // overview,
    // release,
    title,
    // videoSource,
    // imageString,
    // cast,
    // genres,
    // movieId,
    // wachtListId,
    // watchList,
    // category,
  }: iAppProps) {

  const pathName = usePathname() 

  // const onClose = () => {
  //   console.log("Closed")
  // }

  return (
    <div className="flex items-center justify-start">
      {/* <Dialog
        onClose={() => onClose()}
        key={id}
        imageString={imageString}
        videoSource={videoSource}
        title={title}
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
      /> */}
        
      <Link 
        href={`${pathName}?showDialog=${title}`} 
        className="text-[3vw] sm:text-lg font-bold me-3 rounded-sm flex items-center
        w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw] 
        h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]" 
       
      >
      
          <Play className="h-[2vw] w-[2vw] text-black me-[0.75vw] rounded-full fill-inherit" /> Play
       
      </Link>

      <Link 
      href={`${pathName}?showDialog=${title}`} 
        className="text-[3vw] sm:text-lg font-medium rounded-sm bg-neutral-700/80 hover:bg-white/30 text-white flex items-center
        w-[25vw] sm:w-[17vw] lg:w-[12vw] 
        h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]"
        
      >
     
          <InfoIcon className="h-[3vw] sm:h-[2vw] w-[3vw] sm:w-[2vw] me-2" />More Info

      </Link>
    </div>
  )
}