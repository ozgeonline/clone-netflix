import Image from "next/image"

export default function Image__Bg() {
  return (
    <div className="absolute top-0 left-0 w-screen h-[60vh] sm:h-[95vh]">
      <Image
        src="https://utfs.io/f/f641c1e7-df9e-4fba-8867-2d01bb86c303-9ysoom.webp"
        alt="background image"
        aria-label="Background image"
        className="flex -z-10 brightness-50 object-cover"
        fill
        priority
        quality={50}
        sizes="(min-width:640px) 95vh, 60vh"
      />
    </div>
  )
}