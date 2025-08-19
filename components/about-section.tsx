import { motion } from "framer-motion";
import { Code, Coffee, Globe, Heart, Lightbulb, Rocket } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Code, label: "Lines of Code", value: "500K+" },
    { icon: Coffee, label: "Cups of Coffee", value: "2,847" },
    { icon: Globe, label: "Projects Deployed", value: "150+" },
    { icon: Heart, label: "Happy Clients", value: "98%" },
  ];

  const interests = [
    {
      icon: Rocket,
      title: "Space Technology",
      desc: "Fascinated by SpaceX missions and Mars colonization",
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      desc: "Exploring machine learning and neural networks",
    },
    {
      icon: Globe,
      title: "Open Source",
      desc: "Contributing to community projects and libraries",
    },
    {
      icon: Coffee,
      title: "Coffee Brewing",
      desc: "Perfecting the art of pour-over coffee",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with a love for creating innovative
            digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started my coding journey 5 years ago with a simple "Hello
                World" and never looked back. What began as curiosity evolved
                into a passion for building scalable, user-centric applications
                that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Specialized in the MERN stack, I've had the privilege of working
                with startups and enterprises, helping them transform ideas into
                powerful digital solutions. My approach combines technical
                excellence with creative problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech
                trends, contributing to open-source projects, or experimenting
                with new frameworks and tools that push the boundaries of web
                development.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center group hover:border-blue-500/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interests & Passions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Beyond Code
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <interest.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {interest.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {interest.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
              My Philosophy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed italic">
              "Great code is not just about functionality—it's about creating
              experiences that inspire, empower, and connect people. Every line
              of code is an opportunity to make someone's day better."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
