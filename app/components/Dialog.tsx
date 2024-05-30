"use client"

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { PauseCircle, Play, Subtitles, Volume2, VolumeX, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'

const MovieInfo = dynamic(() => import("./info_controls/MovieInfo"));
const GenreList = dynamic(() => import("./info_controls/GenreList"));
const CastList = dynamic(() => import("./info_controls/CastList"));
const ActionWatchlist = dynamic(() => import("./button_controls/ActionWatchlist"));
const LikeDislikeButton = dynamic(() => import("./button_controls/LikeDislikeButton"));

type Props = {
  onClose: () => void,
  title: string,
  imageString: string,
  videoSource:string,
  overview: string,
  cast: string,
  genres: string,
  age: number,
  release:  number,
  duration: number,
  watchList: boolean
  watchlistId: string,
  movieId: number,
}

export default function Dialog({
  onClose,
  title,
  imageString,
  videoSource,
  overview,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  watchlistId,
  movieId,
}: Props) {

  const pathName = usePathname() //current URL, before query parameters
  const searchParams = useSearchParams() //access query parameters
  const showDialog = searchParams.get('showDialog') //Getting the value of the query parameter

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState<boolean>(false)
  const [muted, setMuted] = useState<boolean>(true)

  useEffect(() => {
    if (showDialog === title ) {
        dialogRef.current?.showModal() 
    } else {
        dialogRef.current?.close()
    }
  }, [showDialog])

  const closeDialog = () => {
    dialogRef.current?.close()
    onClose()
    document.body.classList.remove('no-scroll')
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      dialogRef.current?.close()
      onClose()
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handlePlayToggle = () => {
    if (videoRef.current !== undefined) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setPlaying(true)
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }

  // const handlePlayToggle = () => {
  //   const playPromise = videoRef.current.play();
    
  //   if (playPromise) {
  //     playPromise
  //       .then(() => {
  //         setPlaying(true);
  //       })
  //       .catch((error) => {
  //         console.error("Error during video play:", error);
  //         setPlaying(false); // Reset playing state if error occurs
  //       });
  //   }
  // }

  // useEffect(() => {
  //   if (playing && videoRef.current) {
  //     videoRef.current.play().catch((error) => {
  //       console.error("Error while playing video:", error);
  //     });
  //   } else if (videoRef.current) {
  //     videoRef.current.pause();
  //   }
  // }, [playing]);

  // const playPromise = videoRef.current?.play();

  // if (playPromise) {
  //   playPromise.catch((error) => {
  //     console.error("Error in playing video:", error);
  //   });
  // }



  // const isPlaying = videoRef.current  && !videoRef.current.pause && !videoRef.current.ended 
  //   && videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;

  // if (!isPlaying) {
  //   videoRef.current.play();
  // }
  

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const dialog: JSX.Element | null = showDialog === title
    ? (
        <dialog
          ref={dialogRef}
          className="fixed z-50 rounded-sm bg-[#181818] backdrop:bg-black/80 pb-5 sm:max-w-[850px] cursor-context-menu overflow-css"
          aria-label={`Open video dialog for ${title}`}
        >
          <div className="flex flex-col relative">
            <div className='absolute right-12'>
              <Link
                href={pathName}
                onClick={closeDialog}
                className="fixed mt-5 mb-2 p-1 text-white cursor-pointer rounded-full border-none outline-none bg-bg_main hover:brightness-150 transition-all ease-in"
                scroll={false}
              >
                <X className='size-6' />
              </Link>
            </div>
            <div className='absolute left-3 top-3'>
              <Image 
                src="https://utfs.io/f/c5583de1-747d-42e4-84d7-e52d3274dc9a-hru0oc.webp"
                alt="logo"
                width={20}
                height={20}
                loading='lazy'
              />
            </div>
            <div className='relative'>
              <video
                poster={imageString}
                src={videoSource}
                ref={videoRef}
                aria-label={`${title}-video player`}
                muted
                loop
                preload="auto"
                playsInline
                className="absolute top-0 left-0 -z-20 w-full h-[50vw] sm:h-[40vw] md:h-[30vw] object-fill brightness-75"
              />
              <div 
                className="absolute w-full top-[50vw] sm:top-[40vw] md:top-[30vw] bg-none -z-10 shadow-[0_15px_50px_70px_rgba(0,0,0,1)] shadow-[#141414]  transform"
              ></div>
            </div>
            <div className='space-y-10 sm:space-y-20'>
               {/* button-controls */}
              <div className='flex justify-between items-center mt-[50vw] sm:mt-[40vw] md:mt-[25vw] px-5 sm:px-10'>
                <div className='flex space-x-3 '>
                  <Button
                    onClick={handlePlayToggle}
                    className="z-50 sm:text-lg font-extrabold bg-white rounded-sm gap-x-2 hover:brightness-125 hover:cursor-pointer transition-all
                    w-[23vw] sm:w-[14vw] md:w-[12vw] lg:w-[9vw] h-[7vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw] xl:h-[2.5vw]"
                  >
                    { playing ? <PauseCircle className="" /> : <Play className=" text-black fill-inherit" />}
                    { playing ? "Pause" : "Play"}
                  </Button>
                  <div className='h-[7vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw] xl:h-[2.5vw]'>
                    <ActionWatchlist 
                      watchList={watchList}
                      watchlistId={watchlistId}
                      movieId={movieId}
                      actionStyle="size-[7vw] sm:size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2.5vw]"                 
                    />
                  </div>
                  <LikeDislikeButton
                    likeBtnStyle="size-[7vw] sm:size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2.5vw]"
                  />
                </div>
                <Button
                  onClick={handleMuteToggle}
                  variant="link"
                  size="icon"
                  className="size-[7vw] sm:size-[5vw] md:size-[4vw] lg:size-[3vw] xl:size-[2.5vw] z-50 text-lg font-medium
                  bg-neutral-800 bg-opacity-50 border-2 border-zinc-500 rounded-full hover:brightness-150 hover:ease-in transition-all"
                >
                  {
                    muted
                    ? <VolumeX className="text-zinc-500"/>
                    : <Volume2 className=" text-zinc-500"/>
                  }
                </Button>
              </div>

              {/* info-controls */}
              <div className="flex flex-col px-5 sm:px-10">
                <div className='flex items-center space-x-2'>
                  <div className="flex items-center space-x-2 justify-start ">
                    <MovieInfo age={age} fontAge="leading-5" fontHD="text-[11px]"  />
                  </div>
                  <div className='relative '>
                    <Subtitles className="text-gray-400 size-5 subtitles" />
                    <p
                      className='absolute hidden w-[26em] p-1 -top-8 sm:-top-12 -left-[15em] sm:-left-[10em] max-sm:text-[0.5em]
                    bg-zinc-200 text-center font-semibold rounded-sm ease-in transition-all'
                    >
                      Subtitles for the deaf and hard of hearing are available
                      <span className='absolute -z-10 top-[1em] left-[15em] sm:left-[10em] sm:top-5 size-4 rotate-45 bg-zinc-200'></span>
                    </p>
                  </div>
                </div>

                <div className="flex items-stretch sm:items-center justify-between space-x-1 mt-1">
                  <div className='flex sm:space-x-2 items-start max-sm:flex-col'>
                    <div className='flex space-x-2 max-[380px]:flex-wrap'>
                      <div className="flex items-center max-sm:text-xs h-6 text-whiteColor_200">
                        {duration}h
                      </div>
                      <div className="text-whiteColor_200 font-thin max-sm:text-xs">
                        {release}
                      </div>
                    </div>
                    <div className='flex items-center max-sm:flex-wrap max-sm:pt-2 text-xs sm:text-sm lowercase'>
                       <GenreList genres={genres}>,</GenreList>
                    </div>
                  </div>
                  
                  <div className='flex flex-col items-start'>
                    <div className='flex items-center max-sm:flex-wrap '>
                      <h2 className="text-xs sm:text-sm text-[#777]">Casts: </h2>
                      <CastList cast={cast}/>
                    </div>
                    <div className='flex items-center space-x-1 max-sm:flex-wrap'>
                      <h2 className="text-xs sm:text-sm text-[#777]">Genres: </h2>
                      <GenreList genres={genres} genreDialogStyle={true}>,</GenreList>
                    </div>
                  </div>
                </div>

                <div className="text-white mt-5 lg:line-clamp-3 lg:hover:line-clamp-6 max-sm:text-xs sm:text-sm text-justify hover:ease-in transition-all cursor-pointer">
                  {overview}
                </div>
              </div>
            </div>
              
          </div>
        </dialog>
    ) : null

    return dialog
}