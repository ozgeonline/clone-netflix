"use client"

import MovieButtons from "./MovieVideoButtons"
import VideoModal from "./VideoModal";

type videoProps = {
  id:number
  imageString: string
  videoSource:string
  title: string
  overview: string
}

export default function MovieVideo({
  id,
  imageString,
  videoSource,
  title,
  overview,
}: videoProps) {

  return (
    <div className="flex justify-start items-center w-full h-auto">
      <div className="flex relative top-0 left-0 w-full h-[80vw] md:h-[75vh] lg:h-[110vh]">
        <VideoModal
          imageString={imageString}
          source={videoSource} 
          alt={`${title}-video player`}
        />
      </div>
      <div className="absolute w-[70%] lg:w-[40%] pl-5 sm:pl-[3vw] xl:pl-[3.5vw] mt-[7vw] space-y-1 lg:space-y-4">
        <p className="text-white text-[5vw] sm:text-[3vw] line-clamp-1 font-bold">
          {title}
        </p>
        <p className="text-white text-sm sm:text-lg hidden lg:line-clamp-2">
          {overview}
        </p>
        <div className="relative">
          <MovieButtons key={id} title={title}/>
        </div>
      </div>
    </div>
  );
}
