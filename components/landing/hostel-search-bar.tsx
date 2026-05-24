"use client"

import { useMemo, useState } from "react"
import { MapPin, Search, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  POPULAR_LOCATIONS,
  SEARCH_FILTER_OPTIONS,
  type SearchFilterCategory,
} from "@/lib/constants/search-filters"
import { cn } from "@/lib/utils"

type SelectedFilters = Record<SearchFilterCategory, string[]>

const emptyFilters = (): SelectedFilters => ({
  gender: [],
  roomType: [],
  priceRange: [],
  amenities: [],
})

export function HostelSearchBar() {
  const [location, setLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>(emptyFilters)

  const activeFilterCount = useMemo(
    () => Object.values(selectedFilters).flat().length,
    [selectedFilters]
  )

  const toggleFilter = (category: SearchFilterCategory, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }))
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location.trim()) params.set("location", location.trim())
    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length) params.set(key, values.join(","))
    })
    const query = params.toString()
    window.location.href = query ? `/?${query}#search` : "/#search"
  }

  return (
    <div className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-card p-4 shadow-lg md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:gap-4">
        <div className="relative flex-1">
          <MapPin
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="text"
            placeholder="City, area, or university nearby..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="h-12 border-0 bg-muted/50 pl-10 text-foreground placeholder:text-muted-foreground"
            aria-label="Search location"
          />
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 gap-2"
          onClick={() => setShowFilters((open) => !open)}
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden />
          Price &amp; amenities
          {activeFilterCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>

        <Button
          type="button"
          className="h-12 gap-2 px-8"
          onClick={handleSearch}
        >
          <Search className="h-4 w-4" aria-hidden />
          Search hostels
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">Popular:</span>
        {POPULAR_LOCATIONS.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setLocation(loc)}
            className="rounded-full bg-muted px-3 py-1 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {loc}
          </button>
        ))}
      </div>

      {showFilters && (
        <div className="mt-6 border-t border-border pt-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Refine your search</h3>
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="rounded-lg p-1 transition-colors hover:bg-muted"
              aria-label="Close filters"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(SEARCH_FILTER_OPTIONS) as SearchFilterCategory[]).map(
              (category) => (
                <div key={category}>
                  <h4 className="mb-2 text-sm font-medium capitalize text-foreground">
                    {category === "priceRange" ? "Price range" : category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {SEARCH_FILTER_OPTIONS[category].map((option) => {
                      const selected = selectedFilters[category].includes(option)
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleFilter(category, option)}
                          className={cn(
                            "rounded-lg border px-3 py-1.5 text-sm transition-colors",
                            selected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card hover:border-primary"
                          )}
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            )}
          </div>

          {activeFilterCount > 0 && (
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-sm text-muted-foreground">
                {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}{" "}
                selected
              </span>
              <button
                type="button"
                onClick={() => setSelectedFilters(emptyFilters())}
                className="text-sm text-primary hover:underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
