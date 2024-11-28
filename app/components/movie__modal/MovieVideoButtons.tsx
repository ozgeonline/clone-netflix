"use client"

import { InfoIcon, Play } from "lucide-react"
import ShowDialogButton from "../card_modals/card-button__controls/ShowDialogButton"
import { MovieProps } from "@/app/src/types/props"
import "./movie.css"

interface iAppProps extends MovieProps {
  //
}

export default function MovieButtons({ ...movieProps}: iAppProps) {
  return (
    <div className="flex text-[3vw] sm:text-lg font-semibold">
      <ShowDialogButton
        {...movieProps}
       
        buttonStyle="
          movieButtons text-black bg-white me-3 hover:brightness-90
          w-[15vw] sm:w-[12vw] md:w-[10vw] lg:w-[8vw]"
      >
        <Play 
          className="size-[3vw] sm:size-[2vw] me-[0.75vw] rounded-full fill-inherit" 
          aria-label="more info button"
        />
        Play
      </ShowDialogButton>

      <div
        // {...movieProps}
       
        className="
          movieButtons bg-neutral-500/70 hover:bg-neutral-400/50 
          w-[24vw] sm:w-[17vw] lg:w-[12vw] cursor-not-allowed"
      >
        <InfoIcon
          className="size-[3vw] sm:size-[2vw] me-2"
          aria-label="more info button"
        />
        More Info
      </div>
    </div>
  )
}