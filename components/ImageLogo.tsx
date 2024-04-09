import Image from "next/image"
import Link from "next/link"

interface logoProps {
  logoStyle: string
}

export default function Image__Logo({logoStyle}:logoProps) {
  return (
    <Link href="/" className={logoStyle} prefetch={false}>
      <Image
        src="https://utfs.io/f/8f183cec-55a9-438f-b696-74fb636a2a29-52h3ko.svg"
        alt="Logo"
        fill
        sizes="100%"
        quality={50}
        aria-label="Netflix Logo"
        className="z-50"
      />
    </Link>
  )
}