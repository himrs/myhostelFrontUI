'use client'

import { cn } from '@/lib/utils'
import { Building2, ThumbsUp, Clock, XCircle, TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ElementType
  trend?: {
    value: number
    isPositive: boolean
  }
  iconColor: string
  iconBgColor: string
}

function StatCard({ title, value, icon: Icon, trend, iconColor, iconBgColor }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          {trend && (
            <div className="flex items-center gap-1 text-sm">
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={cn(
                'font-medium',
                trend.isPositive ? 'text-emerald-500' : 'text-red-500'
              )}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn('rounded-xl p-3', iconBgColor)}>
          <Icon className={cn('h-6 w-6', iconColor)} />
        </div>
      </div>
    </div>
  )
}

export function StatsCards() {
  const stats = [
    {
      title: 'Total Hostels',
      value: 2239,
      icon: Building2,
      iconColor: 'text-primary',
      iconBgColor: 'bg-primary/10',
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: 'Approved Hostels',
      value: 233,
      icon: ThumbsUp,
      iconColor: 'text-emerald-600',
      iconBgColor: 'bg-emerald-500/10',
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: 'Pending Hostels',
      value: 2004,
      icon: Clock,
      iconColor: 'text-amber-600',
      iconBgColor: 'bg-amber-500/10',
      trend: { value: 3.1, isPositive: false },
    },
    {
      title: 'Cancelled Hostels',
      value: 2,
      icon: XCircle,
      iconColor: 'text-red-600',
      iconBgColor: 'bg-red-500/10',
      trend: { value: 50, isPositive: false },
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  )
}
