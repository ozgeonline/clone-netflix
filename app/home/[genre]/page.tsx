import MovieVideo from "@/app/components/movie_modal/MovieVideo";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import PreviewModal from "@/app/components/movie_modal/PreviewModal";

async function getData(category: string, userId: string) {

  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
        select: {
          id: true,
          title: true,
          imageString: true,
          videoSource: true,
          overview: true,
          release: true,
          duration: true,
          age: true,
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
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
        select: {
          id: true,
          title: true,
          imageString: true,
          videoSource: true,
          overview: true,
          release: true,
          duration: true,
          age: true,
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
    case "recently": {
      const data = await prisma.movie.findMany({
        where: { category: "recent" },
        select: {
          id: true,
          title: true,
          imageString: true,
          videoSource: true,
          overview: true,
          release: true,
          duration: true,
          age: true,
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
    genre: string
  }}) {
  
  const session = await getServerSession(authOptions)
  const data = await getData(params.genre, session?.user?.email as string,)
  const movie = data[0]
  
  return (
    <div className="">
      {movie && (
        <MovieVideo
          key={movie.id}
          id={movie.id}
          imageString={movie.imageString} 
          videoSource={movie.videoSource} 
          title={movie.title} 
          overview={movie.overview} 
        />
      )}

      <div className="relative top-0 px-5 sm:px-[3vw] xl:px-[3.5vw]">
        <h1 className="relative title sm:text-2xl">
          Popular {
            movie.category === "show" ? "TV" :
            movie.category === "movie" ? "Movie" : "Netflix"
          } Series
        </h1>
        <CarouselModal
          sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
          sliderClass="space-x-1 sm:space-x-2"
        >
          {data.map((movie) => (
            <div className="relative w-full h-full" key={movie.id}>
              <PreviewModal 
                key={movie.id}
                id={movie.id}
                imageString={movie.imageString}
                videoSource={movie.videoSource}
                title={movie.title}
                overview={movie.overview}
                age={movie.age}
                cast={movie.cast}
                genres={movie.genres}
                //category={movie.category}
                release={movie.release}
                duration={movie.duration}
                watchList={movie.WatchLists.length > 0 ? true : false}
                watchlistId={movie.WatchLists[0]?.id as string}
                movieId={movie.id}
                imageWrapperStyle="w-auto h-[20vw] md:h-[13vw] xl:h-[8.3vw] flex"
                imageStyle="rounded-sm max-lg:brightness-75 w-full h-full max-w-[14.5rem]"
              />
            </div>
          ))}
        </CarouselModal>
      </div>
    </div>
  )
}