"use client"

import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Check, Plus, Play, ChevronDown, Circle } from "lucide-react"
import { useState } from "react"
import { addTowatchlist, deleteFromWatchlist } from "../../action"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Dialog from "../Dialog"

interface iAppProps {
  imageString: string
  videoSource: string
  title: string
  overview: string
  //category: string
  cast: string
  genres:string
  age: number
  release:number
  duration:number
  watchList: boolean
  wachtListId: string
  movieId: number
}

export function PreviewModalInfo({
  //id,
  imageString,
  videoSource,
  title,
  overview,
  //category,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  wachtListId,
  movieId
  }: iAppProps) {

  const [like, setLike] = useState<boolean>(true)
  const pathName = usePathname() 
  const genre = genres.split(",")

  const onClose = () => {
    console.log("Closed")
  }

  return (
    <div>
      <Dialog
        onClose={() => onClose()}
        key={movieId}
        title={title}
        videoSource={videoSource} 
        imageString={imageString} 
        overview={overview} 
        // category={category} 
        cast={cast} 
        genres={genres} 
        age={age} 
        release={release} 
        duration={duration} 
        movieId={movieId} 
        wachtListId={wachtListId} 
        watchList={watchList}
      />

      <div className="absolute w-full min-h-[5rem] z-[9999] pb-2 mt-24 md:mt-28 bg-[#141414] rounded-b-sm shadow-md shadow-black/90">
        <h1 className="absolute font-bold text-[1em] line-clamp-1 left-3 -top-[1.5em] [text-shadow:_0_1px_0_rgb(0_0_0_/_30%)]" >
          {title}
        </h1>
        <div className="flex justify-between items-center p-1 sm:p-3">
          <div className="flex items-center space-x-1">
            <Button
              variant="link"
              size="icon"
              className="h-6 w-6 hover:brightness-75 hover:ease-in "
            >
              <Link href={`../../${pathName}?showDialog=${title}`}>
                <Play className="p-1 text-black bg-white rounded-full fill-inherit" />
              </Link>
            </Button>
            <div className="w-6 h-6">
              {watchList ? (
                <form action={deleteFromWatchlist}>
                  <input type="hidden" name="watchlistId" value={wachtListId} />
                  <input type="hidden" name="pathname" value={pathName} />
                  <Button
                    size="icon"
                    variant="link"
                    className="w-6 h-6 p-1 border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in"
                  > 
                    <Check />
                  </Button>
                </form>
              ) : (
                <form action={addTowatchlist} >
                  <input type="hidden" name="movieId" value={movieId} />
                  <input type="hidden" name="pathname" value={pathName} />
                  <Button
                    size="icon"
                    variant="link"
                    className="w-6 h-6 p-1 border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in"
                  >
                    <Plus />
                  </Button>
                </form>
              )}
            </div>
            
            {like ? (
              <Button 
                onClick={() => setLike(!like)} 
                variant="link" 
                size="icon" 
                className="h-6 w-6 p-[0.3rem] bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in"
              >
                <ThumbsUp />
              </Button>
              ) : (
              <Button 
                onClick={() => setLike(!like)} 
                variant="link" 
                size="icon" 
                className=" h-6 w-6 p-[0.3rem] bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in"
              >
                <ThumbsDown />
              </Button>
              )
            }
          </div>

          <Button
            size="icon"
            variant="link"
            className="h-6 w-6 border rounded-full border-[#ffffffb3] bg-[#202020] opacity-70 hover:brightness-150"
          >
            <Link href={`../../${pathName}?showDialog=${title}`} >
              <ChevronDown className="p-1" />
            </Link>
          </Button>
        </div>

        <div className="flex gap-x-2 items-center mx-2 mt-2">
          <div className="font-semibold text-[10px] text-[#46d369]">
            {/* {Math.floor(Math.random()*50)+45}% Match */}
            100% Match
          </div>
          <div className="flex justify-center border py-0 px-1 border-gray-400 text-[10px] w-7 h-4 text-gray-400">
            {age}+
          </div>
          <div className="text-[10px] text-gray-400">
            {duration} h
          </div>
          <div className="border rounded-sm py-0 px-1 border-gray-400 text-[8px] text-gray-400">
            HD
          </div>  
        </div>
        
        <div className='flex items-center space-x-1 pt-3 px-2'>
          {genre.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="hover:cursor-pointer hover:underline text-zinc-200 text-[10px] pr-1">
                {item}
              </div>
              {index !== genre.length - 1 && 
                <div  className='text-zinc-200'>
                  <Circle className="fill-gray-500 text-gray-500 w-[3px] h-[3px]"/>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
   
  )
}