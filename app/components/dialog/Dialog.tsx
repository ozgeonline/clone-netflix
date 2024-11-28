"use client"

import { redirect, usePathname, useSearchParams} from 'next/navigation'
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle} from 'react'
import { Button } from '@/components/ui/button'
import { PauseCircle, Play, Subtitles, Volume2, VolumeX, X } from 'lucide-react'
import { useVideoContext } from '../movie__modal/VideoContext'
import VideoModal  from '../movie__modal/VideoModal'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import "./dialog.css"
import { MovieProps } from "@/app/src/types/props";

const MovieInfo = dynamic(() => import("../card_modals/card-info__controls/MovieInfo"));
const GenreList = dynamic(() => import("../card_modals/card-info__controls/GenreList"));
const CastList = dynamic(() => import("../card_modals/card-info__controls/CastList"));
const ActionWatchlist = dynamic(() => import("../card_modals/card-button__controls/ActionWatchlist"));
const LikeDislikeButton = dynamic(() => import("../card_modals/card-button__controls/LikeDislikeButton"));

interface dialogProps extends MovieProps {
  onClose: () => void,
}

const Dialog =(
  {
    onClose,
    ...movieProps
  }:dialogProps) => {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const showDialog = searchParams.get('showDialog');

  const { 
    isActive,
    continueWatchingVideoElement,
    savedTime,
    handleVideoTimeUpdate
  } = useVideoContext();

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  //console.log(`Dialog Component/ Ref/ID: ${movieProps.movieId}:`,continueWatchingVideoElement.current)

  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(true);

  isActive == true;

  useEffect(() => {
    const handleDialogOpen = () => {
      if (showDialog === movieProps.title) {
        //console.log("Setting dialog as open");
        dialogRef.current?.showModal();
        openDialog();

        if (continueWatchingVideoElement.current) {
          continueWatchingVideoElement.current.pause();
          setPlaying(false);
        }
        isActive === false;

      } else {
        //console.log("Setting dialog as closed"); 
        dialogRef.current?.close();
        closeDialog()
        isActive === true;
      }
    };
    handleDialogOpen();
  
    return () => {
      if (!dialogRef.current) {
        dialogRef.current?.close()
      };
    };
  }, [showDialog, movieProps.title]);

  const closeDialog = () => {
    // if (continueWatchingVideoElement.current) {
    //   const currentTime = continueWatchingVideoElement.current.currentTime;
    //   handleVideoTimeUpdate(movieProps.movieId, currentTime); // Update context with current time
    // }
    //console.log("closeDialog()")
    dialogRef.current?.close()
    setPlaying(false)
   

    if(dialogRef.current?.close) {
      //console.log("Close Dialog")
      onClose()
      // redirect(pathName)
    }
  }

  const openDialog = () => {
    //console.log("openDialog")
    dialogRef.current?.showModal();
  }

  
  
  
  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     dialogRef.current &&
  //     !dialogRef.current.contains(event.target as Node) &&
  //     (event.target as HTMLElement).dataset.dialogTrigger !== title
  //   ) {
  //     // setOpenDialog(false);
  //   }
  // };

  // useEffect(() => {
  //   if (open) {
  //     document.addEventListener('click', handleClickOutside);
  //   } else {
  //     document.removeEventListener('click', handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [open]);



  const handlePlayToggle = () => {
    playing==false
    if (continueWatchingVideoElement.current) {
      // setPlaying(false)
      
      if (continueWatchingVideoElement.current?.paused) {
        continueWatchingVideoElement.current?.play()
        setPlaying(true)
       
      } else {
        continueWatchingVideoElement.current?.pause()
        setPlaying(false)
      }
    }
  }
  
  const handleMuteToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
  //  event.stopPropagation();
    if (continueWatchingVideoElement.current) {
      continueWatchingVideoElement.current.muted = !muted
      setMuted(!muted)
    }
  }

  //console.log("isOpen",isOpen)
  const dialog: JSX.Element | null = showDialog === movieProps.title
    ? (
        <dialog
          ref={dialogRef}
          className="dialog-wrapper overflow-css z-50 backdrop:bg-black/50"
          aria-label={`Open video dialog for ${movieProps.title}`}
        >
          <div className="flex flex-col relative w-full h-full">
            <div className='absolute right-12'>
              <Link
                href={pathName}
                onClick={closeDialog}
                className="bg-main-dark close-btn-style"
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
            <div className='w-auto h-auto'>
              <VideoModal
              // videoModalRef={currentVideoRef} 
              ref={continueWatchingVideoElement}
              enableControls={false}
              enableLoop={false}
              enablePlay={true}
              enableAutoPlay={false}
              enableTimeUpdate={true}
              // enableLoadedMetadata={false}
              imageString={movieProps.imageString}
              source={movieProps.videoSource}
              alt={`${movieProps.title}-video player`}
              videoStyle=" -z-20 absolute w-full h-[55vw] sm:h-[45vw] md:h-[30vw] object-fill brightness-75"
              id={movieProps.movieId}           />
            </div>
            <div className='space-y-10 sm:space-y-20'>
              
              {/* button-controls */}
              <div className='flex justify-between items-center mt-[45vw] sm:mt-[35vw] md:mt-[25vw] px-5 sm:px-10'>
                <div className='flex space-x-2'>
                  <Button
                    onClick={handlePlayToggle}
                    className="z-50 dialog-playButton"
                  >
                     {playing ? <PauseCircle /> :  <Play className=" text-black fill-inherit" />}
                     {playing ? "Pause" :  "Play"}
                  </Button>
                  <>
                    <ActionWatchlist 
                    watchList={movieProps.watchList}
                    watchlistId={movieProps.watchlistId}
                    movieId={movieProps.movieId}
                    actionStyle="dialog-circleButton-size"     />
                  </>
                  <div onClick={(e) => e.stopPropagation()}>
                    <LikeDislikeButton likeBtnStyle="dialog-circleButton-size" />
                  </div>
                </div>
                <div className='h-full'>
                  <button
                    onClick={handleMuteToggle}
                    className="dialog-circleButton-size dialog-muteButton z-50 bg-opacity-50"
                  >
                    {
                      muted
                      ? <VolumeX className="text-zinc-500"/>
                      : <Volume2 className=" text-zinc-500"/>
                    }
                  </button>
                </div>
              </div>

              {/* info-controls */}
              <div className="flex flex-col px-5 sm:px-10">
                <div className='flex items-center space-x-2'>
                  <div className="flex items-center space-x-2 justify-start ">
                    <MovieInfo 
                      age={movieProps.age} 
                      fontAge="leading-5" 
                      fontHD="text-[11px] h-6" 
                    />
                  </div>
                  <div className='relative'>
                    <Subtitles className="subtitles" />
                    <p>
                      Subtitles for the deaf and hard of hearing are available
                      <span className='-z-10'></span>
                    </p>
                  </div>
                </div>

                <div className="flex items-stretch sm:items-center justify-between space-x-1 mt-1">
                  <div className='flex max-lg:flex-col lg:space-x-3 items-start xl:items-center'>
                    <div className='flex items-center space-x-2 max-[380px]:flex-wrap max-[380px]:flex-col max-[380px]:items-start max-[380px]:space-x-0'>
                      <div className="flex items-center max-sm:text-xs h-6 text-main-white_300">
                        {movieProps.duration}h
                      </div>
                      <div className="text-main-white_300 font-thin max-sm:text-xs">
                        {movieProps.release}
                      </div>
                    </div>
                    <div className='flex items-center max-lg:flex-wrap max-sm:pt-2 text-xs sm:text-sm lowercase'>
                      <GenreList 
                        genres={movieProps.genres}
                      >,</GenreList>
                    </div>
                  </div>
                  
                  <div className='flex flex-col items-start max-[380px]:space-y-2 max-[380px]:ms-3'>
                    <div className='flex items-center max-sm:flex-wrap '>
                      <h2 className="text-xs sm:text-sm text-[#777]">Casts: </h2>
                      <CastList cast={movieProps.cast}/>
                    </div>
                    <div className='flex items-center space-x-1 max-sm:flex-wrap'>
                      <h2 className="text-xs sm:text-sm text-[#777]">Genres: </h2>
                      <GenreList 
                        genres={movieProps.genres} 
                        genreDialogStyle={true} 
                        genreMargin="ms-2"
                      >,</GenreList>
                    </div>
                  </div>
                </div>

                <div className="dialog-overview">
                  {movieProps.overview}
                </div>
              </div>
            </div>
          </div>
        </dialog>
    ) : null

    return dialog
}

export default Dialog;