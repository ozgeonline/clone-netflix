"use client"

import { ChevronDown, Circle, Play } from "lucide-react"
import dynamic from 'next/dynamic';
import { MovieProps } from "@/app/src/types/props";
import { useCardContext } from "../CardContext";

const ActionWatchlist = dynamic(() => import('../card-button__controls/ActionWatchlist'));
const ShowDialogButton = dynamic(() => import('../card-button__controls/ShowDialogButton'));
const LikeDislikeButton = dynamic(() => import('../card-button__controls/LikeDislikeButton'));
const MovieInfo = dynamic(() => import('../card-info__controls/MovieInfo'));
const GenreList = dynamic(() => import('../card-info__controls/GenreList'));

interface PreviewModalProps extends MovieProps {
  //
  infohover:string
}



export function PreviewCard_Info({...movieProps}: PreviewModalProps) {
  return (
    <>
      <div 
        className={`
          ${movieProps.infohover} 
          
          w-full absolute left-0 right-0 pb-2 min-h-[5rem] rounded-b-sm bg-main-dark shadow-md shadow-black/90`}
        aria-label="preview card info">
        <h1 className="absolute font-bold text-[1em] line-clamp-1 left-3 -top-[1.5em] [text-shadow:_2px_2px_7px_rgb(0_0_0_/_30%)]" >
          {movieProps.title}
        </h1>

        {/* button-controls */}
        <div className="flex items-center p-1 sm:p-3">
          <ShowDialogButton
            buttonStyle="size-6 me-2"
            // key={movieProps.movieId}
            {...movieProps}
          >
            <Play className="p-1 text-black bg-white rounded-full fill-inherit hover:brightness-75 hover:ease-in" />
          </ShowDialogButton>
          <div className="size-6 me-2">
            <ActionWatchlist 
              watchList={movieProps.watchList}
              watchlistId={movieProps.watchlistId}
              movieId={movieProps.movieId}
              actionStyle="p-1 h-6 w-6" />
          </div>
          <LikeDislikeButton likeBtnStyle="h-6 w-6 p-[0.3rem]" />
          <ShowDialogButton
            buttonStyle={"size-6 ml-auto"}
            // key={movieProps.movieId}
            {...movieProps} 
          >
            <ChevronDown className="p-[2px] border border-main-white_100 bg-[#202020] rounded-full hover:brightness-125 hover:ease-in" />
          </ShowDialogButton>
        </div>

        {/* info-controls */}
        <div className="flex gap-x-2 items-center mx-2 mt-2 text-[10px]">
          <MovieInfo 
            age={movieProps.age}
            fontHD="text-[8px]"
          /> 
        </div>
        <div className='flex flex-wrap items-center space-x-1 pt-3 px-2'>
          <GenreList 
            genres={movieProps.genres} 
            genreInfoStyle={true}
          >
            <Circle className="fill-gray-500 text-gray-500 size-[3px] ms-1"/>
          </GenreList>
        </div>
      </div>
    </>
  )
}