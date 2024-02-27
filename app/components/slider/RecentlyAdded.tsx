import Image from "next/image"
import prisma from "../../utils/db"
import { MovieCard } from "../movie-modal/MovieCard"
import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"
import React from "react"
import SliderModal from "./slider-modal/SliderModal"


async function getData(userId: string) {
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
    take: 10
  })
  return data
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)

 

  return (
    <div>
      <h1 className="text-base sm:text-2xl ">New Releases</h1>
      <div className="flex flex-row mt-3 space-x-2 relative w-screen">
      <SliderModal >
        {data.map((movie) => (
          <div key={movie.id} className="group hover:transition-transform hover:duration-500">
            <div className="flex flex-col relative h-32 w-[14.2rem] hover:z-50 ">
              <Image
                src={movie.imageString}
                alt={`${movie.title} - ${movie.id}.movie poster`}
                className="group-hover:scale-[1.4] group-hover:z-50 group-hover:rounded-t-sm group-hover:rounded-b-none rounded-sm object-cover
                transition-transform duration-500 "
                fill
                sizes="100%"
                quality={50}
                loading="eager"
                 
              />
            </div>

            <div 
              className="hidden w-[14.2rem] group-hover:scale-[1.4] absolute group-hover:inline-flex group-hover:z-50 group-hover:transition-transform group-hover:duration-500
              group-hover:shadow-md group-hover:shadow-black/90 group-hover:cursor-pointer ">
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
        ))}
      </SliderModal>
      </div>
    </div>
  )
}