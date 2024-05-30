import prisma from "../utils/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import MovieVideo from "../components/movie_modal/MovieVideo";
import dynamic from 'next/dynamic';

const CarouselModal = dynamic(() => import('../components/slider/slider-modal/CarouselModal'), { ssr: false });
const PreviewModal = dynamic(() => import('../components/movie_modal/PreviewModal'));
const Top10TV = dynamic(() => import('../components/slider/Top10TV'));

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
      category:true,
      WatchLists: {
        where: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    take:50
  })
  return data
}

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const initialData = await getData(session?.user?.email as string);
  const movie = initialData[0];

  return (
    <div className="overflow-hidden">
      <MovieVideo
        key={movie.id}
        id={movie.id}
        imageString={movie.imageString}
        videoSource={movie.videoSource}
        title={movie.title}
        overview={movie.overview}
      />
    
      <div className="w-full flex flex-col px-5 sm:px-[3vw] xl:px-[3.5vw] -mt-[20vw] md:-mt-[15vw] lg:-mt-36 pb-24 space-y-1 sm:space-y-4 lg:space-y-8 xl:space-y-12 mb-14">
        <Section title="New on Netflix" movies={initialData.filter(movie => movie.release === 2024)} />
        <SectionTop10 title="Top 10 TV Shows Today" movies={initialData.filter(movie => movie.category === "show").slice(0, 10)} />
        <Section title="Family Time TV" movies={initialData.filter(movie => movie.age < 13)} />
        <Section title="Comedy Movies" movies={initialData.filter(movie => movie.category === "movie" && movie.genres.toLowerCase().includes("comedy"))} />
        <SectionTop10 title="Top 10 Movies Today" movies={initialData.filter(movie => movie.category === "movie").slice(0, 10)} />
        <Section title="TV Dramas" movies={initialData.filter(movie => movie.category === "show" && movie.genres.toLowerCase().includes("dramas"))} />
        <Section title="Get In On the Action" movies={initialData.filter(movie => movie.genres.toLowerCase().includes("action"))} />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  movies: any[];
}

const Section: React.FC<SectionProps> = ({ title, movies }) => (
  <div>
    <h2 className="relative title sm:text-2xl">{title}</h2>
    <CarouselModal
      sliderButtonClass="h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
      sliderClass="space-x-1 sm:space-x-2"
    >
      {movies.map(movie => (
        <div className="relative w-full h-full" key={movie.id} aria-label={`${movie.id}.Slider-item`}>
          <PreviewModal
            key={movie.id}
            id={movie.id}
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
            watchlistId={movie.WatchLists[0]?.id as string}
            movieId={movie.id}
            imageCardWrapper={true}
            imageStyle="rounded-sm"
          />
        </div>
      ))}
    </CarouselModal>
  </div>
);

const SectionTop10: React.FC<SectionProps> = ({ title, movies }) => (
  <div>
    <h2 className="relative title sm:text-2xl">{title}</h2>
    <CarouselModal
      sliderButtonClass="h-[30vw] sm:h-[22vw] md:h-[17vw] lg:h-[14vw] xl:h-[10.5vw]"
      sliderClass="space-x-1"
    >
      {movies.map((movie,index) => (
        <Top10TV
          key={index}
          index={index}
          id={movie.id}
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
);
