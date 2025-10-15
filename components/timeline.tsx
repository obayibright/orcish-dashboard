"use client"

import { Calendar, ChevronLeft, ChevronRight, PartyPopper, Music, Copyright, MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface Event {
  id: string
  title: string
  time: string
  icon: "party" | "music" | "copyright"
  iconColor: "yellow" | "blue" | "purple" | "gray"
}

interface EventGroup {
  date: string
  label: string
  events: Event[]
}

export default function Timeline() {
  const [currentMonth] = useState("February 2025")
  const [streak] = useState(5)
  const [personalBest] = useState(18)

  const eventGroups: EventGroup[] = [
    {
      date: "today",
      label: "Today",
      events: [
        {
          id: "1",
          title: "Education festival event 2025",
          time: "09:00 AM I 02:00 PM",
          icon: "party",
          iconColor: "yellow",
        },
        {
          id: "2",
          title: "Music 1-14 session",
          time: "09:00 AM I 02:00 PM",
          icon: "music",
          iconColor: "blue",
        },
      ],
    },
    {
      date: "2025-02-16",
      label: "Sun, Feb 16",
      events: [
        {
          id: "3",
          title: "Copyright and Finance event",
          time: "09:00 AM I 02:00 PM",
          icon: "copyright",
          iconColor: "gray",
        },
        {
          id: "4",
          title: "Music Education session",
          time: "09:00 AM I 02:00 PM",
          icon: "music",
          iconColor: "purple",
        },
      ],
    },
  ]

  const getIconComponent = (icon: Event["icon"]) => {
    switch (icon) {
      case "party":
        return PartyPopper
      case "music":
        return Music
      case "copyright":
        return Copyright
      default:
        return Calendar
    }
  }

  const getIconColorClasses = (color: Event["iconColor"]) => {
    switch (color) {
      case "yellow":
        return "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500 dark:text-yellow-400"
      case "blue":
        return "bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-400"
      case "purple":
        return "bg-purple-100 dark:bg-purple-900/50 text-purple-500 dark:text-purple-400"
      case "gray":
        return "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
      default:
        return "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
    }
  }

  return (
    <div className="w-full">
      <div className="rounded-lg shadow-md border border-border">
        {/* Calendar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">{currentMonth}</h2>
            </div>
            <div className="flex items-center border border-border rounded-md">
              <button className="p-1 hover:bg-muted rounded-l-md border-r border-border">
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
              </button>
              <button className="p-1 hover:bg-muted rounded-r-md">
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Mini Calendar */}
          <div className="grid grid-cols-7 gap-1 text-center mt-4 min-w-0">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="text-xs font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            <div className="bg-green-600 text-white rounded-md py-2 font-semibold text-sm">10</div>
            <div className="bg-green-600 text-white rounded-md py-2 font-semibold text-sm">11</div>
            <div className="py-2 text-sm">12</div>
            <div className="py-2 text-sm">13</div>
            <div className="py-2 text-sm">14</div>
            <div className="py-2 text-sm">15</div>
            <div className="py-2 text-sm">16</div>
          </div>
        </div>

        {/* Events Section */}
        <div className="p-4 space-y-4">
          {/* Streak Counter */}
          <div className="text-center my-6">
            <div className="text-6xl font-bold text-green-600">{streak}</div>
            <p className="text-muted-foreground mt-2">days in a row</p>
            <div className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-sm font-medium mt-4 px-3 py-1 rounded-full">
              Personal Best: {personalBest} days
            </div>
          </div>

          {/* Event Groups */}
          {eventGroups.map((group, groupIndex) => (
            <div key={group.date}>
              <div className="flex items-center mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{group.label}</h3>
                <div className="flex-grow border-t border-border ml-2"></div>
              </div>

              <div className="space-y-3">
                {group.events.map((event) => {
                  const IconComponent = getIconComponent(event.icon)
                  return (
                    <div key={event.id} className="bg-muted/50 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-grow min-w-0">
                        <div className={`p-2 rounded-lg flex-shrink-0 ${getIconColorClasses(event.iconColor)}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-medium text-sm truncate">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.time}</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button className="p-2 border border-border rounded-md hover:bg-muted">
                          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
