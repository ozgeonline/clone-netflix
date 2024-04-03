import Image from "next/image"

export default function Image__Logo() {
  return (
      <Image
        src="https://utfs.io/f/8f183cec-55a9-438f-b696-74fb636a2a29-52h3ko.svg"
        alt="Logo"
        fill
        sizes="100%"
        quality={50}
        priority
        loading="eager"
        aria-label="Netflix Logo"
        className="z-50 "
      />
  )
}