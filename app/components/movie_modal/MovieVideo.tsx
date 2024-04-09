"use client"

import MovieButtons from "./MovieVideoButtons"
import VideoModal from "./VideoModal"

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
    <div className="flex justify-start items-center w-screen h-auto">
      <div className="flex relative top-0 w-full h-[80vw] md:h-[75vh] lg:h-[110vh]">
        <VideoModal
          poster={imageString}
          source={videoSource} 
          alt={`${title}-video player`}
        />
        <div className="absolute w-full bottom-0 bg-none -z-10 shadow-[0_15px_30px_70px_rgba(0,0,0,1)] shadow-[#141414] transform rotate-180">
        </div>
      </div>

      <div className="absolute w-[70%] lg:w-[40%] pl-[3vw] mt-[7vw] space-y-1 lg:space-y-4">
        <div className="text-white text-[5vw] sm:text-[3vw] line-clamp-1 font-bold">
          {title}
        </div>
        <div className="text-white text-sm sm:text-lg hidden lg:line-clamp-2">
          {overview}
        </div>
        <div className="flex flex-col relative">
          <MovieButtons
            key={id}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
