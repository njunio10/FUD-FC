"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trophy, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados de exemplo por ano - substitua por dados reais do seu time
const teamStatsByYear = {
  "2025": {
    totalGames: 38,
    wins: 22,
    draws: 10,
    losses: 6,
    goalsScored: 68,
    goalsConceded: 32,
    yellowCards: 64,
    redCards: 5,
    topScorers: [
      { name: "Carlos Silva", position: "Atacante", goals: 18, gamesPlayed: 18, image: "/placeholder.svg?height=60&width=60" },
      { name: "Roberto Almeida", position: "Meia", goals: 12, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
      { name: "Marcos Pereira", position: "Atacante", goals: 9, gamesPlayed: 32, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", goals: 7, gamesPlayed: 34, image: "/placeholder.svg?height=60&width=60" },
      { name: "Pedro Lima", position: "Volante", goals: 5, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
    ],
    topAssists: [
      { name: "Roberto Almeida", position: "Meia", assists: 12, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", assists: 9, gamesPlayed: 34, image: "/placeholder.svg?height=60&width=60" },
      { name: "Lucas Oliveira", position: "Lateral", assists: 7, gamesPlayed: 33, image: "/placeholder.svg?height=60&width=60" },
      { name: "Carlos Silva", position: "Atacante", assists: 5, gamesPlayed: 35, image: "/placeholder.svg?height=60&width=60" },
      { name: "João Santos", position: "Zagueiro", assists: 3, gamesPlayed: 38, image: "/placeholder.svg?height=60&width=60" },
    ],
    playerCards: [
      {
        name: "João Santos",
        position: "Zagueiro",
        yellowCards: 8,
        redCards: 1,
        gamesPlayed: 38,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Pedro Lima",
        position: "Volante",
        yellowCards: 7,
        redCards: 0,
        gamesPlayed: 37,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Lucas Oliveira",
        position: "Lateral",
        yellowCards: 6,
        redCards: 1,
        gamesPlayed: 33,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Marcos Pereira",
        position: "Atacante",
        yellowCards: 5,
        redCards: 0,
        gamesPlayed: 32,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "André Costa",
        position: "Meia",
        yellowCards: 5,
        redCards: 0,
        gamesPlayed: 34,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },

  "2024": {
    totalGames: 38,
    wins: 22,
    draws: 10,
    losses: 6,
    goalsScored: 68,
    goalsConceded: 32,
    yellowCards: 64,
    redCards: 5,
    topScorers: [
      { name: "Carlos Silva", position: "Atacante", goals: 18, gamesPlayed: 34, image: "/placeholder.svg?height=60&width=60" },
      { name: "Roberto Almeida", position: "Meia", goals: 12, gamesPlayed: 35, image: "/placeholder.svg?height=60&width=60" },
      { name: "Marcos Pereira", position: "Atacante", goals: 9, gamesPlayed: 31, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", goals: 7, gamesPlayed: 33, image: "/placeholder.svg?height=60&width=60" },
      { name: "Pedro Lima", position: "Volante", goals: 5, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
    ],
    topAssists: [
      { name: "Roberto Almeida", position: "Meia", assists: 12, gamesPlayed: 35, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", assists: 9, gamesPlayed: 33, image: "/placeholder.svg?height=60&width=60" },
      { name: "Lucas Oliveira", position: "Lateral", assists: 7, gamesPlayed: 32, image: "/placeholder.svg?height=60&width=60" },
      { name: "Carlos Silva", position: "Atacante", assists: 5, gamesPlayed: 34, image: "/placeholder.svg?height=60&width=60" },
      { name: "João Santos", position: "Zagueiro", assists: 3, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
    ],
    playerCards: [
      {
        name: "João Santos",
        position: "Zagueiro",
        yellowCards: 8,
        redCards: 1,
        gamesPlayed: 37,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Pedro Lima",
        position: "Volante",
        yellowCards: 7,
        redCards: 0,
        gamesPlayed: 36,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Lucas Oliveira",
        position: "Lateral",
        yellowCards: 6,
        redCards: 1,
        gamesPlayed: 32,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Marcos Pereira",
        position: "Atacante",
        yellowCards: 5,
        redCards: 0,
        gamesPlayed: 31,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "André Costa",
        position: "Meia",
        yellowCards: 5,
        redCards: 0,
        gamesPlayed: 33,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },

  "2023": {
    totalGames: 40,
    wins: 25,
    draws: 8,
    losses: 7,
    goalsScored: 72,
    goalsConceded: 28,
    yellowCards: 58,
    redCards: 3,
    topScorers: [
      { name: "Carlos Silva", position: "Atacante", goals: 21, gamesPlayed: 38, image: "/placeholder.svg?height=60&width=60" },
      { name: "Roberto Almeida", position: "Meia", goals: 14, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
      { name: "Marcos Pereira", position: "Atacante", goals: 11, gamesPlayed: 34, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", goals: 8, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
      { name: "Pedro Lima", position: "Volante", goals: 4, gamesPlayed: 39, image: "/placeholder.svg?height=60&width=60" },
    ],
    topAssists: [
      { name: "Roberto Almeida", position: "Meia", assists: 15, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", assists: 11, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
      { name: "Lucas Oliveira", position: "Lateral", assists: 9, gamesPlayed: 35, image: "/placeholder.svg?height=60&width=60" },
      { name: "Carlos Silva", position: "Atacante", assists: 6, gamesPlayed: 38, image: "/placeholder.svg?height=60&width=60" },
      { name: "João Santos", position: "Zagueiro", assists: 2, gamesPlayed: 40, image: "/placeholder.svg?height=60&width=60" },
    ],
    playerCards: [
      {
        name: "João Santos",
        position: "Zagueiro",
        yellowCards: 7,
        redCards: 0,
        gamesPlayed: 40,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Pedro Lima",
        position: "Volante",
        yellowCards: 9,
        redCards: 1,
        gamesPlayed: 39,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Lucas Oliveira",
        position: "Lateral",
        yellowCards: 5,
        redCards: 0,
        gamesPlayed: 35,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Marcos Pereira",
        position: "Atacante",
        yellowCards: 4,
        redCards: 0,
        gamesPlayed: 34,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "André Costa",
        position: "Meia",
        yellowCards: 6,
        redCards: 1,
        gamesPlayed: 36,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },

  "2022": {
    totalGames: 42,
    wins: 20,
    draws: 12,
    losses: 10,
    goalsScored: 65,
    goalsConceded: 40,
    yellowCards: 70,
    redCards: 6,
    topScorers: [
      { name: "Carlos Silva", position: "Atacante", goals: 16, gamesPlayed: 39, image: "/placeholder.svg?height=60&width=60" },
      { name: "Roberto Almeida", position: "Meia", goals: 10, gamesPlayed: 40, image: "/placeholder.svg?height=60&width=60" },
      { name: "Marcos Pereira", position: "Atacante", goals: 8, gamesPlayed: 36, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", goals: 6, gamesPlayed: 38, image: "/placeholder.svg?height=60&width=60" },
      { name: "Pedro Lima", position: "Volante", goals: 3, gamesPlayed: 41, image: "/placeholder.svg?height=60&width=60" },
    ],
    topAssists: [
      { name: "Roberto Almeida", position: "Meia", assists: 11, gamesPlayed: 40, image: "/placeholder.svg?height=60&width=60" },
      { name: "André Costa", position: "Meia", assists: 8, gamesPlayed: 38, image: "/placeholder.svg?height=60&width=60" },
      { name: "Lucas Oliveira", position: "Lateral", assists: 6, gamesPlayed: 37, image: "/placeholder.svg?height=60&width=60" },
      { name: "Carlos Silva", position: "Atacante", assists: 4, gamesPlayed: 39, image: "/placeholder.svg?height=60&width=60" },
      { name: "João Santos", position: "Zagueiro", assists: 2, gamesPlayed: 42, image: "/placeholder.svg?height=60&width=60" },
    ],
    playerCards: [
      {
        name: "João Santos",
        position: "Zagueiro",
        yellowCards: 10,
        redCards: 2,
        gamesPlayed: 42,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Pedro Lima",
        position: "Volante",
        yellowCards: 8,
        redCards: 1,
        gamesPlayed: 41,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Lucas Oliveira",
        position: "Lateral",
        yellowCards: 7,
        redCards: 0,
        gamesPlayed: 37,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "Marcos Pereira",
        position: "Atacante",
        yellowCards: 6,
        redCards: 1,
        gamesPlayed: 36,
        image: "/placeholder.svg?height=60&width=60",
      },
      {
        name: "André Costa",
        position: "Meia",
        yellowCards: 7,
        redCards: 0,
        gamesPlayed: 38,
        image: "/placeholder.svg?height=60&width=60",
      },
    ],
  },
};

// Criar dados para "Todas as temporadas" combinando os dados de todos os anos
const allSeasonsData = {
  totalGames: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.totalGames, 0),
  wins: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.wins, 0),
  draws: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.draws, 0),
  losses: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.losses, 0),
  goalsScored: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.goalsScored, 0),
  goalsConceded: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.goalsConceded, 0),
  yellowCards: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.yellowCards, 0),
  redCards: Object.values(teamStatsByYear).reduce((sum, year) => sum + year.redCards, 0),

  // Combinar e ordenar artilheiros de todas as temporadas
  topScorers: Object.values(teamStatsByYear)
  .flatMap((year) => year.topScorers)
  .reduce((acc, player) => {
    const existingPlayer = acc.find((p) => p.name === player.name);
    if (existingPlayer) {
      existingPlayer.goals += player.goals;
      existingPlayer.gamesPlayed += player.gamesPlayed;
    } else {
      acc.push({ ...player });
    }
    return acc;
  }, [])
  .sort((a, b) => b.goals - a.goals)
  .slice(0, 5),

topAssists: Object.values(teamStatsByYear)
  .flatMap((year) => year.topAssists)
  .reduce((acc, player) => {
    const existingPlayer = acc.find((p) => p.name === player.name);
    if (existingPlayer) {
      existingPlayer.assists += player.assists;
      existingPlayer.gamesPlayed += player.gamesPlayed;
    } else {
      acc.push({ ...player });
    }
    return acc;
  }, [])
  .sort((a, b) => b.assists - a.assists)
  .slice(0, 5),

playerCards: Object.values(teamStatsByYear)
  .flatMap((year) => year.playerCards)
  .reduce((acc, player) => {
    const existingPlayer = acc.find((p) => p.name === player.name);
    if (existingPlayer) {
      existingPlayer.yellowCards += player.yellowCards;
      existingPlayer.redCards += player.redCards;
      existingPlayer.gamesPlayed += player.gamesPlayed;
    } else {
      acc.push({ ...player });
    }
    return acc;
  }, [])
  .sort((a, b) => b.yellowCards + b.redCards - (a.yellowCards + a.redCards))
  .slice(0, 5),
}

// Adicionar os dados de todas as temporadas ao objeto teamStatsByYear
teamStatsByYear["Todas"] = allSeasonsData

// Modificar a linha que define availableYears para incluir "Todas" como primeira opção
const availableYears = [
  "Todas",
  ...Object.keys(teamStatsByYear)
    .filter((year) => year !== "Todas")
    .sort((a, b) => Number.parseInt(b) - Number.parseInt(a)),
]

export default function Statistics() {
  const availableYears = Object.keys(teamStatsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))
  const [selectedYear, setSelectedYear] = useState(availableYears[0])

  // Obter estatísticas do ano selecionado
  const teamStats = teamStatsByYear[selectedYear]

  // Cálculos de estatísticas
  const goalDifference = teamStats.goalsScored - teamStats.goalsConceded
  const averageGoalsScored = (teamStats.goalsScored / teamStats.totalGames).toFixed(2)
  const averageGoalsConceded = (teamStats.goalsConceded / teamStats.totalGames).toFixed(2)
  const winPercentage = ((teamStats.wins / teamStats.totalGames) * 100).toFixed(1)

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
              <h1 className="text-2xl md:text-3xl font-bold">Estatísticas do Time</h1>
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
        {/* Seletor de Ano */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Estatísticas</h2>
          <div className="w-40">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Selecione o ano" />
              </SelectTrigger>
              <SelectContent>
                {availableYears.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jogador
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Posição
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jogos
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span className="flex justify-center items-center">
                <Trophy className="h-4 w-4 text-[#DC2C1F] mr-1" />
                Gols
              </span>
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Média por jogo
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {teamStats.topScorers.map((player, index) => (
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
                <div className="text-sm font-medium text-gray-900">
                  {(player.goals / player.gamesPlayed).toFixed(2)}
                </div>
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jogador
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Posição
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jogos
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span className="flex justify-center items-center">
                <Award className="h-4 w-4 text-[#0225C1] mr-1" />
                Assistências
              </span>
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Média por jogo
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {teamStats.topAssists.map((player, index) => (
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
                <div className="text-sm font-medium text-gray-900">
                  {(player.assists / player.gamesPlayed).toFixed(2)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

        {/* Cartões */}
        <h3 className="text-xl font-semibold mb-4">Cartões por Jogador</h3>
<div className="bg-white rounded-xl shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Jogador
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Posição
          </th>
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Jogos
          </th>
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
          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
            Média por jogo
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {teamStats.playerCards.map((player, index) => (
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
              <div className="text-sm font-medium text-gray-900">
                {((player.yellowCards + player.redCards) / player.gamesPlayed).toFixed(2)}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </main>
    </div>
  )
}

