"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Medical Student, KEMU Lahore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "MyHostel.pk made my hostel search incredibly easy. I found a verified hostel near my university within minutes. The filters helped me find exactly what I needed - AC rooms with meals included!",
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Software Engineer, Karachi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As a working professional, safety was my top priority. The verified badge and genuine reviews gave me confidence. My hostel has 24/7 security and all the amenities promised on the listing.",
  },
  {
    id: 3,
    name: "Hassan Ali",
    role: "Engineering Student, NUST Islamabad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The best part is the comparison feature. I could compare multiple hostels side by side, checking prices, amenities, and reviews. Saved me so much time and money!",
  },
  {
    id: 4,
    name: "Ayesha Malik",
    role: "MBA Student, LUMS",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Finally, a platform that understands students&apos; needs! The price filters and location-based search helped me find an affordable place within walking distance of my campus.",
  },
  {
    id: 5,
    name: "Usman Tariq",
    role: "Accountant, Rawalpindi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I relocated for work and was worried about finding good accommodation. MyHostel.pk customer support guided me through the process. Highly recommended for anyone new to a city!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students and professionals who found their perfect accommodation through MyHostel.pk
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl border border-border p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="h-6 w-6 text-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
              />

              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  {`"${testimonials[currentIndex].text}"`}
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
