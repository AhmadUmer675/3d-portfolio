"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Circle Image in Center */}
        <div className="flex justify-center mb-8 mt-23">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#00d9ff] shadow-lg shadow-[#00d9ff]/40">
            <img
              src="/pics.jpg" // apni image ka path yahan dalna
              alt="Profile"
              className="w-3rem h-3rem object-cover"
            />
          </div>
        </div>

        {/* Headings */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent animate-pulse">
            MERN STACK
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            DEVELOPER
          </h2>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Crafting premium web experiences with{" "}
          <span className="text-[#00d9ff] font-semibold">React</span>,{" "}
          <span className="text-[#10b981] font-semibold">Node.js</span>, and{" "}
          <span className="text-[#6366f1] font-semibold">Postgresql</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00d9ff] mb-2">2+</div>
            <div className="text-white/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#6366f1] mb-2">15+</div>
            <div className="text-white/60">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#10b981] mb-2">100%</div>
            <div className="text-white/60">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
