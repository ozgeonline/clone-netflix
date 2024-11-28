"use client"

import { ThumbsDown, ThumbsUp } from "lucide-react"
import { useState } from "react"

interface likeDislikeProps {
  likeBtnStyle: string
}

export default function LikeDislikeButton({ likeBtnStyle } :likeDislikeProps) {
  const [like, setLike] = useState<boolean>(true)
  
  return (
    <div className="flex items-center justify-center">
      {like ? (
        <button 
          onClick={() => setLike(!like)} 
          className={`
            ${likeBtnStyle} 
            flex items-center justify-center
            bg-main-dark border border-main-white_100 brightness-90 rounded-full hover:brightness-150 hover:ease-in
          `}
        >
          <ThumbsUp className="max-sm:p-1 p-[2px] text-main-white_100 "/>
        </button>
        ) : (
        <button  
          onClick={() => setLike(!like)} 
          className={`
            ${likeBtnStyle}
            flex items-center justify-center
            bg-main-dark border border-main-white_100 brightness-90 rounded-full hover:brightness-150 hover:ease-in
          `}
        >
          <ThumbsDown className="max-sm:p-1 p-[2px] text-main-white_100" />
        </button>
        )
      }
    </div>
  )
}