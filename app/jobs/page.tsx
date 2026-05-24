"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Filter,
  Building2,
  Users,
  Calendar,
  ChevronDown,
  X,
  CheckCircle2,
  Send,
  FileText,
  Phone,
  Mail,
  User,
  GraduationCap,
  Star,
  Plus
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const jobCategories = [
  "All Categories",
  "Management",
  "Housekeeping",
  "Security",
  "Kitchen Staff",
  "Maintenance",
  "Reception",
  "Administration",
]

const cities = [
  "All Cities",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Peshawar",
  "Multan",
]

const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
]

const jobs = [
  {
    id: 1,
    title: "Hostel Manager",
    hostel: "Elite Student Hostel",
    location: "Gulberg, Lahore",
    type: "Full-time",
    category: "Management",
    salary: "Rs. 60,000 - 80,000",
    posted: "2 days ago",
    deadline: "Dec 30, 2024",
    description: "We are looking for an experienced hostel manager to oversee daily operations, manage staff, and ensure resident satisfaction.",
    requirements: [
      "Minimum 3 years experience in hostel/hotel management",
      "Excellent communication skills in Urdu and English",
      "Strong leadership and problem-solving abilities",
      "Bachelor's degree preferred",
    ],
    benefits: ["Accommodation", "Meals", "Health Insurance", "Annual Bonus"],
    applicants: 24,
    verified: true,
  },
  {
    id: 2,
    title: "Housekeeping Supervisor",
    hostel: "Comfort Stay Girls Hostel",
    location: "DHA Phase 5, Karachi",
    type: "Full-time",
    category: "Housekeeping",
    salary: "Rs. 35,000 - 45,000",
    posted: "1 week ago",
    deadline: "Dec 25, 2024",
    description: "Supervise housekeeping team to maintain cleanliness standards across all floors and common areas.",
    requirements: [
      "2+ years experience in housekeeping supervision",
      "Knowledge of cleaning protocols and hygiene standards",
      "Ability to manage a team of 5-10 staff",
      "Matric pass required",
    ],
    benefits: ["Meals", "Uniform Provided", "Transport Allowance"],
    applicants: 18,
    verified: true,
  },
  {
    id: 3,
    title: "Night Security Guard",
    hostel: "University View Hostel",
    location: "Blue Area, Islamabad",
    type: "Full-time",
    category: "Security",
    salary: "Rs. 28,000 - 32,000",
    posted: "3 days ago",
    deadline: "Dec 28, 2024",
    description: "Ensure security of hostel premises during night shift (10 PM - 6 AM). Monitor CCTV and control entry/exit.",
    requirements: [
      "Previous security experience preferred",
      "Must be physically fit",
      "Age between 25-45 years",
      "Clean background record",
    ],
    benefits: ["Meals During Shift", "Uniform Provided"],
    applicants: 12,
    verified: true,
  },
  {
    id: 4,
    title: "Kitchen Helper / Cook Assistant",
    hostel: "Green Valley Hostel",
    location: "Johar Town, Lahore",
    type: "Full-time",
    category: "Kitchen Staff",
    salary: "Rs. 25,000 - 30,000",
    posted: "5 days ago",
    deadline: "Dec 20, 2024",
    description: "Assist head cook in meal preparation for 100+ residents. Help with food prep, serving, and kitchen cleaning.",
    requirements: [
      "Basic cooking knowledge",
      "Food hygiene awareness",
      "Ability to work in fast-paced environment",
      "Early morning availability (5 AM start)",
    ],
    benefits: ["Free Meals", "Accommodation Available"],
    applicants: 31,
    verified: false,
  },
  {
    id: 5,
    title: "Receptionist",
    hostel: "Metro City Hostel",
    location: "Clifton, Karachi",
    type: "Part-time",
    category: "Reception",
    salary: "Rs. 20,000 - 25,000",
    posted: "1 day ago",
    deadline: "Dec 31, 2024",
    description: "Handle front desk operations, guest inquiries, and booking management. Evening shift (4 PM - 10 PM).",
    requirements: [
      "Excellent communication skills",
      "Computer literacy (MS Office, basic software)",
      "Pleasant personality",
      "Intermediate pass minimum",
    ],
    benefits: ["Flexible Hours", "Training Provided"],
    applicants: 45,
    verified: true,
  },
  {
    id: 6,
    title: "Maintenance Technician",
    hostel: "Prime Location Hostel",
    location: "Saddar, Rawalpindi",
    type: "Full-time",
    category: "Maintenance",
    salary: "Rs. 30,000 - 38,000",
    posted: "4 days ago",
    deadline: "Dec 27, 2024",
    description: "Handle electrical, plumbing, and general maintenance work. Keep all facilities in working condition.",
    requirements: [
      "Diploma in relevant trade (Electrical/Plumbing)",
      "3+ years hands-on experience",
      "Own basic tools preferred",
      "Available for emergency calls",
    ],
    benefits: ["Tools Allowance", "Overtime Pay", "Health Coverage"],
    applicants: 8,
    verified: true,
  },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedType, setSelectedType] = useState("All Types")
  const [isApplyOpen, setIsApplyOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null)
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)
  const [isPostJobOpen, setIsPostJobOpen] = useState(false)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.hostel.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === "All Cities" || job.location.includes(selectedCity)
    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory
    const matchesType = selectedType === "All Types" || job.type === selectedType
    return matchesSearch && matchesCity && matchesCategory && matchesType
  })

  const handleApply = (job: typeof jobs[0]) => {
    setSelectedJob(job)
    setIsApplyOpen(true)
    setApplicationSubmitted(false)
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
                <Briefcase className="w-4 h-4" />
                Hostel Jobs Portal
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Find Your Next{" "}
                <span className="text-primary">Career Opportunity</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Explore job openings at hostels across Pakistan. From management to housekeeping, 
                find the perfect role that matches your skills.
              </p>

              {/* Search Bar */}
              <div className="bg-background border border-border rounded-xl p-4 shadow-lg">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search job title or hostel name..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="w-full md:w-48">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className="lg:w-72 shrink-0">
                <Card className="sticky top-24">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Filters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Category Filter */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Category</Label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobCategories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Job Type Filter */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Job Type</Label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Reset Filters */}
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedCity("All Cities")
                        setSelectedCategory("All Categories")
                        setSelectedType("All Types")
                        setSearchQuery("")
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reset Filters
                    </Button>

                    {/* Post Job CTA */}
                    <div className="pt-4 border-t border-border">
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <Building2 className="w-10 h-10 text-primary mx-auto mb-2" />
                        <p className="font-medium mb-2">Are you a hostel owner?</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          Post your job openings and find the right candidates.
                        </p>
                        <Button size="sm" className="w-full" onClick={() => setIsPostJobOpen(true)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Post a Job
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Job Listings */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredJobs.length}</span> jobs
                  </p>
                  <Select defaultValue="recent">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                      <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          {/* Job Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold text-lg">{job.title}</h3>
                                  {job.verified && (
                                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                                      <CheckCircle2 className="w-3 h-3 mr-1" />
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-primary font-medium">{job.hostel}</p>
                              </div>
                              <Badge variant="outline">{job.type}</Badge>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </span>
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-4 h-4" />
                                {job.category}
                              </span>
                            </div>

                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {job.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {job.benefits.slice(0, 3).map((benefit) => (
                                <Badge key={benefit} variant="secondary" className="font-normal">
                                  {benefit}
                                </Badge>
                              ))}
                              {job.benefits.length > 3 && (
                                <Badge variant="secondary" className="font-normal">
                                  +{job.benefits.length - 3} more
                                </Badge>
                              )}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.posted}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="w-4 h-4" />
                                  {job.applicants} applicants
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm">View Details</Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>{job.title}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-6">
                                      <div className="flex items-center justify-between">
                                        <div>
                                          <p className="text-primary font-medium">{job.hostel}</p>
                                          <p className="text-sm text-muted-foreground">{job.location}</p>
                                        </div>
                                        <Badge>{job.type}</Badge>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                                        <div>
                                          <p className="text-sm text-muted-foreground">Salary</p>
                                          <p className="font-medium">{job.salary}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Deadline</p>
                                          <p className="font-medium">{job.deadline}</p>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="font-semibold mb-2">Job Description</h4>
                                        <p className="text-muted-foreground">{job.description}</p>
                                      </div>

                                      <div>
                                        <h4 className="font-semibold mb-2">Requirements</h4>
                                        <ul className="space-y-2">
                                          {job.requirements.map((req, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                              <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                                              {req}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <h4 className="font-semibold mb-2">Benefits</h4>
                                        <div className="flex flex-wrap gap-2">
                                          {job.benefits.map((benefit) => (
                                            <Badge key={benefit} variant="secondary">{benefit}</Badge>
                                          ))}
                                        </div>
                                      </div>

                                      <Button className="w-full" onClick={() => handleApply(job)}>
                                        Apply Now
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <Button size="sm" onClick={() => handleApply(job)}>
                                  Apply Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-16">
                    <Briefcase className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search query
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Apply Job Modal */}
      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {applicationSubmitted ? "Application Submitted!" : `Apply for ${selectedJob?.title}`}
            </DialogTitle>
          </DialogHeader>

          {!applicationSubmitted ? (
            <div className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <p className="font-medium">{selectedJob?.hostel}</p>
                <p className="text-sm text-muted-foreground">{selectedJob?.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="+92 3XX XXXXXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">Less than 1 year</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="2-5">2-5 years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education Level *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matric">Matric</SelectItem>
                    <SelectItem value="inter">Intermediate</SelectItem>
                    <SelectItem value="bachelor">Bachelor&apos;s</SelectItem>
                    <SelectItem value="master">Master&apos;s</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover">Cover Letter / Message</Label>
                <Textarea
                  id="cover"
                  placeholder="Tell us why you're a good fit for this role..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Upload CV/Resume (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Drag and drop or click to upload
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC up to 5MB
                  </p>
                </div>
              </div>

              <Button className="w-full" onClick={() => setApplicationSubmitted(true)}>
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Application Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Your application for <span className="font-medium">{selectedJob?.title}</span> at{" "}
                <span className="font-medium">{selectedJob?.hostel}</span> has been submitted successfully.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                The hostel owner will contact you if your profile matches their requirements.
              </p>
              <Button onClick={() => setIsApplyOpen(false)}>
                Browse More Jobs
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Post Job Modal */}
      <Dialog open={isPostJobOpen} onOpenChange={setIsPostJobOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Post a New Job</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title *</Label>
                <Input placeholder="e.g., Hostel Manager" />
              </div>
              <div className="space-y-2">
                <Label>Category *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobCategories.slice(1).map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.slice(1).map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Salary Range *</Label>
                <Input placeholder="e.g., Rs. 30,000 - 40,000" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Your Hostel Name *</Label>
                <Input placeholder="Enter hostel name" />
              </div>
              <div className="space-y-2">
                <Label>Location *</Label>
                <Input placeholder="e.g., Gulberg, Lahore" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Job Description *</Label>
              <Textarea placeholder="Describe the role and responsibilities..." rows={4} />
            </div>

            <div className="space-y-2">
              <Label>Requirements *</Label>
              <Textarea placeholder="List the requirements (one per line)..." rows={4} />
            </div>

            <div className="space-y-2">
              <Label>Benefits Offered</Label>
              <Input placeholder="e.g., Meals, Accommodation, Health Insurance" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Application Deadline *</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Contact Email *</Label>
                <Input type="email" placeholder="hr@yourhostel.com" />
              </div>
            </div>

            <Button className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Post Job - Free
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
