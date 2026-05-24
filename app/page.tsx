import { Header, Footer } from "@/components/layout"
import {
  FeaturedHostelsSection,
  HeroSection,
} from "@/components/landing"
import { CitiesSection } from "@/components/cities-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedHostelsSection />
        <CitiesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
