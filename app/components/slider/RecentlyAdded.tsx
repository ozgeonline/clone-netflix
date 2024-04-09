import prisma from "../../utils/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../utils/auth"
import CarouselModal from "./slider-modal/CarouselModal"
import PreviewModal from "../movie_modal/PreviewModal"

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
      WatchLists:true,
      // WatchLists: {
      //   where: {
      //     userId: userId,
      //   },
      // },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 2
  })
  return data
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string)

  return (
    <div className="w-screen">
      <h1 className="sm:text-2xl">New Releases</h1>
      <CarouselModal>
        {data.map((movie) => (
          <PreviewModal 
            key={movie.id}
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
    </div>
  )
}