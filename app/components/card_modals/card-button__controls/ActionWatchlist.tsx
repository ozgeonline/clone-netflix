"use client"

import { addTowatchlist, deleteFromWatchlist } from "@/app/action"
import { Button } from "@/components/ui/button"
import { Check, Plus } from "lucide-react"
import { usePathname } from "next/navigation"

interface actionProps {
  watchList: boolean
  watchlistId: string
  movieId: number
  actionStyle: string
}

export default function ActionWatchlist({
  watchList,
  watchlistId,
  movieId,
  actionStyle
}:actionProps) {

  const pathName = usePathname()
  return (
    <>
      { watchList ? (
        <form action={deleteFromWatchlist}>
          <input type="hidden" name="watchlistId" value={watchlistId} />
          <input type="hidden" name="pathname" value={pathName} />
          <Button
            size="icon"
            variant="link"
            className={`
              ${actionStyle}
              border rounded-full bg-main-dark border-main-white_100 opacity-70 hover:brightness-150 hover:ease-in
            `}
          > 
            <Check />
          </Button>
        </form>
      ) : (
        <form action={addTowatchlist} >
          <input type="hidden" name="movieId" value={movieId} />
          <input type="hidden" name="pathname" value={pathName} />
          <Button
            size="icon"
            variant="link"
            className={`
              ${actionStyle}
              border rounded-full bg-main-dark border-main-white_100 opacity-70 hover:brightness-150 hover:ease-in
            `}
          >
            <Plus />
          </Button>
        </form>
      )}
    </>
  )
}