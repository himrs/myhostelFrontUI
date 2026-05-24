"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  HelpCircle,
  Headphones,
  FileQuestion,
  Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 1234567", "+92 42 35761234"],
    description: "Mon-Sat, 9am-6pm PKT",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@myhostel.pk", "info@myhostel.pk"],
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Main Boulevard", "Gulberg III, Lahore, Pakistan"],
    description: "Visit us for in-person support",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
    description: "Closed on Sundays",
  },
]

const departments = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Customer Support" },
  { value: "hostel-listing", label: "Hostel Listing" },
  { value: "jobs", label: "Jobs & Careers" },
  { value: "partnership", label: "Partnership" },
  { value: "feedback", label: "Feedback & Suggestions" },
]

const faqs = [
  {
    question: "How do I search for hostels on MyHostel.pk?",
    answer: "Simply use our search bar on the homepage to enter your preferred city or area. You can then filter results by price range, amenities, room type, and gender to find the perfect match for your needs.",
  },
  {
    question: "Are all hostels on the platform verified?",
    answer: "We verify each hostel before listing them on our platform. Verified hostels display a 'Verified' badge. Our team personally visits and checks facilities, safety measures, and accuracy of listed information.",
  },
  {
    question: "How can I list my hostel on MyHostel.pk?",
    answer: "You can list your hostel by clicking the 'List Your Hostel' button in the navigation. Fill out the registration form with your hostel details, photos, and pricing. Our team will review and verify your listing within 2-3 business days.",
  },
  {
    question: "Is there a fee to list my hostel?",
    answer: "Basic hostel listing is free. We offer premium listing options with enhanced visibility and additional features for a small monthly fee. Contact our team for more details about premium packages.",
  },
  {
    question: "How do I apply for jobs posted on the platform?",
    answer: "Browse the Jobs page to find available positions. Click on any job listing to view details and requirements. Click 'Apply Now' to submit your application directly through the platform.",
  },
  {
    question: "What should I do if I have an issue with my booked hostel?",
    answer: "Contact our customer support team immediately through phone, email, or the contact form on this page. We work closely with hostel owners to resolve any issues quickly and ensure your satisfaction.",
  },
  {
    question: "Can I request accommodation assistance?",
    answer: "Yes! Visit our Accommodation page to submit a request. Our area-specific guides will personally recommend hostels matching your needs and budget, completely free of charge.",
  },
  {
    question: "How does the Buy & Sell marketplace work?",
    answer: "The Buy & Sell section allows hostel residents to buy and sell items like furniture, books, and electronics. Simply browse listings or post your own items for sale. Buyers contact sellers directly to arrange transactions.",
  },
]

const quickLinks = [
  { icon: Building2, title: "List Your Hostel", href: "/list-hostel", description: "Register your hostel with us" },
  { icon: Users, title: "Request Accommodation", href: "/accommodation", description: "Let our guides help you" },
  { icon: FileQuestion, title: "Browse FAQs", href: "#faq", description: "Find quick answers" },
  { icon: Headphones, title: "24/7 Support", href: "tel:+923001234567", description: "Call us anytime" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form:", formData)
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
                <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Reference: <strong>#{Date.now().toString().slice(-8)}</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      department: "",
                      subject: "",
                      message: "",
                    })
                  }}>
                    Send Another Message
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Back to Home</Link>
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
                <MessageSquare className="w-4 h-4" />
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                We&apos;d Love to{" "}
                <span className="text-primary">Hear From You</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions, feedback, or need assistance? Our team is here to help you 
                with anything related to hostel search, listing, or our services.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-5 h-5 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+92 300 1234567"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Department *</Label>
                          <Select 
                            value={formData.department} 
                            onValueChange={(v) => setFormData(prev => ({ ...prev, department: v }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept.value} value={dept.value}>{dept.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="What is your inquiry about?"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please describe your inquiry in detail..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.details.map((detail, index) => (
                            <p key={index} className="text-foreground">{detail}</p>
                          ))}
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Social Links */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">Find Our Office</h2>
              <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.354741890626!2d74.34769471511567!3d31.51573978138649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f0f6f8a6c5%3A0x7e7e7e7e7e7e7e7e!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MyHostel.pk Office Location"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <HelpCircle className="w-4 h-4" />
                  FAQs
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Find quick answers to common questions about our platform and services.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Still have questions?</p>
                <Button size="lg">
                  Contact Our Support Team
                  <ArrowRight className="ml-2 h-4 w-4" />
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
