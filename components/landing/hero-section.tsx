import { HostelSearchBar } from "./hostel-search-bar"

const TRUST_STATS = [
  { value: "5,000+", label: "Verified hostels" },
  { value: "50+", label: "Cities covered" },
  { value: "100K+", label: "Happy residents" },
  { value: "4.8", label: "Average rating" },
] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Pakistan&apos;s trusted hostel search &amp; management platform
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Find your perfect{" "}
            <span className="text-primary">hostel</span> in Pakistan
          </h1>

          <p className="text-pretty mx-auto mt-6 mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Search verified listings by location, monthly price, and amenities.
            Built for students, professionals, and hostel owners who want a
            clear, trustworthy experience.
          </p>

          <HostelSearchBar />

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 md:gap-12">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
