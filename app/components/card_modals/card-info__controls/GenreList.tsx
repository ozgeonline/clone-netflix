import React from "react"

interface genreProps {
  genres?: string
  genreDialogStyle?:boolean
  genreInfoStyle?:boolean
  children:React.ReactNode
}

export default function GenreList({
  genres,
  genreDialogStyle,
  genreInfoStyle,
  children
}: genreProps) {

  const genre = genres.split(",")

  return (
    <>
      {genre.map((item, index) => (
        <div key={index} className="flex items-center text-white">
          <div 
            className={`
              ${genreDialogStyle && "text-xs sm:text-sm hover:underline"}
              ${genreInfoStyle && "text-[10px]"}
              cursor-pointer text-textColor 
            `}
          >
            {item}
          </div>
          {index !== genre.length - 1 && <> {children} </>}
        </div>
      ))}
    </>
  )
}