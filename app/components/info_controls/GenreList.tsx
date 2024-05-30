import React from "react"

interface genreProps {
  genres?: string
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
        <div key={index} className="flex items-center text-white">
          <div className="hover:cursor-pointer hover:underline text-textColor text-xs">
            {item}
          </div>
          {index !== genre.length - 1 && <> {children} </>}
        </div>
      ))}
    </>
  )
}