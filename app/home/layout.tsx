import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/navbar/Navbar"
import Dialog from "../components/movie-modal/Dialog"

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      age: true,
     
    
    },
  })
  return data
}

export default async function HomeLayout({children} : {children: ReactNode}){
  const session = await getServerSession(authOptions)
  const data = await getData()


  if(!session) {
    redirect("/tr-en")
  }
  async function onClose() {
    "use server"
    console.log("Modal has closed")

  }

  return (
    <>
      <Navbar />
      <main className="w-full me-0">
        {/* {data.map((dialog) => (
          <Dialog
            key={dialog.id}
            title="Example Modal"
            onClose={onClose} 
            age={dialog.age}
           
          />
        ))} */}
        
          {children}
      </main>
    </>
  )
}