import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, Clock, CheckCircle2, Star } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Businesses Automated', icon: '🚀' },
  { value: '$10M+', label: 'Revenue Generated', icon: '💰' },
  { value: '97%', label: 'Client Retention', icon: '⭐' },
  { value: '24/7', label: 'AI Working For You', icon: '🤖' },
]

const badges = [
  { icon: Zap, text: 'AI-Powered' },
  { icon: Shield, text: 'Enterprise Grade' },
  { icon: Clock, text: '24/7 Automation' },
]

const floatingElements = [
  { text: '+47% Revenue', position: 'top-1/4 left-[10%]', delay: 0 },
  { text: '10x Faster', position: 'top-1/3 right-[8%]', delay: 0.5 },
  { text: '0 Missed Calls', position: 'bottom-1/3 left-[5%]', delay: 1 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[128px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_70%)]" />
      </div>

      {/* Floating Achievement Badges */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + item.delay, duration: 0.5 }}
          className={`absolute ${item.position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
            className="flex items-center gap-2 px-4 py-2 bg-dark-900/80 backdrop-blur-sm border border-primary-500/20 rounded-full shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">{item.text}</span>
          </motion.div>
        </motion.div>
      ))}

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 rounded-full mb-8"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gold-400">Rated 4.9/5 by 500+ Businesses</span>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <badge.icon className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-dark-200">{badge.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="heading-xl mb-6"
          >
            <span className="text-white">The Leader In</span>
            <br />
            <span className="gradient-text">AI-Powered Business</span>
            <br />
            <span className="text-white">Automation</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="subheading max-w-3xl mx-auto mb-10"
          >
            We build and deploy advanced AI-driven marketing and automation systems
            for <span className="text-white font-semibold">premium home service providers</span>.
            Automate your revenue pipeline, capture more leads, and scale effortlessly.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <a href="#cta" className="btn-gold group text-lg">
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#process" className="btn-secondary group">
              <Play className="w-5 h-5 mr-2 fill-current" />
              <span>Watch Demo</span>
            </a>
          </motion.div>

          {/* Micro Trust */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-dark-500 mb-16"
          >
            No credit card required • Setup in 7 days • 30-day money-back guarantee
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-dark-500 uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
