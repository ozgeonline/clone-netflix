// import prisma from "../../../utils/db"
// import ContinueWatchingCardModal from "./ContinueWatchingCard-ui"
// import "../card.css"

// async function getData() {
//   const data = await prisma.movie.findMany({
//     select: {
//       videoSource: true,
//       imageString: true,
//       title: true
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//     take: 2
//   })
//   return data
// }

// export default async function ContinueWatchingCard() {
//   const data = await getData()

//   return (
//    <div className="flex mb-10 ">
//     <div className="flex gap-x-2 w-full h-full ">
//       {data.map((movie,index) => (
//         <ContinueWatchingCardModal 
//           key={index} 
//           videoUrl={movie.videoSource} 
//           imageString={movie.imageString} 
//           title={movie.title}
//         />
//       ))}
//     </div>
//    </div>
//   )
// }