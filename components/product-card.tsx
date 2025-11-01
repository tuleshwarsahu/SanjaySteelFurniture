"use client"

import { ShoppingCart } from "lucide-react"

interface Product {
  id: number
  name: string
  price: string
  size: string
  image: string
  desc: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{product.desc}</p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-2xl font-bold text-primary">{product.price}</p>
            <p className="text-xs text-muted-foreground">{product.size}</p>
          </div>
        </div>
        <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Inquire
        </button>
      </div>
    </div>
  )
}
