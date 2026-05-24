"use client"

import { useState } from "react"
import { Check, User, Building2, ImageIcon, FileText, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Hostel Details", icon: Building2 },
  { id: 3, title: "Amenities & Photos", icon: ImageIcon },
  { id: 4, title: "Review & Submit", icon: FileText },
]

const amenitiesList = [
  "WiFi",
  "Air Conditioning",
  "Laundry",
  "Kitchen",
  "Parking",
  "Security",
  "CCTV",
  "Generator Backup",
  "Water Cooler",
  "Geyser",
  "Study Room",
  "Common Room",
  "Mess/Food",
  "Attached Bathroom",
  "Furniture",
  "Elevator",
]

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
]

interface FormData {
  // Personal Info
  fullName: string
  email: string
  phone: string
  cnic: string
  address: string
  // Hostel Details
  hostelName: string
  hostelType: string
  city: string
  area: string
  fullAddress: string
  totalRooms: string
  roomTypes: string
  priceMin: string
  priceMax: string
  description: string
  // Amenities
  amenities: string[]
  photos: File[]
  // Additional
  rules: string
  nearbyPlaces: string
  agreeTerms: boolean
}

export function ListHostelForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    hostelName: "",
    hostelType: "",
    city: "",
    area: "",
    fullAddress: "",
    totalRooms: "",
    roomTypes: "",
    priceMin: "",
    priceMax: "",
    description: "",
    amenities: [],
    photos: [],
    rules: "",
    nearbyPlaces: "",
    agreeTerms: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | string[] | boolean | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Hostel Submitted Successfully!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for listing your hostel on MyHostel.pk. Our team will review your submission
            and get back to you within 24-48 hours.
          </p>
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              Reference ID: <span className="font-semibold text-foreground">MH-{Date.now().toString().slice(-8)}</span>
            </p>
          </div>
          <Button onClick={() => window.location.href = "/"}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isCompleted = currentStep > step.id
            const isCurrent = currentStep === step.id

            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? "bg-primary text-primary-foreground"
                        : isCurrent
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block ${
                      isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                      isCompleted ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Indicator Mobile */}
      <div className="sm:hidden text-center mb-6">
        <span className="text-sm text-muted-foreground">
          Step {currentStep} of {steps.length}:
        </span>
        <span className="text-sm font-medium text-foreground ml-1">
          {steps[currentStep - 1].title}
        </span>
      </div>

      {/* Form Card */}
      <Card className="border-0 shadow-xl">
        <CardContent className="p-6 md:p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">Personal Information</h2>
                <p className="text-sm text-muted-foreground">
                  Please provide your contact details for verification
                </p>
              </div>

              <div className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => updateFormData("fullName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="03XX-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnic">CNIC Number *</Label>
                    <Input
                      id="cnic"
                      placeholder="XXXXX-XXXXXXX-X"
                      value={formData.cnic}
                      onChange={(e) => updateFormData("cnic", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete residential address"
                    rows={3}
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Hostel Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">Hostel Details</h2>
                <p className="text-sm text-muted-foreground">
                  Tell us about your hostel property
                </p>
              </div>

              <div className="grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="hostelName">Hostel Name *</Label>
                    <Input
                      id="hostelName"
                      placeholder="Enter hostel name"
                      value={formData.hostelName}
                      onChange={(e) => updateFormData("hostelName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hostelType">Hostel Type *</Label>
                    <Select
                      value={formData.hostelType}
                      onValueChange={(value) => updateFormData("hostelType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="boys">Boys Hostel</SelectItem>
                        <SelectItem value="girls">Girls Hostel</SelectItem>
                        <SelectItem value="co-ed">Co-Ed Hostel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) => updateFormData("city", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city} value={city.toLowerCase()}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area/Locality *</Label>
                    <Input
                      id="area"
                      placeholder="e.g., Johar Town, DHA Phase 5"
                      value={formData.area}
                      onChange={(e) => updateFormData("area", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullAddress">Complete Address *</Label>
                  <Textarea
                    id="fullAddress"
                    placeholder="Enter full hostel address with nearby landmarks"
                    rows={2}
                    value={formData.fullAddress}
                    onChange={(e) => updateFormData("fullAddress", e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="totalRooms">Total Rooms *</Label>
                    <Input
                      id="totalRooms"
                      type="number"
                      placeholder="e.g., 20"
                      value={formData.totalRooms}
                      onChange={(e) => updateFormData("totalRooms", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priceMin">Min Price (PKR) *</Label>
                    <Input
                      id="priceMin"
                      type="number"
                      placeholder="e.g., 8000"
                      value={formData.priceMin}
                      onChange={(e) => updateFormData("priceMin", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priceMax">Max Price (PKR) *</Label>
                    <Input
                      id="priceMax"
                      type="number"
                      placeholder="e.g., 15000"
                      value={formData.priceMax}
                      onChange={(e) => updateFormData("priceMax", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roomTypes">Room Types Available *</Label>
                  <Input
                    id="roomTypes"
                    placeholder="e.g., Single, Double, Triple sharing"
                    value={formData.roomTypes}
                    onChange={(e) => updateFormData("roomTypes", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Hostel Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your hostel, its facilities, and what makes it special..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => updateFormData("description", e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Amenities & Photos */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">Amenities & Photos</h2>
                <p className="text-sm text-muted-foreground">
                  Select available amenities and upload photos
                </p>
              </div>

              <div className="space-y-4">
                <Label>Available Amenities *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {amenitiesList.map((amenity) => (
                    <div
                      key={amenity}
                      onClick={() => toggleAmenity(amenity)}
                      className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                        formData.amenities.includes(amenity)
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Checkbox
                        checked={formData.amenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                      />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your photos here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Supported formats: JPG, PNG (Max 5MB each, up to 10 photos)
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nearbyPlaces">Nearby Places & Landmarks</Label>
                <Textarea
                  id="nearbyPlaces"
                  placeholder="e.g., 5 min walk from XYZ University, Near ABC Metro Station..."
                  rows={3}
                  value={formData.nearbyPlaces}
                  onChange={(e) => updateFormData("nearbyPlaces", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rules">Hostel Rules & Policies</Label>
                <Textarea
                  id="rules"
                  placeholder="e.g., No smoking, Visitors allowed till 8 PM, Gate closes at 10 PM..."
                  rows={3}
                  value={formData.rules}
                  onChange={(e) => updateFormData("rules", e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-1">Review & Submit</h2>
                <p className="text-sm text-muted-foreground">
                  Please review your information before submitting
                </p>
              </div>

              <div className="space-y-6">
                {/* Personal Info Summary */}
                <div className="bg-muted/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Personal Information</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>
                      <span className="ml-2 text-foreground">{formData.fullName || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>
                      <span className="ml-2 text-foreground">{formData.email || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="ml-2 text-foreground">{formData.phone || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">CNIC:</span>
                      <span className="ml-2 text-foreground">{formData.cnic || "-"}</span>
                    </div>
                  </div>
                </div>

                {/* Hostel Details Summary */}
                <div className="bg-muted/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Hostel Details</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Hostel Name:</span>
                      <span className="ml-2 text-foreground">{formData.hostelName || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <span className="ml-2 text-foreground capitalize">{formData.hostelType || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">City:</span>
                      <span className="ml-2 text-foreground capitalize">{formData.city || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Area:</span>
                      <span className="ml-2 text-foreground">{formData.area || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Total Rooms:</span>
                      <span className="ml-2 text-foreground">{formData.totalRooms || "-"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="ml-2 text-foreground">
                        {formData.priceMin && formData.priceMax
                          ? `PKR ${formData.priceMin} - ${formData.priceMax}`
                          : "-"}
                      </span>
                    </div>
                  </div>
                  {formData.description && (
                    <div className="mt-4 text-sm">
                      <span className="text-muted-foreground">Description:</span>
                      <p className="mt-1 text-foreground">{formData.description}</p>
                    </div>
                  )}
                </div>

                {/* Amenities Summary */}
                <div className="bg-muted/30 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Amenities</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.amenities.length > 0 ? (
                      formData.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {amenity}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-muted-foreground">No amenities selected</span>
                    )}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => updateFormData("agreeTerms", checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I confirm that all the information provided is accurate and I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a> of MyHostel.pk
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep} className="gap-2">
                Next Step
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!formData.agreeTerms}
                className="gap-2"
              >
                Submit Listing
                <Check className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
