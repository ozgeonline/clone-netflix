"use client"

import { InfoIcon, Play } from "lucide-react"
import ShowDialogButton from "../card_modals/card-button__controls/ShowDialogButton"

interface iAppProps {
  title: string
}

export default function MovieButtons({title }: iAppProps) {
  return (
    <div className="flex text-[3vw] sm:text-lg font-semibold">   
      <ShowDialogButton
        title={title}
        buttonStyle="text-black me-3 rounded-sm flex items-center justify-center bg-white hover:brightness-90 hover:ease-in transition-all w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw] h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]"
      >
        <Play 
          className="size-[3vw] sm:size-[2vw] me-[0.75vw] rounded-full fill-inherit"
        /> Play
        <span className="invisible w-0">Video play button</span>
      </ShowDialogButton>

      <ShowDialogButton
        title={title}
        buttonStyle="flex items-center justify-center rounded-sm bg-neutral-500/70 hover:bg-neutral-400/50 w-[24vw] sm:w-[17vw] lg:w-[12vw] h-[6vw] sm:h-[5vw] md:h-[4vw] lg:h-[3vw]"
      >
        <InfoIcon
          className="size-[3vw] sm:size-[2vw] me-2"
          aria-label={`more info button`}
        />More Info
        <span className="invisible w-0">Video info button</span>
      </ShowDialogButton>
    </div>
  )
}