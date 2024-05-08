"use client"
import PreviewModal from "../movie_modal/PreviewModal"

interface recentProps {
  id:number
  imageString: string
  videoSource: string
  title: string
  overview: string
  cast: string
  genres:string
  age: number
  release:number
  duration:number
  watchList: boolean
  watchlistId: string
  movieId: number
}


export default function RecentlyAdded({
  id,
  imageString,
  videoSource,
  title,
  overview,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  watchlistId,
  movieId
}: recentProps) {
 
  return (
    <div className="relative w-full h-full group "  aria-label={`${id}.Slider-item`} >
      <PreviewModal
        key={id}
        id={id}
        imageString={imageString}
        videoSource={videoSource}
        title={title}
        overview={overview}
        cast={cast}
        genres={genres}
        age={age}
        release={release}
        duration={duration}
        watchList={watchList}
        watchlistId={watchlistId}
        movieId={movieId}
        imageWrapperStyle="w-auto h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
        imageStyle="rounded-sm max-lg:brightness-75 w-full h-full"
        
      />
    </div>
  )
}