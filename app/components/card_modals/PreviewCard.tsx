"use client"

import { PlayCircle } from 'lucide-react'
import { PreviewCard_Info } from "./preview-card__modals/PreviewCard_Info"
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import { MovieProps } from "@/app/src/types/props";
import dynamic from 'next/dynamic';
import "./card.css";
import { useCardContext } from './CardContext';

const ImageCard = dynamic(() => import('./preview-card__modals/ImageModal'));
const ShowDialogButton = dynamic(() => import('./card-button__controls/ShowDialogButton'));

interface PreviewModalProps extends MovieProps {
  imageCardWrapper?: boolean
  top10Wrapper?: boolean
  imageStyle?: string
  id: number
}

export default function PreviewCard({
  imageCardWrapper,
  top10Wrapper,
  imageStyle,
  id,
  ...movieProps
}: PreviewModalProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const showDialog = searchParams.get('showDialog')

  const {setIsHover, isHover } = useCardContext();

  useEffect(() => {
    if (showDialog === movieProps.title) {
      setOpenDialog(true)
    } else {
      setOpenDialog(false)
    }
  }, [showDialog, openDialog]);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  //console.log(isHover)

  return (
    <div 
      className="group/card previewCardWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      aria-label='preview card'
    >
      <div
        className={`
          relative cursor-pointer slide
          ${imageCardWrapper ? "cardSize" : top10Wrapper ? "top10cardSize" : undefined}
        
        `}
      >
        <ImageCard
          imageString={movieProps.imageString}
          imageText={`preview card open ${movieProps.title}-movie poster`}
          imageStyle={`${imageStyle} max-lg:brightness-75 h-full w-full
           
            `}
        />

        <ShowDialogButton
          buttonStyle="absolute z-50 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 outline-none"
          // key={movieProps.movieId}
          {...movieProps}
        >
          <PlayCircle className="invisible max-xl:visible text-zinc-300 size-8 outline-none" aria-label={movieProps.title} />
        </ShowDialogButton>
      </div>
      <div
        className={`
          ${
            !openDialog 
              ? ` xl:group-hover/card:visible xl:group-hover/card:scale-150  xl:group-hover/card:z-50`
              : "group-hover/card:invisible"
          }
         
          previewCardDefault ease-in-out transition-transform 
        `}
      >
        <ImageCard
          imageString={movieProps.imageString}
          imageText={`${movieProps.title}-movie big poster`}
          imageStyle="rounded-t-sm w-full h-full "
        />
        <PreviewCard_Info
          infohover={`
             ${isHover ? 'opacity-100 z-50' : 'opacity-45 -z-50'}
             `}
          // key={id}
          {...movieProps}
        />
      </div>
    </div>
  )
}