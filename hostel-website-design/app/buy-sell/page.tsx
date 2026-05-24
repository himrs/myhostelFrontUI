"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  Search,
  MapPin,
  DollarSign,
  Filter,
  Phone,
  MessageSquare,
  Heart,
  Star,
  Plus,
  X,
  CheckCircle2,
  User,
  Mail,
  Tag,
  Package,
  ShoppingBag,
  Sofa,
  Bed,
  BookOpen,
  Laptop,
  Shirt,
  UtensilsCrossed,
  Camera,
  ArrowRight
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const categories = [
  { id: "all", label: "All Items", icon: Package },
  { id: "furniture", label: "Furniture", icon: Sofa },
  { id: "bedding", label: "Bedding", icon: Bed },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "electronics", label: "Electronics", icon: Laptop },
  { id: "clothing", label: "Clothing", icon: Shirt },
  { id: "kitchen", label: "Kitchen", icon: UtensilsCrossed },
  { id: "other", label: "Other", icon: Tag },
]

const cities = ["All Cities", "Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Peshawar", "Multan"]

const conditions = ["New", "Like New", "Good", "Fair"]

const listings = [
  {
    id: 1,
    title: "Study Table with Chair",
    category: "furniture",
    price: 4500,
    condition: "Good",
    location: "Gulberg, Lahore",
    seller: "Ahmed Khan",
    phone: "+92 300 1234567",
    description: "Wooden study table with comfortable chair. Perfect for students. Minor scratches on table surface.",
    images: ["/images/item-table.jpg"],
    posted: "2 days ago",
    verified: true,
  },
  {
    id: 2,
    title: "Single Bed with Mattress",
    category: "furniture",
    price: 12000,
    condition: "Like New",
    location: "DHA Phase 5, Karachi",
    seller: "Fatima Ali",
    phone: "+92 321 9876543",
    description: "Single bed with foam mattress. Used for only 6 months. Moving out so selling urgently.",
    images: ["/images/item-bed.jpg"],
    posted: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    title: "Medical Books Set (MBBS 2nd Year)",
    category: "books",
    price: 8000,
    condition: "Good",
    location: "Blue Area, Islamabad",
    seller: "Sara Malik",
    phone: "+92 333 5556667",
    description: "Complete set of MBBS 2nd year books including Anatomy, Physiology, and Biochemistry. Highlighted but in good condition.",
    images: ["/images/item-books.jpg"],
    posted: "3 days ago",
    verified: false,
  },
  {
    id: 4,
    title: "Mini Refrigerator",
    category: "electronics",
    price: 15000,
    condition: "Good",
    location: "Johar Town, Lahore",
    seller: "Usman Tariq",
    phone: "+92 345 7778889",
    description: "Small refrigerator perfect for hostel room. Working perfectly. 2 years old.",
    images: ["/images/item-fridge.jpg"],
    posted: "5 days ago",
    verified: true,
  },
  {
    id: 5,
    title: "Bedding Set (Sheets, Pillow, Blanket)",
    category: "bedding",
    price: 3500,
    condition: "New",
    location: "Saddar, Rawalpindi",
    seller: "Ayesha Noor",
    phone: "+92 312 3334445",
    description: "Brand new bedding set. Never used. Bought extra by mistake. Includes 2 bed sheets, pillow with cover, and winter blanket.",
    images: ["/images/item-bedding.jpg"],
    posted: "1 day ago",
    verified: true,
  },
  {
    id: 6,
    title: "Electric Kettle",
    category: "kitchen",
    price: 1200,
    condition: "Like New",
    location: "Clifton, Karachi",
    seller: "Hassan Ali",
    phone: "+92 346 8889990",
    description: "1.5L electric kettle. Used for 3 months only. Perfect working condition.",
    images: ["/images/item-kettle.jpg"],
    posted: "4 days ago",
    verified: false,
  },
  {
    id: 7,
    title: "Wardrobe/Cupboard",
    category: "furniture",
    price: 8500,
    condition: "Good",
    location: "Model Town, Lahore",
    seller: "Zainab Ahmed",
    phone: "+92 300 4445556",
    description: "2-door wardrobe with shelves and hanging space. Sturdy wooden construction. Some wear on handles.",
    images: ["/images/item-wardrobe.jpg"],
    posted: "1 week ago",
    verified: true,
  },
  {
    id: 8,
    title: "Table Fan",
    category: "electronics",
    price: 2000,
    condition: "Fair",
    location: "F-7, Islamabad",
    seller: "Ali Raza",
    phone: "+92 321 1112223",
    description: "12-inch table fan. Works well but makes slight noise. Good for summer.",
    images: ["/images/item-fan.jpg"],
    posted: "6 days ago",
    verified: false,
  },
]

export default function BuySellPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [favorites, setFavorites] = useState<number[]>([])
  const [isPostOpen, setIsPostOpen] = useState(false)
  const [postSubmitted, setPostSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("buy")

  const [newListing, setNewListing] = useState({
    title: "",
    category: "",
    price: "",
    condition: "",
    location: "",
    phone: "",
    description: "",
  })

  const filteredListings = listings.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesCity = selectedCity === "All Cities" || item.location.includes(selectedCity)
    const matchesCondition = selectedCondition === "All" || item.condition === selectedCondition
    return matchesSearch && matchesCategory && matchesCity && matchesCondition
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("New listing:", newListing)
    setPostSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ShoppingBag className="w-4 h-4" />
                Hostel Marketplace
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                Buy & Sell{" "}
                <span className="text-primary">Hostel Essentials</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find great deals on furniture, books, electronics, and more from fellow hostel residents. 
                Or sell your items when moving out!
              </p>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md mx-auto">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Browse Items</TabsTrigger>
                  <TabsTrigger value="sell">Sell an Item</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {activeTab === "buy" ? (
          <>
            {/* Search and Filters */}
            <section className="py-8 border-b border-border">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search items..."
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
                  <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                    <SelectTrigger className="w-full md:w-40">
                      <SelectValue placeholder="Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Conditions</SelectItem>
                      {conditions.map((cond) => (
                        <SelectItem key={cond} value={cond}>{cond}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-muted-foreground"
                      }`}
                    >
                      <cat.icon className="w-4 h-4" />
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Listings Grid */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{filteredListings.length}</span> items
                  </p>
                  <Button onClick={() => setActiveTab("sell")}>
                    <Plus className="w-4 h-4 mr-2" />
                    Post an Item
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredListings.map((item) => (
                    <Card key={item.id} className="group overflow-hidden hover:border-primary/50 transition-colors">
                      {/* Image */}
                      <div className="relative aspect-square bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-muted-foreground/30" />
                        </div>
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {item.verified && (
                            <Badge className="bg-green-100 text-green-700">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                          <Badge variant="secondary">{item.condition}</Badge>
                        </div>
                        {/* Favorite */}
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              favorites.includes(item.id)
                                ? "fill-red-500 text-red-500"
                                : "text-foreground"
                            }`}
                          />
                        </button>
                        {/* Price */}
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg font-bold">
                          PKR {item.price.toLocaleString()}
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {item.seller}
                          </span>
                          <span>{item.posted}</span>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full" variant="outline" size="sm">
                              <Phone className="w-4 h-4 mr-2" />
                              Contact Seller
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>{item.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                <Camera className="w-16 h-16 text-muted-foreground/30" />
                              </div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-2xl font-bold text-primary">PKR {item.price.toLocaleString()}</p>
                                  <p className="text-sm text-muted-foreground">{item.condition} condition</p>
                                </div>
                                <Badge variant="secondary">{categories.find(c => c.id === item.category)?.label}</Badge>
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                              <div className="p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-medium mb-2">Seller Information</h4>
                                <div className="space-y-2 text-sm">
                                  <p className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-muted-foreground" />
                                    {item.seller}
                                  </p>
                                  <p className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                    {item.location}
                                  </p>
                                  <p className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-muted-foreground" />
                                    {item.phone}
                                  </p>
                                </div>
                              </div>
                              <div className="flex gap-3">
                                <Button className="flex-1" asChild>
                                  <a href={`tel:${item.phone}`}>
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Seller
                                  </a>
                                </Button>
                                <Button variant="outline" className="flex-1" asChild>
                                  <a href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`} target="_blank">
                                    <MessageSquare className="w-4 h-4 mr-2" />
                                    WhatsApp
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredListings.length === 0 && (
                  <div className="text-center py-16">
                    <Package className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">No items found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                    <Button variant="outline" onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                      setSelectedCity("All Cities")
                      setSelectedCondition("All")
                    }}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </section>
          </>
        ) : (
          /* Sell Form */
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                {postSubmitted ? (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Listing Posted Successfully!</h2>
                      <p className="text-muted-foreground mb-6">
                        Your item is now live on the marketplace. Buyers will contact you directly.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button onClick={() => {
                          setPostSubmitted(false)
                          setNewListing({
                            title: "",
                            category: "",
                            price: "",
                            condition: "",
                            location: "",
                            phone: "",
                            description: "",
                          })
                        }}>
                          Post Another Item
                        </Button>
                        <Button variant="outline" onClick={() => setActiveTab("buy")}>
                          Browse Items
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Plus className="w-5 h-5 text-primary" />
                        Post an Item for Sale
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">
                        Fill in the details below to list your item on the marketplace.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handlePostSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="title">Item Title *</Label>
                          <Input
                            id="title"
                            placeholder="e.g., Study Table with Chair"
                            value={newListing.title}
                            onChange={(e) => setNewListing(prev => ({ ...prev, title: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Category *</Label>
                            <Select 
                              value={newListing.category} 
                              onValueChange={(v) => setNewListing(prev => ({ ...prev, category: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.filter(c => c.id !== "all").map((cat) => (
                                  <SelectItem key={cat.id} value={cat.id}>
                                    <span className="flex items-center gap-2">
                                      <cat.icon className="w-4 h-4" />
                                      {cat.label}
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Condition *</Label>
                            <Select 
                              value={newListing.condition} 
                              onValueChange={(v) => setNewListing(prev => ({ ...prev, condition: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select condition" />
                              </SelectTrigger>
                              <SelectContent>
                                {conditions.map((cond) => (
                                  <SelectItem key={cond} value={cond}>{cond}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="price">Price (PKR) *</Label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                id="price"
                                type="number"
                                placeholder="5000"
                                className="pl-10"
                                value={newListing.price}
                                onChange={(e) => setNewListing(prev => ({ ...prev, price: e.target.value }))}
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Location *</Label>
                            <Select 
                              value={newListing.location} 
                              onValueChange={(v) => setNewListing(prev => ({ ...prev, location: v }))}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                              </SelectTrigger>
                              <SelectContent>
                                {cities.filter(c => c !== "All Cities").map((city) => (
                                  <SelectItem key={city} value={city}>{city}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+92 300 1234567"
                            value={newListing.phone}
                            onChange={(e) => setNewListing(prev => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                          <p className="text-xs text-muted-foreground">Buyers will contact you on this number</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Description *</Label>
                          <Textarea
                            id="description"
                            placeholder="Describe your item - condition, age, reason for selling, any defects..."
                            rows={4}
                            value={newListing.description}
                            onChange={(e) => setNewListing(prev => ({ ...prev, description: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="p-4 bg-muted/50 rounded-lg">
                          <h4 className="font-medium mb-2">Tips for a successful sale:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Use a clear, descriptive title</li>
                            <li>• Set a fair price based on condition</li>
                            <li>• Be honest about any defects</li>
                            <li>• Respond quickly to inquiries</li>
                          </ul>
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          <Plus className="w-4 h-4 mr-2" />
                          Post Item
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Moving Out? Don&apos;t Throw It Away!
              </h2>
              <p className="text-muted-foreground mb-6">
                Your old items could be someone else&apos;s treasure. Sell your hostel essentials and help fellow students save money.
              </p>
              <Button size="lg" onClick={() => setActiveTab("sell")}>
                Start Selling
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
