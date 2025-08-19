"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
  color: string
  icon: string
}

const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", color: "#61dafb", icon: "⚛️" },
  { name: "Node.js", level: 90, category: "Backend", color: "#10b981", icon: "🟢" },
  { name: "MongoDB", level: 88, category: "Database", color: "#47a248", icon: "🍃" },
  { name: "Express.js", level: 92, category: "Backend", color: "#ffffff", icon: "🚀" },
  { name: "JavaScript", level: 96, category: "Language", color: "#f7df1e", icon: "📜" },
  { name: "TypeScript", level: 85, category: "Language", color: "#3178c6", icon: "🔷" },
  { name: "Redux", level: 82, category: "Frontend", color: "#764abc", icon: "🔄" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", color: "#06b6d4", icon: "🎨" },
  { name: "Next.js", level: 88, category: "Framework", color: "#ffffff", icon: "▲" },
  { name: "AWS", level: 75, category: "Cloud", color: "#ff9900", icon: "☁️" },
  { name: "Docker", level: 78, category: "DevOps", color: "#2496ed", icon: "🐳" },
  { name: "Git", level: 92, category: "Tools", color: "#f05032", icon: "📝" },
]

export default function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skills one by one
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, index])
              }, index * 100)
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
  }, [])

  const categories = ["Frontend", "Backend", "Database", "Language", "Framework", "Cloud", "DevOps", "Tools"]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] via-[#00d9ff] to-[#10b981] bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Mastering the MERN stack and modern web technologies with 2+ years of hands-on experience building scalable
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md p-6 transition-all duration-700 hover:scale-105 hover:rotate-2 ${
                visibleSkills.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${hoveredSkill === skill.name ? "shadow-2xl shadow-[#00d9ff]/20" : ""}`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* 3D Floating Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              <div className="relative z-10">
                {/* Skill Icon and Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-white/60">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </div>
                  </div>
                </div>

                {/* Animated Progress Ring */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                    {/* Background Circle */}
                    <circle cx="40" cy="40" r="32" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="transparent" />
                    {/* Progress Circle */}
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke={skill.color}
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 32}`}
                      strokeDashoffset={`${2 * Math.PI * 32 * (1 - (visibleSkills.includes(index) ? skill.level / 100 : 0))}`}
                      className="transition-all duration-1000 ease-out drop-shadow-lg"
                      style={{
                        filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </svg>

                  {/* Glowing Center Dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                    ></div>
                  </div>
                </div>

                {/* Skill Level Bar */}
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visibleSkills.includes(index) ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                      boxShadow: `0 0 10px ${skill.color}40`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                  hoveredSkill === skill.name ? `shadow-[0_0_30px_${skill.color}30] border` : ""
                }`}
                style={{ borderColor: hoveredSkill === skill.name ? `${skill.color}50` : "transparent" }}
              ></div>
            </Card>
          ))}
        </div>

        {/* Category Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            const avgLevel = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length,
            )

            return (
              <Card
                key={category}
                className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 border border-white/10 backdrop-blur-md p-4 text-center hover:scale-105 transition-transform duration-300"
              >
                <h4 className="font-bold text-[#00d9ff] mb-2">{category}</h4>
                <div className="text-2xl font-bold text-white">{avgLevel}%</div>
                <div className="text-xs text-white/60">{categorySkills.length} skills</div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
