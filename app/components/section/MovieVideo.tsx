import { getServerSession } from "next-auth"
import prisma from "../../utils/db"
import MovieButtons from "../button/MovieButtons"
import { authOptions } from "@/app/utils/auth"
import { useRef } from "react"

async function getData(userId: string) {
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
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)

  return (
    <div className="h-[55vh] lg:h-[55vh] w-full flex justify-start items-center top-10">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[110vh] object-cover -z-20 brightness-[60%]"
      ></video>
      <div className="absolute -bottom-64 w-screen h-44 bg-none -ms-40 -z-10 shadow-[0_35px_70px_55px_rgba(0,0,0,1)] shadow-[#141414]  transform rotate-180">
      </div>

      <div className="absolute w-[90%] lg:w-[40%] -ml-24 mt-[30rem]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
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

            movieId={data?.id as number}
            wachtListId={data?.WatchLists[0]?.id as string}
            watchList={data?.WatchLists && data.WatchLists.length > 0 ? true : false}
            id={data?.WatchLists[0]?.movieId as number} 
            imageString={data?.imageString as string}
          />
        </div>
      </div>
    </div>
  );
}
