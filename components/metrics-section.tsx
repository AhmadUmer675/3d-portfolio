"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface Metric {
  id: number
  value: number
  label: string
  suffix: string
  icon: string
  color: string
  description: string
}

const metrics: Metric[] = [
  {
    id: 1,
    value: 15,
    label: "Projects Completed",
    suffix: "+",
    icon: "🚀",
    color: "#00d9ff",
    description: "Successfully delivered projects across various industries",
  },
  {
    id: 2,
    value: 100,
    label: "Client Satisfaction",
    suffix: "%",
    icon: "⭐",
    color: "#10b981",
    description: "Maintaining perfect client satisfaction rate",
  },
  {
    id: 3,
    value: 2,
    label: "Years Experience",
    suffix: "+",
    icon: "💼",
    color: "#6366f1",
    description: "Professional development experience in MERN stack",
  },
  {
    id: 4,
    value: 24,
    label: "Response Time",
    suffix: "h",
    icon: "⚡",
    color: "#f59e0b",
    description: "Average response time for client communications",
  },
  {
    id: 5,
    value: 15,
    label: "Technologies Mastered",
    suffix: "+",
    icon: "🛠️",
    color: "#ef4444",
    description: "Proficient in modern web development technologies",
  },
  {
    id: 6,
    value: 99,
    label: "Code Quality Score",
    suffix: "%",
    icon: "📊",
    color: "#8b5cf6",
    description: "Maintaining high code quality standards",
  },
]

export default function MetricsSection() {
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({})
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            // Animate each metric counter
            metrics.forEach((metric) => {
              animateCounter(metric.id, metric.value)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounter = (id: number, targetValue: number) => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    let currentValue = 0

    const timer = setInterval(() => {
      currentValue += increment
      if (currentValue >= targetValue) {
        currentValue = targetValue
        clearInterval(timer)
      }
      setAnimatedValues((prev) => ({ ...prev, [id]: Math.floor(currentValue) }))
    }, duration / steps)
  }

  return (
    <section id="metrics" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d9ff] via-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            Performance Metrics
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves - showcasing consistent delivery, quality, and client satisfaction in
            every project.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={metric.id}
              className={`group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md p-8 text-center transition-all duration-700 hover:scale-105 hover:rotate-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 3D Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {metric.icon}
                </div>

                {/* Animated Counter */}
                <div className="mb-4">
                  <div
                    className="text-5xl md:text-6xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{ color: metric.color, textShadow: `0 0 20px ${metric.color}40` }}
                  >
                    {animatedValues[metric.id] || 0}
                    {metric.suffix}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">{metric.description}</p>

                {/* Animated Progress Bar */}
                <div className="mt-6 w-full bg-white/10 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? "100%" : "0%",
                      backgroundColor: metric.color,
                      boxShadow: `0 0 10px ${metric.color}60`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 30px ${metric.color}30`,
                  border: `1px solid ${metric.color}50`,
                }}
              ></div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"
                    style={{
                      backgroundColor: metric.color,
                      left: `${20 + i * 30}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 200}ms`,
                      boxShadow: `0 0 6px ${metric.color}`,
                    }}
                  ></div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00d9ff] mb-2">40%</div>
              <div className="text-white/60 text-sm">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#10b981] mb-2">95%</div>
              <div className="text-white/60 text-sm">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#6366f1] mb-2">20+</div>
              <div className="text-white/60 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f59e0b] mb-2">24/7</div>
              <div className="text-white/60 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
