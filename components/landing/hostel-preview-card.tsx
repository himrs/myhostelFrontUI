"use client"

import Link from "next/link"
import {
  Car,
  Heart,
  MapPin,
  Shield,
  Star,
  UtensilsCrossed,
  WashingMachine,
  Wifi,
  Wind,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { HostelAmenity, HostelPreview } from "@/lib/types/hostel"
import { cn } from "@/lib/utils"

const amenityConfig: Record<
  HostelAmenity,
  { icon: React.ReactNode; label: string }
> = {
  wifi: { icon: <Wifi className="h-4 w-4" />, label: "WiFi" },
  ac: { icon: <Wind className="h-4 w-4" />, label: "AC" },
  meals: { icon: <UtensilsCrossed className="h-4 w-4" />, label: "Meals" },
  laundry: { icon: <WashingMachine className="h-4 w-4" />, label: "Laundry" },
  parking: { icon: <Car className="h-4 w-4" />, label: "Parking" },
  security: { icon: <Shield className="h-4 w-4" />, label: "Security" },
}

interface HostelPreviewCardProps {
  hostel: HostelPreview
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
}

export function HostelPreviewCard({
  hostel,
  isFavorite = false,
  onToggleFavorite,
}: HostelPreviewCardProps) {
  return (
    <Card className="group overflow-hidden border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={hostel.image}
          alt={hostel.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {hostel.verified && (
            <span className="rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
              Verified
            </span>
          )}
          <span className="rounded-full bg-card/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            {hostel.gender}
          </span>
        </div>
        {onToggleFavorite && (
          <button
            type="button"
            onClick={() => onToggleFavorite(hostel.id)}
            className="absolute right-3 top-3 rounded-full bg-card/90 p-2 backdrop-blur-sm transition-colors hover:bg-card"
            aria-label={
              isFavorite
                ? `Remove ${hostel.name} from favorites`
                : `Save ${hostel.name} to favorites`
            }
          >
            <Heart
              className={cn(
                "h-5 w-5",
                isFavorite ? "fill-red-500 text-red-500" : "text-foreground"
              )}
            />
          </button>
        )}
        <div className="absolute bottom-3 right-3 rounded-lg bg-card/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-lg font-bold text-foreground">
            PKR {hostel.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {hostel.name}
        </h3>
        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          {hostel.location}
        </div>

        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <Star
              className="h-4 w-4 fill-accent text-accent"
              aria-hidden
            />
            <span className="font-medium text-foreground">{hostel.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({hostel.reviews} reviews)
            </span>
          </div>
          <span className="rounded-full bg-muted px-2 py-0.5 text-sm text-muted-foreground">
            {hostel.roomType}
          </span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {hostel.amenities.map((amenity) => {
            const config = amenityConfig[amenity]
            return (
              <div
                key={amenity}
                className="flex items-center gap-1 rounded-lg bg-muted px-2 py-1 text-xs text-muted-foreground"
                title={config.label}
              >
                {config.icon}
                <span>{config.label}</span>
              </div>
            )
          })}
        </div>

        <Button className="w-full" variant="outline" asChild>
          <Link href={`/hostel/${hostel.id}`}>View details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
