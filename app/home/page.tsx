import prisma from "../utils/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../utils/auth"
import dynamic from 'next/dynamic';
import React  from 'react';
import "./home.css"
import "../components/card_modals/card.css"
import "../components/carousel__modal/carousel.css"
import { CardProvider } from "../components/card_modals/CardContext";
// import ContinueWatchingCard from "../components/card_modals/continue-watching-card__modal/ContinueWatchingCard";
import { VideoProvider } from "../components/movie__modal/VideoContext";
import ContinueWatchingCardModal from "../components/card_modals/continue-watching-card__modal/ContinueWatchingCard-ui";
import ContinueWatchingSection from "../components/card_modals/continue-watching-card__modal/ContinueWatchingSection";

const MovieVideo = dynamic(() => import("../components/movie__modal/MovieVideo"), { suspense: true });
const CarouselModal = dynamic(() => import('../components/carousel__modal/CarouselModal'), { ssr: false, suspense: true });
const PreviewCard = dynamic(() => import('../components/card_modals/PreviewCard'), { suspense: true });
const Top10TV = dynamic(() => import('../components/card_modals/Top10TV'), { suspense: true });

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
      createdAt: "desc",
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
    <>
      <div className="overflow-hidden ">
        
        <VideoProvider>
          <MovieVideo
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
            />

          <div className="padding-layout sectionsWrapper space-y-1 sm:space-y-4 lg:space-y-8 xl:space-y-12 mb-14 relative">
            <CardProvider>
              <CarouselModal
                sliderButtonSection={true}
                source={movie.videoSource}
                id={initialData.map(movie => movie.id)}
                key={initialData.map(movie => movie.id).join('-')}
                sectionTitle="Continue" filterWatchedVideos={true}
                title={initialData.map(movie => movie.title).join(', ')}
              >
                {initialData.map((data) => (
                  <div 
                    key={data.id}
                    className="w-auto h-full"
                    aria-label={`${data.id} : homepage`}
                    >
                    <ContinueWatchingCardModal 
                      videoSource={data.videoSource}
                      imageString={data.imageString}
                      title={data.title}
                      id={data.id}         
                      alt={`${data.id}:Continue Watching Video`}     
                    />
                  </div>
                ))}
              </CarouselModal>
              </CardProvider>
           
           
            <>
              <Section 
                sectionTitle="New"
                // title={initialData.filter(movie => movie.release === 2024).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.release === 2024)}
              />
              <SectionTop10 
                sectionTitle="Top 10 TV Shows Today"
                // title={initialData.filter(movie => movie.category === "show").slice(0, 10).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.category === "show").slice(0, 10)}
              />
              <Section 
                sectionTitle="Family Time TV" 
                // title={initialData.filter(movie => movie.age < 13).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.age < 13)}
              />
              <Section 
                sectionTitle="Comedy Movies" 
                // title={initialData.filter(movie => movie.category === "movie" && movie.genres.toLowerCase().includes("comedy")).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.category === "movie" && movie.genres.toLowerCase().includes("comedy"))}
              />
              <SectionTop10 
                sectionTitle="Top 10 Movies Today" 
                // title={initialData.filter(movie => movie.category === "movie").slice(0, 10).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.category === "movie").slice(0, 10)}
              />
              <Section 
                sectionTitle="TV Dramas" 
                // title={initialData.filter(movie => movie.category === "show" && movie.genres.toLowerCase().includes("dramas")).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.category === "show" && movie.genres.toLowerCase().includes("dramas"))}
              />
              <Section 
                sectionTitle="Get In On the Action" 
                // title={initialData.filter(movie => movie.genres.toLowerCase().includes("action")).map(movie => movie.title).join(', ')}
                movies={initialData.filter(movie => movie.genres.toLowerCase().includes("action"))}
              />
            </>
          </div>
        </VideoProvider>
      </div>
    </>
  );
}

interface SectionProps {
  sectionTitle: string;
  movies: any[];
}

const Section: React.FC<SectionProps> = ({ sectionTitle, movies }) => (
  
  <CardProvider>
    <CarouselModal
      // filterWatchedVideos={false}
      sliderButtonSection={true}
      sectionTitle={sectionTitle}
      id={movies.map(movie => movie.id)}
      key={movies.map(movie => movie.id).join('-')}
      // title={movies.map(movie => movie.title).toString()}
    >
      {movies.map(movie => (
        <div 
          key={movie.id} 
          className="relative w-full h-full"
          aria-label={`Section -- ${movie.id}.Slider-item`}
        >
          <PreviewCard
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
  </CardProvider>
);

const SectionTop10: React.FC<SectionProps> = ({ sectionTitle, movies }) => (
  <CardProvider>
    <CarouselModal
      sliderButtonSectionTop10={true}
      sectionTitle={sectionTitle}
      id={movies.map(movie => movie.id)}
      key={movies.map(movie => movie.id).join('-')}
      // title={movies.map(movie => movie.title).toString()}
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
  </CardProvider>
);
