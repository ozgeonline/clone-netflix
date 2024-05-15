'use client'

import React, { useState } from 'react';
import SortBySelect from '@/app/components/modals/select_modal/SortBySelect';
import PreviewModal from '../../movie_modal/PreviewModal';

interface Movie {
  id: number;
  title: string;
  imageString: string;
  videoSource: string;
  overview: string;
  release: number;
  duration: number;
  age: number;
  cast: string;
  genres: string;
  category: string;
  WatchLists: WatchList[];
  watchlistId:string;
  movieId: number;
}
interface WatchList {
  id: string;
  userId: string;
}
interface CategoryPageProps {
  data: Movie[];
}

const CategoryPageWrapper: React.FC<CategoryPageProps> = ({ data }) => {
  const [sortedData, setSortedData] = useState<Movie[]>(data);

  return (
    <CategoryPage data={sortedData} onSortedData={setSortedData} />
  );
};

const CategoryPage: React.FC<{ data: Movie[], onSortedData: (sortedData: Movie[]) => void }> = ({ data, onSortedData }) => {
  return (
    <div>
      <div className="top-24 relative px-5 sm:px-[3vw] xl:px-[3.5vw]">
        <div className="flex justify-between mb-24">
          <h1 className="sm:text-3xl">
            Browse by Languages
          </h1>
          <SortBySelect data={data} onSortedData={onSortedData} />
        </div>

        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
          gap-x-[0.4vw] gap-y-[7.5vw] md:gap-y-[5.5vw] lg:gap-y-[4.5vw] xl:gap-y-[4vw]"
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
                watchList={Array.isArray(movie.WatchLists) && movie.WatchLists.length > 0}
                watchlistId={Array.isArray(movie.WatchLists) && movie.WatchLists[0]?.id}
                movieId={movie.id}
                imageWrapperStyle="flex w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
                imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPageWrapper;
