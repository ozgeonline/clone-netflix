interface infoProps {
  age?: number
  fontAge?: string
  fontHD?: string
}

export default function MovieInfo({
  age,
  fontAge,
  fontHD
}: infoProps) {
  return (
    <>
      <div className='font-semibold text-[#46d369]'>
        100% Match
      </div>
      <div className='text-whiteColor_200'>
        Episodes
      </div>
      <div className={`${fontAge} flex items-center justify-center px-1 border border-gray-400 text-whiteColor_100 cursor-pointer line-clamp-none max-sm:text-xs`}>
        {age}+
      </div>
      <div className={`${fontHD} flex items-center rounded-sm px-1 border border-gray-400 text-whiteColor_100 tracking-widest line-clamp-none`}>
        HD
      </div>
    </>
  )
}