// import { getServerSession } from "next-auth"
import prisma from "../../../utils/db"
import MovieButtons from "./MovieButtons"
// import { authOptions } from "@/app/utils/auth"

const userId = ""

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      cast: true,
      genres: true,
      category: true,
      WatchLists: {
        where: {
          userId: userId
        },
      },
    }
  })
  return data
}

export default async function MovieVideo() {
  // const session = await getServerSession(authOptions)
  const data = await getData()

  return (
    <div className="w-screen h-auto flex justify-start items-center">
      <div className="relative top-0 flex w-full h-[55vh] lg:h-[110vh]">
        <video
          poster={data?.imageString}
          src={data?.videoSource}
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          className="w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%] "
        ></video>
      </div>
      <div className="absolute top-[404px] lg:top-[810px] w-screen h-44 bg-none -z-10 shadow-[0_35px_70px_55px_rgba(0,0,0,1)] shadow-[#141414]  transform rotate-180">
      </div>

      <div className="absolute w-[90%] lg:w-[40%] ml-5 lg:ml-14 mt-10 lg:mt-28">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-sm lg:text-lg mt-2 lg:mt-5 line-clamp-2">
          {data?.overview}
        </p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            key={data?.id}
            age={data?.age as number}
            duration={data?.duration as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            videoSource={data?.videoSource as string}
            cast={data?.cast as string}
            genre={data?.genres as string}
            category={data?.category as string}
            imageString={data?.imageString as string}
            
            movieId={data?.id as number}
            wachtListId={data?.WatchLists[0]?.id as string}
            watchList={data?.WatchLists && data.WatchLists.length > 0 ? true : false}
            id={data?.WatchLists[0]?.movieId as number}
          />
        </div>
      </div>
    </div>
  );
}
