// ContinueWatchingSection.tsx
"use client";

import React, { useEffect } from 'react';
import ContinueWatchingCardModal from './ContinueWatchingCard-ui';
import { useVideoContext } from '../../movie__modal/VideoContext';

interface ContinueWatchingSectionProps {
  
    id: number;
    videoSource: string;
    imageString: string;
    title: string;
}


const ContinueWatchingSection: React.FC<ContinueWatchingSectionProps> = ({ id,videoSource,imageString,title }:ContinueWatchingSectionProps) => {

  const { markAsWatched } = useVideoContext();

  const handleWatched = () => {
    //markAsWatched(id);
    console.log(`Movie with ID ${id} was watched!`);
  };

  return (
   
        <ContinueWatchingCardModal
      key={id}
      videoUrl={videoSource}
      imageString={imageString}
      title={title}
       id={id}        />
   
  );
};

export default ContinueWatchingSection;
