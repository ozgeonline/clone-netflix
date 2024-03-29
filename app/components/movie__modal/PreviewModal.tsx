import Image from "next/image"
import { PreviewModalInfo } from "./PreviewModalInfo"

interface iAppProps {
  imageString: string
  videoSource: string
  title: string
  overview: string
  //category: string
  cast: string
  genres:string
  age: number
  release:number
  duration:number
  watchList: boolean
  wachtListId: string
  movieId: number
}

export default function PreviewModal({
  imageString,
  videoSource,
  title,
  overview,
  //category,
  cast,
  genres,
  age,
  release,
  duration,
  watchList,
  wachtListId,
  movieId
}: iAppProps) {
  return (
    <div  className="group overflow-hidden">
      <div className="relative h-[17vw] sm:h-[8.3vw] w-[30vw] sm:w-[14.8vw] min-w-[150px] min-h-[85px]">
        <Image
          src={imageString}
          alt={`${title} - ${movieId}.movie poster`}
          className="object-cover rounded-sm"
          fill
          sizes="100%"
          quality={50}
          loading="lazy"
        />
      </div>
      <div 
        className="absolute group-hover:z-50 invisible group-hover:visible group-hover:scale-150
        -top-10 group-first:left-0 lg:group-first:left-5 group-last:right-5
        h-[5em] sm:h-[7em] w-[10em] sm:w-[14em]
        transition-transform ease-in shadow-md shadow-black/90 cursor-pointer "
      >
        <Image
          src={imageString}
          alt={`${title} - ${movieId}.movie big-poster`}
          className="z-50 rounded-t-sm object-cover"
          fill
          sizes="100%"
          quality={50}
          loading="lazy"
        />
        <PreviewModalInfo
          key={movieId}
          //id={id}
          imageString={imageString}
          videoSource={videoSource}
          title={title}
          overview={overview}
          //category={category}
          cast={cast}
          genres={genres}
          age={age}
          release={release}
          duration={duration}
          watchList={watchList}
          wachtListId={wachtListId}
          movieId={movieId}
        />
      </div>
    </div>
  )
}