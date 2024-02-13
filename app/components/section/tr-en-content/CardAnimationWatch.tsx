import prisma from "../../../utils/db"
import Image from "next/image"
import cardData from "@/app/data/card"

// async function getData() {
//   const data = await prisma.card.findMany({
//     select: {
//       id: true,
//       cardTitle: true,
//       cardComment: true,
//       cardImg: true
//     }
//   })
//   return data
// }

export default  function CardAnimationWatch() {
  // const data = await getData()
 
  return (
    <div className="bg-black">
      {cardData.map((card) => (
        <div 
          key={card.id} 
          className={
            `border-t-8 py-16 md:py-[72px] lg:px-5 xl:px-36 flex flex-col lg:flex-row items-center
            ${card.id % 2 !== 0  ? "lg:flex-row-reverse" : "lg:flex-row"}`
          }
        >
            <div className="mx-10 2xl:w-[585px] xl:w-[475px] lg:w-[450px]">
              <h1 className="text-3xl lg:text-5xl text-center lg:text-start font-extrabold">{card.cardTitle}</h1>
              <p className="sm:text-sm text-center md:text-lg lg:text-2xl lg:text-start mt-4">{card.cardComment}</p>
            </div>
            <div className="relative 2xl:w-[580px] 2xl:h-[430px] xl:w-[470px] xl:h-[350px] lg:w-[450px] lg:h-[350px] md:w-[640px] md:h-[480px] sm:w-[560px] sm:h-[420px] w-[350px] h-[280px] flex-shrink">
              <Image 
                src={card.cardImg}
                className="brightness-75"
                quality={50}
                alt="Watch List Img" 
                fill={true}
                loading="lazy"
              />
            </div>
        </div>
      ))}
    </div>
  )
}