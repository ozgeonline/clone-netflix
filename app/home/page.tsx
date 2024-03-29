import MovieVideo from "../components/movie__modal/MovieVideo"
import RecentlyAdded from "../components/slider/RecentlyAdded"
// import OnlyNetflix from "../components/slider/OnlyNetflix"
// import MyList from "../components/slider/MyList"
// import TvComedies from "../components/slider/TvComedies"
// import ComedyMovies from "../components/slider/ComedyMovies"
import ContinueWatchingCard from "../components/slider/ContinueWatchingCard"
import prisma from "../utils/db"

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
      //category: true,
      WatchLists: {
        where: {
          userId: userId
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })
  return data
}

export default async function HomePage() {
  const data = await getData()

  return (
    <div className="w-screen">
      <MovieVideo
        key={data?.id}
        imageString={data?.imageString}
        videoSource={data?.videoSource}
        title={data?.title}
        overview={data?.overview}
        //category={data?.category} 
        cast={data?.cast}
        genres={data?.genres}
        age={data?.age}
        release={data?.release}
        duration={data?.duration}
        watchList={data?.WatchLists && data.WatchLists.length > 0 ? true : false}
        wachtListId={data?.WatchLists[0]?.id}
        movieId={data?.id} 
         
      />
      <div className="w-screen pl-[3vw] pb-96 -mt-[20vw] md:-mt-[15vw] lg:-mt-36 space-y-6 sm:space-y-8">
        <ContinueWatchingCard />
        <RecentlyAdded />
        {/* <OnlyNetflix />
        <MyList />
        <TvComedies />
        <ComedyMovies />
         */}
         

      </div>
    </div>
  );
}