'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  Home,
  Building2,
  Settings,
  Users,
  MapPin,
  CreditCard,
  MessageSquare,
  Award,
  Briefcase,
  UserCog,
  UtensilsCrossed,
  Coffee,
  FileText,
  DollarSign,
  Calculator,
  Wallet,
  Activity,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LogOut,
  Bell,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  badge?: number
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navigation: NavSection[] = [
  {
    title: '',
    items: [{ title: 'Home', href: '/', icon: Home }],
  },
  {
    title: 'Features',
    items: [
      { title: 'Hostel Management', href: '/hostels', icon: Building2, badge: 2239 },
      { title: 'Feature Management', href: '/features', icon: Settings },
      { title: 'Users Management', href: '/users', icon: Users },
      { title: 'Location Management', href: '/locations', icon: MapPin },
      { title: 'Subscription Management', href: '/subscriptions', icon: CreditCard },
      { title: 'Requests', href: '/requests', icon: MessageSquare, badge: 12 },
      { title: 'NHAPK Membership', href: '/nhapk', icon: Award },
      { title: 'Job Post', href: '/jobs', icon: Briefcase },
      { title: 'Staff', href: '/staff', icon: UserCog },
      { title: 'Mess & Menu', href: '/mess', icon: UtensilsCrossed },
      { title: 'Canteen', href: '/canteen', icon: Coffee },
    ],
  },
  {
    title: 'Management',
    items: [
      { title: 'Pages', href: '/pages', icon: FileText },
      { title: 'Financials', href: '/financials', icon: DollarSign },
      { title: 'Financial System', href: '/financial-system', icon: Calculator },
      { title: 'E-Wallet', href: '/wallet', icon: Wallet },
      { title: 'Activity Log', href: '/activity', icon: Activity },
    ],
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <TooltipProvider delayDuration={0}>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-card/80 backdrop-blur-sm border border-border shadow-lg"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen flex flex-col transition-all duration-300 ease-out',
          'bg-sidebar text-sidebar-foreground border-r border-sidebar-border',
          collapsed ? 'w-[72px]' : 'w-[260px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          className
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            'flex items-center h-16 px-4 border-b border-sidebar-border',
            collapsed ? 'justify-center' : 'gap-3'
          )}
        >
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg animate-pulse-glow">
              <Building2 className="h-5 w-5 text-sidebar-primary-foreground" />
            </div>
          </div>
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold text-lg tracking-tight truncate">
                HostelHub
              </span>
              <span className="text-xs text-sidebar-foreground/60 truncate">
                Management System
              </span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
          {navigation.map((section, idx) => (
            <div key={idx}>
              {section.title && !collapsed && (
                <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                  {section.title}
                </p>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                            'text-sidebar-foreground/70',
                            item.href === '/hostels' &&
                              'bg-sidebar-accent text-sidebar-primary',
                            collapsed && 'justify-center px-2'
                          )}
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon
                            className={cn(
                              'h-5 w-5 flex-shrink-0',
                              item.href === '/hostels' && 'text-sidebar-primary'
                            )}
                          />
                          {!collapsed && (
                            <>
                              <span className="truncate flex-1">{item.title}</span>
                              {item.badge && (
                                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-sidebar-primary/20 text-sidebar-primary">
                                  {item.badge.toLocaleString()}
                                </span>
                              )}
                            </>
                          )}
                        </Link>
                      </TooltipTrigger>
                      {collapsed && (
                        <TooltipContent side="right" className="font-medium">
                          {item.title}
                          {item.badge && ` (${item.badge.toLocaleString()})`}
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* User section */}
        <div className="border-t border-sidebar-border p-3">
          <div
            className={cn(
              'flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors cursor-pointer',
              collapsed && 'justify-center'
            )}
          >
            <Avatar className="h-9 w-9 border-2 border-sidebar-primary/30">
              <AvatarImage src="/avatar.png" alt="User" />
              <AvatarFallback className="bg-sidebar-primary/20 text-sidebar-primary text-sm font-semibold">
                SA
              </AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Sajid Anwar</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">Admin</p>
              </div>
            )}
            {!collapsed && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-sidebar-foreground/60 hover:text-sidebar-foreground"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Collapse toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-sidebar-border bg-sidebar hover:bg-sidebar-accent hidden lg:flex"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </Button>
      </aside>
    </TooltipProvider>
  )
}
