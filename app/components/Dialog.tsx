"use client"

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { Check, PauseCircle, Play, Plus, Subtitles, ThumbsDown, ThumbsUp, Volume2, VolumeX, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { addTowatchlist, deleteFromWatchlist } from "../action"

type Props = {
  onClose: () => void,
  title: string,
  imageString: string,
  videoSource:string,
  overview: string,
  // category: string,
  cast: string,
  genres: string,
  age: number,
  release:  number,
  duration: number,
  watchList: boolean
  wachtListId: string,
  movieId: number,
  // children: React.ReactNode,
}

export default function Dialog({
  onClose,
  title,
  imageString,
  videoSource,
  overview,
  // category: string,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  wachtListId,
  movieId,
}: Props) {

  const pathName = usePathname() //current URL, before query parameters
  const searchParams = useSearchParams() //access query parameters
  const showDialog = searchParams.get('showDialog') //Getting the value of the query parameter

  const dialogRef = useRef<null | HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [playing, setPlaying] = useState<boolean>(false)
  const [like, setLike] = useState<boolean>(true)
  const [muted, setMuted] = useState<boolean>(true)

  const casts = cast.split(",")
  const genre = genres.split(",")

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
  }

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setPlaying(true)
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }

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
          className="fixed z-10 rounded-sm bg-[#181818] backdrop:bg-black/80 w-screen justify-center items-center h-auto pb-20 sm:max-w-[850px]  cursor-context-menu overflow-css"
        >
          <div className="flex flex-col relative">
            <div className='absolute right-16'>
              <div className="fixed mt-5">
                <Button
                  onClick={closeDialog}
                  className="mb-2 cursor-pointer rounded-full border-none bg-[#141414] brightness-150 text-white hover:bg-[#181818] hover:brightness-150"
                  size='icon'
                >
                  <Link href={pathName} >
                    <X className='w-6 h-6'/>
                  </Link>
                </Button>
              </div>
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
                className="absolute top-0 left-0 -z-20 w-full h-[50vw] sm:h-[40vw] md:h-[30vw] object-cover brightness-75"
              />
              <div className="absolute w-full top-[50vw] sm:top-[40vw] md:top-[30vw] bg-none -z-10 shadow-[0_15px_50px_70px_rgba(0,0,0,1)] shadow-[#141414]  transform">
              </div>
            </div>
            <div className='space-y-10 sm:space-y-20'>
              <div className='flex justify-between items-center mt-[50vw] sm:mt-[40vw] md:mt-[25vw] px-5 sm:px-10'>
                <div className='flex space-x-3 '>
                  <Button
                    onClick={handlePlayToggle}
                    className="z-50 sm:text-lg font-extrabold bg-white rounded-sm gap-x-2 hover:brightness-125 hover:cursor-pointer transition-all
                    w-[23vw] sm:w-[14vw] md:w-[12vw] lg:w-[9vw] h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw]"
                  >
                    { playing ? <PauseCircle className="w-8 h-8" /> : <Play className="w-8 h-8 text-black fill-inherit" />}
                    { playing ? "Pause" : "Play"}
                  </Button>
                  <div className='h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw]'>
                    {watchList ? (
                      <form action={deleteFromWatchlist}>
                        <input type="hidden" name="watchlistId" value={wachtListId} />
                        <input type="hidden" name="pathname" value={pathName} />
                        <Button
                          size="icon"
                          variant="link"
                          className="h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] w-[8vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw]
                          border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in transition-all"
                        >
                          <Check className='max-sm:p-1'/>
                        </Button>
                      </form>
                    ) : (
                      <form action={addTowatchlist} >
                        <input type="hidden" name="movieId" value={movieId} />
                        <input type="hidden" name="pathname" value={pathName} />
                        <Button
                          size="icon"
                          variant="link"
                          className="h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] w-[8vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw]
                          border rounded-full bg-[#141414] border-[#ffffffb3] opacity-70 hover:brightness-150 hover:ease-in transition-all"
                        >
                          <Plus className='max-sm:p-1'/>
                        </Button>
                      </form>
                    )}
                  </div>
                  {like ? (
                    <Button
                      onClick={() => setLike(!like)}
                      variant="link"
                      size="icon"
                      className="h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] w-[8vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw]
                      bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in transition-all"
                    >
                      <ThumbsUp className='p-1'/>
                    </Button>
                    ) : (
                    <Button
                      onClick={() => setLike(!like)}
                      variant="link"
                      size="icon"
                      className="h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] w-[8vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw]
                      bg-[#141414] border border-[#ffffffb3] opacity-70 rounded-full hover:brightness-150 hover:ease-in transition-all"
                    >
                      <ThumbsDown className='p-1'/>
                    </Button>
                    )
                  }
                </div>
                <Button
                  onClick={handleMuteToggle}
                  variant="link"
                  size="icon"
                  className="h-[8vw] sm:h-[5vw] md:h-[4vw] lg:h-[2.5vw] w-[8vw] sm:w-[5vw] md:w-[4vw] lg:w-[2.5vw]
                  z-50 text-lg font-medium bg-neutral-800 bg-opacity-50 border-2 border-zinc-500 rounded-full hover:brightness-150 hover:ease-in transition-all"
                >
                  {
                    muted
                    ? <VolumeX className="text-zinc-500"/>
                    : <Volume2 className=" text-zinc-500"/>
                  }
                </Button>
              </div>

              <div className="flex flex-col px-5 sm:px-10">
                <div className="flex items-center space-x-2 justify-start ">
                  <p className="font-semibold text-xs sm:text-md text-[#46d369]">
                    {/* {Math.floor(Math.random()*50)+45}% Match */}
                    100% Match
                  </p>
                  <p className="text-zinc-400 font-thin max-sm:text-xs">
                    {release}
                  </p>
                  <p className="text-zinc-400 font-thin max-sm:text-sm">
                    Episodes
                  </p>
                  <p className="flex items-center text-[10px] text-zinc-200 border border-zinc-200 rounded-sm px-2 tracking-widest line-clamp-none">
                    HD
                  </p>
                  <div className='relative '>
                    <Subtitles className="text-gray-400 h-5 w-5 subtitles" />
                    <p 
                      className='absolute hidden w-[26em] p-1 -top-8 sm:-top-12 -left-[15em] sm:-left-[10em] max-sm:text-[0.5em] 
                    bg-zinc-200 text-center font-semibold rounded-sm ease-in transition-all'>
                      Subtitles for the deaf and hard of hearing are available
                      <span className='absolute -z-10 top-[1em] left-[15em] sm:left-[10em] sm:top-5 w-4 h-4 rotate-45 bg-zinc-200'></span>
                    </p>
                  </div>
                </div>
                <div className="flex items-stretch sm:items-center justify-between space-x-1 mt-1">
                  <div className='flex sm:space-x-2 items-start max-sm:flex-col'>
                    <div className='flex space-x-2 '>
                      <p className="flex items-center px-2 text-xs sm:text-sm h-6 text-zinc-200 border border-zinc-500 font-thin hover:cursor-pointer">
                        {age}+
                      </p>
                      <p className="flex items-center px-2 text-xs sm:text-sm h-6 text-zinc-200 border border-zinc-500">
                        {duration}h
                      </p>
                    </div>
                    <div className='flex items-center max-sm:flex-wrap max-sm:pt-2'>
                      {genre.map((item, index) => (
                        <div key={index} className='items-center flex'>
                          <div  className="flex hover:cursor-pointer text-zinc-200 text-xs sm:text-sm lowercase">
                            {item}
                          </div>
                          {index !== genre.length - 1 && <span className='text-zinc-200 pr-1'>,</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <div className='flex items-center max-sm:flex-wrap'>
                      <div className="text-xs sm:text-sm text-zinc-500 font-thin">Casts: </div>
                      {casts.map((item, index) => (
                        <div key={index} className='flex items-center'>
                          <div className="hover:cursor-pointer hover:underline text-zinc-200 text-xs sm:text-sm ">
                            {item}
                          </div>
                          {index !== casts.length - 1 && <span className='text-zinc-200'>,</span>}
                        </div>
                      ))}
                    </div>
                    <div className='flex items-center space-x-1 max-sm:flex-wrap'>
                      <div className="text-xs sm:text-sm text-zinc-500 font-thin">Genres: </div>
                      {genre.map((item, index) => (
                        <div key={index} className='flex items-center'>
                          <div className="hover:cursor-pointer hover:underline text-zinc-200 text-xs sm:text-sm">
                            {item}
                          </div>
                          {index !== genre.length - 1 && <div className='text-zinc-200'>,</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-zinc-200 mt-5 lg:line-clamp-3 lg:hover:line-clamp-6 max-sm:text-xs hover:ease-in transition-all cursor-pointer">
                  {overview}
                </div>
              </div>
            </div>
              
          </div>
        </dialog>
    ) : null

    return dialog
}