"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FEATURED_HOSTELS } from "@/lib/data/mock-hostels"
import { HostelPreviewCard } from "./hostel-preview-card"

export function FeaturedHostelsSection() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <section id="search" className="scroll-mt-24 bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Featured listings
          </span>
          <h2 className="mt-2 mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Popular hostels near you
          </h2>
          <p className="text-muted-foreground">
            Verified previews with photos, amenities, and resident reviews.
            Tap a card to see rooms, owner profile, and booking options.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HOSTELS.map((hostel) => (
            <HostelPreviewCard
              key={hostel.id}
              hostel={hostel}
              isFavorite={favorites.includes(hostel.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" className="px-8" asChild>
            <Link href="/#search">View all hostels</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
