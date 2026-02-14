import { motion } from 'framer-motion'
import { AlertCircle, DollarSign, PhoneOff, Timer, UserX } from 'lucide-react'

const problems = [
  {
    icon: PhoneOff,
    title: 'Missed Calls Cost You $50K+/Month',
    description: 'While your team handles a job, 3 calls go to voicemail. Each missed call is a $2,500+ job going to your competitor down the street.',
    stat: '$62,500',
    statLabel: 'Avg monthly loss from missed calls',
    example: 'A single HVAC install = $4,800 lost'
  },
  {
    icon: Timer,
    title: '5-Minute Rule: Miss It, Lose It',
    description: 'HomeAdvisor data shows leads contacted within 5 minutes are 400% more likely to book. Your competition responds in 47 seconds.',
    stat: '23 min',
    statLabel: 'Your avg response time',
    example: 'Competitors using AI: 8 seconds'
  },
  {
    icon: UserX,
    title: 'No-Shows Destroy Your Schedule',
    description: 'Without automated reminders and confirmations, 15-25% of appointments never show. Empty trucks = zero revenue.',
    stat: '18%',
    statLabel: 'Appointments that no-show',
    example: 'Costs you $8K+ weekly'
  },
  {
    icon: DollarSign,
    title: 'Your Leads Are Dying on the Vine',
    description: 'Only 2% of leads buy on first contact. Without automated nurturing, you abandon the other 98% to competitors.',
    stat: '98%',
    statLabel: 'Leads never followed up',
    example: '$1.2M+ left on the table yearly'
  },
]

const painPoints = [
  'Customers complaining about slow responses',
  'Leads going cold because no one called back',
  'Team overwhelmed with admin work instead of selling',
  'Losing jobs to competitors who respond faster',
  'No idea which marketing channels actually work',
  'Reviews not being captured after great jobs',
]

export default function Problem() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-[150px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">The Hidden Revenue Leak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
            <span className="text-white">Your Home Service Business Is</span>
            <br />
            <span className="text-red-400">Hemorrhaging $500K+ Annually</span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto">
            Every day you operate without AI automation, money walks out the door to competitors
            who respond faster, follow up better, and never miss a call.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-dark-900/40 border border-red-500/10 rounded-2xl p-6 sm:p-8 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-bold text-red-400 font-display">
                        {problem.stat}
                      </div>
                      <div className="text-[10px] sm:text-xs text-dark-500 uppercase tracking-wide">
                        {problem.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-dark-400 leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  <div className="flex items-center gap-2 px-3 py-2 bg-red-500/5 border border-red-500/10 rounded-lg">
                    <span className="text-xs font-medium text-red-400">{problem.example}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pain Points List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-500/5 to-transparent border border-red-500/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-red-400" />
              </span>
              Does This Sound Familiar?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  <span className="text-sm text-dark-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#revenue-calculator"
            className="inline-flex items-center gap-3 px-6 py-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-xl transition-all group"
          >
            <DollarSign className="w-5 h-5 text-red-400" />
            <span className="text-white font-semibold">Calculate Your Exact Revenue Leak</span>
            <span className="text-red-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
