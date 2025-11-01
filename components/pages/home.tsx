"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/product-card"

interface Product {
  id: number
  name: string
  price: string
  size: string
  image: string
  desc: string
}

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Steel Cooler",
    price: "₹4500",
    size: "3ft x 2ft",
    image: "/steel-cooler.jpg",
    desc: "Durable heavy steel body with fan fitting.",
  },
  {
    id: 2,
    name: "Godrej Almirah",
    price: "₹12500",
    size: "6ft x 3ft",
    image: "/godrej-almirah.jpg",
    desc: "Elegant double-door steel almirah with mirror.",
  },
  {
    id: 3,
    name: "Storage Rack",
    price: "₹3000",
    size: "4ft x 2ft",
    image: "/steel-storage-rack.jpg",
    desc: "Industrial-grade 4-layer steel rack.",
  },
  {
    id: 4,
    name: "Office Table",
    price: "₹5500",
    size: "4ft x 2ft",
    image: "/steel-office-table.jpg",
    desc: "Polished steel table for office or shop use.",
  },
  {
    id: 5,
    name: "Display Cabinet",
    price: "₹8000",
    size: "5ft x 3ft",
    image: "/steel-display-cabinet.jpg",
    desc: "Glass-front steel cabinet for retail displays.",
  },
  {
    id: 6,
    name: "Tool Cart",
    price: "₹2500",
    size: "3ft x 2ft",
    image: "/steel-tool-cart.jpg",
    desc: "Wheeled steel cart for workshops and factories.",
  },
]

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Load from localStorage or use defaults
    const stored = localStorage.getItem("steel-furniture-products")
    if (stored) {
      try {
        setProducts(JSON.parse(stored))
      } catch {
        setProducts(DEFAULT_PRODUCTS)
        localStorage.setItem("steel-furniture-products", JSON.stringify(DEFAULT_PRODUCTS))
      }
    } else {
      setProducts(DEFAULT_PRODUCTS)
      localStorage.setItem("steel-furniture-products", JSON.stringify(DEFAULT_PRODUCTS))
    }
  }, [])

  // Get top 3 products for featured section
  const topProducts = products.slice(0, 3)

  return (
    <div className="flex flex-col">
      <section
        className="text-primary-foreground py-16 md:py-24 px-6 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=400&width=1200&query=mixed steel furniture collection almirahs racks coolers office tables)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SteelCraft</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">Premium Steel Furniture</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Welcome to SteelCraft</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We design and manufacture quality steel furniture including coolers, racks, Godrej almirahs, and custom
            furniture. With over 15 years of experience, we pride ourselves on delivering durable, stylish, and
            affordable steel furniture solutions for homes and businesses across the region.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Products Delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-6 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Top Sold Products</h3>
          <p className="text-muted-foreground mb-8">Our most popular furniture collection</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
