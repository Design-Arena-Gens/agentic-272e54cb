'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: "AI-Powered",
      description: "Built with cutting-edge artificial intelligence",
      icon: "🤖",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Lightning Fast",
      description: "Optimized for maximum performance",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Modern Design",
      description: "Beautiful, responsive interfaces",
      icon: "✨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Secure",
      description: "Enterprise-grade security built-in",
      icon: "🔒",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalable",
      description: "Grows with your needs",
      icon: "📈",
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Real-time",
      description: "Instant updates and interactions",
      icon: "⚡",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AGENTIC
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The Future of Web Applications
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="glass glow px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-transform">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className={`glass p-8 rounded-2xl cursor-pointer transition-all ${
                activeCard === index ? 'glow' : ''
              }`}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
              <div className={`h-1 w-full bg-gradient-to-r ${feature.color} rounded-full mt-4`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="glass p-12 rounded-3xl text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "<100ms", label: "Response Time" },
              { value: "1M+", label: "Active Users" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1, type: "spring" }}
              >
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-300 text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-white">Interactive Experience</h2>
          <div className="glass p-12 rounded-3xl">
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p className="text-gray-300 mt-8 text-xl">Watch the magic happen in real-time</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-20 text-center text-gray-400"
        >
          <p className="text-lg">Built with Next.js, React, Tailwind CSS & Framer Motion</p>
          <p className="mt-2">© 2025 Agentic. All rights reserved.</p>
        </motion.footer>
      </div>
    </main>
  );
}
