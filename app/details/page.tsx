"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const images = [
    "/quantara.png",
    "/quantara1.png",
    "/quantara2.png",
  ];

  const features = [
    "Natural language business process analysis",
    "AI-powered solution recommendations",
    "Automated cost & ROI calculations", 
    "Professional report generation & export",
    "Interactive timeline & milestone visualization",
    "Multi-tier subscription management",
    "Technology stack recommendations",
    "Implementation roadmap creation"
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Postgresql", color: "bg-orange-500" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Shad-cn UI", color: "bg-indigo-500" },
    { name: "Node JS", color: "bg-indigo-500" },
    { name: "LangchainJS", color: "bg-indigo-500" },
    { name: "Puppeteer", color: "bg-indigo-500" },
  ];

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
          <Link href="/#projects">
            <Button
              variant="ghost"
              className="text-purple-300 hover:text-white hover:bg-purple-800/30 transition-all duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Images */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-2xl p-1 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="rounded-xl p-6 backdrop-blur-sm">
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
              <h3 className="text-xl font-semibold mb-4 text-purple-300">
                Tech Stack
              </h3>
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
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Title and Rating */}
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Quantis Bot
                </h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-slate-400 ml-2">
                  (4.9/5 from 127 reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                Quantra is a B2B SaaS platform that democratizes AI consulting
                by enabling businesses to automate and optimize their processes
                through natural language descriptions. Users simply describe
                their business challenges in plain English and receive instant
                AI-powered feasibility analyses, cost estimates, technology
                recommendations, and implementation roadmaps.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Features
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-center gap-3 transition-all duration-500 hover:translate-x-2 ${
                      isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
