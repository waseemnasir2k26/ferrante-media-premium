import { motion } from 'framer-motion'
import { Bot, Zap, TrendingUp, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

const solutions = [
  {
    icon: Bot,
    title: 'AI-Powered Lead Capture',
    description: 'Never miss another lead. Our AI responds instantly 24/7, qualifying prospects and booking appointments while you sleep.',
    features: ['Instant response in seconds', 'Smart lead qualification', 'Automated appointment booking'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Automated Follow-Up Engine',
    description: 'Nurture every lead with personalized sequences via SMS, email, and voicemail drops. No prospect falls through the cracks.',
    features: ['Multi-channel outreach', 'Personalized messaging', 'Smart timing optimization'],
    gradient: 'from-primary-500 to-accent-500'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Pipeline Automation',
    description: 'Track, manage, and optimize every deal from first contact to closed won. See exactly whats working.',
    features: ['Visual pipeline management', 'Revenue forecasting', 'Performance analytics'],
    gradient: 'from-accent-500 to-pink-500'
  },
]

export default function Solution() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-400">The Solution</span>
          </div>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Put Your Business On </span>
            <span className="gradient-text">Auto-Pilot</span>
            <span className="text-white"> With Advanced AI</span>
          </h2>
          <p className="subheading">
            We automate the entire revenue pipeline so you can stay focused on
            what matters most — delivering exceptional service to your customers.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-dark-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
                {/* Gradient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${solution.gradient} rounded-full blur-[80px] opacity-10 group-hover:opacity-25 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10x', label: 'Faster Response' },
            { value: '300%', label: 'More Bookings' },
            { value: '50%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Always Working' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/5"
            >
              <div className="text-3xl font-bold gradient-text font-display mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-dark-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
