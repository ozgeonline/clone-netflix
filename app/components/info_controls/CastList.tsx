interface castProps {
  cast: string
}

export default function CastList({cast}: castProps) {
  const casts = cast.split(",")
  return (
    <>
     {casts.map((item, index) => (
        <div key={index} className='flex items-center'>
          <div className="hover:cursor-pointer hover:underline text-zinc-200 text-xs sm:text-sm">
            {item}
          </div>
          {index !== casts.length - 1 && <span className='text-zinc-200'>,</span>}
        </div>
      ))}
    </>
  )
}