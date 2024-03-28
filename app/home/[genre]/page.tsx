import MovieVideo from "@/app/components/movie__modal/MovieVideo";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";
import PreviewModal from "@/app/components/movie__modal/PreviewModal";

async function getData(category: string, userId: string) {

  const data = [];

  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
        select: {
          age: true,
          duration: true,
          id: true,
          title: true,
          release: true,
          imageString: true,
          overview: true,
          videoSource: true,
          cast: true,
          genres: true,
          category: true,
          WatchLists: {
            where: { userId: userId}
          }
        }
      })
      return data
    } 
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
        select: {
          age: true,
          duration: true,
          title: true,
          id: true,
          release: true,
          imageString: true,
          overview: true,
          videoSource: true,
          cast: true,
          genres: true,
          category: true,
          WatchLists: {
            where: { userId: userId}
          }
        }
      })
      return data
    }
    case "recently": {
      const data = await prisma.movie.findMany({
        where: { category: "recent" },
        select: {
          age: true,
          duration: true,
          title: true,
          id: true,
          release: true,
          imageString: true,
          overview: true,
          videoSource: true,
          cast: true,
          genres: true,
          category: true,
          WatchLists: {
            where: { 
              userId: userId
            }
          }
        }
      })
      return data
    }
    default: {
      throw new Error("Invalid Category");
    }
  }
}

export default async function CategoryPage(
  { params} : { params: {
    id: number,
    age: number,
    duration: number,
    overview: string,
    release:  number,
    title: string,
    videoSource:string,
    imageString: string,
    cast: string,
    genre: string,
    category: string,
    movieId: number,
    wachtListId: string,
    WatchLists: boolean
  }}) {
  
  const session = await getServerSession(authOptions)
  const data = await getData(params.genre, session?.user?.email as string,)

  const randomIndex = Math.round(Math.random())
  const movie = data[randomIndex]
  
  return (
    <div>
      {movie && (
        <MovieVideo 
          //id={movie.id} 
          age={movie.age} 
          duration={movie.duration} 
          overview={movie.overview} 
          release={movie.release} 
          title={movie.title} 
          videoSource={movie.videoSource} 
          imageString={movie.imageString} 
          cast={movie.cast} 
          genres={movie.genres} 
          category={movie.category} 
          movieId={movie.id} 
          wachtListId={movie.WatchLists[0]?.id} 
          watchList={movie?.WatchLists && Array.isArray(movie.WatchLists) && movie.WatchLists.length > 0 ? true : false}
        />
      )}

      <div className="relative top-16 left-16">
        <CarouselModal>
          {data.map((movie) => (
            <PreviewModal 
              key={movie.id}
              //id={movie.id}
              wachtListId={movie.WatchLists[0]?.id  as string}
              movieId={movie.id}
              title={movie.title}
              overview={movie.overview}
              watchList={movie.WatchLists.length > 0 ? true : false}
              videoSource={movie.videoSource}
              //year={movie.release}
              age={movie.age}
              //time={movie.duration}
              cast={movie.cast}
              genres={movie.genres}
              category={movie.category}
              imageString={movie.imageString}
              release={movie.release}
              duration={movie.duration}
              
            />
          ))}
        </CarouselModal>
      </div>
    </div>
  )
}