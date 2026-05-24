"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Star, 
  Heart, 
  Share2, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  CheckCircle2,
  Wifi,
  Car,
  Utensils,
  Shirt,
  Wind,
  Tv,
  Lock,
  Droplets,
  Zap,
  BookOpen,
  Dumbbell,
  Coffee,
  Bath,
  Users,
  BedDouble,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  Calendar,
  BadgeCheck,
  Building2,
  Eye,
  Bed,
  UserCircle,
  ThumbsUp,
  ThumbsDown,
  Flag,
  MoreHorizontal,
  CreditCard,
  User,
  FileText,
  Check,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Mock hostel data
const hostelData = {
  id: "1",
  name: "Al-Rehman Boys Hostel",
  tagline: "Premium Student Accommodation in the Heart of Lahore",
  type: "Boys",
  verified: true,
  rating: 4.6,
  totalReviews: 128,
  address: "45-B, Main Boulevard, Gulberg III, Lahore",
  city: "Lahore",
  area: "Gulberg III",
  description: "Al-Rehman Boys Hostel offers premium student accommodation with modern amenities and a peaceful study environment. Located in the heart of Gulberg, we provide easy access to major universities, hospitals, and commercial areas. Our hostel is designed to give students a home-away-from-home experience with 24/7 security, nutritious meals, and dedicated study spaces.",
  established: "2018",
  totalRooms: 45,
  totalBeds: 180,
  occupancy: 85,
  priceRange: { min: 8000, max: 25000 },
  nearbyPlaces: [
    { name: "University of Punjab", distance: "1.2 km" },
    { name: "Gaddafi Stadium", distance: "2.5 km" },
    { name: "Services Hospital", distance: "1.8 km" },
    { name: "MM Alam Road", distance: "0.5 km" },
  ],
  images: [
    "/images/hostel-main.jpg",
    "/images/hostel-room-1.jpg",
    "/images/hostel-room-2.jpg",
    "/images/hostel-common.jpg",
    "/images/hostel-kitchen.jpg",
    "/images/hostel-bathroom.jpg",
  ],
  rules: [
    "No smoking inside the premises",
    "Visitors allowed only in common areas till 8 PM",
    "Maintain silence after 10 PM",
    "Keep your room clean and tidy",
    "No pets allowed",
    "Gate closes at 11 PM (inform in advance for late entry)",
  ],
  timings: {
    gateOpen: "6:00 AM",
    gateClose: "11:00 PM",
    messBreakfast: "7:30 AM - 9:00 AM",
    messLunch: "1:00 PM - 2:30 PM",
    messDinner: "8:00 PM - 9:30 PM",
  },
};

const amenities = [
  { icon: Wifi, name: "Free WiFi", available: true },
  { icon: Car, name: "Parking", available: true },
  { icon: Utensils, name: "Mess/Food", available: true },
  { icon: Shirt, name: "Laundry", available: true },
  { icon: Wind, name: "Air Conditioning", available: true },
  { icon: Tv, name: "Common TV", available: true },
  { icon: Lock, name: "24/7 Security", available: true },
  { icon: Droplets, name: "Water Supply", available: true },
  { icon: Zap, name: "Power Backup", available: true },
  { icon: BookOpen, name: "Study Room", available: true },
  { icon: Dumbbell, name: "Gym", available: false },
  { icon: Coffee, name: "Cafeteria", available: true },
  { icon: Bath, name: "Attached Bath", available: true },
  { icon: Users, name: "Common Room", available: true },
];

const rooms = [
  {
    id: "r1",
    name: "Single Room - Premium",
    type: "Single",
    totalBeds: 1,
    availableBeds: 1,
    price: 25000,
    features: ["Attached Bathroom", "AC", "Study Table", "Wardrobe", "Window View"],
    size: "120 sq ft",
    floor: "2nd Floor",
    image: "/images/hostel-room-2.jpg",
    seats: [{ id: "s1", number: "A1", status: "available" }],
  },
  {
    id: "r2",
    name: "Double Sharing - Standard",
    type: "Double",
    totalBeds: 2,
    availableBeds: 1,
    price: 15000,
    features: ["Attached Bathroom", "Fan", "Study Table", "Shared Wardrobe"],
    size: "180 sq ft",
    floor: "1st Floor",
    image: "/images/hostel-room-1.jpg",
    seats: [
      { id: "s2", number: "B1", status: "occupied" },
      { id: "s3", number: "B2", status: "available" },
    ],
  },
  {
    id: "r3",
    name: "Triple Sharing - Economy",
    type: "Triple",
    totalBeds: 3,
    availableBeds: 2,
    price: 10000,
    features: ["Common Bathroom", "Fan", "Study Area", "Locker"],
    size: "220 sq ft",
    floor: "Ground Floor",
    image: "/images/hostel-room-1.jpg",
    seats: [
      { id: "s4", number: "C1", status: "occupied" },
      { id: "s5", number: "C2", status: "available" },
      { id: "s6", number: "C3", status: "available" },
    ],
  },
  {
    id: "r4",
    name: "Dormitory - Budget",
    type: "Dormitory",
    totalBeds: 6,
    availableBeds: 3,
    price: 8000,
    features: ["Common Bathroom", "Fan", "Personal Locker", "Bunk Beds"],
    size: "400 sq ft",
    floor: "Ground Floor",
    image: "/images/hostel-room-2.jpg",
    seats: [
      { id: "s7", number: "D1", status: "occupied" },
      { id: "s8", number: "D2", status: "available" },
      { id: "s9", number: "D3", status: "occupied" },
      { id: "s10", number: "D4", status: "available" },
      { id: "s11", number: "D5", status: "occupied" },
      { id: "s12", number: "D6", status: "available" },
    ],
  },
];

const owner = {
  id: "o1",
  name: "Muhammad Ahmed Khan",
  phone: "+92 321 1234567",
  email: "ahmed.khan@email.com",
  avatar: "/placeholder.svg?height=100&width=100",
  verified: true,
  memberSince: "2018",
  totalProperties: 3,
  responseRate: 98,
  responseTime: "Within 1 hour",
  about: "Experienced hostel owner with over 5 years in student accommodation. Committed to providing safe, comfortable, and affordable housing for students. All my properties are well-maintained with modern amenities.",
  otherProperties: [
    { name: "Al-Rehman Girls Hostel", location: "Model Town, Lahore" },
    { name: "Ahmed Student Lodge", location: "Johar Town, Lahore" },
  ],
};

const reviews = [
  {
    id: "rev1",
    user: "Ali Hassan",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2 weeks ago",
    stayDuration: "6 months",
    comment: "Excellent hostel! The rooms are clean, staff is friendly, and the food quality is great. Location is perfect for university students. Highly recommended!",
    helpful: 24,
    images: ["/placeholder.svg?height=100&width=100"],
  },
  {
    id: "rev2",
    user: "Usman Malik",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    date: "1 month ago",
    stayDuration: "1 year",
    comment: "Good hostel overall. WiFi could be better during peak hours but management is responsive to complaints. The study room is a great addition.",
    helpful: 18,
    images: [],
  },
  {
    id: "rev3",
    user: "Bilal Ahmed",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    date: "2 months ago",
    stayDuration: "8 months",
    comment: "Best hostel in Gulberg area. Security is top-notch and the owner is very cooperative. Mess food is home-like quality. Would definitely recommend to other students.",
    helpful: 32,
    images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
  },
  {
    id: "rev4",
    user: "Hamza Tariq",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 3,
    date: "3 months ago",
    stayDuration: "3 months",
    comment: "Decent place to stay. Rooms are okay but a bit small. Good for the price point. Location is convenient.",
    helpful: 8,
    images: [],
  },
];

const ratingBreakdown = [
  { stars: 5, percentage: 65 },
  { stars: 4, percentage: 22 },
  { stars: 3, percentage: 8 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
];

export default function HostelDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingData, setBookingData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    cnic: "",
    emergencyContact: "",
    emergencyPhone: "",
    address: "",
    city: "",
    // Booking Details
    moveInDate: "",
    duration: "",
    occupation: "",
    institution: "",
    specialRequests: "",
    // Payment
    paymentMethod: "",
    agreeTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const getSelectedRoomData = () => {
    return rooms.find(r => r.id === selectedRoom);
  };

  const getSelectedSeatData = () => {
    const room = getSelectedRoomData();
    return room?.seats.find(s => s.id === selectedSeat);
  };

  const handleBookNow = () => {
    setIsBookingOpen(true);
    setBookingStep(1);
    setBookingComplete(false);
  };

  const handleSubmitBooking = () => {
    setBookingComplete(true);
  };

  const bookingSteps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Booking Details", icon: FileText },
    { number: 3, title: "Payment", icon: CreditCard },
    { number: 4, title: "Confirmation", icon: Check },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === hostelData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? hostelData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-primary transition-colors">Lahore</Link>
            <span>/</span>
            <Link href="/" className="hover:text-primary transition-colors">Gulberg III</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{hostelData.name}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{hostelData.name}</h1>
              {hostelData.verified && (
                <Badge className="bg-primary text-primary-foreground">
                  <BadgeCheck className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
              <Badge variant="secondary">{hostelData.type} Hostel</Badge>
            </div>
            <p className="text-muted-foreground mb-2">{hostelData.tagline}</p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{hostelData.address}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{hostelData.rating}</span>
                <span className="text-muted-foreground">({hostelData.totalReviews} reviews)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Contact Now
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
          <div 
            className="md:col-span-2 md:row-span-2 relative aspect-[4/3] md:aspect-auto cursor-pointer group"
            onClick={() => setIsGalleryOpen(true)}
          >
            <Image
              src={hostelData.images[0]}
              alt={hostelData.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </div>
          {hostelData.images.slice(1, 5).map((image, index) => (
            <div 
              key={index}
              className="relative aspect-video cursor-pointer group hidden md:block"
              onClick={() => {
                setCurrentImageIndex(index + 1);
                setIsGalleryOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`${hostelData.name} - Image ${index + 2}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              {index === 3 && hostelData.images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-semibold">+{hostelData.images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}
          <Button 
            variant="secondary" 
            className="absolute bottom-4 right-4 md:hidden"
            onClick={() => setIsGalleryOpen(true)}
          >
            <Eye className="w-4 h-4 mr-2" />
            View All Photos
          </Button>
        </div>

        {/* Full Screen Gallery Dialog */}
        <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black">
            <div className="relative aspect-video">
              <Image
                src={hostelData.images[currentImageIndex]}
                alt={`${hostelData.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={() => setIsGalleryOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
                {currentImageIndex + 1} / {hostelData.images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold">{hostelData.totalRooms}</p>
                  <p className="text-sm text-muted-foreground">Total Rooms</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Bed className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold">{hostelData.totalBeds}</p>
                  <p className="text-sm text-muted-foreground">Total Beds</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold">{hostelData.occupancy}%</p>
                  <p className="text-sm text-muted-foreground">Occupancy</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
                  <p className="text-2xl font-bold">{hostelData.established}</p>
                  <p className="text-sm text-muted-foreground">Established</p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rooms">Rooms & Pricing</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="rules">Rules & Timings</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Hostel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {hostelData.description}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nearby Places</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {hostelData.nearbyPlaces.map((place, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span className="font-medium">{place.name}</span>
                          </div>
                          <Badge variant="secondary">{place.distance}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="w-12 h-12 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">{hostelData.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rooms & Pricing Tab */}
              <TabsContent value="rooms" className="space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Available Rooms</h3>
                  <Badge variant="outline" className="text-primary border-primary">
                    {rooms.reduce((acc, room) => acc + room.availableBeds, 0)} beds available
                  </Badge>
                </div>

                <div className="space-y-4">
                  {rooms.map((room) => (
                    <Card key={room.id} className={`overflow-hidden transition-all ${selectedRoom === room.id ? "ring-2 ring-primary" : ""}`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative aspect-video md:aspect-square">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 left-2 bg-background/90 text-foreground">
                            {room.type}
                          </Badge>
                        </div>
                        <div className="md:col-span-2 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-lg font-semibold">{room.name}</h4>
                              <p className="text-sm text-muted-foreground">{room.floor} | {room.size}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-primary">Rs. {room.price.toLocaleString()}</p>
                              <p className="text-sm text-muted-foreground">per month</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {room.features.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="font-normal">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <span className="text-sm">
                                <span className="font-semibold text-green-600">{room.availableBeds}</span>
                                <span className="text-muted-foreground"> of {room.totalBeds} beds available</span>
                              </span>
                            </div>
                            <Button 
                              variant={selectedRoom === room.id ? "default" : "outline"}
                              onClick={() => {
                                setSelectedRoom(selectedRoom === room.id ? null : room.id);
                                setSelectedSeat(null);
                              }}
                            >
                              {selectedRoom === room.id ? "Hide Seats" : "View Seats"}
                            </Button>
                          </div>

                          {/* Seat Selection */}
                          {selectedRoom === room.id && (
                            <div className="mt-4 pt-4 border-t border-border">
                              <h5 className="text-sm font-medium mb-3">Select Your Seat/Bed</h5>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {room.seats.map((seat) => (
                                  <button
                                    key={seat.id}
                                    disabled={seat.status === "occupied"}
                                    onClick={() => setSelectedSeat(seat.id)}
                                    className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center text-sm transition-all ${
                                      seat.status === "occupied"
                                        ? "bg-muted border-muted-foreground/30 cursor-not-allowed opacity-50"
                                        : selectedSeat === seat.id
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : "bg-green-50 border-green-500 text-green-700 hover:bg-green-100"
                                    }`}
                                  >
                                    <Bed className="w-4 h-4 mb-0.5" />
                                    <span className="font-medium">{seat.number}</span>
                                  </button>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                  <div className="w-4 h-4 rounded bg-green-50 border-2 border-green-500" />
                                  <span>Available</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-4 h-4 rounded bg-muted border-2 border-muted-foreground/30" />
                                  <span>Occupied</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-4 h-4 rounded bg-primary border-2 border-primary" />
                                  <span>Selected</span>
                                </div>
                              </div>
                              {selectedSeat && (
                                <Button 
                                  className="w-full bg-primary hover:bg-primary/90"
                                  onClick={handleBookNow}
                                >
                                  Book This Seat - Rs. {room.price.toLocaleString()}/month
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Amenities Tab */}
              <TabsContent value="amenities" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Facilities & Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-3 p-3 rounded-lg border ${
                            amenity.available
                              ? "bg-green-50 border-green-200 text-green-800"
                              : "bg-muted/50 border-border text-muted-foreground line-through"
                          }`}
                        >
                          <amenity.icon className={`w-5 h-5 ${amenity.available ? "text-green-600" : ""}`} />
                          <span className="font-medium">{amenity.name}</span>
                          {amenity.available && (
                            <CheckCircle2 className="w-4 h-4 ml-auto text-green-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6 mt-6">
                {/* Rating Summary */}
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                          <span className="text-5xl font-bold">{hostelData.rating}</span>
                          <div>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-5 h-5 ${
                                    star <= Math.round(hostelData.rating)
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {hostelData.totalReviews} reviews
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {ratingBreakdown.map((item) => (
                          <div key={item.stars} className="flex items-center gap-2">
                            <span className="w-3 text-sm">{item.stars}</span>
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <Progress value={item.percentage} className="h-2 flex-1" />
                            <span className="w-10 text-sm text-muted-foreground">{item.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Review List */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold">{review.user}</h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`w-3 h-3 ${
                                          star <= review.rating
                                            ? "text-yellow-500 fill-yellow-500"
                                            : "text-muted-foreground"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span>|</span>
                                  <span>{review.date}</span>
                                  <span>|</span>
                                  <span>Stayed {review.stayDuration}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="mt-3 text-muted-foreground">{review.comment}</p>
                            {review.images.length > 0 && (
                              <div className="flex gap-2 mt-3">
                                {review.images.map((img, index) => (
                                  <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden">
                                    <Image src={img} alt="Review image" fill className="object-cover" />
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="flex items-center gap-4 mt-4">
                              <Button variant="ghost" size="sm" className="text-muted-foreground">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm" className="text-muted-foreground">
                                <Flag className="w-4 h-4 mr-1" />
                                Report
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </TabsContent>

              {/* Rules & Timings Tab */}
              <TabsContent value="rules" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Hostel Timings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Gate Opens</p>
                        <p className="font-semibold">{hostelData.timings.gateOpen}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Gate Closes</p>
                        <p className="font-semibold">{hostelData.timings.gateClose}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Breakfast</p>
                        <p className="font-semibold">{hostelData.timings.messBreakfast}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-1">Lunch</p>
                        <p className="font-semibold">{hostelData.timings.messLunch}</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg md:col-span-2">
                        <p className="text-sm text-muted-foreground mb-1">Dinner</p>
                        <p className="font-semibold">{hostelData.timings.messDinner}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Hostel Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {hostelData.rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-24">
              <CardHeader className="pb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">
                    Rs. {hostelData.priceRange.min.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">- {hostelData.priceRange.max.toLocaleString()}/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">Starting price per bed</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="secondary" className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>

            {/* Owner Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hostel Owner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={owner.avatar} />
                    <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{owner.name}</h4>
                      {owner.verified && (
                        <BadgeCheck className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Member since {owner.memberSince}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2 bg-muted/50 rounded-lg text-center">
                    <p className="font-semibold">{owner.responseRate}%</p>
                    <p className="text-xs text-muted-foreground">Response Rate</p>
                  </div>
                  <div className="p-2 bg-muted/50 rounded-lg text-center">
                    <p className="font-semibold">{owner.totalProperties}</p>
                    <p className="text-xs text-muted-foreground">Properties</p>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <UserCircle className="w-4 h-4 mr-2" />
                      View Owner Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Owner Profile</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={owner.avatar} />
                          <AvatarFallback>{owner.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-semibold">{owner.name}</h3>
                            {owner.verified && (
                              <Badge className="bg-primary">
                                <BadgeCheck className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">
                            Member since {owner.memberSince}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">About</h4>
                        <p className="text-muted-foreground text-sm">{owner.about}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-muted/50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-primary">{owner.responseRate}%</p>
                          <p className="text-sm text-muted-foreground">Response Rate</p>
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg text-center">
                          <p className="text-2xl font-bold text-primary">{owner.totalProperties}</p>
                          <p className="text-sm text-muted-foreground">Total Properties</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Contact Information</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{owner.phone}</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>{owner.email}</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-muted/50 rounded-lg">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>Responds {owner.responseTime}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Other Properties</h4>
                        <div className="space-y-2">
                          {owner.otherProperties.map((property, index) => (
                            <div key={index} className="p-3 border border-border rounded-lg">
                              <p className="font-medium">{property.name}</p>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {property.location}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Safety Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Safety Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>24/7 CCTV Surveillance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Security Guard on Duty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Fire Safety Equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Emergency Exit Routes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Visitor Verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {bookingComplete ? "Booking Confirmed!" : "Book Your Seat"}
            </DialogTitle>
          </DialogHeader>

          {!bookingComplete ? (
            <div className="space-y-6">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {bookingSteps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          bookingStep > step.number
                            ? "bg-green-500 border-green-500 text-white"
                            : bookingStep === step.number
                            ? "bg-primary border-primary text-primary-foreground"
                            : "bg-muted border-border text-muted-foreground"
                        }`}
                      >
                        {bookingStep > step.number ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className={`text-xs mt-1 ${
                        bookingStep >= step.number ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < bookingSteps.length - 1 && (
                      <div className={`w-12 md:w-20 h-0.5 mx-2 ${
                        bookingStep > step.number ? "bg-green-500" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Booking Summary Bar */}
              <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-medium">{getSelectedRoomData()?.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Seat {getSelectedSeatData()?.number} | {getSelectedRoomData()?.floor}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">
                    Rs. {getSelectedRoomData()?.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">per month</p>
                </div>
              </div>

              {/* Step 1: Personal Information */}
              {bookingStep === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        value={bookingData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+92 3XX XXXXXXX"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cnic">CNIC Number *</Label>
                      <Input
                        id="cnic"
                        placeholder="XXXXX-XXXXXXX-X"
                        value={bookingData.cnic}
                        onChange={(e) => handleInputChange("cnic", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mt-4">
                    <h4 className="font-medium mb-3">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Contact Name *</Label>
                        <Input
                          id="emergencyContact"
                          placeholder="Parent/Guardian name"
                          value={bookingData.emergencyContact}
                          onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                        <Input
                          id="emergencyPhone"
                          placeholder="+92 3XX XXXXXXX"
                          value={bookingData.emergencyPhone}
                          onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Permanent Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter your full permanent address"
                      value={bookingData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Select value={bookingData.city} onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lahore">Lahore</SelectItem>
                        <SelectItem value="karachi">Karachi</SelectItem>
                        <SelectItem value="islamabad">Islamabad</SelectItem>
                        <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                        <SelectItem value="faisalabad">Faisalabad</SelectItem>
                        <SelectItem value="multan">Multan</SelectItem>
                        <SelectItem value="peshawar">Peshawar</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 2: Booking Details */}
              {bookingStep === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Booking Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="moveInDate">Move-in Date *</Label>
                      <Input
                        id="moveInDate"
                        type="date"
                        value={bookingData.moveInDate}
                        onChange={(e) => handleInputChange("moveInDate", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Stay Duration *</Label>
                      <Select value={bookingData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Month</SelectItem>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months (1 Year)</SelectItem>
                          <SelectItem value="24">24 Months (2 Years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="occupation">Occupation *</Label>
                      <Select value={bookingData.occupation} onValueChange={(value) => handleInputChange("occupation", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="professional">Working Professional</SelectItem>
                          <SelectItem value="intern">Intern</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">University/Company *</Label>
                      <Input
                        id="institution"
                        placeholder="e.g., University of Punjab"
                        value={bookingData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any specific requirements or requests..."
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    />
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg space-y-3">
                    <h4 className="font-medium">Pricing Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Rent</span>
                        <span>Rs. {getSelectedRoomData()?.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Security Deposit (Refundable)</span>
                        <span>Rs. {getSelectedRoomData()?.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Booking Fee (One-time)</span>
                        <span>Rs. 2,000</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between font-semibold">
                        <span>Total Due at Move-in</span>
                        <span className="text-primary">
                          Rs. {((getSelectedRoomData()?.price || 0) * 2 + 2000).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {bookingStep === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Payment Method</h3>
                  
                  <div className="space-y-3">
                    {[
                      { id: "cash", label: "Cash on Move-in", desc: "Pay at hostel on your move-in date" },
                      { id: "bank", label: "Bank Transfer", desc: "Transfer to hostel bank account" },
                      { id: "easypaisa", label: "Easypaisa/JazzCash", desc: "Mobile wallet payment" },
                      { id: "card", label: "Credit/Debit Card", desc: "Pay with Visa, Mastercard" },
                    ].map((method) => (
                      <div
                        key={method.id}
                        onClick={() => handleInputChange("paymentMethod", method.id)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          bookingData.paymentMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            bookingData.paymentMethod === method.id
                              ? "border-primary"
                              : "border-muted-foreground"
                          }`}>
                            {bookingData.paymentMethod === method.id && (
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{method.label}</p>
                            <p className="text-sm text-muted-foreground">{method.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Terms Agreement */}
                  <div className="mt-6 p-4 border border-border rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={bookingData.agreeTerms}
                        onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">
                        I agree to the{" "}
                        <span className="text-primary hover:underline cursor-pointer">Terms & Conditions</span>
                        {" "}and{" "}
                        <span className="text-primary hover:underline cursor-pointer">Hostel Rules</span>.
                        I confirm that all information provided is accurate and I understand the cancellation policy.
                      </span>
                    </label>
                  </div>

                  {/* Final Amount */}
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Total Amount Due</p>
                        <p className="text-sm text-muted-foreground">at move-in</p>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        Rs. {((getSelectedRoomData()?.price || 0) * 2 + 2000).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Confirm */}
              {bookingStep === 4 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Review Your Booking</h3>
                  
                  {/* Hostel Details */}
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        Hostel Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-muted-foreground">Hostel</p>
                        <p className="font-medium">{hostelData.name}</p>
                        <p className="text-muted-foreground">Room</p>
                        <p className="font-medium">{getSelectedRoomData()?.name}</p>
                        <p className="text-muted-foreground">Seat Number</p>
                        <p className="font-medium">{getSelectedSeatData()?.number}</p>
                        <p className="text-muted-foreground">Floor</p>
                        <p className="font-medium">{getSelectedRoomData()?.floor}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Personal Details */}
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        Personal Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-muted-foreground">Name</p>
                        <p className="font-medium">{bookingData.fullName}</p>
                        <p className="text-muted-foreground">Email</p>
                        <p className="font-medium">{bookingData.email}</p>
                        <p className="text-muted-foreground">Phone</p>
                        <p className="font-medium">{bookingData.phone}</p>
                        <p className="text-muted-foreground">CNIC</p>
                        <p className="font-medium">{bookingData.cnic}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Booking Details */}
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Booking Details
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <p className="text-muted-foreground">Move-in Date</p>
                        <p className="font-medium">{bookingData.moveInDate}</p>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{bookingData.duration} Month(s)</p>
                        <p className="text-muted-foreground">Occupation</p>
                        <p className="font-medium capitalize">{bookingData.occupation}</p>
                        <p className="text-muted-foreground">Institution</p>
                        <p className="font-medium">{bookingData.institution}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Summary */}
                  <Card className="border-primary">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" />
                        Payment Summary
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monthly Rent</span>
                          <span>Rs. {getSelectedRoomData()?.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Security Deposit</span>
                          <span>Rs. {getSelectedRoomData()?.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Booking Fee</span>
                          <span>Rs. 2,000</span>
                        </div>
                        <div className="flex justify-between text-muted-foreground">
                          <span>Payment Method</span>
                          <span className="capitalize">{bookingData.paymentMethod}</span>
                        </div>
                        <div className="border-t border-border pt-2 flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-primary">
                            Rs. {((getSelectedRoomData()?.price || 0) * 2 + 2000).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setBookingStep(prev => prev - 1)}
                  disabled={bookingStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                {bookingStep < 4 ? (
                  <Button onClick={() => setBookingStep(prev => prev + 1)}>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmitBooking} className="bg-green-600 hover:bg-green-700">
                    <Check className="w-4 h-4 mr-2" />
                    Confirm Booking
                  </Button>
                )}
              </div>
            </div>
          ) : (
            /* Booking Success */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Booking Successful!</h3>
              <p className="text-muted-foreground mb-6">
                Your booking request has been submitted successfully.
              </p>

              <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <p className="text-muted-foreground">Booking Reference</p>
                  <p className="font-mono font-bold">MH-2024-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
                  <p className="text-muted-foreground">Room</p>
                  <p className="font-medium">{getSelectedRoomData()?.name}</p>
                  <p className="text-muted-foreground">Seat</p>
                  <p className="font-medium">{getSelectedSeatData()?.number}</p>
                  <p className="text-muted-foreground">Move-in Date</p>
                  <p className="font-medium">{bookingData.moveInDate}</p>
                  <p className="text-muted-foreground">Amount Due</p>
                  <p className="font-bold text-primary">Rs. {((getSelectedRoomData()?.price || 0) * 2 + 2000).toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-medium text-blue-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>1. The hostel owner will contact you within 24 hours</li>
                  <li>2. Visit the hostel to verify and complete documentation</li>
                  <li>3. Pay the due amount and move in on your selected date</li>
                </ul>
              </div>

              <div className="flex gap-3 justify-center">
                <Button variant="outline" onClick={() => setIsBookingOpen(false)}>
                  Close
                </Button>
                <Button>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Hostel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
