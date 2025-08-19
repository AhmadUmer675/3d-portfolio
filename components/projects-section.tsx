"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantara",
    description:
      "Quantra is a B2B SaaS platform that democratizes AI consulting by enabling businesses to automate and optimize their processes through natural language descriptions. Users simply describe their business challenges in plain English and receive instant AI-powered feasibility analyses, cost estimates, technology recommendations, and implementation roadmaps.",
    image: "/quantara.png",
    technologies: ["React", "Node.js", "Postgresql", "Express", "Redux"],
    liveUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Summariz Ai",
    description:
      "Quantra is a B2B SaaS platform that democratizes AI consulting by enabling businesses to automate and optimize their processes through natural language descriptions. Users simply describe their business challenges in plain English and receive instant AI-powered feasibility analyses, cost estimates, technology recommendations, and implementation roadmaps.",
    image: "/quantara.png",
    technologies: [
      "React",
      "Node.js",
      "Postgresql",
      "Langchain Js",
      "JWT",
      "RAG",
      "Express"
    ],
    liveUrl: "https://social-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/username/social-dashboard",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Patient Agent",
    description:
      "Quantra is a B2B SaaS platform that democratizes AI consulting by enabling businesses to automate and optimize their processes through natural language descriptions. Users simply describe their business challenges in plain English and receive instant AI-powered feasibility analyses, cost estimates, technology recommendations, and implementation roadmaps.",
    image: "/quantara.png",
    technologies: [
      "React",
      "Express",
      "Postgresql",
      "Langgraph",
      "Tailwind",
      "NestJs",
    ],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    category: "Full Stack",
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["All", "Full Stack", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d9ff] via-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative MERN stack applications with modern design
            patterns, scalable architecture, and cutting-edge technologies.
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
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card
                className={`group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 ${
                  hoveredProject === project.id
                    ? "shadow-2xl shadow-[#00d9ff]/20"
                    : ""
                }`}
              >
                {/* 3D Tilt Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#00d9ff]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Action Buttons */}
                  <div
                    className={`absolute top-4 right-4 flex gap-2 transform transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                  >
                    <Button
                      size="sm"
                      className="bg-[#00d9ff]/90 hover:bg-[#00d9ff] text-black border-0 backdrop-blur-sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-medium bg-[#6366f1]/20 text-[#6366f1] rounded-full border border-[#6366f1]/30">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
                          tech === "React"
                            ? "bg-[#61dafb]/20 text-[#61dafb] border border-[#61dafb]/30"
                            : tech === "Node.js"
                            ? "bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30"
                            : tech === "MongoDB"
                            ? "bg-[#47a248]/20 text-[#47a248] border border-[#47a248]/30"
                            : "bg-white/10 text-white/80 border border-white/20"
                        } hover:scale-105`}
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glowing Border Effect */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "shadow-[0_0_30px_rgba(0,217,255,0.3)] border border-[#00d9ff]/50"
                      : ""
                  }`}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#6366f1] to-[#10b981] hover:from-[#5855eb] hover:to-[#059669] text-white border-0 px-8 py-3"
          >
            Start a Project
          </Button>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
