import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Clock, Trophy, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo - substitua por dados reais do seu time
const upcomingMatches = [
  {
    id: 1,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
    },
    awayTeam: {
      name: "Adversário FC",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
    },
    date: "15/04/2024",
    time: "16:00",
    stadium: "Estádio Municipal",
    ticketsAvailable: true,
  },
  {
    id: 2,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
    },
    awayTeam: {
      name: "Adversário FC",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
    },
    date: "22/04/2024",
    time: "19:30",
    stadium: "Arena Central",
    ticketsAvailable: true,
  },
  {
    id: 3,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
    },
    awayTeam: {
      name: "Adversário FC",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
    },
    date: "30/04/2024",
    time: "20:00",
    stadium: "Estádio Municipal",
    ticketsAvailable: false,
  },
]

const pastMatches = [
  {
    id: 4,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
      score: 2,
    },
    awayTeam: {
      name: "Time Visitante",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
      score: 0,
    },
    date: "01/04/2024",
    time: "16:00",
    stadium: "Estádio Municipal",
    result: "Vitória",
  },
  {
    id: 5,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
      score: 1,
    },
    awayTeam: {
      name: "Outro Adversário",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
      score: 1,
    },
    date: "25/03/2024",
    time: "19:30",
    stadium: "Arena Rival",
    result: "Empate",
  },
  {
    id: 6,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
      score: 3,
    },
    awayTeam: {
      name: "FC CAMPEÃO",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
      score: 1,
    },
    date: "18/03/2024",
    time: "20:00",
    stadium: "Estádio Oponente",
    result: "Vitória",
  },
]

export default function Games() {
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
              <h1 className="text-2xl md:text-3xl font-bold">Jogos</h1>
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
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming" className="text-base">
              Próximos Jogos
            </TabsTrigger>
            <TabsTrigger value="past" className="text-base">
              Jogos Anteriores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden bg-white hover:shadow-md transition-all">
                  <div className="bg-gradient-to-r from-[#0225C1] to-[#001580] p-4 text-white text-center">
                    <span className="text-sm font-medium">{match.competition}</span>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                      <div className="flex flex-col items-center text-center">
                        <Image
                          src={match.homeTeam.logo || "/placeholder.svg"}
                          alt={match.homeTeam.name}
                          width={80}
                          height={80}
                          className="mb-2"
                        />
                        <h3 className="text-xl font-bold">{match.homeTeam.name}</h3>
                        <p className="text-sm text-gray-500">{match.homeTeam.isHome ? "Mandante" : "Visitante"}</p>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-2 rounded-lg bg-gray-100 px-6 py-3 text-3xl font-bold">
                          <span className="text-[#0225C1]">VS</span>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center justify-center gap-1">
                            <Calendar className="h-4 w-4 text-[#DC2C1F]" />
                            <span>{match.date}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <Clock className="h-4 w-4 text-[#DC2C1F]" />
                            <span>{match.time}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <MapPin className="h-4 w-4 text-[#DC2C1F]" />
                            <span>{match.stadium}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <Image
                          src={match.awayTeam.logo || "/placeholder.svg"}
                          alt={match.awayTeam.name}
                          width={80}
                          height={80}
                          className="mb-2"
                        />
                        <h3 className="text-xl font-bold">{match.awayTeam.name}</h3>
                        <p className="text-sm text-gray-500">{match.awayTeam.isHome ? "Mandante" : "Visitante"}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center border-t border-gray-100 pt-4">
                      <div className="text-center py-3">
                        <div className="text-sm font-medium text-gray-700">
                          {match.ticketsAvailable ? "Ingressos disponíveis" : "Ingressos em breve"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-6">
              {pastMatches.map((match) => (
                <Card key={match.id} className="overflow-hidden bg-white hover:shadow-md transition-all">
                  <div
                    className={`p-4 text-white text-center ${
                      match.result === "Vitória"
                        ? "bg-gradient-to-r from-green-600 to-green-700"
                        : match.result === "Empate"
                          ? "bg-gradient-to-r from-gray-500 to-gray-600"
                          : "bg-gradient-to-r from-[#DC2C1F] to-[#b82219]"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {match.competition} - {match.result}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
                      <div className="flex flex-col items-center text-center">
                        <Image
                          src={match.homeTeam.logo || "/placeholder.svg"}
                          alt={match.homeTeam.name}
                          width={80}
                          height={80}
                          className="mb-2"
                        />
                        <h3 className="text-xl font-bold">{match.homeTeam.name}</h3>
                        <p className="text-3xl font-bold text-gray-900">{match.homeTeam.score}</p>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-2 text-lg font-bold text-gray-400">FINAL</div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center justify-center gap-1">
                            <Calendar className="h-4 w-4 text-[#DC2C1F]" />
                            <span>{match.date}</span>
                          </div>
                          <div className="flex items-center justify-center gap-1">
                            <MapPin className="h-4 w-4 text-[#DC2C1F]" />
                            <span>{match.stadium}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <Image
                          src={match.awayTeam.logo || "/placeholder.svg"}
                          alt={match.awayTeam.name}
                          width={80}
                          height={80}
                          className="mb-2"
                        />
                        <h3 className="text-xl font-bold">{match.awayTeam.name}</h3>
                        <p className="text-3xl font-bold text-gray-900">{match.awayTeam.score}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center border-t border-gray-100 pt-4">
                      <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Gols</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <Trophy className="h-4 w-4 text-[#DC2C1F]" />
                            <span className="font-medium">{match.homeTeam.score + match.awayTeam.score}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Assistências</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <Award className="h-4 w-4 text-[#0225C1]" />
                            <span className="font-medium">{Math.floor(Math.random() * 6) + 1}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Cartões</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <div className="flex">
                              <div className="w-3 h-4 bg-yellow-500 rounded mr-1"></div>
                              <span className="font-medium mr-2">{Math.floor(Math.random() * 5) + 1}</span>
                              <div className="w-3 h-4 bg-[#DC2C1F] rounded mr-1"></div>
                              <span className="font-medium">{Math.floor(Math.random() * 2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

