"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Dialog from "../../dialog/Dialog";
import { useVideoContext } from "../../movie__modal/VideoContext";
import { MovieProps } from "@/app/src/types/props";

interface PlayProps extends MovieProps {
  buttonStyle: string;
  children: React.ReactNode;
}

export default function ShowDialogButton({
  children,
  buttonStyle,
  ...movieProps
}: PlayProps ){

  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const { setDialogOpen, currentVideoPause, currentVideoPlay,isDialogOpen } = useVideoContext();

  const clickOpenDialog = () => {
    //console.log("show dialog open")
    setOpen(true)
    setDialogOpen(true)
    currentVideoPause()
  }

  const clickCloseDialog = () => {
    //console.log("show dialog closed")
    setOpen(false)
    setDialogOpen(false)
    currentVideoPlay()
  }

  useEffect(() => {
    setDialogOpen(open);
    if (open == true) {
      currentVideoPause();
    } else {
      currentVideoPlay();
    }
  }, [open]);


  useEffect(() => {
    if (isDialogOpen) {
      currentVideoPause();
    } else {
      currentVideoPlay();
    }
  }, [isDialogOpen, ]);
  //console.log("isDialogOpen",isDialogOpen)
  

  return (
    <>
      <Link
        key={movieProps.movieId}
        href={`${pathName}?showDialog=${encodeURIComponent(movieProps.title)}`}
        className={buttonStyle}
        scroll={false}
        aria-label={`${movieProps.title} Dialog Open`}
        onClick={clickOpenDialog}
      >
        {children}
      </Link>
      {open == true && 
        <Dialog
          onClose={() => clickCloseDialog()}
          {...movieProps}
        />
      }
    </>
  );
}