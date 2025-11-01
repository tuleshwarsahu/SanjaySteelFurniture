"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Store in localStorage
      const existing = localStorage.getItem("contact-submissions") || "[]"
      const submissions = JSON.parse(existing)
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem("contact-submissions", JSON.stringify(submissions))

      toast({
        title: "Thank You!",
        description: "We'll get back to you soon.",
      })

      setFormData({ name: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <div className="py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    123 Industrial Park, Steel City
                    <br />
                    Maharashtra, India 400001
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@steelcraft.com" className="hover:text-primary transition-colors">
                      info@steelcraft.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Call us directly for custom furniture inquiries and bulk orders.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
