
import prisma from "../../utils/db"
import VideoPlayer from "./ContinueWatching"

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      videoSource: true,
      imageString: true
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 2
  })
  return data
}

export default async function ContinueWatchingCard() {
  const data = await getData()

  return (
   <div className="flex flex-col">
    <h1 className="text-base sm:text-2xl mb-2 group relative cursor-pointer">
      Continue Watching for you
      <span 
      className="absolute -bottom-[2px] text-[1vw] font-semibold text-[#54b9c5] left-72 opacity-0 group-hover:opacity-100 transition-opacity ease-linear">
        {`Explore All >`}
      </span>  
    </h1>
    <div className="flex flex-row gap-x-2">
      {data.map((movie,index) => (
        <VideoPlayer key={index} videoUrl={movie.videoSource} imageString={movie.imageString} />
      ))}
    </div>
   </div>
  )
}