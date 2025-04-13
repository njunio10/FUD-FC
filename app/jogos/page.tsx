import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Clock, Trophy } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BiFootball } from "react-icons/bi";
import { GiRunningShoe } from "react-icons/gi";

// Dados de exemplo
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
    time: "21:00",
    stadium: "Esmeralda",
    ticketsAvailable: true,
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
      score: 5,
    },
    awayTeam: {
      name: "União FC",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
      score: 3,
    },
    date: "10/04/2024",
    time: "21:00",
    stadium: "Esmeralda",
    result: "Vitória",
    goals: [
      { player: "Natan Junio", team: "FUD FC", goalCount: 3 },
      { player: "Giancarllo", team: "FUD FC", goalCount: 2 },
    ],
    assists: [
      { player: "Cisley", team: "FUD FC", assistCount: 3 },
      { player: "Dyonathan", team: "FUD FC", assistCount: 1 },
      { player: "Osmar Jr", team: "FUD FC", assistCount: 1 },
    ],
    cards: [
      { player: "Filipe", type: "yellow", team: "FUD FC" },
      { player: "Giancarllo", type: "yellow", team: "FUD FC" },
      { player: "Wisley", type: "yellow", team: "FUD FC" },
    ],
  },
  {
    id: 5,
    competition: "Amistoso",
    homeTeam: {
      name: "FUD FC",
      logo: "images/fud-fc-logo.png",
      isHome: true,
      score: 5,
    },
    awayTeam: {
      name: "Galacticos",
      logo: "/placeholder.svg?height=80&width=80",
      isHome: false,
      score: 7,
    },
    date: "25/03/2024",
    time: "19:30",
    stadium: "Esmeralda",
    result: "Derrota",
    goals: [
      { player: "Giancarllo", team: "FUD FC", goalCount: 2 },
      { player: "Natan Junio", team: "FUD FC", goalCount: 1 },
      { player: "Dyonathan", team: "FUD FC", goalCount: 1 },
      { player: "Elias", team: "FUD FC", goalCount: 1 },
    ],
    assists: [
      { player: "Mikael", team: "FUD FC", assistCount: 1 },
      { player: "Wisley", team: "FUD FC", assistCount: 1 },
      { player: "Don", team: "FUD FC", assistCount: 1 },
    ],
    cards: [
      { player: "Greco ", type: "yellow", team: "FUD FC" },
    ],
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

                    <div className="mt-4 text-center text-sm space-y-1">
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

                    <div className="mt-4 text-center text-sm space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <Calendar className="h-4 w-4 text-[#DC2C1F]" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MapPin className="h-4 w-4 text-[#DC2C1F]" />
                        <span>{match.stadium}</span>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-gray-100 pt-4">
                      <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Gols</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <BiFootball className="h-4 w-4 text-[#DC2C1F]" />
                            <span className="font-medium">{match.goals.reduce((sum, goal) => sum + (goal.goalCount || 0), 0)}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Assistências</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <GiRunningShoe className="h-4 w-4 text-[#0225C1]" />
                            <span className="font-medium">{match.assists.reduce((sum, assist) => sum + (assist.assistCount || 0), 0)}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-500">Cartões</div>
                          <div className="flex justify-center items-center gap-1 mt-1">
                            <div className="flex">
                              <div className="w-3 h-4 bg-yellow-500 rounded mr-1"></div>
                              <span className="font-medium mr-2">
                                {match.cards.filter((card) => card.type === "yellow").length}
                              </span>
                              <div className="w-3 h-4 bg-[#DC2C1F] rounded mr-1"></div>
                              <span className="font-medium">
                                {match.cards.filter((card) => card.type === "red").length}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Jogadores</h4>
                          {match.goals.length > 0 ? (
                            <ul className="space-y-1">
                              {match.goals.map((goal, index) => (
                                <li key={index} className="text-sm text-gray-600 flex justify-center items-center gap-2">
                                  <span>{goal.player} ({goal.team})</span>
                                  <div className="flex">
                                    {Array.from({ length: goal.goalCount || 0 }).map((_, i) => (
                                      <BiFootball key={i} className="h-4 w-4 text-[#DC2C1F]" />
                                    ))}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">Nenhum gol registrado</p>
                          )}
                        </div>

                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Jogadores</h4>
                          {match.assists.length > 0 ? (
                            <ul className="space-y-1">
                              {match.assists.map((assist, index) => (
                                <li key={index} className="text-sm text-gray-600 flex justify-center items-center gap-2">
                                  <span>{assist.player} ({assist.team})</span>
                                  <div className="flex">
                                    {Array.from({ length: assist.assistCount || 0 }).map((_, i) => (
                                      <GiRunningShoe key={i} className="h-4 w-4 text-[#0225C1]" />
                                    ))}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">Nenhuma assistência registrada</p>
                          )}
                        </div>

                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Jogadores</h4>
                          {match.cards.length > 0 ? (
                            <ul className="space-y-1">
                              {match.cards.map((card, index) => (
                                <li key={index} className="text-sm text-gray-600 flex justify-center items-center gap-2">
                                  <span
                                    className={`w-3 h-3 rounded ${
                                      card.type === "yellow" ? "bg-yellow-500" : "bg-[#DC2C1F]"
                                    }`}
                                  ></span>
                                  {card.player} ({card.team})
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-500">Nenhum cartão registrado</p>
                          )}
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