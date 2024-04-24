"use client"

import { ChevronDown, Circle, Play } from "lucide-react"
import Dialog from "../Dialog"
import ActionWatchlist from "../button_controls/ActionWatchlist"
import ShowDialogButton from "../button_controls/ShowDialogButton"
import LikeDislikeButton from "../button_controls/LikeDislikeButton"
import MovieInfo from "../info_controls/MovieInfo"
import GenreList from "../info_controls/GenreList"

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

export function PreviewModalInfo({
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

  const onClose = () => {
    console.log("Closed")
  }

  return (
    <>
      <Dialog
        onClose={() => onClose()}
        key={movieId}
        title={title}
        videoSource={videoSource}
        imageString={imageString}
        overview={overview}
        cast={cast}
        genres={genres}
        age={age}
        release={release}
        duration={duration}
        movieId={movieId}
        watchlistId={watchlistId}
        watchList={watchList}
      />

      <div className="absolute w-full min-h-[5rem] group-hover:z-[9999] pb-2 mt-20 sm:mt-28 bg-[#141414] rounded-b-sm shadow-md shadow-black/90">
        <h1 className="absolute font-bold text-[1em] line-clamp-1 left-3 -top-[1.5em] [text-shadow:_2px_2px_7px_rgb(0_0_0_/_30%)]" >
          {title}
        </h1>

        {/* button-controls */}
        <div className="flex justify-between items-center p-1 sm:p-3">
          <div className="flex items-center space-x-1">
            <ShowDialogButton title={title} buttonStyle={"h-6 w-6"}>
              <Play className="p-1 text-black bg-white rounded-full fill-inherit hover:brightness-75 hover:ease-in" />
            </ShowDialogButton>
            <div className="w-6 h-6">
              <ActionWatchlist 
                watchList={watchList}
                watchlistId={watchlistId}
                movieId={movieId}
                actionStyle={'w-6 h-6 p-1'}                      
              />
            </div>
            <LikeDislikeButton likeBtnStyle={'h-6 w-6 p-[0.3rem]'} />
          </div>
          <ShowDialogButton title={title} buttonStyle={"h-6 w-6"}>
            <ChevronDown className="p-[2px] border border-[#ffffffb3] bg-[#202020] rounded-full hover:brightness-125 hover:ease-in" />
          </ShowDialogButton>
        </div>

        {/* info-controls */}
        <div className="flex gap-x-2 items-center mx-2 mt-2 text-[10px]">
          <MovieInfo age={age} fontHD={'text-[8px]'}  /> 
        </div>
        
        <div className='flex items-center space-x-1 pt-3 px-2 text-[10px]'>
          <GenreList genres={genres}>
            <Circle className="fill-gray-500 text-gray-500 w-[3px] h-[3px] ms-1"/>
          </GenreList>
        </div>
      </div>
    </>
  )
}