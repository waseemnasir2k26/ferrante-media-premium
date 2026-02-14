import { motion } from 'framer-motion'
import { Bot, TrendingUp, CheckCircle, ArrowRight, Sparkles, Phone, MessageSquare, Calendar, Star, Shield, Rocket } from 'lucide-react'

const solutions = [
  {
    icon: Phone,
    title: 'AI Voice & Text Responder',
    description: 'Your 24/7 AI receptionist answers every call and text instantly. Books appointments, answers FAQs, and qualifies leads in real-time.',
    features: [
      'Answers in under 3 seconds',
      'Books directly into your calendar',
      'Handles objections like a pro',
      'Speaks your brand voice'
    ],
    result: '156% more appointments booked',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: MessageSquare,
    title: 'Automated Lead Nurturing',
    description: 'Multi-channel follow-up sequences that convert cold leads into paying customers through SMS, email, and ringless voicemail.',
    features: [
      '12-touch nurture sequences',
      'Personalized at scale',
      'Smart timing optimization',
      'Re-engagement campaigns'
    ],
    result: '340% increase in conversions',
    gradient: 'from-primary-500 to-accent-500'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling System',
    description: 'Eliminate no-shows with automated confirmations, reminders, and rescheduling. Maximize your service windows.',
    features: [
      'Automated confirmations',
      '3-point reminder system',
      'Self-service rescheduling',
      'Route optimization ready'
    ],
    result: '89% reduction in no-shows',
    gradient: 'from-accent-500 to-pink-500'
  },
]

const platformFeatures = [
  { icon: Bot, label: 'AI Conversations', desc: 'Natural language processing' },
  { icon: TrendingUp, label: 'Revenue Tracking', desc: 'Pipeline visibility' },
  { icon: Star, label: 'Review Automation', desc: 'Reputation management' },
  { icon: Shield, label: 'Enterprise Security', desc: 'SOC 2 compliant' },
]

export default function Solution() {
  return (
    <section id="solution" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">The Ferrante System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
            <span className="text-white">Turn Your Phone Into a</span>
            <br />
            <span className="gradient-text">Revenue-Generating Machine</span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto">
            Our enterprise-grade AI automation platform handles everything from first contact to booked job,
            so you can focus on delivering exceptional service.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative h-full bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-primary-500/20 transition-all duration-500 overflow-hidden">
                {/* Gradient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${solution.gradient} rounded-full blur-[80px] opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon + Result */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}>
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.gradient} bg-opacity-10`} style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <span className="text-xs font-bold text-green-400">{solution.result}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-dark-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-dark-900/50 border border-white/5 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-5 h-5 text-primary-400" />
            <h3 className="text-lg font-bold text-white">All-In-One Platform Features</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platformFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{feature.label}</p>
                  <p className="text-xs text-dark-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '<3 sec', label: 'Response Time', sublabel: 'vs 23 min industry avg' },
            { value: '300%', label: 'More Bookings', sublabel: 'Within first 90 days' },
            { value: '89%', label: 'Show-Up Rate', sublabel: 'vs 75% without AI' },
            { value: '24/7/365', label: 'Always On', sublabel: 'Never misses a lead' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-primary-500/20 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text font-display mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white font-medium mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-dark-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
          >
            See It In Action
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
