import Image from "next/image"
import Link from "next/link"

interface PlayerCardProps {
  name: string
  position: string
  number: string
  image: string
}

export default function PlayerCard({ name, position, number, image }: PlayerCardProps) {
  return (
    <Link href="#" className="group">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-[#0225C1] to-[#001580]">
        <div className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-lg font-bold text-[#DC2C1F]">
          {number}
        </div>

        <div className="relative h-80 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0225C1] to-transparent opacity-70"></div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm">{position}</p>
        </div>
      </div>
    </Link>
  )
}

