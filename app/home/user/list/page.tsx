import PreviewModal from "@/app/components/movie_modal/PreviewModal";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth/next";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
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
          WatchLists: true,
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
    <div className="flex flex-col  px-5 sm:px-[3vw] xl:px-[3.5vw] relative">
      <h1 className="text-white text-3xl mt-24 ">
        My List
      </h1>
      {data.length > 0 ?
        <CarouselModal>
          {data.map((movie,index) => (
            <div className="relative w-full h-full max-w-[14.5rem]" key={index}>
              <PreviewModal
                id={movie.Movie.id}
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
                watchlistId={movie.Movie.WatchLists[0]?.id as string}
                movieId={movie.Movie.id}
                imageWrapperStyle="w-auto h-[8rem]"
                imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
              />
            </div>
          ))}
        </CarouselModal> 
        : <div className="text-[#666] sm:text-lg select-none fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            You haven&acute;t added any titles to your list yet.
          </div>
      }
    </div>
  );
}