'use client'

import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/dashboard/sidebar'
import { Header } from '@/components/dashboard/header'
import { StatsCards } from '@/components/dashboard/stats-cards'
import { FilterSection } from '@/components/dashboard/filter-section'
import { HostelTable } from '@/components/dashboard/hostel-table'
import { Charts } from '@/components/dashboard/charts'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="lg:pl-[260px] transition-all duration-300">
        <Header />

        <main className="p-4 lg:p-6 space-y-6">
          {/* Page title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
                <span className="gradient-text">Hostels</span>
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage and monitor all hostel properties
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-medium">
                2,239 Total Properties
              </span>
            </div>
          </div>

          {/* Stats cards */}
          <StatsCards />

          {/* Charts section */}
          <Charts />

          {/* Filter section */}
          <div className="pt-4">
            <FilterSection />
          </div>

          {/* Hostel table */}
          <div className="pt-2">
            <HostelTable />
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border bg-card/50 py-6 px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 HostelHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
