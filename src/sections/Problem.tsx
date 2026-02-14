import { motion } from 'framer-motion'
import { Phone, Clock, Users, TrendingDown, AlertCircle, XCircle } from 'lucide-react'

const problems = [
  {
    icon: Phone,
    title: 'Missed Calls = Lost Revenue',
    description: 'Every missed call is a customer going to your competitor. Studies show 85% of callers wont call back.',
    stat: '$1.2M',
    statLabel: 'Avg revenue lost annually'
  },
  {
    icon: Clock,
    title: 'Manual Follow-ups Drain Time',
    description: 'Your team spends hours on repetitive tasks instead of closing deals and delivering great service.',
    stat: '40hrs',
    statLabel: 'Wasted per week on admin'
  },
  {
    icon: Users,
    title: 'Lead Response Time Kills Sales',
    description: 'Responding in 5 minutes vs 30 minutes can increase conversion rates by 400%. Speed wins.',
    stat: '78%',
    statLabel: 'Leads go cold in 1 hour'
  },
  {
    icon: TrendingDown,
    title: 'Inconsistent Customer Experience',
    description: 'Without automation, quality varies. Some customers get VIP treatment, others slip through the cracks.',
    stat: '67%',
    statLabel: 'Customers churn from poor follow-up'
  },
]

export default function Problem() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[128px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">The Problem</span>
          </div>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Your Business Is </span>
            <span className="text-red-400">Bleeding Revenue</span>
            <span className="text-white"> Every Day</span>
          </h2>
          <p className="subheading">
            While you focus on delivering excellent service, your business is losing
            customers to slow response times, missed opportunities, and manual processes.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-dark-900/30 border border-red-500/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
                      <problem.icon className="w-7 h-7 text-red-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400 font-display">
                        {problem.stat}
                      </div>
                      <div className="text-xs text-dark-400">
                        {problem.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-dark-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-dark-900/50 border border-white/10 rounded-2xl">
            <XCircle className="w-6 h-6 text-red-400" />
            <p className="text-dark-300">
              <span className="text-white font-semibold">The harsh reality:</span> Businesses without AI automation
              will become obsolete within 5 years.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
