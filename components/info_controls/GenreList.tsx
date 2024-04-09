import React from "react"

interface genreProps {
  genres: string
  children:React.ReactNode
}

export default function GenreList({
  genres,
  children
}: genreProps) {

  const genre = genres.split(",")

  return (
    <>
      {genre.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="hover:cursor-pointer hover:underline text-zinc-200 text-xs sm:text-sm">
            {item}
          </div>
          {index !== genre.length - 1 && 
            <div  className='text-zinc-200'>
              {children}
            </div>
          }
        </div>
      ))}
    </>
  )
}