
import prisma from "../../utils/db"
import { getServerSession } from "next-auth"
import { authOptions } from "../../utils/auth"
import { redirect } from "next/navigation"
import VideoPlayer from "./ContinueWatching"
// import dynamic from 'next/dynamic';
// const VideoPlayer = dynamic(() => import('./ContinueWatching'), { ssr: false });

async function getData(userId:string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      videoSource: true,
      WatchHistory: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10
  })
  return data
}

export default async function ContinueWatchingCard() {
  
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)
  
  if(!session) {
    redirect("/tr-en")
  }

  // const handleVideoEnd = (index: number) => {
  //   console.log(`Video at index ${index} has ended. `);
  // };
 


  return (
   <div className="flex gap-x-2 ms-20 xl:ms-0">
    {data.map((movie,index) => (
      <VideoPlayer key={movie.id} videoUrl={movie.videoSource}/>
    ))}
   </div>
  )
}