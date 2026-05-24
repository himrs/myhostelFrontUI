"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  MapPin, 
  Search,
  Send,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Calendar,
  Building2,
  Users,
  Star,
  MessageSquare,
  ArrowRight,
  Home,
  DollarSign,
  Clock,
  Shield,
  Headphones
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const areas = [
  {
    id: 1,
    city: "Lahore",
    areas: ["Gulberg", "DHA", "Johar Town", "Model Town", "Faisal Town", "Garden Town"],
    guide: {
      name: "Muhammad Asif",
      phone: "+92 300 1234567",
      email: "asif@myhostel.pk",
      experience: "5 years",
      rating: 4.9,
      image: "/images/guide-1.jpg",
      hostelsHelped: 450,
    }
  },
  {
    id: 2,
    city: "Karachi",
    areas: ["DHA", "Clifton", "Gulshan", "North Nazimabad", "PECHS", "Saddar"],
    guide: {
      name: "Fatima Ahmed",
      phone: "+92 321 9876543",
      email: "fatima@myhostel.pk",
      experience: "4 years",
      rating: 4.8,
      image: "/images/guide-2.jpg",
      hostelsHelped: 380,
    }
  },
  {
    id: 3,
    city: "Islamabad",
    areas: ["Blue Area", "F-6", "F-7", "G-9", "G-10", "I-8"],
    guide: {
      name: "Ali Hassan",
      phone: "+92 333 5556667",
      email: "ali@myhostel.pk",
      experience: "6 years",
      rating: 4.9,
      image: "/images/guide-3.jpg",
      hostelsHelped: 520,
    }
  },
  {
    id: 4,
    city: "Rawalpindi",
    areas: ["Saddar", "Satellite Town", "Bahria Town", "Chaklala", "Commercial Market"],
    guide: {
      name: "Usman Khan",
      phone: "+92 345 7778889",
      email: "usman@myhostel.pk",
      experience: "3 years",
      rating: 4.7,
      image: "/images/guide-4.jpg",
      hostelsHelped: 280,
    }
  },
  {
    id: 5,
    city: "Faisalabad",
    areas: ["D Ground", "Peoples Colony", "Madina Town", "Jinnah Colony", "Ghulam Muhammad Abad"],
    guide: {
      name: "Ayesha Malik",
      phone: "+92 312 3334445",
      email: "ayesha@myhostel.pk",
      experience: "4 years",
      rating: 4.8,
      image: "/images/guide-5.jpg",
      hostelsHelped: 310,
    }
  },
  {
    id: 6,
    city: "Peshawar",
    areas: ["University Town", "Hayatabad", "Saddar", "Cantt", "Ring Road"],
    guide: {
      name: "Hamza Afridi",
      phone: "+92 346 8889990",
      email: "hamza@myhostel.pk",
      experience: "5 years",
      rating: 4.9,
      image: "/images/guide-6.jpg",
      hostelsHelped: 290,
    }
  },
]

const howItWorks = [
  {
    step: 1,
    icon: Search,
    title: "Submit Your Request",
    description: "Fill out the accommodation request form with your preferences, budget, and desired location.",
  },
  {
    step: 2,
    icon: Users,
    title: "Guide Assignment",
    description: "Our area-specific guide receives your request and starts searching for the best options.",
  },
  {
    step: 3,
    icon: MessageSquare,
    title: "Personalized Recommendations",
    description: "Your guide contacts you with curated hostel options matching your requirements.",
  },
  {
    step: 4,
    icon: Home,
    title: "Visit & Finalize",
    description: "Schedule visits to shortlisted hostels and finalize your accommodation with guide support.",
  },
]

const roomTypes = ["Single Room", "Double Room", "Triple Room", "Dormitory"]
const genderOptions = ["Male", "Female", "Any"]
const budgetRanges = ["Under PKR 10,000", "PKR 10,000 - 15,000", "PKR 15,000 - 20,000", "PKR 20,000 - 30,000", "PKR 30,000+"]

export default function AccommodationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    area: "",
    roomType: "",
    gender: "",
    budget: "",
    moveInDate: "",
    requirements: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedCity, setSelectedCity] = useState<typeof areas[0] | null>(null)
  const [availableAreas, setAvailableAreas] = useState<string[]>([])

  const handleCityChange = (city: string) => {
    const cityData = areas.find(a => a.city === city)
    setSelectedCity(cityData || null)
    setAvailableAreas(cityData?.areas || [])
    setFormData(prev => ({ ...prev, city, area: "" }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to the guide
    console.log("Accommodation request:", formData, "Assigned to:", selectedCity?.guide)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Request Submitted Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Your accommodation request has been sent to our area guide.
                </p>
                
                {selectedCity && (
                  <div className="bg-muted/50 rounded-xl p-6 mb-6">
                    <p className="text-sm text-muted-foreground mb-3">Your assigned guide:</p>
                    <div className="flex items-center gap-4 justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-foreground">{selectedCity.guide.name}</h4>
                        <p className="text-sm text-muted-foreground">{selectedCity.city} Area Expert</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{selectedCity.guide.rating}</span>
                          <span className="text-sm text-muted-foreground">• {selectedCity.guide.hostelsHelped} helped</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      {selectedCity.guide.name} will contact you within 24 hours at <strong>{formData.phone}</strong>
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Request
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Browse Hostels</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Personalized Accommodation Search
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Let Our Local Experts{" "}
                <span className="text-primary">Find Your Perfect Hostel</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Submit your accommodation request and our area-specific guides will personally 
                recommend the best hostels matching your needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Our simple 4-step process connects you with local experts who know the best accommodation options in your desired area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <Card key={item.step} className="relative border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mt-4 mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Request Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-5 h-5 text-primary" />
                      Request Accommodation
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Fill in your requirements and our area guide will contact you with the best options.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Personal Information
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+92 300 1234567"
                              value={formData.phone}
                              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                        </div>
                      </div>

                      {/* Location Preferences */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          Location Preferences
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>City *</Label>
                            <Select value={formData.city} onValueChange={handleCityChange}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                {areas.map((area) => (
                                  <SelectItem key={area.id} value={area.city}>{area.city}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Preferred Area</Label>
                            <Select 
                              value={formData.area} 
                              onValueChange={(v) => setFormData(prev => ({ ...prev, area: v }))}
                              disabled={!formData.city}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder={formData.city ? "Select area" : "Select city first"} />
                              </SelectTrigger>
                              <SelectContent>
                                {availableAreas.map((area) => (
                                  <SelectItem key={area} value={area}>{area}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Accommodation Preferences */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          Accommodation Preferences
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>Room Type *</Label>
                            <Select 
                              value={formData.roomType} 
                              onValueChange={(v) => setFormData(prev => ({ ...prev, roomType: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select type" />
                              </SelectTrigger>
                              <SelectContent>
                                {roomTypes.map((type) => (
                                  <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Gender *</Label>
                            <Select 
                              value={formData.gender} 
                              onValueChange={(v) => setFormData(prev => ({ ...prev, gender: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {genderOptions.map((g) => (
                                  <SelectItem key={g} value={g}>{g}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Budget Range *</Label>
                            <Select 
                              value={formData.budget} 
                              onValueChange={(v) => setFormData(prev => ({ ...prev, budget: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((b) => (
                                  <SelectItem key={b} value={b}>{b}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="moveInDate">Expected Move-in Date</Label>
                          <Input
                            id="moveInDate"
                            type="date"
                            value={formData.moveInDate}
                            onChange={(e) => setFormData(prev => ({ ...prev, moveInDate: e.target.value }))}
                          />
                        </div>
                      </div>

                      {/* Additional Requirements */}
                      <div className="space-y-4 pt-4 border-t border-border">
                        <h4 className="font-medium text-foreground">Additional Requirements</h4>
                        <Textarea
                          placeholder="Describe any specific requirements like proximity to university/office, required amenities (WiFi, AC, meals), or any other preferences..."
                          value={formData.requirements}
                          onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Guide Preview & Benefits */}
              <div className="space-y-6">
                {/* Assigned Guide Preview */}
                {selectedCity ? (
                  <Card className="border-primary/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Your Area Guide</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <User className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{selectedCity.guide.name}</h4>
                          <p className="text-sm text-muted-foreground">{selectedCity.city} Expert</p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{selectedCity.guide.rating}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{selectedCity.guide.experience} exp</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">{selectedCity.guide.hostelsHelped}+</strong> people helped find accommodation
                        </p>
                      </div>
                      <div className="mt-4 space-y-2 text-sm">
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          {selectedCity.guide.phone}
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          {selectedCity.guide.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-muted/50">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                      <h4 className="font-medium text-foreground mb-1">Select a City</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose your preferred city to see your assigned area guide.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Benefits */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Why Use Our Service?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Verified Options Only</h5>
                        <p className="text-sm text-muted-foreground">All recommended hostels are personally verified</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Free Service</h5>
                        <p className="text-sm text-muted-foreground">No fees - we help you find accommodation for free</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">Quick Response</h5>
                        <p className="text-sm text-muted-foreground">Get recommendations within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Headphones className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground">End-to-End Support</h5>
                        <p className="text-sm text-muted-foreground">Assistance from search to move-in</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Area Guides Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Area Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet our experienced local guides who specialize in specific cities and know every hostel in their area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Card key={area.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{area.guide.name}</h4>
                        <p className="text-primary font-medium">{area.city} Expert</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{area.guide.rating}</span>
                          <span className="text-sm text-muted-foreground">• {area.guide.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Covers areas:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.areas.slice(0, 4).map((a) => (
                          <Badge key={a} variant="secondary" className="text-xs">{a}</Badge>
                        ))}
                        {area.areas.length > 4 && (
                          <Badge variant="secondary" className="text-xs">+{area.areas.length - 4}</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">{area.guide.hostelsHelped}+</strong> people helped
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Let our experts do the hard work. Submit a request and we&apos;ll find the perfect accommodation for you.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Submit a Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
