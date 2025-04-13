import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin } from "lucide-react"

export default function MatchCard() {
  return (
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-20 bg-gradient-to-r from-[#0225C1] to-[#001580] p-4">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-1 text-sm font-bold text-[#0225C1]">
          AMISTOSO
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="flex flex-col items-center text-center">
          <Image src="images/fud-fc-logo.png" alt="FC Campeão" width={80} height={80} className="mb-2" />
          <h3 className="text-xl font-bold">FUD FC</h3>
          <p className="text-sm text-gray-500">Mandante</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-2 rounded-lg bg-gray-100 px-6 py-3 text-3xl font-bold">
            <span className="text-[#0225C1]">VS</span>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center justify-center gap-1">
              <CalendarIcon className="h-4 w-4 text-[#DC2C1F]" />
              <span>15/04/2025</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Clock className="h-4 w-4 text-[#DC2C1F]" />
              <span>21:00</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4 text-[#DC2C1F]" />
              <span> Esmeralda</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="images/image.png"
            alt="Adversário FC"
            width={80}
            height={80}
            className="mb-2"
          />
          <h3 className="text-xl font-bold">ADVERSÁRIO FC</h3>
          <p className="text-sm text-gray-500">Visitante</p>
        </div>
      </div>
    </div>
  )
}

