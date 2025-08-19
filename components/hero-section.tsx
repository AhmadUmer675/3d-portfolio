"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-[#00d9ff] to-[#6366f1] bg-clip-text text-transparent animate-pulse">
            MERN STACK
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
            DEVELOPER
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
          Crafting premium web experiences with{" "}
          <span className="text-[#00d9ff] font-semibold">React</span>,{" "}
          <span className="text-[#10b981] font-semibold">Node.js</span>, and{" "}
          <span className="text-[#6366f1] font-semibold">MongoDB</span>
        </p>

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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#00d9ff] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00d9ff] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
