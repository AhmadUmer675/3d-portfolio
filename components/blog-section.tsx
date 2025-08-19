"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable MERN Stack Applications: Best Practices for 2024",
    excerpt:
      "Discover the latest patterns and techniques for creating maintainable, scalable MERN stack applications that can handle enterprise-level traffic.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Scalability"],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced React Patterns: Hooks, Context, and Performance Optimization",
    excerpt:
      "Deep dive into advanced React patterns that will make your applications more performant and maintainable. Learn about custom hooks, context optimization, and more.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Frontend",
    tags: ["React", "Hooks", "Performance", "JavaScript"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 3,
    title: "Node.js Microservices Architecture: From Monolith to Scalable Services",
    excerpt:
      "Learn how to break down monolithic applications into microservices using Node.js, Express, and modern deployment strategies.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Node.js", "Microservices", "Architecture", "Docker"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 4,
    title: "MongoDB Performance Tuning: Indexing Strategies and Query Optimization",
    excerpt:
      "Master MongoDB performance optimization with advanced indexing strategies, aggregation pipelines, and query analysis techniques.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2023-12-28",
    readTime: "10 min read",
    category: "Database",
    tags: ["MongoDB", "Performance", "Indexing", "Database"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
  {
    id: 5,
    title: "Full-Stack Testing Strategies: From Unit Tests to E2E with Jest and Cypress",
    excerpt:
      "Comprehensive guide to testing MERN stack applications, covering unit tests, integration tests, and end-to-end testing strategies.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2023-12-20",
    readTime: "14 min read",
    category: "Testing",
    tags: ["Testing", "Jest", "Cypress", "Quality Assurance"],
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
  {
    id: 6,
    title: "Deploying MERN Apps: CI/CD Pipelines with Docker and AWS",
    excerpt:
      "Step-by-step guide to setting up robust deployment pipelines for MERN stack applications using modern DevOps practices.",
    content: "Full article content here...",
    author: "MERN Developer",
    publishDate: "2023-12-15",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["Deployment", "Docker", "AWS", "CI/CD"],
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
  },
]

export default function BlogSection() {
  const [filter, setFilter] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const categories = ["All", "Development", "Frontend", "Backend", "Database", "Testing", "DevOps"]

  const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter((post) => post.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredPosts.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePosts((prev) => [...prev, index])
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [filteredPosts])

  return (
    <section id="blog" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#10b981] via-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, tutorials, and best practices from my journey as a MERN stack developer. Stay updated with
            the latest in web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#10b981] to-[#00d9ff] text-white border-0 shadow-lg shadow-[#10b981]/25"
                  : "border-[#10b981]/30 text-[#10b981] hover:bg-[#10b981]/10 hover:border-[#10b981]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.find((post) => post.featured) && (
          <Card className="mb-16 bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-md overflow-hidden hover:scale-105 transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={filteredPosts.find((post) => post.featured)?.image || "/placeholder.svg"}
                  alt="Featured post"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-medium bg-[#10b981]/20 text-[#10b981] rounded-full border border-[#10b981]/30">
                    Featured
                  </span>
                  <span className="text-white/60 text-sm">
                    {filteredPosts.find((post) => post.featured)?.publishDate}
                  </span>
                  <span className="text-white/60 text-sm">{filteredPosts.find((post) => post.featured)?.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-[#00d9ff] transition-colors duration-300">
                  {filteredPosts.find((post) => post.featured)?.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {filteredPosts.find((post) => post.featured)?.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredPosts
                    .find((post) => post.featured)
                    ?.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <Button className="bg-gradient-to-r from-[#10b981] to-[#00d9ff] hover:from-[#059669] hover:to-[#00b8e6] text-white border-0">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <Card
                key={post.id}
                className={`group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-700 hover:scale-105 hover:rotate-1 cursor-pointer ${
                  visiblePosts.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* 3D Preview Card Effect */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-[#6366f1]/20 text-[#6366f1] rounded-full border border-[#6366f1]/30 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-white/60">
                    <span>{post.publishDate}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00d9ff] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-md border border-white/20 hover:scale-105 transition-transform duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-[#00d9ff]/30 text-[#00d9ff] hover:bg-[#00d9ff]/10 hover:border-[#00d9ff] transition-all duration-300 bg-transparent"
                  >
                    Read Article
                  </Button>
                </div>

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-[#00d9ff]/30 shadow-[0_0_30px_rgba(0,217,255,0.1)]"></div>
              </Card>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">Want to stay updated with my latest articles and insights?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#6366f1] to-[#10b981] hover:from-[#5855eb] hover:to-[#059669] text-white border-0 px-8 py-3"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  )
}
