"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ListHostelForm } from "@/components/list-hostel-form"

export default function ListHostelPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                List Your Hostel
              </h1>
              <p className="text-muted-foreground">
                Join thousands of hostel owners and reach students &amp; professionals across Pakistan
              </p>
            </div>
            <ListHostelForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
