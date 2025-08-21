"use client";

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import TimelineSection from "@/components/timeline-section";
import MetricsSection from "@/components/metrics-section";
import TestimonialsSection from "@/components/testimonials-section";
// import BlogSection from "@/components/blog-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <MetricsSection />
      <ProjectsSection />
      <TestimonialsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
