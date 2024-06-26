"use client"

import { PlayCircle  } from 'lucide-react'
import { PreviewModalInfo } from "./PreviewModalInfo"
import dynamic from 'next/dynamic';

const ImageCard = dynamic(() => import('../modals/image_modal/ImageCard'));
const ShowDialogButton = dynamic(() => import('../button_controls/ShowDialogButton'));

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
  imageCardWrapper?: boolean
  top10Wrapper?: boolean
  imageStyle?: string
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
  imageCardWrapper,
  top10Wrapper,
  imageStyle
}: PreviewModalProps) {
  return (
    <div className="group">
      <div 
        className={`
          relative rounded-sm cursor-pointer slide 
          ${imageCardWrapper && " h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"}
          ${top10Wrapper && "h-full w-[21vw] sm:w-[15vw] md:w-[12vw] lg:w-[9vw] xl:w-[7.5vw]"}
        `}
      > 
        <ImageCard
          imageString={imageString}
          imageText={`${title}-${id}.movie poster `}
          imageStyle={`${imageStyle} max-lg:brightness-75 h-full w-full `}
        />
        
        <ShowDialogButton
          title={title}
          buttonStyle="absolute z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 outline-none"
        >
           <PlayCircle className="invisible max-xl:visible text-zinc-300 size-8 outline-none " aria-label={title}/>
           <span className="hidden">Play Button</span>
        </ShowDialogButton>
      </div>
      <div
        className="invisible group-hover:z-50 group-hover:xl:visible group-hover:lg:scale-150 absolute h-[7rem] w-[14rem] inset-x-10 -top-10 transition-transform group-hover:duration-400 ease-in shadow-md shadow-black/90 cursor-pointer"
      >
        <ImageCard 
          imageString={imageString}
          imageText={`${title}-${id}.movie big-poster`}
          imageStyle="rounded-t-sm w-full h-full"
        />
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