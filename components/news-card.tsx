import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  image: string
}

export default function NewsCard({ title, date, image }: NewsCardProps) {
  return (
    <Link
      href="#"
      className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
          <CalendarIcon className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold text-[#0225C1] group-hover:text-[#DC2C1F]">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </p>
      </div>
    </Link>
  )
}

