import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PlayVideoModalButton from "./PlayVideoModalButton"

interface iAppProps {
  title: string
  overview: string
  state: boolean
  changeState: any
  release: number
  age: number
  duration: number
  videoSource : string
  movieId: number
  watchList: boolean
  wachtListId: string
}

export default function PlayVideoModal({
  changeState,
  overview,
  state,
  title,
  videoSource,
  age,
  duration,
  release,
  movieId,
  watchList,
  wachtListId,
}: iAppProps) {
  return (
    <div className="mt-5 flex">
      <Dialog open={state} onOpenChange={() => changeState(!state)}>
      
        <DialogContent className="flex flex-col sm:max-w-[850px] w-screen h-[750px] p-0 mt-7 overflow-y-scroll overflow-css">
          
          <PlayVideoModalButton movieId={movieId} watchList={watchList} wachtListId={wachtListId} videoSource={videoSource}/>
          <DialogHeader className="mt-56">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription className="line-clamp-3">
              {overview}
            </DialogDescription>
            <div className="flex gap-x-2 items-center">
              <p>{release}</p>
              <p className="border py-o.5 px-1 border-gray-200 rounded">{age}+</p>
              <p>{duration}h</p>
            </div>
          </DialogHeader>
        </DialogContent>
       
      </Dialog>
    </div>
  )
}