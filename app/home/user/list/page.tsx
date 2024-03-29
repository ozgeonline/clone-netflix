import PreviewModal from "@/app/components/movie__modal/PreviewModal";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
   
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: {
            where: {
              userId: userId,
            },
          },
          videoSource: true,
          cast: true,
          genres: true,
          category: true,
        }
      }
    }
  })
  return data
}

export default async function Watchlist() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <div className="flex flex-col pl-5 sm:pl-16 relative">
      <h1 className="text-white text-3xl mt-24 ">
        My List
      </h1>
      <CarouselModal>
        {data.map((movie) => (
          <PreviewModal 
            key={movie.Movie.id}
            //id={movie.Movie.id}
            imageString={movie.Movie.imageString}
            videoSource={movie.Movie.videoSource}
            title={movie.Movie.title}
            overview={movie.Movie.overview}
            //category={movie.Movie.category}
            cast={movie.Movie.cast}
            genres={movie.Movie.genres}
            age={movie.Movie.age}
            release={movie.Movie.release}
            duration={movie.Movie.duration}
            watchList={movie.Movie.WatchLists.length > 0 ? true : false}
            wachtListId={movie.Movie.WatchLists[0]?.id  as string}
            movieId={movie.Movie.id}
          />
        ))}
      </CarouselModal>
    </div>
  );
}