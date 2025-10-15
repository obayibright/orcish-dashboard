import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { SectionCards } from "@/components/section-cards"
import ContinueLearning from "@/components/continue-learning"
import Timeline from "@/components/timeline"
import Trophy from "@/components/trophy"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="p-4 md:p-6 space-y-6 max-w-[1920px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[1fr_350px] gap-6 items-start">
              {/* Top Left: Section Cards (3 cards) */}
              <div className="h-full">
                <SectionCards />
              </div>

              {/* Top Right: Trophy (matching height of cards row) */}
              <div className="h-full min-w-0">
                <Trophy />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[1fr_350px] gap-6">
              {/* Left Column: Chart Area + Continue Learning */}
              <div className="space-y-6 min-w-0">
                <ChartAreaInteractive />
                <ContinueLearning />
              </div>

              {/* Right Column: Timeline (starting at same row as chart) */}
              <div className="min-w-0">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
