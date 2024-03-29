import Image from "next/image"
import cardData from "@/app/data/card"

export default  function CardAnimationWatch() {
 
  return (
    <div className="bg-black">
      {cardData.map((card) => (
        <div 
          key={card.id} 
          className={
            `border-t-8 py-16 md:py-[72px] lg:px-5 xl:px-36 flex flex-col lg:flex-row items-center
            ${card.id % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`
          }
        >
          <div className="mx-10 2xl:w-[585px] xl:w-[475px] lg:w-[450px]">
            <h1 className="text-3xl lg:text-5xl text-center lg:text-start font-extrabold">{card.cardTitle}</h1>
            <div className="sm:text-sm text-center md:text-lg lg:text-2xl lg:text-start mt-4">{card.cardComment}</div>
          </div>
          <div className="relative flex-shrink">
            <Image 
              src={card.cardImg}
              className="brightness-75 w-full h-auto"
              quality={50}
              alt={`Watch List Img-${card.id}`}
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}