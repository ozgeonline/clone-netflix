import { useState, useRef, useEffect,  } from 'react';

type videoProps = {
  poster: string,
  source: string,
  alt: string
}

export default function VideoModal({
  poster,
  source,
  alt
}: videoProps) {

  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoad);
      return () => {
        videoElement.removeEventListener('loadeddata', handleLoad);
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      loop
      preload={loaded ? 'auto' : 'metadata'}
      playsInline
      className={` w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%]`}
      
    > 
   
       <source src={source}  type="video/mp4"></source>
   
       Your browser does not support the video tag.
    </video>
  )
}