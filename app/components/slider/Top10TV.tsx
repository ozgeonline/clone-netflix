import svgDataArray from "./slider-modal/SvgData"
import dynamic from 'next/dynamic'

const PreviewModal = dynamic(() => import("../movie_modal/PreviewModal"));

interface top10Props {
  index:number
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

export default function Top10TVShows({
  index,
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
}: top10Props) {

  return (
    <div className="relative flex w-full h-[30vw] sm:h-[22vw] md:h-[17vw] lg:h-[14vw] xl:h-[10.5vw] sm:px-1 group">
      <svg
        id={svgDataArray[index].id}
        width={svgDataArray[index].width}
        height={svgDataArray[index].height}
        viewBox={svgDataArray[index].viewBox}
        className={`${svgDataArray[index].className}`}
      >
        <path
          stroke={svgDataArray[index].stroke}
          strokeLinejoin={svgDataArray[index].strokeLinejoin}
          strokeWidth={svgDataArray[index].strokeWidth}
          d={svgDataArray[index].pathData}
        ></path>
      </svg>
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
        top10Wrapper={true}
        imageStyle="rounded-e-sm"
      />
    </div>
  )
}