import Image from "next/image"

interface ImageCard {
  imageString: string
  imageText: string
  imageStyle: string
}

export default function ImageCard({
  imageString,
  imageText,
  imageStyle
}: ImageCard) {
  return (
    <Image
      src={imageString}
      alt={imageText}
      className={`object-cover ${imageStyle}`}
      width={0}
      height={0}
      sizes="100%"
      
      quality={50}
    />
  )
}