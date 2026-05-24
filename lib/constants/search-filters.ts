export const POPULAR_LOCATIONS = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Peshawar",
] as const

export const SEARCH_FILTER_OPTIONS = {
  gender: ["Male", "Female", "Co-ed"],
  roomType: ["Single", "Double", "Triple", "Dormitory"],
  priceRange: [
    "Under PKR 10K",
    "PKR 10K - 20K",
    "PKR 20K - 30K",
    "PKR 30K+",
  ],
  amenities: ["WiFi", "AC", "Meals", "Laundry", "Parking", "Security"],
} as const

export type SearchFilterCategory = keyof typeof SEARCH_FILTER_OPTIONS
