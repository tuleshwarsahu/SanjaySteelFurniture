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

export default function Products() {
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

  return (
    <div className="py-12 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-muted-foreground mb-12">Browse our collection of premium steel furniture</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
