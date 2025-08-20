"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ShoppingCart, Code, Star, Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WMHDRFlADbkqdRkMO3Rku4z4yVWSra.png",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const features = [
    "Interactive data visualization",
    "Customizable dashboard layouts",
    "Real-time data updates",
    "Export functionality",
    "Responsive design",
  ]

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "D3.js", color: "bg-orange-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Material-UI", color: "bg-indigo-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <Button
            variant="ghost"
            className="text-purple-300 hover:text-white hover:bg-purple-800/30 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Button>

          <Button
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent"
          >
            <Code className="w-4 h-4 mr-2" />
            Source Code
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-1 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="bg-slate-900/90 rounded-xl p-6 backdrop-blur-sm">
                  <img
                    src={images[selectedImage] || "/placeholder.svg"}
                    alt="Dashboard Preview"
                    className="w-full h-80 object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-1 group transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 ring-purple-500 scale-105"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg border border-slate-700"
                  />
                </button>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={tech.name}
                    className={`${tech.color} text-white px-4 py-2 text-sm font-medium hover:scale-110 transition-all duration-300 cursor-pointer`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Expanse Dashboard System
              </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-slate-400 ml-2">(4.9/5 from 127 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                A powerful dashboard system that helps you visualize and manage large datasets with ease. Built with
                performance and scalability in mind, this system offers comprehensive features for data analysis and
                visualization.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-3 transition-all duration-500 hover:translate-x-2 ${
                      isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and Actions */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-6">
              <div>
                <p className="text-slate-400 text-sm mb-2">Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$13.99</span>
                  <span className="text-slate-400 line-through">$29.99</span>
                  <Badge className="bg-green-500 text-white">53% OFF</Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy Now
                </Button>

                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 px-6 bg-transparent"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Free Trial
              </Button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400">30</div>
                <div className="text-sm text-slate-400">Day Refund</div>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-2xl font-bold text-purple-400">∞</div>
                <div className="text-sm text-slate-400">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
