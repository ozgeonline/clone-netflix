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

  // type OddNumber = number
  // function isOddNumber(value: number): value is OddNumber {
  //   return value % 2 !== 0
  // }
  
  return (
    <div className="">
      {data.map((card) => (
        <div 
          key={card.id} 
          className={`
            border-t-8 md:py-[72px] px-44 flex flex-col items-center justify-center 
            ${card.id === 1  ? "md:flex-row-reverse" : card.id === 3 ? "md:flex-row-reverse" : "md:flex-row"}
          `} >
            <div className="text-center max-w-xl">
              <h1 className="text-3xl md:text-5xl md:text-start font-extrabold">{card.cardTitle}</h1>
              <p className="text-lg md:text-2xl md:text-start mt-4">{card.cardComment}</p>
            </div>
            <div className="md:h-[435px] w-[580px] relative">
              <Image src={card.cardImg} alt="Watch List Img" layout="fill"/>
            </div>
        </div>
      ))}
    </div>
  )
}