import prisma from "../utils/db"
import Image from "next/image"

async function getData() {
  const data = await prisma.card.findMany({
    select: {
      id: true,
      cardTitle: true,
      cardComment: true,
      cardImg: true
    }
  })
  return data
}

export default async function CardAnimationWatch() {

  const data = await getData()
 
  return (
    <div className="">
    {data.map((card) => (
      <div 
        key={card.id} 
        className={`
          border-t-8 md:py-[72px] xl:px-36 lg:px-5 flex flex-col py-16 lg:flex-row items-center
          ${card.id % 2 !== 0  ? "lg:flex-row-reverse" : "lg:flex-row"}
        `} >
          <div className="mx-10 2xl:w-[585px] xl:w-[475px] lg:w-[450px]">
            <h1 className="text-3xl lg:text-5xl text-center lg:text-start font-extrabold">{card.cardTitle}</h1>
            <p className="sm:text-sm text-center md:text-lg lg:text-2xl lg:text-start mt-4">{card.cardComment}</p>
          </div>
          <div className="relative 2xl:w-[580px] 2xl:h-[430px] xl:w-[470px] xl:h-[350px] lg:w-[450px] lg:h-[350px] md:w-[640px] md:h-[480px] sm:w-[560px] sm:h-[420px] w-[350px] h-[280px] flex-shrink">
            <Image src={card.cardImg} alt="Watch List Img" layout="fill"/>
          </div>
      </div>
    ))}
    </div>
  )
}