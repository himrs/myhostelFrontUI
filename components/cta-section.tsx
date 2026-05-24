"use client"

import { useState } from "react"
import { Building2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    question: "How do I book a hostel on MyHostel.pk?",
    answer:
      "Simply search for hostels by entering your preferred city or area, use filters to narrow down options, browse listings, and click 'View Details' on your chosen hostel. From there, you can check availability and make a booking request directly through our platform.",
  },
  {
    question: "Are all hostels verified?",
    answer:
      "We personally verify each hostel before listing them on our platform. Verified hostels display a 'Verified' badge. We check facilities, safety measures, and accuracy of listed information to ensure you get exactly what you see.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept multiple payment methods including bank transfers, credit/debit cards (Visa, MasterCard), JazzCash, Easypaisa, and other popular mobile wallets. All transactions are secured with industry-standard encryption.",
  },
  {
    question: "Can I visit a hostel before booking?",
    answer:
      "Absolutely! We encourage prospective residents to schedule visits. You can request a visit through the hostel's detail page, and our team will coordinate with the hostel management to arrange a convenient time.",
  },
  {
    question: "What if I face issues with my booked hostel?",
    answer:
      "Our 24/7 customer support team is here to help. You can reach us via chat, email, or phone. We work closely with hostel owners to resolve any issues quickly and ensure your satisfaction.",
  },
]

export function CTASection() {
  const [email, setEmail] = useState("")
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-10 w-10" />
              <span className="text-2xl font-bold">MyHostel.pk</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Find Your Perfect Hostel?
            </h2>

            <p className="text-primary-foreground/80 mb-8 text-lg">
              Join over 100,000 students and professionals who trust MyHostel.pk for their accommodation needs. Start your search today!
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                variant="secondary"
                className="h-12 px-6 whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Started
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-primary-foreground/20">
              <div>
                <p className="text-3xl font-bold">5K+</p>
                <p className="text-sm text-primary-foreground/70">Hostels</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-primary-foreground/70">Cities</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.8</p>
                <p className="text-sm text-primary-foreground/70">Rating</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      {openFaq === index ? (
                        <Minus className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Plus className="h-4 w-4 text-muted-foreground" />
                      )}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-4 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
