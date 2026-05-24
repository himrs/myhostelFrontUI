# MyHostel.pk

Modern hostel search and management platform for Pakistan — built with **Next.js**, **React**, and **Tailwind CSS**.

## Project structure

```
app/                    # Next.js App Router pages
  about/                # About Us
  accommodation/        # Request for Accommodation
  buy-sell/             # Buy & Sell marketplace
  contact/              # Contact
  hostel/[id]/          # Detailed hostel view
  jobs/                 # Jobs portal
  list-hostel/          # List Your Hostel wizard
  page.tsx              # Landing page

components/
  layout/               # Header, Footer
  landing/              # Hero, search bar, hostel preview cards
  hostel/               # Hostel detail & listing (planned)
  booking/              # Booking flow (planned)
  jobs/                 # Jobs UI (planned)
  accommodation/        # Accommodation requests (planned)
  ui/                   # Shared shadcn/ui primitives

lib/
  constants/            # Navigation, search filters
  data/                 # Mock hostel data
  types/                # TypeScript models
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current milestone

- New **Header** with full navigation (Home, About Us, Jobs, Accommodations, Buy & Sell, Contact)
- **Landing page** with search (location, price, amenities), featured hostel cards, and responsive layout
