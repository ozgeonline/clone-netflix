export default function BoxLoading_Animation() {
  return (
    <div 
      className="
        flex items-center justify-start relative top-40 w-full
        px-5 sm:px-[3vw] xl:px-[3.5vw] 
        h-[25vw] sm:h-[20vw] md:h-[13vw] lg:h-[10vw] xl:h-[8.3vw]"
    >
      <div
        className={`
          flex whitespace-nowrap relative 
          gap-x-1 gap-y-[5.5vw] md:gap-y-[5.5vw] lg:gap-y-[4.5vw] xl:gap-y-[4vw]
          h-auto w-auto *:min-w-56 *:bg-[#444] *:rounded-sm
          *:h-[25vw] *:sm:h-[20vw] *:md:h-[13vw] *:lg:h-[10vw] *:xl:h-[8.3vw]`
        }
      >
         {[...Array(7)].map((_, index) => (
          <div 
            key={index} 
            className={`box box-${index} animate-box gap-x-1`} 
            style={{ 
              animationDelay: `${index * .1}s`, 
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

