"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimelineEvent {
  id: number
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
  type: "work" | "education" | "project"
  icon: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2023",
    title: "Frontend Developer",
    company: "KK IT Solutions",
    description:
      "Developed and maintained enterprise-grade web applications with a focus on performance, UI/UX, and responsive design. Collaborated with cross-functional teams to deliver scalable and maintainable frontends.",
    technologies: ["ReactJs", "NextJs", "TypeScript"],
    type: "work",
    icon: "💼",
  },
  {
    id: 2,
    year: "2024",
    title: "Backend Developer",
    company: "Ns Tech",
    description:
      "Designed and implemented RESTful APIs, optimized database queries to improve performance by 40%, and integrated CI/CD pipelines for automated deployment and testing.",
    technologies: ["Express", "MongoDB", "NodeJs"],
    type: "work",
    icon: "💼",
  },
  {
    id: 3,
    year: "2025",
    title: "MERN Stack Developer",
    company: "Cyberify Software House",
    description:
      "Built a full-featured e-commerce platform with secure payment integration, real-time inventory management, and an intuitive admin dashboard. Deployed scalable solutions using cloud infrastructure.",
    technologies: [
      "Next.js",
      "ReactJs",
      "NodeJs",
      "MongoDB",
      "PostgreSQL",
      "Stripe",
      "AWS S3",
    ],
    type: "work",
    icon: "💼",
  },
]


export default function TimelineSection() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineEvents.forEach((_, index) => {
              setTimeout(() => {
                setVisibleEvents((prev) => [...prev, index])
              }, index * 200)
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "#00d9ff"
      case "education":
        return "#6366f1"
      case "project":
        return "#10b981"
      default:
        return "#ffffff"
    }
  }

  return (
    <section id="timeline" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10b981] via-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to experienced MERN stack developer - here's my professional evolution and key
            milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00d9ff] via-[#6366f1] to-[#10b981] rounded-full shadow-lg shadow-[#00d9ff]/30"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} transition-all duration-700 ${
                  visibleEvents.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Timeline Node */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] z-20 transition-all duration-300 hover:scale-125"
                  style={{
                    backgroundColor: getTypeColor(event.type),
                    boxShadow: `0 0 20px ${getTypeColor(event.type)}60`,
                  }}
                ></div>

                {/* Event Card */}
                <Card
                  className={`w-full max-w-md bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-md p-6 transition-all duration-500 hover:scale-105 ${
                    index % 2 === 0 ? "mr-auto translate-x-8" : "ml-auto -translate-x-8"
                  } ${hoveredEvent === event.id ? "shadow-2xl" : ""}`}
                  style={{
                    boxShadow: hoveredEvent === event.id ? `0 20px 40px ${getTypeColor(event.type)}20` : undefined,
                  }}
                >
                  {/* Year Badge */}
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold mb-4"
                    style={{
                      backgroundColor: `${getTypeColor(event.type)}20`,
                      color: getTypeColor(event.type),
                      border: `1px solid ${getTypeColor(event.type)}40`,
                    }}
                  >
                    {event.year}
                  </div>

                  {/* Event Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-2xl transform hover:scale-110 transition-transform duration-300">
                      {event.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 hover:text-[#00d9ff] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-white/80 font-medium">{event.company}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-4 leading-relaxed">{event.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {event.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20 hover:scale-105 transition-transform duration-200"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Glowing Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                      hoveredEvent === event.id ? "border" : ""
                    }`}
                    style={{
                      borderColor: hoveredEvent === event.id ? `${getTypeColor(event.type)}50` : "transparent",
                    }}
                  ></div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#00d9ff]"></div>
            <span className="text-white/70">Work Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#6366f1]"></div>
            <span className="text-white/70">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#10b981]"></div>
            <span className="text-white/70">Projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
