"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "@/components/navigation"
import Home from "@/components/pages/home"
import Products from "@/components/pages/products"
import Contact from "@/components/pages/contact"
import { Toaster } from "@/components/ui/toaster"

export default function RootPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="flex-1 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  )
}
