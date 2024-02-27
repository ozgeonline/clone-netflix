import Image from "next/image"
import Link from "next/link"


export default function Image__Logo() {
  return (
    <Link href="/home" prefetch={false}>
      <div className="absolute w-20 md:w-36 h-6 md:h-[40px] mx-11 md:mx-44 top-7">
        <Image
          src="https://utfs.io/f/8f183cec-55a9-438f-b696-74fb636a2a29-52h3ko.svg"
          alt="Logo"
          fill
          sizes="(min-width:768px)100vw, (max-width:767px) 56vw"
          quality={50}
          priority
          loading="eager"
          aria-label="Netflix Logo"
        />
      </div>
    </Link>
  )
}