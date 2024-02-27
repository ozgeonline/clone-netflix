// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import PlayVideoModalButton from "./PlayVideoModalButton"
import Image from "next/image"
import logo from "../../../../app/favicon.ico"
import { Subtitles } from "lucide-react"
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material"
import Dialog from "./Dialog"
import Link from "next/link"

const TooltipSubtitles = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: 16,
      fontWeight: 700,
      maxWidth: 450,
    },
  }))

interface iAppProps {
  state: boolean
  changeState: any
  movieId: number
  wachtListId: string
  overview: string
  title: string
  watchList: boolean
  videoSource: string
  age: number
  duration: number
  release: number
  cast: string
  genre: string
  category: string
  imageString: string
}

export default function PlayVideoModal({
    movieId,
    wachtListId,
    changeState,
    state,
    overview,
    title,
    watchList,
    videoSource,
    age,
    duration,
    release,
    cast,
    genre,
    category,
    imageString
  }: iAppProps) {
  const random = Math.floor(Math.random()*50)+45
  const casts = cast.split(",")
  const genres = genre.split(",")

  return (
    <div></div>
    
    // <div className="mt-5 mb-2 flex">
    //   <Dialog open={state} onOpenChange={() => changeState(!state)} >
    //     <DialogContent className="flex flex-col sm:max-w-[850px] w-screen h-[750px] p-0 mt-7 overflow-y-scroll overflow-css bg-[#181818]">
    //       <DialogHeader>
    //         <PlayVideoModalButton 
    //           watchList={watchList}
    //           wachtListId={wachtListId}
    //           videoSource={videoSource}
    //           movieId={movieId}
    //         />
    //         <DialogTitle className="absolute top-64 left-10 uppercase tracking-widest text-2xl font-light">
    //           <div className="flex space-x-2">
    //             <Image src={logo} alt="logo" width={20} height={20}/>
    //             <p className="uppercase text-sm">series</p>
    //           </div>
    //             {title}
    //         </DialogTitle>
    //       </DialogHeader>
    //       <div className="mt-24 w-full">
    //         <DialogDescription className="mx-10 mt-5 text-zinc-200 text-base font-thin">
    //           <div className="flex flex-row">
    //             <div className="   mx-1 w-3/5 z-50">
    //               <div className="flex flex-row items-center space-x-2 justify-start ">
    //                 <p className="font-semibold text-md text-[#46d369] hover:cursor-context-menu">
    //                   {random}% Match
    //                 </p>
    //                 <p className="hover:cursor-context-menu text-zinc-400 font-thin">
    //                   {release}
    //                 </p>
    //                 <p className="flex items-center text-[10px] text-zinc-300 border border-gray-600 rounded px-1 h-4 tracking-widest line-clamp-none hover:cursor-context-menu">
    //                   HD
    //                 </p>
    //                 <TooltipSubtitles title="Subtitles for the deaf and hard of hearing are available" placement="top">
    //                   <Subtitles className="text-gray-400 h-5" />
    //                 </TooltipSubtitles>
    //               </div>
    //               <div className="flex space-x-2 mt-1 items-center">
    //                 <p className="border px-1 border-gray-200 border-opacity-40 font-thin text-[14px] h-6 hover:cursor-pointer">
    //                   {age}+
    //                 </p>
    //                 <p className=" hover:cursor-context-men text-sm text-zinc-200">
    //                   {duration}h
    //                 </p>
    //               </div>
    //               <p className="text-zinc-200 mt-5">
    //                 {overview}
    //               </p>
    //             </div>
                
    //             <div className="w-2/5 px-5 z-50">
    //               <div>
    //                 <span className="hover:cursor-default text-zinc-500 font-thin text-sm">Cast: </span>
    //                 {casts.map((item, index) => (
    //                   <>
    //                     <span key={index} className="hover:cursor-pointer hover:underline text-zinc-200 text-sm">{item}</span>
    //                     <span>{", "}</span>
    //                   </>
    //                 ))}
    //                 <span className="hover:cursor-pointer hover:underline text-zinc-200 italic text-sm">more</span>
    //               </div>
    //               <div>
    //                 <span className="hover:cursor-default text-zinc-500 font-thin text-sm">Genres: </span>
    //                 {genres.map((item, index) => (
    //                   <>
    //                     <span key={index} className="hover:cursor-pointer hover:underline text-zinc-200 text-sm">{item}</span>
    //                     <span>{", "}</span>
    //                   </>
    //                 ))}
    //                 <span className="hover:cursor-pointer hover:underline text-zinc-200 italic text-sm">more</span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="mt-14 flex flex-row pb-48">
    //             <div className="flex flex-row">
    //               {
    //               category === "show" ?  
    //                 <h1 className="text-2xl font-bold">{"Episodes"}</h1>
    //               : 
    //                 <div>
    //                   <h1 className="text-2xl font-bold">{"More Like This"}</h1>
    //                   <div className="mt-5 w-[238px]">
    //                     <Image 
    //                       src={imageString}
    //                       alt="movie img"
    //                       width="238" 
    //                       height="133"
    //                       className="rounded-t-sm z-10" 
    //                     />
    //                     <div className="flex flex-col px-3 bg-[#2F2F2F] w-full rounded-b-sm">
    //                       <div className="flex flex-row space-x-2 items-center my-7">
    //                         <span className="border text-zinc-300 border-zinc-400 h-6 px-2">{age}+</span>
    //                         <span className="border text-zinc-300 border-zinc-400 text-xs h-4 rounded-sm px-1">HD</span>
    //                         <span className="text-zinc-300">{release}</span>
    //                       </div>
    //                       <p className="text-sm mb-12">{overview}</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               } 
    //             </div>
                  
    //           </div>
    //         </DialogDescription> 
    //       </div>
    //     </DialogContent>
    //   </Dialog>
    // </div>
  )
}