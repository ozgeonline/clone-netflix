import MovieVideo from "@/app/components/movie_modal/MovieVideo";
import CarouselModal from "@/app/components/slider/slider-modal/CarouselModal";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth/next";
import PreviewModal from "@/app/components/movie_modal/PreviewModal";
import CategoryPageClient from "../../components/modals/select_modal/CategoryPageClient";

async function getData(category: string, userId: string, sortOrder: 'default' | 'asc' | 'desc', query: string ) {

  const selectFields = {
    id: true,
    title: true,
    imageString: true,
    videoSource: true,
    overview: true,
    release: true,
    duration: true,
    age: true,
    cast: true,
    genres: true,
    category: true,
    WatchLists: {
      where: { 
        userId: userId
      }
    }
  }
  

  switch (category) {
    case "shows": {
      const data = await prisma.movie.findMany({
        where: { category: "show" },
        select: selectFields,
      })
      return data
    }
    case "movies": {
      const data = await prisma.movie.findMany({
        where: { category: "movie" },
        select: selectFields,
      })
      return data
    }
    case "new": {
      const data = await prisma.movie.findMany({
        where: { release : 2024 },
        select: selectFields,
      })
      return data
    }
    case "audio": {
      const data = await prisma.movie.findMany({
        select: selectFields,
        orderBy: sortOrder === 'asc' || sortOrder === 'desc' ? { title: sortOrder } : undefined
      })
      return data
    }
    case "query": {
      const data = await prisma.movie.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive'} },
            { genres: { contains: query, mode: 'insensitive'} } 
          ]
        },
        select: selectFields,
      })
      return data
    }
    case "kids": {
      const data = await prisma.movie.findMany({
        where: { age : {lte:7} },
        select: selectFields,
      })
      return data
    }
    default: {
      throw new Error("Invalid Category");
    }
  }
}

const normalizeTurkishCharacters = (str: string) => {
  return str
    .replace(/ö/g, "o")
    .replace(/Ö/g, "O")
    .replace(/ç/g, "c")
    .replace(/Ç/g, "C")
    .replace(/ş/g, "s")
    .replace(/Ş/g, "S")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/ğ/g, "g")
    .replace(/Ğ/g, "G");
};

type CategoryPageProps = {
  params: {
    genre?: string;
    title?: string;
  };
  searchParams: {
    sortOrder?: 'default' | 'asc' | 'desc';
    query?: string 
  };
};
export default async function CategoryPage({
    params,
    searchParams
  }: CategoryPageProps) {

    const session = await getServerSession(authOptions)
    const sortOrder = searchParams.sortOrder || 'default';
    const query = searchParams.query
    const data = await getData(params.genre, session?.user?.email as string, sortOrder, query)
    const movie = data[0]
        
    data.forEach((movie) => {
      movie.title = normalizeTurkishCharacters(movie.title);
    });

    if(sortOrder !== 'default') {
      data.sort((a, b) => 
        sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    }

  
  return (
    <div>
      {
      params.genre === "audio" ? (
        <div className="top-14 sm:top-24 relative px-5 sm:px-[3vw] xl:px-[3.5vw]">
          <div className="flex max-sm:flex-col max-sm:space-y-2 sm:justify-between sm:items-center mb-14 sm:mb-24 ">
            <h1 className="text-2xl md:text-3xl">
              Browse by sort
            </h1>
            <CategoryPageClient initialData={data} initialSortOrder={sortOrder} title={params.title} />
          </div>

          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[0.4vw] gap-y-[5.5vw] md:gap-y-[5.5vw] lg:gap-y-[4.5vw] xl:gap-y-[4vw]"
          >
            {data.map((movie) => (
              <div key={movie.title} className="relative w-full">
                <PreviewModal
                  key={movie.id}
                  id={movie.id}
                  imageString={movie.imageString}
                  videoSource={movie.videoSource}
                  title={movie.title}
                  overview={movie.overview}
                  age={movie.age}
                  cast={movie.cast}
                  genres={movie.genres}
                  release={movie.release}
                  duration={movie.duration}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  watchlistId={movie.WatchLists[0]?.id as string}
                  movieId={movie.id}
                  imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                  imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
                />
              </div>
            ))}
          </div>
       </div>
      
      ) :
      params.genre === "query" && data.length>0 ? (
        <div className="relative px-5 sm:px-[3vw] xl:px-[3.5vw] top-20">
          <CarouselModal
            sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
            sliderClass="space-x-1 sm:space-x-2"
          >
            {data.map((movie) => (
              <div key={movie.id} className="relative w-full h-full max-w-[14.5rem]">
                <PreviewModal
                  key={movie.id}
                  id={movie.id}
                  imageString={movie.imageString}
                  videoSource={movie.videoSource}
                  title={movie.title}
                  overview={movie.overview}
                  age={movie.age}
                  cast={movie.cast}
                  genres={movie.genres}
                  release={movie.release}
                  duration={movie.duration}
                  watchList={movie.WatchLists.length > 0 ? true : false}
                  watchlistId={movie.WatchLists[0]?.id as string}
                  movieId={movie.id}
                  imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                  imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
                />
              </div>
            ))}
          </CarouselModal>
        </div>
      ) :
      params.genre === "query" && data.length<=0 ? (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs space-y-2">
          <p>{`Your search for "${query}" did not have any matches.`}</p>
          <p>Suggestions:</p>
          <ul className="list-disc ml-10">
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try using a movie, TV show title</li>
            <li>Try a genre, like comedy, romantic, sports, or drama</li>
          </ul>
        </div>
      ):(
        <>
          {movie &&  params.genre !== "new" && (
            <MovieVideo
              key={movie.id}
              id={movie.id}
              imageString={movie.imageString} 
              videoSource={movie.videoSource} 
              title={movie.title} 
              overview={movie.overview} 
            />
          )}

          <div 
            className={`${params.genre === "new" ? "top-28" : "top-0"} relative px-5 sm:px-[3vw] xl:px-[3.5vw]`}
          >
            <h1 className="relative title sm:text-xl">
              {
                params.genre === "new" ? "New on Netflix" : 
                params.genre === "kids" ? "We Think You’ll Love These" : 
                movie.category === "show" ? "Popular TV Series" :
                movie.category === "movie" ? "Popular Movie Series" : 
                "Netflix Series"
              }
            </h1>
            <CarouselModal
              sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
              sliderClass="space-x-1 sm:space-x-2"
            >
              {data.map((movie) => (
                <div key={movie.id} className="relative w-full h-full max-w-[14.5rem]">
                  <PreviewModal 
                    key={movie.id}
                    id={movie.id}
                    imageString={movie.imageString}
                    videoSource={movie.videoSource}
                    title={movie.title}
                    overview={movie.overview}
                    age={movie.age}
                    cast={movie.cast}
                    genres={movie.genres}
                    release={movie.release}
                    duration={movie.duration}
                    watchList={movie.WatchLists.length > 0 ? true : false}
                    watchlistId={movie.WatchLists[0]?.id as string}
                    movieId={movie.id}
                    imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                    imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
                  />
                </div>
              ))}
            </CarouselModal>
          </div>
        </>
      )}
    </div>
  )
}