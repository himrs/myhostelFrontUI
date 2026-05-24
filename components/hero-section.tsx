"use client"

import { useState } from "react"
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const popularLocations = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Peshawar",
]

const filterOptions = {
  gender: ["Male", "Female", "Co-ed"],
  roomType: ["Single", "Double", "Triple", "Dormitory"],
  priceRange: ["Under PKR 10K", "PKR 10K - 20K", "PKR 20K - 30K", "PKR 30K+"],
  amenities: ["WiFi", "AC", "Meals", "Laundry", "Parking", "Security"],
}

export function HeroSection() {
  const [location, setLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    gender: [],
    roomType: [],
    priceRange: [],
    amenities: [],
  })

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }))
  }

  const activeFilterCount = Object.values(selectedFilters).flat().length

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {"Pakistan's #1 Hostel Search Platform"}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Find Your Perfect
            <span className="text-primary"> Hostel </span>
            in Pakistan
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            Search thousands of verified hostels across major cities. Compare prices, amenities, and reviews to find affordable accommodation near your university or workplace.
          </p>

          {/* Search Box */}
          <div className="bg-card rounded-2xl shadow-lg border border-border p-4 md:p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Location Input */}
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter city or area..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 bg-muted/50 border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Filter Button */}
              <Button
                variant="outline"
                className="h-12 gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>

              {/* Search Button */}
              <Button className="h-12 px-8 gap-2">
                <Search className="h-4 w-4" />
                Search Hostels
              </Button>
            </div>

            {/* Popular Locations */}
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {popularLocations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setLocation(loc)}
                  className="text-sm px-3 py-1 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Gender */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Gender</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.gender.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter("gender", option)}
                          className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                            selectedFilters.gender.includes(option)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border hover:border-primary"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Room Type */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Room Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.roomType.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter("roomType", option)}
                          className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                            selectedFilters.roomType.includes(option)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border hover:border-primary"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Price Range</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.priceRange.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter("priceRange", option)}
                          className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                            selectedFilters.priceRange.includes(option)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border hover:border-primary"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.amenities.map((option) => (
                        <button
                          key={option}
                          onClick={() => toggleFilter("amenities", option)}
                          className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                            selectedFilters.amenities.includes(option)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card border-border hover:border-primary"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} selected
                    </span>
                    <button
                      onClick={() =>
                        setSelectedFilters({
                          gender: [],
                          roomType: [],
                          priceRange: [],
                          amenities: [],
                        })
                      }
                      className="text-sm text-primary hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">5,000+</p>
              <p className="text-sm text-muted-foreground">Verified Hostels</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Cities Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">100K+</p>
              <p className="text-sm text-muted-foreground">Happy Residents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-foreground">4.8</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
