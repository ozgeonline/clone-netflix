
import prisma from "../../utils/db"
// import { getServerSession } from "next-auth"
// import { authOptions } from "../../utils/auth"
// import { redirect } from "next/navigation"
import VideoPlayer from "./ContinueWatching"

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      videoSource: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3
  })
  return data
}

export default async function ContinueWatchingCard() {
  const data = await getData()

  return (
   <div className="flex gap-x-2 ms-20 xl:ms-0">
    {data.map((movie,index) => (
      <VideoPlayer key={index} videoUrl={movie.videoSource} />
    ))}
   </div>
  )
}