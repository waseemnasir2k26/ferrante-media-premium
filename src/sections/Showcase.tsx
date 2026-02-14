import { motion } from 'framer-motion'
import { Play, MessageSquare, Calendar, BarChart3, Bell, Zap } from 'lucide-react'

const dashboardFeatures = [
  { icon: MessageSquare, label: 'AI Conversations', value: '2,847', change: '+23%' },
  { icon: Calendar, label: 'Appointments', value: '156', change: '+45%' },
  { icon: BarChart3, label: 'Revenue', value: '$127K', change: '+67%' },
  { icon: Bell, label: 'Hot Leads', value: '34', change: 'Active' },
]

export default function Showcase() {
  return (
    <section className="section-padding relative overflow-hidden bg-dark-900/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 mb-6">
            <Zap className="w-4 h-4" />
            See It In Action
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Your Business, </span>
            <span className="gradient-text">On Autopilot</span>
          </h2>
          <p className="subheading">
            A powerful command center that shows you exactly how your AI is
            capturing leads, booking appointments, and growing your revenue.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-[2rem] blur-2xl" />

          {/* Dashboard Card */}
          <div className="relative bg-dark-950 border border-white/10 rounded-[1.5rem] overflow-hidden shadow-2xl">
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-dark-900/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-dark-400">Ferrante AI Dashboard</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-green-400">AI Active</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="bg-dark-900/50 border border-white/5 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary-400" />
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        feature.change.includes('+')
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-primary-500/10 text-primary-400'
                      }`}>
                        {feature.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-white font-display mb-1">
                      {feature.value}
                    </p>
                    <p className="text-xs text-dark-400">{feature.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Conversation Preview */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Live Conversation */}
                <div className="bg-dark-900/50 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-white">Live AI Conversation</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">👤</span>
                      </div>
                      <div className="bg-dark-800 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]">
                        <p className="text-sm text-dark-200">Hi, I need a quote for HVAC repair</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%]">
                        <p className="text-sm text-white">Hi! I'd be happy to help you with that. Can you describe the issue you're experiencing?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">🤖</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">👤</span>
                      </div>
                      <div className="bg-dark-800 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%]">
                        <p className="text-sm text-dark-200">AC unit not cooling properly</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[80%]">
                        <p className="text-sm text-white">I understand. Let me book you a service appointment. I have availability tomorrow at 10am. Does that work for you?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">🤖</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-dark-900/50 border border-white/5 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-white">Recent Activity</span>
                    <span className="text-xs text-dark-400">Live</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { action: 'New lead captured', time: '2 min ago', icon: '🎯', color: 'text-green-400' },
                      { action: 'Appointment booked', time: '5 min ago', icon: '📅', color: 'text-primary-400' },
                      { action: 'Follow-up sent', time: '12 min ago', icon: '✉️', color: 'text-accent-400' },
                      { action: 'Review request sent', time: '23 min ago', icon: '⭐', color: 'text-gold-400' },
                      { action: 'Lead qualified', time: '45 min ago', icon: '✅', color: 'text-green-400' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{item.icon}</span>
                          <span className={`text-sm ${item.color}`}>{item.action}</span>
                        </div>
                        <span className="text-xs text-dark-500">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <Play className="w-4 h-4 text-white fill-current ml-0.5" />
            </div>
            <span className="text-white font-medium">Watch Full Demo</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
