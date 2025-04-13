import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dados de exemplo - substitua por dados reais do seu time
export const players = [
  {
    id: 1,
    name: "Natan Junio",
    number: "10",
    position: "Atacante",
    age: 23,
    height: "1,83m",
    nationality: "Brasileiro",
    image: "/images/natan12.jpg",
  },
  {
    id: 2,
    name: "Giancarllo",
    number: "7",
    position: "Atacante",
    age: 26,
    height: "1,83m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Filipe",
    number: "14",
    position: "Zagueiro",
    age: 21,
    height: "1,75m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Greco",
    number: "8",
    position: "Volante",
    age: 23,
    height: "1,70m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Osmar Júnior",
    number: "2",
    position: "Zagueiro",
    age: 24,
    height: "1,86m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "Renyzon",
    number: "3",
    position: "Zagueiro",
    age: 25,
    height: "1,83m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    name: "Don João",
    number: "11",
    position: "Atacante",
    age: 28,
    height: "1,75m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    name: "Esdras",
    number: "17",
    position: "Meia",
    age: 30,
    height: "1,75m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 9,
    name: "Evandro",
    number: "1",
    position: "Goleiro",
    age: 26,
    height: "1,83m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 10,
    name: "Gesiel",
    number: "27",
    position: "Meia",
    age: 27,
    height: "1,82m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 11,
    name: "Guilherme",
    number: "1",
    position: "Goleiro",
    age: 22,
    height: "1,76m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 12,
    name: "Gusthavo",
    number: "77",
    position: "Meia",
    age: 24,
    height: "1,81m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 13,
    name: "João César",
    number: "12",
    position: "Meia",
    age: 24,
    height: "1,83m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 14,
    name: "Marcos Rocha",
    number: "20",
    position: "Atacante",
    age: 24,
    height: "1,78m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 15,
    name: "Marquin",
    number: "99",
    position: "Zagueiro",
    age: 26,
    height: "1,86m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 15,
    name: "Mikael",
    number: "6",
    position: "Meia",
    age: 26,
    height: "1,70m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 16,
    name: "Thiago",
    number: "30",
    position: "Meia",
    age: 23,
    height: "1,90m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 17,
    name: "Vzin",
    number: "17",
    position: "Meia",
    age: 23,
    height: "1,75m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 18,
    name: "Wisley",
    number: "9",
    position: "Meia",
    age: 22,
    height: "1,81m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 19,
    name: "Zaza",
    number: "5",
    position: "Zagueiro",
    age: 24,
    height: "1,82m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 20,
    name: "Elias",
    number: "97",
    position: "Meia",
    age: 29,
    height: "1,82m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 21,
    name: "Cisley",
    number: "80",
    position: "Meia",
    age: 29,
    height: "1,55m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 22,
    name: "Dyonathan",
    number: "75",
    position: "Meia",
    age: 24,
    height: "1,82m",
    nationality: "Brasileiro",
    image: "/placeholder.svg?height=400&width=300",
  },
]

// Agrupar jogadores por posição
const positionOrder = ["Atacante", "Meia", "Zagueiro"]
const playersByPosition = positionOrder.map((position) => ({
  position,
  players: players.filter((player) => player.position === position),
}))

export default function Squad() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#0225C1] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar</span>
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold">Elenco Completo</h1>
            </div>
            <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white">
              <Image
                src="/images/fud-fc-logo.png"
                alt="Logo do Time"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>

              <span className="text-xl font-bold hidden md:inline-block">FUD FC</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filtro por posição (versão mobile) */}
        <div className="md:hidden mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button className="px-4 py-2 bg-[#0225C1] text-white rounded-full text-sm whitespace-nowrap">Todos</button>
            {positionOrder.map((position) => (
              <button
                key={position}
                className="px-4 py-2 bg-white text-gray-700 hover:bg-gray-100 rounded-full text-sm whitespace-nowrap"
              >
                {position}s
              </button>
            ))}
          </div>
        </div>

        {/* Elenco por posição */}
        {playersByPosition.map((group) => (
          <section key={group.position} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <div className="w-1 h-6 bg-[#DC2C1F] mr-3"></div>
              {group.position}s
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.players.map((player) => (
                <Card key={player.id} className="overflow-hidden bg-white hover:shadow-md transition-all">
                  <div className="relative">
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="absolute top-0 right-0 m-3 bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#DC2C1F] font-bold shadow-md">
                      {player.number}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900">{player.name}</h3>
                    <p className="text-sm text-gray-500">{player.position}</p>
                    <div className="mt-3 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Idade:</span>
                        <p className="font-medium">{player.age} anos</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Altura:</span>
                        <p className="font-medium">{player.height}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

