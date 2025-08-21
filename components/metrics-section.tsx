"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface Metric {
  id: number;
  value: number;
  label: string;
  suffix: string;
  icon: string;
  color: string;
  description: string;
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
];

export default function MetricsSection() {
  const [animatedValues, setAnimatedValues] = useState<{
    [key: number]: number;
  }>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Animate each metric counter
            metrics.forEach((metric) => {
              animateCounter(metric.id, metric.value);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounter = (id: number, targetValue: number) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      setAnimatedValues((prev) => ({
        ...prev,
        [id]: Math.floor(currentValue),
      }));
    }, duration / steps);
  };

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.05)_50%,transparent_75%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Fixed mobile padding */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-[#00d9ff] via-[#6366f1] to-[#10b981] bg-clip-text text-transparent leading-tight">
            Performance Metrics
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Numbers that speak for themselves - showcasing consistent delivery,
            quality, and client satisfaction in every project.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <Card
              key={metric.id}
              className={`group relative bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-md p-6 sm:p-8 text-center transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-lg hover:shadow-2xl ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* 3D Floating Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter drop-shadow-lg">
                  {metric.icon}
                </div>

                {/* Animated Counter */}
                <div className="mb-3 sm:mb-4">
                  <div
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                    style={{
                      color: metric.color,
                      textShadow: `0 0 20px ${metric.color}40, 0 0 40px ${metric.color}20`,
                    }}
                  >
                    {animatedValues[metric.id] || 0}
                    {metric.suffix}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00d9ff] transition-colors duration-300">
                    {metric.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {metric.description}
                </p>

                {/* Animated Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? "100%" : "0%",
                      backgroundColor: metric.color,
                      boxShadow: `0 0 10px ${metric.color}60, 0 0 20px ${metric.color}30`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Glowing Border Effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 30px ${metric.color}30, inset 0 0 30px ${metric.color}10`,
                  border: `1px solid ${metric.color}50`,
                }}
              ></div>

              {/* Enhanced Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"
                    style={{
                      backgroundColor: metric.color,
                      left: `${15 + i * 20}%`,
                      top: `${10 + i * 15}%`,
                      animationDelay: `${i * 150}ms`,
                      boxShadow: `0 0 6px ${metric.color}, 0 0 12px ${metric.color}60`,
                    }}
                  ></div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Stats - Enhanced */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { value: "40%", label: "Performance Boost", color: "#00d9ff" },
              { value: "95%", label: "On-Time Delivery", color: "#10b981" },
              { value: "20+", label: "Happy Clients", color: "#6366f1" },
              { value: "24/7", label: "Support Available", color: "#f59e0b" },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className="text-2xl sm:text-3xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 10px ${stat.color}40`,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-medium group-hover:text-white/80 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent rounded-full opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
