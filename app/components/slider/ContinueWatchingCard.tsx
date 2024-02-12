
import prisma from "../../utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"
import { redirect } from "next/navigation"
import VideoPlayer from "./ContinueWatching"

async function getData(userId:string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      videoSource: true,
      imageString: true,
      WatchHistory: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3
  })
  return data
}

export default async function ContinueWatchingCard() {
  
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)
  
  if(!session) {
    redirect("/tr-en")
  }

  return (
   <div className="flex gap-x-2 ms-20 xl:ms-0">
    {data.map((movie) => (
      <VideoPlayer key={movie.id} videoUrl={movie.videoSource} imageString={movie.imageString} />
    ))}
   </div>
  )
}