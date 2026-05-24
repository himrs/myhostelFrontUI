"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Heart, MapPin, Wifi, Wind, UtensilsCrossed, Shield, Car, WashingMachine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const hostels = [
  {
    id: 1,
    name: "Elite Student Hostel",
    location: "Gulberg, Lahore",
    price: 15000,
    rating: 4.8,
    reviews: 124,
    image: "/images/hostel-main.jpg",
    amenities: ["wifi", "ac", "meals"],
    gender: "Male",
    roomType: "Double",
    verified: true,
  },
  {
    id: 2,
    name: "Comfort Stay Girls Hostel",
    location: "DHA Phase 5, Karachi",
    price: 22000,
    rating: 4.9,
    reviews: 89,
    image: "/images/hostel-2.jpg",
    amenities: ["wifi", "ac", "meals", "laundry", "security"],
    gender: "Female",
    roomType: "Single",
    verified: true,
  },
  {
    id: 3,
    name: "University View Hostel",
    location: "Blue Area, Islamabad",
    price: 18000,
    rating: 4.6,
    reviews: 156,
    image: "/images/hostel-3.jpg",
    amenities: ["wifi", "meals", "parking"],
    gender: "Male",
    roomType: "Triple",
    verified: true,
  },
  {
    id: 4,
    name: "Prime Location Hostel",
    location: "Saddar, Rawalpindi",
    price: 12000,
    rating: 4.5,
    reviews: 78,
    image: "/images/hostel-4.jpg",
    amenities: ["wifi", "meals"],
    gender: "Co-ed",
    roomType: "Dormitory",
    verified: false,
  },
  {
    id: 5,
    name: "Green Valley Hostel",
    location: "Johar Town, Lahore",
    price: 16500,
    rating: 4.7,
    reviews: 203,
    image: "/images/hostel-room-1.jpg",
    amenities: ["wifi", "ac", "meals", "laundry"],
    gender: "Female",
    roomType: "Double",
    verified: true,
  },
  {
    id: 6,
    name: "Metro City Hostel",
    location: "Clifton, Karachi",
    price: 25000,
    rating: 4.9,
    reviews: 167,
    image: "/images/hostel-common.jpg",
    amenities: ["wifi", "ac", "meals", "laundry", "parking", "security"],
    gender: "Male",
    roomType: "Single",
    verified: true,
  },
]

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="h-4 w-4" />,
  ac: <Wind className="h-4 w-4" />,
  meals: <UtensilsCrossed className="h-4 w-4" />,
  laundry: <WashingMachine className="h-4 w-4" />,
  parking: <Car className="h-4 w-4" />,
  security: <Shield className="h-4 w-4" />,
}

export function FeaturedHostels() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  return (
    <section id="search" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Featured Listings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Popular Hostels Near You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated hostels verified by our team. Each listing includes detailed photos, amenities, and genuine reviews from residents.
          </p>
        </div>

        {/* Hostel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hostels.map((hostel) => (
            <Card
              key={hostel.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={hostel.image}
                  alt={hostel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {hostel.verified && (
                    <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Verified
                    </span>
                  )}
                  <span className="px-2 py-1 text-xs font-medium bg-card/90 backdrop-blur-sm text-foreground rounded-full">
                    {hostel.gender}
                  </span>
                </div>
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(hostel.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-colors"
                  aria-label={`Add ${hostel.name} to favorites`}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(hostel.id)
                        ? "fill-red-500 text-red-500"
                        : "text-foreground"
                    }`}
                  />
                </button>
                {/* Price */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-lg">
                  <span className="text-lg font-bold text-foreground">
                    PKR {hostel.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Title & Location */}
                <h3 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                  {hostel.name}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  {hostel.location}
                </div>

                {/* Rating & Room Type */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{hostel.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({hostel.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-sm px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                    {hostel.roomType}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {hostel.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 px-2 py-1 bg-muted rounded-lg text-muted-foreground text-xs"
                      title={amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                    >
                      {amenityIcons[amenity]}
                      <span className="capitalize">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className="w-full" variant="outline" asChild>
                  <Link href={`/hostel/${hostel.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="px-8">
            View All Hostels
          </Button>
        </div>
      </div>
    </section>
  )
}
