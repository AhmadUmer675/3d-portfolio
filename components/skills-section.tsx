"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
  color: string
  secondaryColor: string
  icon: string
  description: string
}

const skills: Skill[] = [
  { 
    name: "React", 
    level: 95, 
    category: "Frontend", 
    color: "#61dafb", 
    secondaryColor: "#21b1d1",
    icon: "⚛️",
    description: "Building dynamic UIs"
  },
  { 
    name: "Node.js", 
    level: 90, 
    category: "Backend", 
    color: "#68d391", 
    secondaryColor: "#48bb78",
    icon: "🚀",
    description: "Server-side JavaScript"
  },
  { 
    name: "PostgreSQL", 
    level: 88, 
    category: "Database", 
    color: "#4c9aff", 
    secondaryColor: "#0052cc",
    icon: "🗄️",
    description: "Relational databases"
  },
  { 
    name: "Express.js", 
    level: 92, 
    category: "Backend", 
    color: "#ff6b6b", 
    secondaryColor: "#ee5a52",
    icon: "⚡",
    description: "Web application framework"
  },
  { 
    name: "JavaScript", 
    level: 96, 
    category: "Language", 
    color: "#ffd93d", 
    secondaryColor: "#f7c301",
    icon: "💛",
    description: "Core programming language"
  },
  { 
    name: "TypeScript", 
    level: 85, 
    category: "Language", 
    color: "#007acc", 
    secondaryColor: "#0061a6",
    icon: "💎",
    description: "Type-safe development"
  },
  { 
    name: "Redux", 
    level: 82, 
    category: "Frontend", 
    color: "#764abc", 
    secondaryColor: "#593d9c",
    icon: "🔄",
    description: "State management"
  },
  { 
    name: "Tailwind", 
    level: 90, 
    category: "Frontend", 
    color: "#06b6d4", 
    secondaryColor: "#0891b2",
    icon: "🎨",
    description: "Utility-first CSS"
  },
  { 
    name: "Next.js", 
    level: 88, 
    category: "Framework", 
    color: "#ffffff", 
    secondaryColor: "#e5e5e5",
    icon: "▲",
    description: "React meta-framework"
  },
  { 
    name: "AWS", 
    level: 75, 
    category: "Cloud", 
    color: "#ff9500", 
    secondaryColor: "#e6851a",
    icon: "☁️",
    description: "Cloud infrastructure"
  },
  { 
    name: "Docker", 
    level: 78, 
    category: "DevOps", 
    color: "#0db7ed", 
    secondaryColor: "#0a9ed1",
    icon: "🐳",
    description: "Containerization"
  },
  { 
    name: "Git", 
    level: 92, 
    category: "Tools", 
    color: "#f14e32", 
    secondaryColor: "#d63e25",
    icon: "🌿",
    description: "Version control"
  },
]

export default function SkillsSection() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills((prev) => [...prev, index])
              }, index * 100 + 500)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with enhanced animations */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-full border border-white/20 mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-semibold tracking-wide">
              TECHNICAL MASTERY
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {categories.map((category, index) => (
            <div
              key={category}
              className="px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 text-sm font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative transition-all duration-700 ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className="relative h-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-6 overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group-hover:border-white/20"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Animated background gradient */}
                <div 
                  className={`absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br ${
                    hoveredSkill === skill.name ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.secondaryColor}10, transparent)`
                  }}
                />
                
                {/* Glowing border effect */}
                <div 
                  className={`absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}40, ${skill.secondaryColor}20)`,
                    padding: '1px',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/2 rounded-lg" />
                </div>

                <div className="relative z-10">
                  {/* Icon and Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className="text-4xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ 
                          filter: `drop-shadow(0 0 12px ${skill.color}60)`,
                          textShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}80` : 'none'
                        }}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-cyan-300">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-white/60 mb-1">{skill.category}</p>
                        <p className="text-xs text-white/50">{skill.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Proficiency Level */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-white/80">Proficiency</span>
                      <span 
                        className="text-lg font-bold transition-all duration-300"
                        style={{ 
                          color: skill.color,
                          textShadow: hoveredSkill === skill.name ? `0 0 10px ${skill.color}60` : 'none'
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                        style={{
                          width: visibleSkills.includes(index) ? `${skill.level}%` : "0%",
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.secondaryColor})`,
                          boxShadow: `0 0 15px ${skill.color}40`,
                          transitionDelay: `${index * 100 + 800}ms`,
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer" />
                      </div>
                      
                      {/* Glowing dot at the end */}
                      <div
                        className={`absolute top-1/2 w-2 h-2 rounded-full transition-all duration-1000 ease-out ${
                          visibleSkills.includes(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          left: visibleSkills.includes(index) ? `calc(${skill.level}% - 4px)` : '0%',
                          backgroundColor: skill.color,
                          boxShadow: `0 0 12px ${skill.color}80`,
                          transform: 'translateY(-50%)',
                          transitionDelay: `${index * 100 + 1200}ms`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-1 rounded-full transition-all duration-300 ${
                          i < Math.floor(skill.level / 20) 
                            ? 'opacity-100' 
                            : 'opacity-30'
                        }`}
                        style={{
                          backgroundColor: skill.color,
                          boxShadow: i < Math.floor(skill.level / 20) ? `0 0 8px ${skill.color}60` : 'none'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredSkill === skill.name && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-60 animate-float"
                        style={{
                          backgroundColor: skill.color,
                          left: `${20 + (i * 10)}%`,
                          top: `${20 + (i * 8)}%`,
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: `0 0 6px ${skill.color}80`
                        }}
                      />
                    ))}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-white/70 mb-6">
            Ready to bring your ideas to life?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-cyan-500/25">
            Let's Work Together
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-float {
          animation: float 3s infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  )
}