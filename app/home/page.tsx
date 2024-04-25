import prisma from "../utils/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"

import CarouselModal from "../components/slider/slider-modal/CarouselModal"
import MovieVideo from "../components/movie_modal/MovieVideo"
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard"
import RecentlyAdded from "../components/slider/RecentlyAdded"
import Top10TV from "../components/slider/Top10TV"

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
    // orderBy: {
    //   createdAt: "desc",
    // },
    take: 10
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
      <div className="w-full flex flex-col 
      px-5 sm:px-[3vw] xl:px-[3.5vw]
      pb-96 -mt-[20vw] md:-mt-[15vw] lg:-mt-36">
        <h1 className="text-base sm:text-2xl group relative cursor-pointer mb-3">
          Continue Watching for you
          <span className="absolute -bottom-[2px] text-[1vw] font-semibold text-[#54b9c5] left-72 opacity-0 group-hover:opacity-100 transition-opacity ease-linear">
            {`Explore All >`}
          </span>  
        </h1>
        <ContinueWatchingCard />

        <h2 className="sm:text-2xl mb-3 bg-red-400">New Releases</h2>
        <CarouselModal>
          {data.map((movie)=> (
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
              watchlistId={movie.WatchLists[0]?.id  as string}
              movieId={movie.id}
            />
          ))}
        </CarouselModal>        
        
        
        {/* <h2 className="sm:text-2xl mb-3">Top 10 TV Shows in Today</h2>
        <CarouselModal>
          {data
            .filter(movie => movie.category === "show")
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

        <h2 className="sm:text-2xl mb-3">Top 10 Movies in Today</h2>
        <CarouselModal>
          {data
            .filter(movie => movie.category === "movie")
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
        </CarouselModal> */}
      </div>
    </div>
  );
}