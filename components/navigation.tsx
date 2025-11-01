"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Home, Package, Phone } from "lucide-react"

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-4">
          {/* Logo Circle */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          {/* Company Name */}
          <h1 className="text-xl md:text-2xl font-bold text-primary">Sanjay Steel Furniture</h1>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
          <div className="flex justify-around">
            <Link
              to="/"
              className={`flex-1 py-4 flex justify-center ${isActive("/") ? "text-primary" : "text-muted-foreground"
                } transition-colors`}
            >
              <Home size={24} />
            </Link>
            <Link
              to="/products"
              className={`flex-1 py-4 flex justify-center ${isActive("/products") ? "text-primary" : "text-muted-foreground"
                } transition-colors`}
            >
              <Package size={24} />
            </Link>
            <Link
              to="/contact"
              className={`flex-1 py-4 flex justify-center ${isActive("/contact") ? "text-primary" : "text-muted-foreground"
                } transition-colors`}
            >
              <Phone size={24} />
            </Link>
          </div>
          <div className="text-center py-2 text-xs text-muted-foreground bg-card border-t border-border">
            Designed By Tuleshwar
          </div>
        </nav>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="sticky top-[72px] z-40 bg-card border-b border-border hidden md:block">
          <div className="max-w-6xl mx-auto px-6 py-4 flex gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
            >
              <Home size={20} /> Home
            </Link>
            <Link
              to="/products"
              className={`flex items-center gap-2 transition-colors ${isActive("/products") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
            >
              <Package size={20} /> Products
            </Link>
            <Link
              to="/contact"
              className={`flex items-center gap-2 transition-colors ${isActive("/contact") ? "text-primary" : "text-foreground hover:text-primary"
                }`}
            >
              <Phone size={20} /> Contact
            </Link>
          </div>
          {/* <div className="text-center py-2 text-xs text-muted-foreground bg-background border-t border-border">
            Designed By Tuleshwar
          </div> */}
        </nav>
      )}
    </>
  )
}
