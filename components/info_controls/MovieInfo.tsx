interface infoProps {
  age: number
  fontHD: string
}

export default function MovieInfo({
  age,
  fontHD
}: infoProps) {
  return (
    <>
      <div className='font-semibold text-[#46d369]'>
        100% Match
      </div>
      <div className='text-zinc-400'>
        Episodes
      </div>
      <div className='flex items-center justify-center border py-0 px-1  border-zinc-500 text-zinc-400 cursor-pointer line-clamp-none max-sm:text-xs'>
        {age}+
      </div>
      <div className={`${fontHD} flex items-center border rounded-sm py-0 px-1 border-gray-400  text-gray-400 tracking-widest line-clamp-none`}>
        HD
      </div> 
    </>
  )
}