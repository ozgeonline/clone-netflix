import prisma from "../utils/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"

import CarouselModal from "../components/slider/slider-modal/CarouselModal"
import MovieVideo from "../components/movie_modal/MovieVideo"
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard"
import RecentlyAdded from "../components/slider/RecentlyAdded"
import Top10TV from "../components/slider/Top10TV"
import ContinueWatchingCardModal from "../components/slider/ContinueWatchingCardModal"

async function getData(userId:string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      imageString: true,
      videoSource: true,
      title: true,
      overview: true,
      cast:true,
      genres: true,
      age: true,
      release: true,
      duration: true,
      category:true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 50
  })
  return data
}

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string)
  const movie = data[0]

  return (
    <div className="overflow-x-hidden">
      <MovieVideo
        key={movie?.id}
        id={movie.id}
        imageString={movie.imageString}
        videoSource={movie.videoSource}
        title={movie.title}
        overview={movie.overview}
      />
      <div
        className="w-full flex flex-col px-5 sm:px-[3vw] xl:px-[3.5vw] -mt-[20vw] md:-mt-[15vw] lg:-mt-36 pb-96 space-y-1 sm:space-y-4 lg:space-y-8 xl:space-y-12"
      >
        <div>
          <h1 className="relative title sm:text-2xl">
            Continue Watching for you
          </h1>
          <CarouselModal
            sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
            sliderClass="space-x-1 sm:space-x-2"
          >
            {data
              .slice(0, 5)
              .map((movie,index) => (
              <ContinueWatchingCardModal key={index} videoUrl={movie.videoSource} imageString={movie.imageString} />
            ))}
          </CarouselModal>
        </div>

        <div>
          <h2 className="relative title sm:text-2xl">New Releases</h2>
          <CarouselModal
            sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
            sliderClass="space-x-1 sm:space-x-2"
          >
            {data
              .filter(movie => movie.release === 2024 || 2023)
              .map((movie)=> (
                <RecentlyAdded
                  key={movie.id}
                  id={movie.id}
                  imageString={movie.imageString}
                  videoSource={movie.videoSource}
                  title={movie.title}
                  overview={movie.overview}
                  cast={movie.cast}
                  genres={movie.genres}
                  age={movie.age}
                  release={movie.release}
                  duration={movie.duration}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  watchlistId={movie.WatchLists[0]?.id as string}
                  movieId={movie.id}
                />
            ))}
          </CarouselModal>
        </div>      
        
        <div>
          <h2 className="relative title sm:text-2xl">Top 10 TV Shows in Today</h2>
          <CarouselModal
            sliderButtonClass="h-[30vw] sm:h-[22vw] md:h-[17vw] lg:h-[14vw] xl:h-[10.5vw]"
            sliderClass="space-x-1 "
          >
            {data
              .filter(movie => movie.category === "show")
              .slice(0, 10)
              .map((show,index)=> (
                <Top10TV
                  key={index}
                  index={index}
                  id={show.id}
                  imageString={show.imageString}
                  videoSource={show.videoSource}
                  title={show.title}
                  overview={show.overview}
                  cast={show.cast}
                  genres={show.genres}
                  age={show.age}
                  release={show.release}
                  duration={show.duration}
                  watchList={show.WatchLists.length > 0 ? true : false}
                  watchlistId={show.WatchLists[0]?.id  as string}
                  movieId={show.id}
                />
            ))}
          </CarouselModal>
        </div>

        <div>
          <h2 className="relative title sm:text-2xl">Top 10 Movies in Today</h2>
          <CarouselModal
            sliderButtonClass="h-[30vw] sm:h-[22vw] md:h-[17vw] lg:h-[14vw] xl:h-[10.5vw]"
            sliderClass="space-x-1 "
          >
            {data
              .filter(movie => movie.category === "movie")
              .slice(0, 10)
              .map((show,index)=> (
                <Top10TV
                  key={index}
                  index={index}
                  id={show.id}
                  imageString={show.imageString}
                  videoSource={show.videoSource}
                  title={show.title}
                  overview={show.overview}
                  cast={show.cast}
                  genres={show.genres}
                  age={show.age}
                  release={show.release}
                  duration={show.duration}
                  watchList={show.WatchLists.length > 0 ? true : false}
                  watchlistId={show.WatchLists[0]?.id  as string}
                  movieId={show.id}
                />
              ))}
          </CarouselModal>
        </div>
      </div>
    </div>
  );
}