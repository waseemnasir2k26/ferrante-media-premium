import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar, TrendingUp, Users, CheckCircle2, Star, Sparkles } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Home Service Companies', sublabel: 'Trust Our Systems' },
  { value: '$10M+', label: 'Revenue Generated', sublabel: 'For Our Clients' },
  { value: '97%', label: 'Client Retention', sublabel: 'Year Over Year' },
  { value: '24/7', label: 'AI Never Sleeps', sublabel: 'Always Closing' },
]

const industries = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Landscaping', 'Solar']

const liveNotifications = [
  { icon: Phone, text: 'New lead captured', detail: 'HVAC Service - $4,500 job', time: 'Just now', color: 'green' },
  { icon: Calendar, text: 'Appointment booked', detail: 'Plumbing Repair - Tomorrow 10am', time: '2 min ago', color: 'primary' },
  { icon: TrendingUp, text: 'Deal closed', detail: 'Roof Replacement - $12,800', time: '5 min ago', color: 'gold' },
  { icon: Users, text: 'Follow-up sent', detail: 'AI nurturing 23 leads', time: '8 min ago', color: 'accent' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary-500 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-500 rounded-full blur-[140px]"
        />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Industry Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-semibold text-primary-400">
                #1 AI Automation for Home Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1] mb-6"
            >
              <span className="text-white">Stop Losing</span>
              <br />
              <span className="gradient-text">$50K+ Monthly</span>
              <br />
              <span className="text-white">To Missed Calls</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-dark-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We deploy <span className="text-white font-semibold">enterprise-grade AI systems</span> that
              capture every lead, book appointments 24/7, and turn your phone into a
              revenue-generating machine for{' '}
              <span className="text-primary-400 font-semibold">premium home service companies</span>.
            </motion.p>

            {/* Industry Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {industries.map((industry, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs font-semibold text-dark-300 bg-dark-800/50 border border-white/5 rounded-full hover:border-primary-500/30 hover:text-white transition-all cursor-default"
                >
                  {industry}
                </span>
              ))}
              <span className="px-3 py-1.5 text-xs font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
                + More
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
            >
              <a href="#cta" className="w-full sm:w-auto btn-gold group text-base sm:text-lg">
                <span>Get Your Free AI Audit</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#revenue-calculator" className="w-full sm:w-auto btn-secondary group">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Calculate Revenue Loss</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-dark-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Live in 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>ROI guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Live Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/10 to-primary-500/20 rounded-3xl blur-2xl" />

            {/* Dashboard Card */}
            <div className="relative bg-dark-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-dark-950/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-dark-400 font-medium">AI Command Center</span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 bg-green-500/10 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wide">Live</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {liveNotifications.map((notif, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-4 p-3 bg-dark-800/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      notif.color === 'green' ? 'bg-green-500/10' :
                      notif.color === 'gold' ? 'bg-gold-500/10' :
                      notif.color === 'accent' ? 'bg-accent-500/10' :
                      'bg-primary-500/10'
                    }`}>
                      <notif.icon className={`w-5 h-5 ${
                        notif.color === 'green' ? 'text-green-400' :
                        notif.color === 'gold' ? 'text-gold-400' :
                        notif.color === 'accent' ? 'text-accent-400' :
                        'text-primary-400'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{notif.text}</p>
                      <p className="text-xs text-dark-400 truncate">{notif.detail}</p>
                    </div>
                    <span className="text-[10px] text-dark-500 whitespace-nowrap">{notif.time}</span>
                  </motion.div>
                ))}
              </div>

              {/* Footer Stats */}
              <div className="grid grid-cols-3 border-t border-white/5 bg-dark-950/30">
                <div className="p-4 text-center border-r border-white/5">
                  <p className="text-xl font-bold text-white font-display">156</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wide">Leads Today</p>
                </div>
                <div className="p-4 text-center border-r border-white/5">
                  <p className="text-xl font-bold text-green-400 font-display">$47K</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wide">Pipeline</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-xl font-bold text-gold-400 font-display">94%</p>
                  <p className="text-[10px] text-dark-400 uppercase tracking-wide">Response Rate</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-4 -right-4"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex items-center gap-2 px-4 py-2 bg-dark-900 border border-gold-500/30 rounded-full shadow-lg shadow-gold-500/10"
              >
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gold-400">4.9/5 Rating</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-5 md:p-6 text-center hover:border-primary-500/20 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold font-display gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white font-medium mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-dark-500">
                  {stat.sublabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-dark-500 uppercase tracking-[0.2em]">Explore</span>
          <div className="w-5 h-8 rounded-full border border-dark-600 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-primary-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
