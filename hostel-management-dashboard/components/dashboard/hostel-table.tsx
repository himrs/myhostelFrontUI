'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowUpDown,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Clock,
} from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Hostel {
  id: number
  image: string
  name: string
  city: string
  area: string
  rooms: number
  capacity: number
  subscription: 'subscribed' | 'not-subscribed'
  status: 'open' | 'closed'
  verification: 'verified' | 'unverified'
  nhapk: 'registered' | 'unregistered'
}

const hostels: Hostel[] = [
  {
    id: 2420,
    image: '/hostel-1.jpg',
    name: 'Afza Girls Hostel',
    city: 'Islamabad',
    area: 'PWD',
    rooms: 14,
    capacity: 50,
    subscription: 'not-subscribed',
    status: 'open',
    verification: 'verified',
    nhapk: 'registered',
  },
  {
    id: 2419,
    image: '/hostel-2.jpg',
    name: 'AD Boys Hostel',
    city: 'Karachi',
    area: 'Defence View Phase 2 Defence View Housing Society, Karachi, Pakistan',
    rooms: 8,
    capacity: 30,
    subscription: 'not-subscribed',
    status: 'open',
    verification: 'verified',
    nhapk: 'unregistered',
  },
  {
    id: 2418,
    image: '/hostel-3.jpg',
    name: 'AWAIS BOYS HOSTEL',
    city: 'Islamabad',
    area: 'G-11 Markaz',
    rooms: 22,
    capacity: 22,
    subscription: 'not-subscribed',
    status: 'open',
    verification: 'unverified',
    nhapk: 'unregistered',
  },
  {
    id: 2417,
    image: '/hostel-4.jpg',
    name: 'Elite Student Housing',
    city: 'Lahore',
    area: 'Johar Town',
    rooms: 35,
    capacity: 120,
    subscription: 'subscribed',
    status: 'open',
    verification: 'verified',
    nhapk: 'registered',
  },
  {
    id: 2416,
    image: '/hostel-5.jpg',
    name: 'Green Valley Hostel',
    city: 'Peshawar',
    area: 'University Town',
    rooms: 18,
    capacity: 65,
    subscription: 'subscribed',
    status: 'open',
    verification: 'verified',
    nhapk: 'registered',
  },
  {
    id: 2415,
    image: '/hostel-6.jpg',
    name: 'City Center Lodge',
    city: 'Islamabad',
    area: 'Blue Area',
    rooms: 25,
    capacity: 80,
    subscription: 'not-subscribed',
    status: 'closed',
    verification: 'unverified',
    nhapk: 'unregistered',
  },
]

function SubscriptionBadge({ status }: { status: 'subscribed' | 'not-subscribed' }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium',
        status === 'subscribed'
          ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
          : 'bg-muted text-muted-foreground border-border'
      )}
    >
      {status === 'subscribed' ? 'Subscribed' : 'Not Subscribed'}
    </Badge>
  )
}

function StatusBadge({ status }: { status: 'open' | 'closed' }) {
  return (
    <Badge
      className={cn(
        'font-medium',
        status === 'open'
          ? 'bg-emerald-500 hover:bg-emerald-600'
          : 'bg-red-500 hover:bg-red-600'
      )}
    >
      <span className="flex items-center gap-1">
        {status === 'open' ? (
          <CheckCircle2 className="h-3 w-3" />
        ) : (
          <XCircle className="h-3 w-3" />
        )}
        {status === 'open' ? 'Open' : 'Closed'}
      </span>
    </Badge>
  )
}

function VerificationBadge({ status }: { status: 'verified' | 'unverified' }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium',
        status === 'verified'
          ? 'bg-primary/10 text-primary border-primary/20'
          : 'bg-amber-500/10 text-amber-600 border-amber-500/20'
      )}
    >
      {status === 'verified' ? (
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" />
          Verified
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          Unverified
        </span>
      )}
    </Badge>
  )
}

function NhapkBadge({ status }: { status: 'registered' | 'unregistered' }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        'font-medium',
        status === 'registered'
          ? 'bg-primary/10 text-primary border-primary/20'
          : 'bg-red-500/10 text-red-600 border-red-500/20'
      )}
    >
      {status === 'registered' ? (
        <span className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" />
          Registered with NHAPK
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <XCircle className="h-3 w-3" />
          Unregistered
        </span>
      )}
    </Badge>
  )
}

export function HostelTable() {
  const [searchQuery, setSearchQuery] = useState('')
  const [entriesPerPage, setEntriesPerPage] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredHostels = hostels.filter(
    (hostel) =>
      hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hostel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hostel.area.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {/* Table controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[70px] bg-secondary/50 border-transparent">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">entries</span>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64 pl-10 bg-secondary/50 border-transparent focus:border-primary"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="w-12 font-semibold">
                <Button variant="ghost" size="sm" className="h-8 -ml-2">
                  #
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold">Image</TableHead>
              <TableHead className="font-semibold">
                <Button variant="ghost" size="sm" className="h-8 -ml-2">
                  Name
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold">
                <Button variant="ghost" size="sm" className="h-8 -ml-2">
                  City
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-semibold hidden xl:table-cell">Area</TableHead>
              <TableHead className="font-semibold text-center">Rooms</TableHead>
              <TableHead className="font-semibold text-center">Capacity</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">Subscription</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold hidden md:table-cell">Verification</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">NHAPK</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHostels.map((hostel, index) => (
              <TableRow
                key={hostel.id}
                className="group hover:bg-muted/30 transition-colors"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <TableCell className="font-mono text-muted-foreground">{hostel.id}</TableCell>
                <TableCell>
                  <div className="relative h-12 w-16 rounded-lg overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary/60">
                        {hostel.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-foreground">{hostel.name}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">{hostel.city}</TableCell>
                <TableCell className="hidden xl:table-cell max-w-[200px]">
                  <span className="text-muted-foreground truncate block">{hostel.area}</span>
                </TableCell>
                <TableCell className="text-center font-medium">{hostel.rooms}</TableCell>
                <TableCell className="text-center font-medium">{hostel.capacity}</TableCell>
                <TableCell className="hidden lg:table-cell">
                  <SubscriptionBadge status={hostel.subscription} />
                </TableCell>
                <TableCell>
                  <StatusBadge status={hostel.status} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <VerificationBadge status={hostel.verification} />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <NhapkBadge status={hostel.nhapk} />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing 1 to {filteredHostels.length} of {hostels.length} entries
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="icon"
              className={cn(
                'h-8 w-8',
                currentPage === page && 'gradient-primary'
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
