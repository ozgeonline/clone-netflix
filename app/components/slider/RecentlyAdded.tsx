import Image from "next/image"
import prisma from "../../utils/db"
import { MovieCard } from "../movie-modal/MovieCard"
import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"
import React from "react"
import CarouselModal from "./slider-modal/SliderModal"


const userId = "";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      cast:true,
      genres: true,
      category: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      imageString: true,
      videoSource: true,
      age: true,
      release: true,
      duration: true,
    
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8
  })
  return data
}

export default async function RecentlyAdded() {
  const data = await getData()

  return (
    <div className="max-[1400px] w-full">
      <h1 className="text-base sm:text-2xl ">New Releases</h1>
      <div className="mt-3">
      <CarouselModal>
        {data.map((movie) => (
          <div key={movie.id} className="group ">
            <div className="flex flex-col relative h-32 w-[14.2rem] ">
              <Image
                src={movie.imageString}
                alt={`${movie.title} - ${movie.id}.movie poster`}
                className="object-cover rounded-sm"
                fill
                sizes="100%"
                quality={50}
                loading="eager"
              />
            </div>
            <div 
              className="absolute invisible group-hover:visible group-hover:scale-150 h-32 w-[14rem] transition-transform ease-in
              shadow-md shadow-black/90 cursor-pointer group-hover:z-50 -top-10 mx-5"
            >
              <div>
                <Image
                  src={movie.imageString}
                  alt={`${movie.title} - ${movie.id}.movie big-poster`}
                  className="relative z-50 rounded-t-sm object-cover"
                  fill
                  sizes="100%"
                  quality={50}
                  loading="eager"
                />
                <MovieCard
                  movieId={movie.id}
                  key={movie.id}
                  overview={movie.overview}
                  title={movie.title}
                  wachtListId={movie.WatchLists[0]?.id}
                  videoSource={movie.videoSource}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  age={movie.age}
                  year={movie.release}
                  time={movie.duration}
                  cast={movie.cast}
                  genre={movie.genres}
                  category={movie.category}
                  imageString={movie.imageString}
                
                />
              </div>
            </div>
          </div>
        ))}
      
      </CarouselModal>

      </div>
    </div>
  )
}