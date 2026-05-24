export const MAIN_NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Jobs", href: "/jobs" },
  { name: "Accommodations", href: "/accommodation" },
  { name: "Buy & Sell", href: "/buy-sell" },
  { name: "Contact", href: "/contact" },
] as const

export const HEADER_CTA_LINKS = {
  listHostel: { label: "List Your Hostel", href: "/list-hostel" },
  signIn: { label: "Sign In", href: "#sign-in" },
} as const
