import MovieVideo from "../components/movie-modal/MovieVideo"
import RecentlyAdded from "../components/slider/RecentlyAdded"
// import OnlyNetflix from "../components/slider/OnlyNetflix"
// import MyList from "../components/slider/MyList"
// import TvComedies from "../components/slider/TvComedies"
// import ComedyMovies from "../components/slider/ComedyMovies"
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import { Dialog } from "@/components/ui/dialog"
import { ReactNode } from "react"

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      age: true,
      title:true
    
    },
  })
  return data
}

export default async function HomePage({children} : {children: ReactNode}) {


  return (
    <>
      <MovieVideo />
      <div className="ml-5 lg:ml-14 -mt-20 lg:-mt-36 space-y-8 w-full">
        <ContinueWatchingCard/>
        {/* <OnlyNetflix />
        <MyList />
        <TvComedies />
        <ComedyMovies />
         */}
         <RecentlyAdded>
          {children}
         </RecentlyAdded>
        
      </div>
    </>
  );
}