import Image from "next/image"
import prisma from "../../utils/db"
import { MovieCard } from "../section/movie-modal/MovieCard"
import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"

async function getData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      cast:true,
      genres: true,
      category: true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
      imageString: true,
      videoSource: true,
      age: true,
      release: true,
      duration: true,
    
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4
  })
  return data
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)

  return (
    <div className="mb-52">
      <h1 className="text-2xl font-bold  ">Recently Added</h1>
      <div className="flex flex-row mt-3 space-x-1">
        {data.map((movie) => (
          <div key={movie.id} className="relative h-[131px] w-[233px]">
            <Image
              src={movie.imageString}
              alt="Movie"
              className="rounded-sm object-cover"
              fill
              sizes="100%"
              quality={50}
              loading="lazy"
            />

            <div className="h-60 relative z-10 w-full transition duration-500 hover:scale-x-[1.4] hover:scale-y-[1.5] opacity-0 hover:opacity-100 hover:shadow-md shadow-black hover:cursor-pointer">
              <div className="z-10 w-full h-full rounded-md flex items-center justify-center ">
                <Image
                  src={movie.imageString}
                  alt="Movie"
                  width={800}
                  height={800}
                  sizes="100%"
                  quality={50}
                  priority
                  className="absolute w-full h-3/5 top-0 -z-10 rounded-t-md object-cover hover:cursor-pointer"
                />

                <MovieCard
                  movieId={movie.id}
                  key={movie.id}
                  overview={movie.overview}
                  title={movie.title}
                  wachtListId={movie.WatchLists[0]?.id}
                  videoSource={movie.videoSource}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  age={movie.age}
                  year={movie.release}
                  time={movie.duration}
                  cast={movie.cast}
                  genre={movie.genres}
                  category={movie.category}
                  imageString={movie.imageString}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}