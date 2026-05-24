export type HostelAmenity =
  | "wifi"
  | "ac"
  | "meals"
  | "laundry"
  | "parking"
  | "security"

export type HostelGender = "Male" | "Female" | "Co-ed"

export type HostelRoomType = "Single" | "Double" | "Triple" | "Dormitory"

export interface HostelPreview {
  id: number
  name: string
  location: string
  price: number
  rating: number
  reviews: number
  image: string
  amenities: HostelAmenity[]
  gender: HostelGender
  roomType: HostelRoomType
  verified: boolean
}
