"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent">
            AhmadDev
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white/80 hover:text-[#00d9ff] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-white/80 hover:text-[#00d9ff] transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-white/80 hover:text-[#00d9ff] transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-[#00d9ff] transition-colors"
            >
              Contact
            </a>
          </div>

          <Button className="bg-gradient-to-r from-[#00d9ff] to-[#6366f1] hover:from-[#00b8e6] hover:to-[#5855eb] text-white border-0">
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
