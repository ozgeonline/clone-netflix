import svgDataArray from "./slider-modal/SvgData"
import PreviewModal from "../movie_modal/PreviewModal"

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
    <div className="relative flex w-full h-auto max-h-[25vw] sm:max-h-[20vw] md:max-h-[15vw] lg:max-h-[12vw]
   
    px-2">
      <svg
        id={svgDataArray[index].id}
        width={svgDataArray[index].width}
        height={svgDataArray[index].height}
        viewBox={svgDataArray[index].viewBox}
        className={svgDataArray[index].className}
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
        imageWrapperStyle={"w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[11vw] xl:w-[8vw] h-full"}
        imageStyle={"rounded-e-sm max-lg:brightness-75w-full h-full"}
      />
    </div>
  )
}