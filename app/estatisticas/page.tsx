"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trophy, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dados centralizados dos jogadores
const players = [
  { name: "NATAN JUNIO", position: "Jogador", goals: 187, assists: 90, yellowCards: 4, redCards: 0, gamesPlayed: 141, image: "/placeholder.svg?height=60&width=60" },
  { name: "GIANCARLLO", position: "Jogador", goals: 118, assists: 36, yellowCards: 9, redCards: 2, gamesPlayed: 75, image: "/placeholder.svg?height=60&width=60" },
  { name: "WISLEY SILVA", position: "Jogador", goals: 109, assists: 56, yellowCards: 9, redCards: 3, gamesPlayed: 143, image: "/placeholder.svg?height=60&width=60" },
  { name: "GESIEL", position: "Jogador", goals: 66, assists: 42, yellowCards: 0, redCards: 0, gamesPlayed: 68, image: "/placeholder.svg?height=60&width=60" },
  { name: "GRECO", position: "Jogador", goals: 50, assists: 53, yellowCards: 11, redCards: 2, gamesPlayed: 143, image: "/placeholder.svg?height=60&width=60" },
  { name: "VZIN", position: "Jogador", goals: 38, assists: 17, yellowCards: 10, redCards: 6, gamesPlayed: 63, image: "/placeholder.svg?height=60&width=60" },
  { name: "FILIPE", position: "Jogador", goals: 21, assists: 23, yellowCards: 11, redCards: 1, gamesPlayed: 144, image: "/placeholder.svg?height=60&width=60" },
  { name: "THIAGO", position: "Jogador", goals: 15, assists: 11, yellowCards: 4, redCards: 0, gamesPlayed: 27, image: "/placeholder.svg?height=60&width=60" },
  { name: "GUSTHAVO", position: "Jogador", goals: 14, assists: 6, yellowCards: 0, redCards: 0, gamesPlayed: 22, image: "/placeholder.svg?height=60&width=60" },
  { name: "DON JOÃO", position: "Jogador", goals: 13, assists: 16, yellowCards: 0, redCards: 1, gamesPlayed: 83, image: "/placeholder.svg?height=60&width=60" },
  { name: "OSMAR JR.", position: "Jogador", goals: 10, assists: 9, yellowCards: 4, redCards: 0, gamesPlayed: 122, image: "/placeholder.svg?height=60&width=60" },
  { name: "ANDRÉ L.", position: "Jogador", goals: 5, assists: 1, yellowCards: 0, redCards: 0, gamesPlayed: 24, image: "/placeholder.svg?height=60&width=60" },
  { name: "JOÃO CÉSAR", position: "Jogador", goals: 5, assists: 12, yellowCards: 1, redCards: 0, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
  { name: "MARQUIN", position: "Jogador", goals: 5, assists: 7, yellowCards: 4, redCards: 0, gamesPlayed: 39, image: "/placeholder.svg?height=60&width=60" },
  { name: "MIKAEL", position: "Jogador", goals: 5, assists: 6, yellowCards: 0, redCards: 0, gamesPlayed: 50, image: "/placeholder.svg?height=60&width=60" },
  { name: "RENYZON", position: "Jogador", goals: 4, assists: 1, yellowCards: 4, redCards: 0, gamesPlayed: 128, image: "/placeholder.svg?height=60&width=60" },
  { name: "ZAZA", position: "Jogador", goals: 4, assists: 3, yellowCards: 1, redCards: 2, gamesPlayed: 78, image: "/placeholder.svg?height=60&width=60" },
  { name: "ESDRAS", position: "Jogador", goals: 3, assists: 3, yellowCards: 1, redCards: 0, gamesPlayed: 19, image: "/placeholder.svg?height=60&width=60" },
  { name: "MARCOS ROCHA", position: "Jogador", goals: 1, assists: 0, yellowCards: 0, redCards: 0, gamesPlayed: 6, image: "/placeholder.svg?height=60&width=60" },
  { name: "RAFIC", position: "Jogador", goals: 1, assists: 1, yellowCards: 0, redCards: 0, gamesPlayed: 5, image: "/placeholder.svg?height=60&width=60" },
  { name: "ANANIAS", position: "Jogador", goals: 0, assists: 1, yellowCards: 0, redCards: 0, gamesPlayed: 26, image: "/placeholder.svg?height=60&width=60" },
  { name: "EVANDRO", position: "Jogador", goals: 0, assists: 2, yellowCards: 1, redCards: 0, gamesPlayed: 31, image: "/placeholder.svg?height=60&width=60" },
  { name: "MATHEUS NOVAIS", position: "Jogador", goals: 0, assists: 1, yellowCards: 1, redCards: 0, gamesPlayed: 14, image: "/placeholder.svg?height=60&width=60" },
  { name: "CISLEY", position: "Jogador", goals: 0, assists: 0, yellowCards: 0, redCards: 0, gamesPlayed: 0, image: "/placeholder.svg?height=60&width=60" },
  { name: "DYONATHAN", position: "Jogador", goals: 1, assists: 0, yellowCards: 0, redCards: 0, gamesPlayed: 0, image: "/placeholder.svg?height=60&width=60" },
  { name: "ELIAS", position: "Jogador", goals: 0, assists: 0, yellowCards: 0, redCards: 0, gamesPlayed: 0, image: "/placeholder.svg?height=60&width=60" },
]

// Dados totais do time
const teamStats = {
  totalGames: 164,
  wins: 73,
  draws: 21,
  losses: 72,
  goalsScored: 776,
  goalsConceded: 790,
  yellowCards: 73,
  redCards: 16,
}

export default function Statistics() {
  // Cálculos de estatísticas do time
  const goalDifference = teamStats.goalsScored - teamStats.goalsConceded
  const averageGoalsScored = (teamStats.goalsScored / teamStats.totalGames).toFixed(2)
  const averageGoalsConceded = (teamStats.goalsConceded / teamStats.totalGames).toFixed(2)
  const winPercentage = ((teamStats.wins / teamStats.totalGames) * 100).toFixed(1)

  // Função para calcular média por jogo com tratamento para divisão por zero
  const calculateAverage = (value: number, games: number): string => {
    return games > 0 ? (value / games).toFixed(2) : "0.00"
  }

  // Ordenar jogadores para cada seção
  const topScorers = [...players].sort((a, b) => b.goals - a.goals)
  const topAssists = [...players].sort((a, b) => b.assists - a.assists)
  const playerCards = [...players]
    .filter(player => player.yellowCards > 0 || player.redCards > 0)
    .sort((a, b) => (b.yellowCards + b.redCards) - (a.yellowCards + a.redCards))

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
              <h1 className="text-2xl md:text-3xl font-bold">Estatísticas</h1>
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
        {/* Resumo da Temporada */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Resumo das Estatísticas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#0225C1] mb-2">{teamStats.totalGames}</div>
              <div className="text-gray-600">Jogos Disputados</div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#0225C1] mb-2">{teamStats.wins}</div>
              <div className="text-gray-600">Vitórias</div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-gray-500 mb-2">{teamStats.draws}</div>
              <div className="text-gray-600">Empates</div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#DC2C1F] mb-2">{teamStats.losses}</div>
              <div className="text-gray-600">Derrotas</div>
            </Card>
          </div>
        </section>

        {/* Estatísticas de Gols */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Estatísticas de Gols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-4xl font-bold text-[#0225C1] mb-2">{teamStats.goalsScored}</div>
                  <div className="text-gray-600">Gols Marcados</div>
                </div>
                <div className="w-12 h-12 bg-[#0225C1]/10 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-[#0225C1]" />
                </div>
              </div>
              <div className="text-sm text-gray-500">Média de {averageGoalsScored} gols por jogo</div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-4xl font-bold text-[#DC2C1F] mb-2">{teamStats.goalsConceded}</div>
                  <div className="text-gray-600">Gols Sofridos</div>
                </div>
                <div className="w-12 h-12 bg-[#DC2C1F]/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-[#DC2C1F]"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
              </div>
              <div className="text-sm text-gray-500">Média de {averageGoalsConceded} gols por jogo</div>
            </Card>
            <Card className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div
                    className={`text-4xl font-bold ${goalDifference > 0 ? "text-green-600" : goalDifference < 0 ? "text-[#DC2C1F]" : "text-gray-500"} mb-2`}
                  >
                    {goalDifference > 0 ? `+${goalDifference}` : goalDifference}
                  </div>
                  <div className="text-gray-600">Saldo de Gols</div>
                </div>
                <div
                  className={`w-12 h-12 ${goalDifference > 0 ? "bg-green-100" : goalDifference < 0 ? "bg-[#DC2C1F]/10" : "bg-gray-100"} rounded-full flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-6 w-6 ${goalDifference > 0 ? "text-green-600" : goalDifference < 0 ? "text-[#DC2C1F]" : "text-gray-500"}`}
                  >
                    <path d="M12 20v-8" />
                    <path d="M18 12l-6-8-6 8" />
                  </svg>
                </div>
              </div>
              <div className="text-sm text-gray-500">Aproveitamento de {winPercentage}% nos jogos</div>
            </Card>
          </div>
        </section>

        {/* Artilheiros */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Artilheiros</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jogador</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jogos</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="flex justify-center items-center">
                        <Trophy className="h-4 w-4 text-[#DC2C1F] mr-1" />
                        Gols
                      </span>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Média por jogo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topScorers.map((player, index) => (
                    <tr key={index} className={index === 0 ? "bg-yellow-50" : "hover:bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              fill
                              className="rounded-full object-cover"
                            />
                            {index === 0 && (
                              <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center">
                                <Trophy className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{player.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.gamesPlayed}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.goals}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{calculateAverage(player.goals, player.gamesPlayed)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Assistências */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Assistências</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jogador</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jogos</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="flex justify-center items-center">
                        <Award className="h-4 w-4 text-[#0225C1] mr-1" />
                        Assistências
                      </span>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Média por jogo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topAssists.map((player, index) => (
                    <tr key={index} className={index === 0 ? "bg-blue-50" : "hover:bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              fill
                              className="rounded-full object-cover"
                            />
                            {index === 0 && (
                              <div className="absolute -top-1 -right-1 bg-[#0225C1] rounded-full w-5 h-5 flex items-center justify-center">
                                <Award className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{player.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.gamesPlayed}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.assists}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{calculateAverage(player.assists, player.gamesPlayed)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cartões */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Cartões por Jogador</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jogador</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Jogos</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="flex justify-center items-center">
                        <div className="w-3 h-4 bg-yellow-500 rounded mr-1"></div>
                        Amarelos
                      </span>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="flex justify-center items-center">
                        <div className="w-3 h-4 bg-[#DC2C1F] rounded mr-1"></div>
                        Vermelhos
                      </span>
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Média por jogo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {playerCards.map((player, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <Image
                              src={player.image || "/placeholder.svg"}
                              alt={player.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{player.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{player.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.gamesPlayed}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.yellowCards}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.redCards}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">{player.yellowCards + player.redCards}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {calculateAverage(player.yellowCards + player.redCards, player.gamesPlayed)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}