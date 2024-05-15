import MovieVideo from "@/app/components/movie_modal/MovieVideo";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import PreviewModal from "@/app/components/movie_modal/PreviewModal";
import SortBySelect from "@/app/components/modals/select_modal/SortBySelect";
//import CategoryPageWrapper from "@/app/components/modals/select_modal/CategoryPageWrapper";

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
    case "new": {
      const data = await prisma.movie.findMany({
        where: { release : 2024 },
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
    case "audio": {
      const data = await prisma.movie.findMany({
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
    title:string
  }},) {
    
    const session = await getServerSession(authOptions)
    const data = await getData(params.genre, session?.user?.email as string)
    const movie = data[0]

  return (
    <div>
      {params.genre === "audio" ? (
        <div className="top-24 relative px-5 sm:px-[3vw] xl:px-[3.5vw]">
          <div className="flex justify-between mb-24">
            <h1 className="sm:text-3xl">
              Browse by Languages
            </h1>
            <SortBySelect data={data} />
          </div>

          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
            gap-x-[0.4vw] gap-y-[7.5vw] md:gap-y-[5.5vw] lg:gap-y-[4.5vw] xl:gap-y-[4vw]"
          >
            {data.map((movie) => (
              <div key={movie.title} className="relative w-full">
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
                  release={movie.release}
                  duration={movie.duration}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  watchlistId={movie.WatchLists[0]?.id as string}
                  movieId={movie.id}
                  imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                  imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
                />
              </div>
            ))}
          </div>
       </div>
      
     
     
      ) : (
        <>
          {movie &&  params.genre !== "new" &&(
            <MovieVideo
              key={movie.id}
              id={movie.id}
              imageString={movie.imageString} 
              videoSource={movie.videoSource} 
              title={movie.title} 
              overview={movie.overview} 
            />
          )}

          <div 
            className={`${params.genre === "new" ? "top-28" : "top-0"} relative px-5 sm:px-[3vw] xl:px-[3.5vw] `}
          >
            <h1 className="relative title sm:text-xl">
              {
                params.genre === "new" ? "New on Netflix" : 
                movie.category === "show" ? "Popular TV Series" :
                movie.category === "movie" ? "Popular Movie Series" : 
                "Netflix Series"
              }
            </h1>
            <CarouselModal
              sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
              sliderClass="space-x-1 sm:space-x-2"
            >
              {data.map((movie) => (
                <div key={movie.id} className="relative w-full h-full max-w-[14.5rem]">
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
                    release={movie.release}
                    duration={movie.duration}
                    watchList={movie.WatchLists.length > 0 ? true : false}
                    watchlistId={movie.WatchLists[0]?.id as string}
                    movieId={movie.id}
                    imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                    imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
                  />
                </div>
              ))}
            </CarouselModal>
          </div>
        </>
      )}
      
    </div>
  )
}