type videoProps = {
  imageString: string
  source: string
  alt: string
}

export default function VideoModal({
  imageString,
  source,
  alt
}: videoProps) {
  // const videoRef = useRef<HTMLVideoElement>(null);
  //const [isPending, startTransition] = useTransition();
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);
  
  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handleLoadedData = () => {
  //     setIsVideoLoaded(true);
  //   };

  //   if (videoElement) {
  //     videoElement.addEventListener('loadeddata', handleLoadedData);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       videoElement.removeEventListener('loadeddata', handleLoadedData);
  //     }
  //   };
  // }, []);
  
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setIsLoaded(true);
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   }, {
  //     threshold: 0.25
  //   });

  //   if (videoRef.current) {
  //     observer.observe(videoRef.current);
  //   }

  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
    <video
      poster={imageString}
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      className={`w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%]`}
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="w-full absolute bottom-0 bg-none -z-10 shadow-[0_5px_30px_90px_rgba(0,0,0,1)] shadow-bg-main-dark transform rotate-180"></div>
    </>
  )
}