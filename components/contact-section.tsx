"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createContact } from "@/services/contactservice"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus.type) {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await createContact(formData)
      console.log("✅ Contact saved:", response)
      
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Message sent successfully! I\'ll get back to you soon.'
      })
      
      // Reset form data
      setFormData({ name: "", email: "", subject: "", message: "" })
      
    } catch (error) {
      console.error("❌ Failed to send message:", error)
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to send message. Please try again later or contact me directly.'
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d9ff] via-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next MERN stack project and create something amazing
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className={`bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 border border-white/10 backdrop-blur-md p-8 transition-all duration-700 hover:scale-105 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-2xl">📧</span>
              Send Me a Message
            </h3>

            {/* Status Message */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg border ${
                submitStatus.type === 'success' 
                  ? 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]' 
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              } transition-all duration-300`}>
                <div className="flex items-center gap-2">
                  <span>{submitStatus.type === 'success' ? '✅' : '❌'}</span>
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Floating Input Fields */}
              <div className="relative group">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-[#00d9ff] focus:ring-[#00d9ff]/20 transition-all duration-300 group-hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Name"
                />
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#00d9ff]/30 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-[#00d9ff] focus:ring-[#00d9ff]/20 transition-all duration-300 group-hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your Email"
                />
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#00d9ff]/30 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-[#00d9ff] focus:ring-[#00d9ff]/20 transition-all duration-300 group-hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Project Subject"
                />
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#00d9ff]/30 pointer-events-none"></div>
              </div>

              <div className="relative group">
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-[#00d9ff] focus:ring-[#00d9ff]/20 transition-all duration-300 group-hover:border-white/40 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#00d9ff]/30 pointer-events-none"></div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00d9ff] to-[#6366f1] hover:from-[#00b8e6] hover:to-[#5855eb] text-white border-0 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>

            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 border border-[#00d9ff]/30 shadow-[0_0_30px_rgba(0,217,255,0.1)] pointer-events-none"></div>
          </Card>

          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Contact Methods */}
            <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">📱</span>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80 hover:text-[#00d9ff] transition-colors duration-300">
                  <span>📧</span>
                  <span>ahmadumer6676@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 hover:text-[#00d9ff] transition-colors duration-300">
                  <span>📞</span>
                  <span>+92 302-5354605</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 hover:text-[#00d9ff] transition-colors duration-300">
                  <span>📍</span>
                  <span>Chowk Khumhara WALA Near Qaisarabad Street no 2,Multan</span>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 border border-white/10 backdrop-blur-md p-6 hover:scale-105 transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                Availability
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Status:</span>
                  <span className="px-3 py-1 bg-[#10b981]/20 text-[#10b981] rounded-full text-sm border border-[#10b981]/30">
                    Available for Projects
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Response Time:</span>
                  <span className="text-[#00d9ff]">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Time Zone:</span>
                  <span className="text-white/80">PST (UTC-8)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}