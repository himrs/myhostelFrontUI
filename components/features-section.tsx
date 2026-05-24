import { Shield, Search, Star, Clock, Headphones, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "Every hostel is personally verified by our team to ensure quality, safety, and accurate information.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Advanced filters help you find the perfect match based on location, budget, amenities, and preferences.",
  },
  {
    icon: Star,
    title: "Genuine Reviews",
    description:
      "Read authentic reviews from actual residents to make informed decisions about your accommodation.",
  },
  {
    icon: Clock,
    title: "Real-time Availability",
    description:
      "Check live room availability and book instantly without the hassle of phone calls or visits.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available round the clock to assist you with any queries or issues.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay securely online with multiple payment options including bank transfer, card, and mobile wallets.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Your Trusted Hostel Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make finding and booking hostels simple, safe, and stress-free with our comprehensive platform features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
