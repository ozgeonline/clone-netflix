// const userId = ""

// async function getData() {
//   const data = await prisma.movie.findFirst({
//     select: {
//       title: true,
//       overview: true,
//       videoSource: true,
//       imageString: true,
//       release: true,
//       duration: true,
//       id: true,
//       age: true,
//       cast: true,
//       genres: true,
//       category: true,
//       WatchLists: {
//         where: {
//           userId: userId
//         },
//       },
//     }
//   })
//   return data
// }

// export default async function DialogInfo() {

//   const data = await getData()

//   return (
//     <div>
//       <video
//         poster={data.imageString}
//         aria-label={`${data.title}-video player`}
//         autoPlay
//         muted
//         loop
//         preload="metadata"
//         playsInline
//         className="w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%] "
      
//       /> 
//     </div>
//   )
// }