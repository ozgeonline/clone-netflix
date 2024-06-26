import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth/next";
import dynamic from 'next/dynamic';

const CarouselModal = dynamic(() => import('@/app/components/slider/slider-modal/CarouselModal'), { ssr: false });
const PreviewModal = dynamic(() => import('@/app/components/movie_modal/PreviewModal'));

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
    <div className="flex flex-col px-5 sm:px-[3vw] xl:px-[3.5vw] relative">
      <h1 className="sm:text-2xl mt-24 mb-5">
        My List
      </h1>
      { data.length > 0 ? (
        <CarouselModal sliderButtonClass={`h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]`} >
          {data.map((movie) => (
            <div key={movie.Movie.id} className="relative w-full h-full max-w-[14.5rem]">
              <PreviewModal
                id={movie.Movie?.id as number}
                imageString={movie.Movie?.imageString as string}
                videoSource={movie.Movie?.videoSource as string}
                title={movie.Movie?.title as string}
                overview={movie.Movie?.overview as string}
                cast={movie.Movie?.cast as string}
                genres={movie.Movie?.genres as string}
                age={movie.Movie?.age as number}
                release={movie.Movie?.release as number}
                duration={movie.Movie?.duration as number}
                watchList={movie.Movie?.WatchLists.length > 0 ? true : false}
                watchlistId={movie.Movie?.WatchLists[0]?.id as string}
                movieId={movie.Movie?.id as number}
                imageCardWrapper={true}
                imageStyle="rounded-sm"
              />
            </div>
          ))}
        </CarouselModal> )
        : <div className="text-[#666] sm:text-lg select-none fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            You haven&acute;t added any titles to your list yet.
          </div>
      }
    </div>
  );
}