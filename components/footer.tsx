"use client"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent mb-4">
              MERN Stack Developer
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Passionate about creating scalable, performant web applications using modern technologies. Specializing in
              React, Node.js, MongoDB, and Express.js with 2+ years of professional experience.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#00d9ff]/20 rounded-full flex items-center justify-center hover:bg-[#00d9ff]/30 transition-colors duration-300 cursor-pointer">
                <span className="text-[#00d9ff]">📧</span>
              </div>
              <div className="w-10 h-10 bg-[#6366f1]/20 rounded-full flex items-center justify-center hover:bg-[#6366f1]/30 transition-colors duration-300 cursor-pointer">
                <span className="text-[#6366f1]">💼</span>
              </div>
              <div className="w-10 h-10 bg-[#10b981]/20 rounded-full flex items-center justify-center hover:bg-[#10b981]/30 transition-colors duration-300 cursor-pointer">
                <span className="text-[#10b981]">🐦</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-[#00d9ff] transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-[#00d9ff] transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-[#00d9ff] transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/70 hover:text-[#00d9ff] transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#00d9ff] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-white/70">Full-Stack Development</li>
              <li className="text-white/70">React Applications</li>
              <li className="text-white/70">Node.js APIs</li>
              <li className="text-white/70">Database Design</li>
              <li className="text-white/70">Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">© 2024 MERN Stack Developer. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-[#00d9ff] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#00d9ff] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-[#00d9ff] transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
