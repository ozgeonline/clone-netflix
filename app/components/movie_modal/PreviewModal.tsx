"use client"

import { PreviewModalInfo } from "./PreviewModalInfo"
import ImageCard from "../../../components/ImageCard"
import { PlayCircle  } from 'lucide-react'
import ShowDialogButton from "../../../components/button_controls/ShowDialogButton"

interface PreviewModalProps {
  imageString: string
  videoSource: string
  title: string
  overview: string
  cast: string
  genres:string
  age: number
  release:number
  duration:number
  watchList: boolean
  watchlistId: string
  movieId: number
}

export default function PreviewModal({
  imageString,
  videoSource,
  title,
  overview,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  watchlistId,
  movieId
}: PreviewModalProps) {

  return (
    <div className="group flex items-center justify-center">
      <div className="relative flex rounded-sm cursor-pointer h-[17vw] sm:h-[8.3vw] w-[30vw] sm:w-[14.8vw] min-w-[150px] min-h-[85px]">
        <ImageCard
          imageString={imageString}
          imageText={`${title} - ${movieId}.movie poster`}
          imageStyle={`rounded-sm max-lg:brightness-75`}
        />
        <ShowDialogButton
          title={title}
          buttonStyle={"absolute z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"}
        >
           <PlayCircle className="invisible max-lg:visible text-white w-10 h-10"/>
        </ShowDialogButton>
      </div>
      <div
        className="absolute group-hover:z-50 invisible group-hover:lg:visible group-hover:lg:scale-150 h-[7rem] w-[14rem] -top-10 transition-transform ease-in shadow-md shadow-black/90 cursor-pointer"
      >
        <ImageCard 
          imageString={imageString}
          imageText={`${title} - ${movieId}.movie big-poster`}
          imageStyle={`rounded-t-sm`}
        />
        <PreviewModalInfo
          key={movieId}
          imageString={imageString}
          videoSource={videoSource}
          title={title}
          overview={overview}
          cast={cast}
          genres={genres}
          age={age}
          release={release}
          duration={duration}
          watchList={watchList}
          watchlistId={watchlistId}
          movieId={movieId}
        />
      </div>
    </div>
  )
}