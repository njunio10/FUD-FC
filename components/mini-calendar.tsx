"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample events data - replace with your actual events
const events = [
  { date: "2025-04-15", title: "FC Campeão vs Adversário FC", type: "match" },
  { date: "2025-04-07", title: "Treino Aberto", type: "training" },
  { date: "2025-04-14", title: "Treino Aberto", type: "training" },
  { date: "2025-04-21", title: "Treino Aberto", type: "training" },
  { date: "2025-04-28", title: "Treino Aberto", type: "training" },
]

export default function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

  // Get the first day of the month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const startingDayOfWeek = firstDayOfMonth.getDay()

  // Get the number of days in the month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  // Create calendar days array
  const calendarDays = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  // Function to check if a day has an event
  const hasEvent = (day) => {
    if (!day) return false

    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    return events.some((event) => event.date === dateString)
  }

  // Function to get event type for a day
  const getEventType = (day) => {
    if (!day) return null

    const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    const event = events.find((event) => event.date === dateString)
    return event ? event.type : null
  }

  // Function to navigate to previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // Function to navigate to next month
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100" aria-label="Mês anterior">
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <h3 className="font-medium">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100" aria-label="Próximo mês">
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 p-4">
        {/* Weekday headers */}
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-xs font-medium text-gray-500 mb-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((day, index) => (
          <div key={index} className={`text-center py-1 text-sm ${!day ? "invisible" : ""}`}>
            <div
              className={`
                w-8 h-8 mx-auto flex items-center justify-center rounded-full
                ${hasEvent(day) && getEventType(day) === "match" ? "bg-[#DC2C1F] text-white" : ""}
                ${hasEvent(day) && getEventType(day) === "training" ? "bg-[#0225C1] text-white" : ""}
                ${!hasEvent(day) && day ? "hover:bg-gray-100 cursor-pointer" : ""}
              `}
            >
              {day}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-[#DC2C1F]"></div>
          <span className="text-xs text-gray-600">Jogos</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0225C1]"></div>
          <span className="text-xs text-gray-600">Peladas</span>
        </div>
      </div>
    </div>
  )
}

