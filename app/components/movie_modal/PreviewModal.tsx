"use client"

import { PreviewModalInfo } from "./PreviewModalInfo"
import ImageCard from "../modals/image_modal/ImageCard"
import { PlayCircle  } from 'lucide-react'
import ShowDialogButton from "../button_controls/ShowDialogButton"

interface PreviewModalProps {
  id:number
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
  imageWrapperStyle: string
  imageStyle: string
}

export default function PreviewModal({
  id,
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
  movieId,
  imageWrapperStyle,
  imageStyle
}: PreviewModalProps) {
  // xl:w-[14.375rem]
  return (
    <div className="group group-hover:-z-50 ">
      <div className={`${imageWrapperStyle} relative rounded-sm cursor-pointer `}> 
        <ImageCard
          imageString={imageString}
          imageText={`${title}-${id}.movie poster`}
          imageStyle={imageStyle}
        />
        
        <ShowDialogButton
          title={title}
          buttonStyle={"absolute z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"}
        >
           <PlayCircle className="invisible max-xl:visible text-white w-10 h-10"/>
        </ShowDialogButton>
      </div>
      <div
        className="absolute group-hover:z-50 z-0 invisible group-hover:xl:visible group-hover:lg:scale-150 h-[7rem] w-[14rem] -top-10 transition-transform ease-in shadow-md shadow-black/90 cursor-pointer"
      >
        <ImageCard 
          imageString={imageString}
          imageText={`${title}-${id}.movie big-poster`}
          imageStyle={`rounded-t-sm`}
        />
        {/* <img src={imageString}/> */}
        <PreviewModalInfo
          key={id}
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