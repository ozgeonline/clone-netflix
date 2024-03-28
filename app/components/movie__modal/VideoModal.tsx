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
  return (
    <video
      poster={poster}
      aria-label={alt}
      autoPlay
      muted
      loop
      preload="metadata"
      playsInline
      className="w-full h-full absolute top-0 left-0 object-cover -z-20 brightness-[60%] "
      
    > 
       <source src={source}></source>
       Your browser does not support the video tag.
    </video>
  )
}