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
  { name: "React", level: 95, category: "Frontend", color: "#336791", icon: "⚛️" },
  { name: "Node.js", level: 90, category: "Backend", color: "#336791", icon: "🟢" },
  { name: "PostgreSQL", level: 88, category: "Database", color: "#336791", icon: "🐘" },
  { name: "Express.js", level: 92, category: "Backend", color: "#336791", icon: "🚀" },
  { name: "JavaScript", level: 96, category: "Language", color: "#336791", icon: "📜" },
  { name: "TypeScript", level: 85, category: "Language", color: "#336791", icon: "🔷" },
  { name: "Redux", level: 82, category: "Frontend", color: "#336791", icon: "🔄" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", color: "#336791", icon: "🎨" },
  { name: "Next.js", level: 88, category: "Framework", color: "#336791", icon: "▲" },
  { name: "AWS", level: 75, category: "Cloud", color: "#336791", icon: "☁️" },
  { name: "Docker", level: 78, category: "DevOps", color: "#336791", icon: "🐳" },
  { name: "Git", level: 92, category: "Tools", color: "#336791", icon: "📝" },
]

export default function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, index])
              }, index * 80)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#6366f1]/20 to-[#00d9ff]/20 border border-[#00d9ff]/30 rounded-full text-[#00d9ff] text-sm font-medium mb-4 md:mb-6">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-[#6366f1] via-[#00d9ff] to-[#10b981] bg-clip-text text-transparent leading-tight">
            Technical Skills
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Mastering the MERN stack and modern web technologies with 2+ years of hands-on experience building scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`group relative bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-lg p-4 md:p-6 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${hoveredSkill === skill.name ? "shadow-2xl shadow-[#00d9ff]/20 border-[#00d9ff]/30" : ""}`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${skill.color}, transparent)`,
                  borderRadius: "0 8px 0 100%",
                }}
              />

              <div className="relative z-10">
                {/* Skill header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div
                      className="text-xl md:text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      style={{ filter: `drop-shadow(0 0 8px ${skill.color}60)` }}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-base text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-white/60">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-base md:text-lg font-bold transition-all duration-300 group-hover:scale-110"
                      style={{
                        color: skill.color,
                        textShadow:
                          hoveredSkill === skill.name
                            ? `0 0 10px ${skill.color}60`
                            : "none",
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                </div>

                {/* Circular progress */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="4"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="30"
                      stroke={skill.color}
                      strokeWidth="4"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 30}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 30 * (1 - (visibleSkills.includes(index) ? skill.level / 100 : 0))
                      }`}
                      className="transition-all duration-[1500ms] ease-out"
                      style={{
                        filter: `drop-shadow(0 0 6px ${skill.color}40)`,
                        transitionDelay: `${index * 80}ms`,
                      }}
                    />
                    <circle
                      cx={
                        40 + 30 * Math.cos((skill.level / 100) * 2 * Math.PI - Math.PI / 2)
                      }
                      cy={
                        40 + 30 * Math.sin((skill.level / 100) * 2 * Math.PI - Math.PI / 2)
                      }
                      r="3"
                      fill={skill.color}
                      className={`transition-all duration-[1500ms] ease-out ${
                        visibleSkills.includes(index) ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        filter: `drop-shadow(0 0 8px ${skill.color})`,
                        transitionDelay: `${index * 80 + 800}ms`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse"
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 12px ${skill.color}80`,
                      }}
                    />
                  </div>
                </div>

                {/* Linear progress bar */}
                <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 overflow-hidden relative">
                  <div
                    className="h-full rounded-full transition-all duration-[1200ms] ease-out"
                    style={{
                      width: visibleSkills.includes(index) ? `${skill.level}%` : "0%",
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}50`,
                      transitionDelay: `${index * 80 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
