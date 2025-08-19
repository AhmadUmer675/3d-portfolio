"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  projectType: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Working with this developer was exceptional. They delivered our e-commerce platform ahead of schedule with incredible attention to detail. The MERN stack implementation was flawless and scalable.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "E-Commerce Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "DataFlow Solutions",
    content:
      "The social media dashboard they built exceeded our expectations. Real-time features work perfectly, and the UI/UX is intuitive. Their expertise in React and Node.js really shows.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Dashboard Application",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "EduTech Pro",
    content:
      "Our learning management system is now serving thousands of students daily. The developer's understanding of scalable architecture and performance optimization is outstanding.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Learning Management System",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "FinanceFlow",
    content:
      "The crypto trading bot they developed has been incredibly reliable. Complex algorithms implemented with clean, maintainable code. Highly recommend for any fintech projects.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Trading Bot",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "ContentCorp",
    content:
      "The AI content generator platform transformed our workflow. Integration with OpenAI API was seamless, and the user interface is incredibly user-friendly. Fantastic work!",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "AI Platform",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Manager",
    company: "TaskMaster Pro",
    content:
      "Our team collaboration tool has improved productivity by 40%. Real-time updates, intuitive design, and robust backend architecture. This developer truly understands business needs.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Collaboration Tool",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleTestimonials((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] via-[#00d9ff] to-[#10b981] bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it - hear what clients say about working with me on their MERN stack projects.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-md p-8 md:p-12 transition-all duration-700 hover:scale-105">
            {/* 3D Rotating Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-[#6366f1]/5 rounded-lg transform rotate-1 scale-105 opacity-50"></div>

            <div className="relative z-10">
              {/* Stars Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <div
                    key={i}
                    className="text-2xl text-[#f59e0b] animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    ⭐
                  </div>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-white/90 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-[#00d9ff]/50 shadow-lg shadow-[#00d9ff]/20"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#00d9ff] font-medium">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                  <p className="text-white/60 text-sm">{testimonials[currentIndex].projectType}</p>
                </div>
              </div>
            </div>

            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-lg border border-[#00d9ff]/30 shadow-[0_0_30px_rgba(0,217,255,0.2)]"></div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#00d9ff]/20 hover:bg-[#00d9ff]/40 border border-[#00d9ff]/50 text-[#00d9ff] backdrop-blur-md"
            size="lg"
          >
            ←
          </Button>
          <Button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#00d9ff]/20 hover:bg-[#00d9ff]/40 border border-[#00d9ff]/50 text-[#00d9ff] backdrop-blur-md"
            size="lg"
          >
            →
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#00d9ff] shadow-lg shadow-[#00d9ff]/50 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 border border-white/10 backdrop-blur-md p-6 transition-all duration-700 hover:scale-105 hover:rotate-1 cursor-pointer ${
                visibleTestimonials.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${index === currentIndex ? "ring-2 ring-[#00d9ff]/50 shadow-lg shadow-[#00d9ff]/20" : ""}`}
              onClick={() => goToTestimonial(index)}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Mini Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#f59e0b] text-sm">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Mini Content */}
              <p className="text-white/80 text-sm mb-4 line-clamp-3">{testimonial.content}</p>

              {/* Mini Client Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-[#00d9ff]/30"
                />
                <div>
                  <h5 className="text-white font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-white/60 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 border border-[#00d9ff]/30 shadow-[0_0_20px_rgba(0,217,255,0.1)]"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
