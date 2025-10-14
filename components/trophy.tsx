"use client"

import { Trophy, Sparkles } from "lucide-react"

type TrophyTier = "beginner" | "intermediate" | "advanced" | "master"

interface TrophyProps {
  hours?: number
  achievements?: number
  tier?: TrophyTier
}

export default function TrophyComponent({ hours = 0, achievements = 0, tier }: TrophyProps) {
  // Calculate tier based on hours if not provided
  const calculateTier = (hrs: number): TrophyTier => {
    if (hrs >= 100) return "master"
    if (hrs >= 50) return "advanced"
    if (hrs >= 20) return "intermediate"
    return "beginner"
  }

  const currentTier = tier || calculateTier(hours)

  const getTierConfig = (tierLevel: TrophyTier) => {
    switch (tierLevel) {
      case "master":
        return {
          label: "Master",
          color: "from-yellow-400 via-yellow-500 to-amber-600",
          bgGlow: "bg-yellow-500/20",
          borderColor: "border-yellow-500/30",
          textColor: "text-yellow-500",
          iconBg: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600",
          ringColor: "ring-yellow-500/50",
          nextMilestone: null,
        }
      case "advanced":
        return {
          label: "Advanced",
          color: "from-gray-300 via-gray-200 to-gray-400",
          bgGlow: "bg-gray-400/20",
          borderColor: "border-gray-400/30",
          textColor: "text-gray-400",
          iconBg: "bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400",
          ringColor: "ring-gray-400/50",
          nextMilestone: 100,
        }
      case "intermediate":
        return {
          label: "Intermediate",
          color: "from-amber-600 via-amber-700 to-amber-800",
          bgGlow: "bg-amber-600/20",
          borderColor: "border-amber-600/30",
          textColor: "text-amber-600",
          iconBg: "bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800",
          ringColor: "ring-amber-600/50",
          nextMilestone: 50,
        }
      default:
        return {
          label: "Novice",
          color: "from-gray-500 via-gray-600 to-gray-700",
          bgGlow: "bg-gray-500/20",
          borderColor: "border-gray-500/30",
          textColor: "text-gray-500",
          iconBg: "bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700",
          ringColor: "ring-gray-500/50",
          nextMilestone: 20,
        }
    }
  }

  const config = getTierConfig(currentTier)
  const progressToNext = config.nextMilestone ? Math.min((hours / config.nextMilestone) * 100, 100) : 100

  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progressToNext / 100) * circumference

  return (
    <div className="rounded-lg shadow-md border border-border overflow-hidden h-full flex flex-col">
      {/* Trophy Display */}
      <div className="relative p-4 bg-gradient-to-br from-background via-muted/30 to-background flex-grow flex items-center justify-center">
        {/* Glow Effect */}
        <div className={`absolute inset-0 ${config.bgGlow} blur-3xl opacity-30`}></div>

        {/* Trophy Icon Container */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative mb-3">
            {/* Circular Progress SVG */}
            {config.nextMilestone && (
              <svg className="absolute inset-0 -rotate-90" width="90" height="90">
                {/* Background Circle */}
                <circle
                  cx="45"
                  cy="45"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-muted"
                  opacity="0.2"
                />
                {/* Progress Circle */}
                <circle
                  cx="45"
                  cy="45"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className={config.textColor}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
              </svg>
            )}

            {/* Trophy Icon with Ring */}
            <div className={`relative ring-2 ${config.ringColor} rounded-full p-1`}>
              <div className={`w-16 h-16 rounded-full ${config.iconBg} flex items-center justify-center shadow-2xl`}>
                <Trophy className="w-8 h-8 text-white drop-shadow-lg" strokeWidth={1.5} />
              </div>
              {/* Sparkle Effect for Master Tier */}
              {currentTier === "master" && (
                <>
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                  <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-yellow-400 animate-pulse delay-75" />
                </>
              )}
            </div>
          </div>

          {/* Tier Label */}
          <div className="text-center mb-2">
            <h2 className={`text-xl font-bold ${config.textColor} mb-1`}>{config.label}</h2>
            <p className="text-xs text-muted-foreground">Achievement Tier</p>
          </div>
        </div>
      </div>

      {/* Master Achievement Message */}
      {currentTier === "master" && (
        <div className="p-3 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border-t border-yellow-500/20">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <p className="text-sm font-medium text-yellow-600 dark:text-yellow-400">You've reached the highest tier!</p>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      )}
    </div>
  )
}
