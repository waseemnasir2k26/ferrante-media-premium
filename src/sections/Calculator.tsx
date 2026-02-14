import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator as CalcIcon, DollarSign, Phone, TrendingUp, ArrowRight } from 'lucide-react'

export default function Calculator() {
  const [missedCalls, setMissedCalls] = useState(20)
  const [avgJobValue, setAvgJobValue] = useState(2500)
  const [closeRate, setCloseRate] = useState(30)

  // Calculations
  const monthlyLeadsLost = missedCalls * 4 // per month
  const potentialJobs = Math.round(monthlyLeadsLost * (closeRate / 100))
  const monthlyRevenueLost = potentialJobs * avgJobValue
  const annualRevenueLost = monthlyRevenueLost * 12
  const recoveryRate = 0.65 // 65% recovery with automation
  const potentialRecovery = Math.round(annualRevenueLost * recoveryRate)

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <section id="calculator" className="section-padding relative overflow-hidden bg-dark-900/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[128px]" />
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
          <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-sm font-medium text-gold-400 mb-6">
            <CalcIcon className="w-4 h-4 inline mr-2" />
            Revenue Leak Calculator
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Discover How Much </span>
            <span className="text-gold-400">Revenue You're Losing</span>
          </h2>
          <p className="subheading">
            Use our calculator to see the real cost of missed calls and manual
            processes in your business.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Calculator Inputs */}
            <div className="bg-dark-950/50 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                Enter Your Numbers
              </h3>

              <div className="space-y-8">
                {/* Missed Calls */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-dark-300">
                      <Phone className="w-4 h-4 text-primary-400" />
                      Missed Calls Per Week
                    </label>
                    <span className="text-2xl font-bold text-white font-display">{missedCalls}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary-500 [&::-webkit-slider-thumb]:to-accent-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                </div>

                {/* Average Job Value */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-dark-300">
                      <DollarSign className="w-4 h-4 text-primary-400" />
                      Average Job Value
                    </label>
                    <span className="text-2xl font-bold text-white font-display">{formatCurrency(avgJobValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="500"
                    value={avgJobValue}
                    onChange={(e) => setAvgJobValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary-500 [&::-webkit-slider-thumb]:to-accent-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                </div>

                {/* Close Rate */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="flex items-center gap-2 text-dark-300">
                      <TrendingUp className="w-4 h-4 text-primary-400" />
                      Typical Close Rate
                    </label>
                    <span className="text-2xl font-bold text-white font-display">{closeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    value={closeRate}
                    onChange={(e) => setCloseRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-primary-500 [&::-webkit-slider-thumb]:to-accent-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-gold-500/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 font-display">
                Your Revenue Leak
              </h3>

              <div className="space-y-6">
                {/* Monthly Lost */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                  <p className="text-sm text-red-400 uppercase tracking-widest mb-2">
                    You're Losing Monthly
                  </p>
                  <p className="text-4xl font-bold text-red-400 font-display">
                    {formatCurrency(monthlyRevenueLost)}
                  </p>
                  <p className="text-sm text-dark-400 mt-2">
                    {potentialJobs} potential jobs not booked
                  </p>
                </div>

                {/* Annual Lost */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                  <p className="text-sm text-red-400 uppercase tracking-widest mb-2">
                    Annual Revenue Lost
                  </p>
                  <p className="text-5xl font-bold text-red-400 font-display">
                    {formatCurrency(annualRevenueLost)}
                  </p>
                </div>

                {/* Potential Recovery */}
                <div className="bg-primary-500/10 border border-primary-500/20 rounded-2xl p-6">
                  <p className="text-sm text-primary-400 uppercase tracking-widest mb-2">
                    Potential Recovery with AI
                  </p>
                  <p className="text-4xl font-bold gradient-text font-display">
                    +{formatCurrency(potentialRecovery)}
                  </p>
                  <p className="text-sm text-dark-400 mt-2">
                    Based on 65% lead recovery rate
                  </p>
                </div>
              </div>

              <a href="#cta" className="btn-gold w-full mt-8 group">
                <span>Stop The Leak Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
