"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface Project {
  id: number
  title: string
  image: string
  category: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantis Bot",
    image: "/quantara.png",
    category: "AI/ML",
    link: "/details",
  },
  {
    id: 2,
    title: "Summariz Ai",
    image: "/summariz.png",
    category: "AI/ML",
    link: "/product",
  },
  {
    id: 3,
    title: "Patient Agent",
    image: "/agent.jpg",
    category: "Full Stack",
    link: "/viewprodct",
  },
]

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Full Stack", "AI/ML"]

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f23] to-[#0a0a0a] opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d9ff] via-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative MERN stack applications with modern design patterns,
            scalable architecture, and cutting-edge technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#00d9ff] to-[#6366f1] text-white border-0 shadow-lg shadow-[#00d9ff]/25"
                  : "border-[#00d9ff]/30 text-[#00d9ff] hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <Card className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md overflow-hidden p-0 m-0">
                {/* Project Image */}
                <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />

                <div className="p-5 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-[#6366f1]/20 text-[#6366f1] rounded-full border border-[#6366f1]/30">
                      {project.category}
                    </span>
                  </div>

                  <Link href={project.link}>
                    <Button className="w-full bg-gradient-to-r from-[#00d9ff] to-[#6366f1] hover:from-[#00b8d4] hover:to-[#5855eb] text-white border-0">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
