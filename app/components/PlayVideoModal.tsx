
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PlayVideoModalButton from "./PlayVideoModalButton"
import Image from "next/image"
import logo from "../../app/favicon.ico"
import { Subtitles } from "lucide-react"
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material"
import prisma from "../utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"

const random = Math.floor(Math.random()*50)+45

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
}


export default async function PlayVideoModal({
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
  release
}: iAppProps) {


  return (
    <div className="mt-5 flex">
      <Dialog open={state} onOpenChange={() => changeState(!state)} >
        <DialogContent className="flex flex-col sm:max-w-[850px] w-screen h-[750px] p-0 mt-7 overflow-y-scroll overflow-css bg-[#141414]">
          <PlayVideoModalButton 
            watchList={watchList}
            wachtListId={wachtListId}
            videoSource={videoSource}
            movieId={movieId}
          />
          <DialogHeader className="mt-24 z-40">
           
            <DialogTitle className="absolute top-64 left-10 uppercase tracking-widest text-2xl font-light">
              <div className="flex space-x-2">
                <Image src={logo} alt="logo" width={20} height={20} className=""/>
                <p className="uppercase text-sm">series</p>
              </div>
                {title}
            </DialogTitle>
            
            <div className="flex flex-col items-start mx-10">
              <div className="flex space-x-2 justify-center">
                <p className="font-semibold text-md text-[#46d369] hover:cursor-context-menu">{random}% Match</p>
                <p className=" hover:cursor-context-menu">{release}</p>
                <p className="flex items-center text-xs border border-gray-600 rounded px-2 tracking-widest line-clamp-none hover:cursor-context-menu">
                  HD
                </p>
                <TooltipSubtitles title="Subtitles for the deaf and hard of hearing are available" placement="top">
                  <Subtitles className="text-gray-400" />
                </TooltipSubtitles>
              </div>
              <div className="flex space-x-2 mt-1">
                <p className="border px-1 border-gray-200 font-thin text-[14px] hover:cursor-pointer">{age}+</p>
                <p className=" hover:cursor-context-menu">{duration}h</p>
              </div>
            </div>
            <DialogDescription className="line-clamp-3 mx-10">
              {overview}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
       
      </Dialog>
    </div>
  )
}