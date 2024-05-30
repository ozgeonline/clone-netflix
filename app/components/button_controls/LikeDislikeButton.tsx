"use client"

import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { useState } from "react"

interface LikeDislikeProps {
  likeBtnStyle: string
}

export default function LikeDislikeButton({ likeBtnStyle } :LikeDislikeProps) {
  const [like, setLike] = useState<boolean>(true)
  
  return (
    <>
       { like ? (
        <Button 
          onClick={() => setLike(!like)} 
          variant="link" 
          size="icon" 
          className={`${likeBtnStyle} bg-bg_main border border-whiteColor_100 opacity-70 rounded-full hover:brightness-150 hover:ease-in`}
        >
          <ThumbsUp className="max-sm:p-1"/>
        </Button>
        ) : (
        <Button 
          onClick={() => setLike(!like)} 
          variant="link" 
          size="icon" 
          className={`${likeBtnStyle} bg-bg_main border border-whiteColor_100 opacity-70 rounded-full hover:brightness-150 hover:ease-in`}
        >
          <ThumbsDown className="max-sm:p-1" />
        </Button>
        )
      }
    </>
  )
}