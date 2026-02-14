import { motion } from 'framer-motion'
import { Calendar, ArrowRight, CheckCircle, Sparkles, Clock, Shield, Zap } from 'lucide-react'

const benefits = [
  'Free 30-minute strategy session',
  'Custom automation blueprint',
  'ROI projection analysis',
  'No obligation whatsoever',
]

const features = [
  { icon: Clock, text: 'Setup in 7 days' },
  { icon: Shield, text: 'Money-back guarantee' },
  { icon: Zap, text: 'Results in 30 days' },
]

export default function CTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-dark-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-[2rem] p-[1px] pointer-events-none">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 opacity-30" />
              </div>

              {/* Sparkle decorations */}
              <div className="absolute top-8 right-8 text-primary-500/30">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="absolute bottom-8 left-8 text-accent-500/30">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-sm font-medium text-gold-400 mb-6">
                    <Calendar className="w-4 h-4" />
                    Limited Availability
                  </span>

                  <h2 className="heading-lg mb-6">
                    <span className="text-white">Ready To </span>
                    <span className="gradient-text">Automate & Scale</span>
                    <span className="text-white">?</span>
                  </h2>

                  <p className="text-lg text-dark-300 leading-relaxed mb-8">
                    Book your free discovery call and get a custom AI automation
                    blueprint tailored to your business. No fluff, no pressure —
                    just actionable strategies.
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-dark-200">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Features */}
                  <div className="flex flex-wrap gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full"
                      >
                        <feature.icon className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-dark-300">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - CTA Box */}
                <div className="relative">
                  <div className="bg-dark-950/80 border border-white/10 rounded-2xl p-8">
                    <div className="text-center mb-8">
                      <p className="text-sm text-dark-400 uppercase tracking-widest mb-2">
                        Book Your Free
                      </p>
                      <h3 className="text-2xl font-bold text-white font-display">
                        Discovery Call
                      </h3>
                    </div>

                    {/* Fake Calendar Preview */}
                    <div className="bg-dark-900/50 border border-white/5 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-white">Next Available</span>
                        <span className="text-sm text-primary-400">This Week</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {['Mon', 'Tue', 'Wed'].map((day, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg text-center ${
                              i === 0
                                ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white'
                                : 'bg-white/5 text-dark-400 hover:bg-white/10 cursor-pointer'
                            }`}
                          >
                            <p className="text-xs">{day}</p>
                            <p className="text-lg font-bold">{17 + i}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full text-lg group"
                    >
                      <span>Book My Free Call Now</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <p className="text-center text-xs text-dark-500 mt-4">
                      30-minute call • 100% Free • No obligation
                    </p>
                  </div>

                  {/* Social Proof */}
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-dark-900 flex items-center justify-center"
                        >
                          <span className="text-xs font-bold text-white">{i}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-dark-400">
                      <span className="text-white font-semibold">127 calls</span> booked this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-dark-400">
              <span className="text-gold-400 font-semibold">Limited spots available</span> — We only take on
              <span className="text-white font-semibold"> 5 new clients</span> per month to ensure
              quality results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
