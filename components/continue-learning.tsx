"use client"

import type React from "react"

import {
  Search,
  Globe,
  Info,
  ArrowUp,
  MoreHorizontal,
  Minus,
  Circle,
  Star,
  Monitor,
  Pencil,
  User,
  Video,
} from "lucide-react"
import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CourseCardProps {
  icon: React.ReactNode
  iconBgColor: string
  title: string
  level: string
  duration: string
  progress: number
  status: string
  badge?: string
}

function CourseCard({ icon, iconBgColor, title, level, duration, progress, status, badge }: CourseCardProps) {
  const getProgressBadge = () => {
    if (progress === 0) {
      return (
        <div className="bg-gray-200 text-gray-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
          <Minus className="w-4 h-4 mr-1" />
          {progress}%
        </div>
      )
    } else if (progress < 50) {
      return (
        <div className="bg-amber-100 text-amber-900 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-amber-200 dark:text-amber-950">
          <ArrowUp className="w-4 h-4 mr-1 text-amber-500" />
          {progress}%
        </div>
      )
    } else if (progress < 100) {
      return (
        <div className="bg-emerald-100 text-emerald-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-emerald-200 dark:text-emerald-900">
          <ArrowUp className="w-4 h-4 mr-1 text-emerald-600" />
          {progress}%
        </div>
      )
    } else {
      return (
        <div className="bg-emerald-100 text-emerald-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-emerald-200 dark:text-emerald-900">
          <ArrowUp className="w-4 h-4 mr-1 text-emerald-600" />
          {progress}%
        </div>
      )
    }
  }

  const getStatusBadge = () => {
    if (status === "In-Progress") {
      return (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          <IconLoader className="mr-1" />
          In Progress
        </Badge>
      )
    } else if (status === "Neutral") {
      return (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          <Circle className="w-4 h-4 mr-1" />
          Neutral
        </Badge>
      )
    } else if (status === "Almost Completed" || status === "Completed") {
      return (
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400 mr-1" />
          Done
        </Badge>
      )
    }
  }

  return (
    <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex flex-nowrap items-center justify-between gap-4 min-w-0">
      <div className="flex items-center gap-4 flex-shrink-0">
        <div className={`${iconBgColor} p-3 rounded-lg flex-shrink-0`}>{icon}</div>
        <div className="min-w-0 flex-shrink-0">
          <div className="flex items-center gap-2 flex-nowrap">
            <h2 className="font-semibold text-lg text-foreground whitespace-nowrap">{title}</h2>
            {badge && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 inline-flex items-center whitespace-nowrap flex-shrink-0">
                <Star className="w-3 h-3 mr-1" />
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            {level} • {duration}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0 flex-nowrap">
        <div className="text-center w-36 flex-shrink-0">
          <p className="text-sm text-muted-foreground mb-1 whitespace-nowrap">Course Progress</p>
          {getProgressBadge()}
        </div>
        <div className="text-center w-36 flex-shrink-0">
          <p className="text-sm text-muted-foreground mb-1 whitespace-nowrap">Course Status</p>
          {getStatusBadge()}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="text-muted-foreground hover:bg-accent bg-transparent flex-shrink-0"
        >
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

export default function ContinueLearning() {
  const courses = [
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      iconBgColor: "bg-teal-500",
      title: "UX Research",
      level: "Advance",
      duration: "20h 50m",
      progress: 24,
      status: "In-Progress",
    },
    {
      icon: <Pencil className="w-8 h-8 text-white" />,
      iconBgColor: "bg-yellow-600",
      title: "Advance Graphic Design",
      level: "Advance",
      duration: "24h 55m",
      progress: 0,
      status: "Neutral",
      badge: "Newly Added",
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      iconBgColor: "bg-purple-500",
      title: "User Interface Design",
      level: "Basic",
      duration: "8h 50m",
      progress: 90,
      status: "In-Progress",
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      iconBgColor: "bg-violet-500",
      title: "Video Editing - Pixel Edit",
      level: "Epic",
      duration: "40h 50m",
      progress: 100,
      status: "Completed",
    },
  ]

  return (
    <Card className="max-w-7xl mx-auto">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-3">
            <Globe className="w-6 h-6 text-foreground" />
            <div>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>Track and continue your learning progress</CardDescription>
            </div>
            <Info className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input type="text" placeholder="Search course or community" className="w-full pl-9 bg-card" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
