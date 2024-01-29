import prisma from "../../utils/db"
import MovieButtons from "../button/MovieButtons"

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
      youtubeString: true,
    }
  })
  return data
}

export default async function MovieVideo() {
  const data = await getData()

  return (
    <div className="h-[55vh] lg:h-[55vh] w-full flex justify-start items-center top-10">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[110vh] object-cover -z-20 brightness-[60%]"
      ></video>
      <div className="absolute -bottom-64 w-screen h-44 bg-none -ms-40 -z-10 shadow-[0_35px_70px_55px_rgba(0,0,0,1)] shadow-[#141414]  transform rotate-180">
      </div>

      <div className="absolute w-[90%] lg:w-[40%] -ml-24 mt-[30rem]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            age={data?.age as number}
            duration={data?.duration as number}
            id={data?.id as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            videoSource={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}