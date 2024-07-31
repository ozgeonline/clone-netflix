"use client"

import { Button } from "@/components/ui/button"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { useState } from "react"

interface likeDislikeProps {
  likeBtnStyle: string
}

export default function LikeDislikeButton({ likeBtnStyle } :likeDislikeProps) {
  const [like, setLike] = useState<boolean>(true)
  
  return (
    <>
      {like ? (
        <Button 
          onClick={() => setLike(!like)} 
          variant="link" 
          size="icon" 
          className={`
            ${likeBtnStyle}
            bg-main-dark border border-main-white_100 opacity-70 rounded-full hover:brightness-150 hover:ease-in
          `}
        >
          <ThumbsUp className="max-sm:p-1"/>
        </Button>
        ) : (
        <Button 
          onClick={() => setLike(!like)} 
          variant="link" 
          size="icon" 
          className={`
            ${likeBtnStyle}
            bg-main-dark border border-main-white_100 opacity-70 rounded-full hover:brightness-150 hover:ease-in
          `}
        >
          <ThumbsDown className="max-sm:p-1" />
        </Button>
        )
      }
    </>
  )
}