'use client'

import { useState } from 'react'
import {
  Building2,
  AlertCircle,
  Trash2,
  Tag,
  Layers,
  DoorOpen,
  Plus,
  Filter,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface FilterTab {
  id: string
  label: string
  icon: React.ElementType
  count?: number
  active?: boolean
}

interface SubTab {
  id: string
  label: string
  icon: React.ElementType
  count?: number
}

const filterTabs: FilterTab[] = [
  { id: 'hostels', label: 'Hostels', icon: Building2, active: true },
  { id: 'unverified', label: 'Unverified', icon: AlertCircle, count: 2004 },
  { id: 'deleted', label: 'Deleted', icon: Trash2 },
  { id: 'sale', label: 'Sale', icon: Tag },
]

const subTabs: SubTab[] = [
  { id: 'hostels', label: 'Hostels', icon: Building2, count: 49 },
  { id: 'floors', label: 'Floors', icon: Layers },
  { id: 'rooms', label: 'Room Management', icon: DoorOpen },
]

export function FilterSection() {
  const [activeTab, setActiveTab] = useState('hostels')
  const [activeSubTab, setActiveSubTab] = useState('hostels')
  const [filtersVisible, setFiltersVisible] = useState(true)

  return (
    <div className="space-y-4">
      {/* Main filter tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            {tab.count && (
              <span
                className={cn(
                  'absolute -top-2 -right-2 px-1.5 py-0.5 text-xs font-bold rounded-full',
                  activeTab === tab.id
                    ? 'bg-primary-foreground text-primary'
                    : 'bg-amber-500 text-white'
                )}
              >
                {tab.count.toLocaleString()}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Sub tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeSubTab === tab.id
                ? 'bg-primary/10 text-primary border border-primary/30'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            {tab.count && activeSubTab === tab.id && (
              <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-primary text-primary-foreground">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filter dropdowns */}
      <div
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-300',
          filtersVisible ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden p-0 border-0'
        )}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Status</label>
          <Select>
            <SelectTrigger className="bg-secondary/50 border-transparent focus:border-primary">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">City</label>
          <Select>
            <SelectTrigger className="bg-secondary/50 border-transparent focus:border-primary">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              <SelectItem value="islamabad">Islamabad</SelectItem>
              <SelectItem value="karachi">Karachi</SelectItem>
              <SelectItem value="lahore">Lahore</SelectItem>
              <SelectItem value="peshawar">Peshawar</SelectItem>
              <SelectItem value="quetta">Quetta</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Hostel For</label>
          <Select>
            <SelectTrigger className="bg-secondary/50 border-transparent focus:border-primary">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="boys">Boys</SelectItem>
              <SelectItem value="girls">Girls</SelectItem>
              <SelectItem value="co-ed">Co-Ed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Category</label>
          <Select>
            <SelectTrigger className="bg-secondary/50 border-transparent focus:border-primary">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="budget">Budget</SelectItem>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Button className="gradient-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="border-border"
          >
            {filtersVisible ? <X className="mr-2 h-4 w-4" /> : <Filter className="mr-2 h-4 w-4" />}
            {filtersVisible ? 'Hide Filters' : 'Show Filters'}
          </Button>
          <Button variant="outline" className="border-border">
            <X className="mr-2 h-4 w-4" />
            Clear Filter
          </Button>
          <Button className="bg-primary/90 hover:bg-primary">
            <Filter className="mr-2 h-4 w-4" />
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
