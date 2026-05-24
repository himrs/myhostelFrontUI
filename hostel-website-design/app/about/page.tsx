"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Clock, 
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Home,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const stats = [
  { label: "Hostels Listed", value: "2,500+", icon: Building2 },
  { label: "Happy Residents", value: "50,000+", icon: Users },
  { label: "Cities Covered", value: "25+", icon: MapPin },
  { label: "Years Experience", value: "10+", icon: Award },
]

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every hostel is verified to ensure safe and secure accommodation for all residents.",
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "We understand student needs and prioritize affordable, quality accommodation.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Clear pricing, honest reviews, and no hidden charges. What you see is what you get.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is always available to help you with any queries or concerns.",
  },
]

const team = [
  {
    name: "Muhammad Ahmed",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    description: "10+ years in hostel management",
  },
  {
    name: "Fatima Khan",
    role: "Operations Director",
    image: "/images/team-2.jpg",
    description: "Expert in student accommodation",
  },
  {
    name: "Ali Hassan",
    role: "Head of Technology",
    image: "/images/team-3.jpg",
    description: "Building the future of hostel search",
  },
  {
    name: "Ayesha Malik",
    role: "Customer Success",
    image: "/images/team-4.jpg",
    description: "Ensuring resident satisfaction",
  },
]

const ownedHostels = [
  {
    name: "MyHostel Premium - Lahore",
    location: "Gulberg III, Lahore",
    capacity: "150 Beds",
    rating: 4.9,
    image: "/images/hostel-main.jpg",
  },
  {
    name: "MyHostel Executive - Islamabad",
    location: "Blue Area, Islamabad",
    capacity: "120 Beds",
    rating: 4.8,
    image: "/images/hostel-2.jpg",
  },
  {
    name: "MyHostel Girls - Karachi",
    location: "DHA Phase 6, Karachi",
    capacity: "100 Beds",
    rating: 4.9,
    image: "/images/hostel-3.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                About MyHostel.pk
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                We Are{" "}
                <span className="text-primary">Hostel Owners</span>{" "}
                Helping You Find Home
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                MyHostel.pk was born from our own experience running hostels across Pakistan. 
                We understand both sides - as hostel owners and as a platform connecting students 
                and professionals with their perfect accommodation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">
                    Find a Hostel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="border-none shadow-sm">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story: From Hostel Owners to Industry Leaders
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    In 2014, we started with a single hostel in Lahore, driven by a passion to provide 
                    quality accommodation for students away from home. Over the years, we expanded to 
                    multiple cities and realized the challenges both hostel owners and seekers face.
                  </p>
                  <p>
                    Students struggled to find reliable information about hostels, while hostel owners 
                    had no effective platform to showcase their facilities. This gap inspired us to 
                    create MyHostel.pk - Pakistan&apos;s first dedicated hostel search platform.
                  </p>
                  <p>
                    Today, we continue to run our own chain of premium hostels while helping thousands 
                    of other hostel owners connect with potential residents. Our firsthand experience 
                    ensures we understand the needs of both parties.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Hostel Owners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Platform Creators</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Industry Experts</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hostel-common.jpg"
                    alt="Our hostel common area"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm opacity-90">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Hostels */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Own Hostels
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We practice what we preach. Our chain of premium hostels sets the standard 
                for quality accommodation across Pakistan.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {ownedHostels.map((hostel) => (
                <Card key={hostel.name} className="overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={hostel.image}
                      alt={hostel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{hostel.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{hostel.name}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1 mb-2">
                      <MapPin className="w-4 h-4" />
                      {hostel.location}
                    </p>
                    <p className="text-primary font-medium">{hostel.capacity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from running our hostels to building this platform.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="opacity-90 leading-relaxed">
                  To simplify the hostel search process for students and professionals across Pakistan, 
                  while empowering hostel owners with tools to grow their business and provide better 
                  accommodation experiences.
                </p>
              </div>
              <div className="text-center md:text-left">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="opacity-90 leading-relaxed">
                  To become the most trusted and comprehensive hostel platform in Pakistan, setting 
                  industry standards for quality, transparency, and resident satisfaction while 
                  making quality accommodation accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to transforming the hostel industry in Pakistan.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="overflow-hidden text-center">
                  <div className="relative h-64 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-20 h-20 text-muted-foreground/30" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm mb-1">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Find Your Perfect Hostel?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of students and professionals who trust MyHostel.pk for their accommodation needs.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Search Hostels
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/list-hostel">
                    <Briefcase className="mr-2 h-4 w-4" />
                    List Your Hostel
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
