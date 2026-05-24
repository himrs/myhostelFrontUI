import { MapPin } from "lucide-react"

const cities = [
  {
    name: "Lahore",
    hostels: 1250,
    image: "/images/city-lahore.jpg",
  },
  {
    name: "Karachi",
    hostels: 980,
    image: "/images/city-karachi.jpg",
  },
  {
    name: "Islamabad",
    hostels: 750,
    image: "/images/city-islamabad.jpg",
  },
  {
    name: "Rawalpindi",
    hostels: 520,
    image: "/images/city-rawalpindi.jpg",
  },
  {
    name: "Faisalabad",
    hostels: 380,
    image: "/images/city-faisalabad.jpg",
  },
  {
    name: "Peshawar",
    hostels: 290,
    image: "/images/city-peshawar.jpg",
  },
]

export function CitiesSection() {
  return (
    <section id="cities" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Explore Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Browse by City
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find hostels in major cities across Pakistan. From bustling metropolises to university towns, we have got you covered.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <a
              key={city.name}
              href={`#search?city=${city.name.toLowerCase()}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={city.image}
                alt={`Hostels in ${city.name}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-card text-lg font-semibold mb-1">{city.name}</h3>
                <div className="flex items-center gap-1 text-card/80 text-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  {city.hostels.toLocaleString()} hostels
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
