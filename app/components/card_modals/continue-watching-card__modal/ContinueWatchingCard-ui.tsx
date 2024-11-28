"use client"

import { MovieProps } from '@/app/src/types/props';
import { useVideoContext } from '../../movie__modal/VideoContext';
import VideoModal from '../../movie__modal/VideoModal';
import "../card.css"
// import { ModalRef } from '../../movie__modal/VideoModal';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type VideoPlayerProps = {
  id:number;
  imageString: string;
  videoSource: string;
  title:string;
  alt: string;
}

const ContinueWatchingCardModal = forwardRef<HTMLVideoElement, VideoPlayerProps>((props, ref) => {
    //console.log("ref",ref)

  const {
    currentVideoRef,
    continueWatchingVideoElement,
    savedTime,
    handleVideoTimeUpdate,
    } = useVideoContext();
    useImperativeHandle(ref, () => continueWatchingVideoElement.current);

  
  // const videoTimes = Object.entries(savedTime).map(([id]) => ({
  //   id,
  // }));
  // useEffect(()=> {
  //   handleVideoTimeUpdate
  // })
 
  //console.log("savedTime",savedTime[props.id])

  return (
    <div className="mt-12">
      {
       ( <VideoModal
          //onUpdateTime={handleTimeUpdate}
          //onUpdateTime={handleTimeUpdate}
          ref={continueWatchingVideoElement}
          enableControls={true}
          enableAutoPlay={false}
          enableLoop={false}
          enableTimeUpdate={true}
          // enableEnded={true}
          enablePlay={true}
          // enableLoadedMetadata={true}
          imageString={props.imageString}
          source={props.videoSource}
          alt={props.alt}
          videoStyle={`z-50 continueVideo cardSize w-full object-cover rounded-sm flex overflow-hidden`}
          id={props.id}  
        />)
      }
      <div>
      {savedTime[props.id] > 0 && <p>{savedTime[props.id]}</p>}
      </div>
    
    </div>
  );
}
)

export default ContinueWatchingCardModal;
// function useImperativeHandle(ref: ForwardedRef<HTMLVideoElement>, arg1: () => HTMLVideoElement) {
//   throw new Error('Function not implemented.');
// }

