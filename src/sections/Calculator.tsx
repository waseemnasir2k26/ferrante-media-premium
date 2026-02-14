import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator as CalcIcon,
  DollarSign,
  Phone,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

type CalculatorTab = 'revenue' | 'roi' | 'audit'

export default function Calculator() {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('revenue')

  // Revenue Leak Calculator State
  const [missedCalls, setMissedCalls] = useState(20)
  const [avgJobValue, setAvgJobValue] = useState(2500)
  const [closeRate, setCloseRate] = useState(30)

  // ROI Calculator State
  const [monthlyLeads, setMonthlyLeads] = useState(100)
  const [currentConversion, setCurrentConversion] = useState(15)
  const [avgTicket, setAvgTicket] = useState(3000)

  // AI Audit State
  const [auditAnswers, setAuditAnswers] = useState({
    missedCalls: 'sometimes',
    responseTime: '1-4hours',
    followUp: 'manual',
    reviews: 'rarely',
    scheduling: 'phone'
  })

  // Revenue Leak Calculations
  const monthlyLeadsLost = missedCalls * 4
  const potentialJobs = Math.round(monthlyLeadsLost * (closeRate / 100))
  const monthlyRevenueLost = potentialJobs * avgJobValue
  const annualRevenueLost = monthlyRevenueLost * 12
  const potentialRecovery = Math.round(annualRevenueLost * 0.65)

  // ROI Calculations
  const currentMonthlyRevenue = monthlyLeads * (currentConversion / 100) * avgTicket
  const improvedConversion = Math.min(currentConversion * 2.5, 60)
  const projectedMonthlyRevenue = monthlyLeads * (improvedConversion / 100) * avgTicket
  const monthlyIncrease = projectedMonthlyRevenue - currentMonthlyRevenue
  const annualIncrease = monthlyIncrease * 12
  const estimatedInvestment = 2000
  const roi = Math.round((annualIncrease / (estimatedInvestment * 12)) * 100)

  // Audit Score Calculation
  const auditScores: Record<string, number> = {
    missedCalls: auditAnswers.missedCalls === 'never' ? 100 : auditAnswers.missedCalls === 'rarely' ? 70 : auditAnswers.missedCalls === 'sometimes' ? 40 : 10,
    responseTime: auditAnswers.responseTime === 'instant' ? 100 : auditAnswers.responseTime === '1-4hours' ? 50 : auditAnswers.responseTime === 'sameday' ? 30 : 10,
    followUp: auditAnswers.followUp === 'automated' ? 100 : auditAnswers.followUp === 'partial' ? 50 : 20,
    reviews: auditAnswers.reviews === 'always' ? 100 : auditAnswers.reviews === 'sometimes' ? 50 : 20,
    scheduling: auditAnswers.scheduling === 'online' ? 100 : auditAnswers.scheduling === 'mixed' ? 60 : 30
  }
  const overallScore = Math.round(Object.values(auditScores).reduce((a, b) => a + b, 0) / 5)

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(num)
  }

  const tabs = [
    { id: 'revenue' as const, name: 'Revenue Leak', icon: AlertTriangle, color: 'text-red-400' },
    { id: 'roi' as const, name: 'ROI Calculator', icon: TrendingUp, color: 'text-green-400' },
    { id: 'audit' as const, name: 'AI Readiness', icon: Target, color: 'text-primary-400' },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 mb-6">
            <CalcIcon className="w-4 h-4" />
            Free Business Calculators
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Calculate Your </span>
            <span className="gradient-text">Growth Potential</span>
          </h2>
          <p className="subheading">
            Use our free tools to discover exactly how much revenue you're leaving on the table
            and what AI automation can do for your business.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={tab.id === 'revenue' ? 'revenue-calculator' : tab.id === 'roi' ? 'roi-calculator' : 'ai-audit'}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-dark-900 shadow-lg'
                  : 'bg-dark-800/50 text-dark-300 hover:bg-dark-800 hover:text-white border border-white/10'
              }`}
            >
              <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-dark-900' : tab.color}`} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Calculator Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Revenue Leak Calculator */}
            {activeTab === 'revenue' && (
              <motion.div
                key="revenue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Inputs */}
                <div className="bg-dark-900/80 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">Revenue Leak Calculator</h3>
                  <p className="text-dark-400 text-sm mb-8">See how much revenue you're losing from missed calls</p>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <Phone className="w-5 h-5 text-red-400" />
                          Missed Calls Per Week
                        </label>
                        <span className="text-3xl font-bold text-white">{missedCalls}</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="100"
                        value={missedCalls}
                        onChange={(e) => setMissedCalls(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer accent-red-500"
                        style={{
                          background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${(missedCalls - 5) / 95 * 100}%, #334155 ${(missedCalls - 5) / 95 * 100}%, #334155 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-dark-500 mt-2">
                        <span>5</span>
                        <span>100</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          Average Job Value
                        </label>
                        <span className="text-3xl font-bold text-white">{formatCurrency(avgJobValue)}</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="25000"
                        step="500"
                        value={avgJobValue}
                        onChange={(e) => setAvgJobValue(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #22c55e 0%, #22c55e ${(avgJobValue - 500) / 24500 * 100}%, #334155 ${(avgJobValue - 500) / 24500 * 100}%, #334155 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-dark-500 mt-2">
                        <span>$500</span>
                        <span>$25,000</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <TrendingUp className="w-5 h-5 text-primary-400" />
                          Close Rate
                        </label>
                        <span className="text-3xl font-bold text-white">{closeRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="70"
                        value={closeRate}
                        onChange={(e) => setCloseRate(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${(closeRate - 10) / 60 * 100}%, #334155 ${(closeRate - 10) / 60 * 100}%, #334155 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-dark-500 mt-2">
                        <span>10%</span>
                        <span>70%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-red-500/10 to-dark-900/80 backdrop-blur border border-red-500/20 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Your Revenue Leak</h3>

                  <div className="space-y-5">
                    <div className="bg-dark-950/50 rounded-xl p-5 border border-white/5">
                      <p className="text-sm text-dark-400 mb-1">Monthly Revenue Lost</p>
                      <p className="text-4xl font-bold text-red-400">{formatCurrency(monthlyRevenueLost)}</p>
                      <p className="text-sm text-dark-500 mt-1">{potentialJobs} jobs not booked per month</p>
                    </div>

                    <div className="bg-dark-950/50 rounded-xl p-5 border border-red-500/20">
                      <p className="text-sm text-dark-400 mb-1">Annual Revenue Lost</p>
                      <p className="text-5xl font-bold text-red-500">{formatCurrency(annualRevenueLost)}</p>
                    </div>

                    <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                      <p className="text-sm text-green-400 mb-1">Recoverable with AI Automation</p>
                      <p className="text-4xl font-bold text-green-400">+{formatCurrency(potentialRecovery)}</p>
                      <p className="text-sm text-dark-500 mt-1">Based on 65% lead recovery rate</p>
                    </div>
                  </div>

                  <a href="#cta" className="flex items-center justify-center gap-2 w-full mt-6 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl transition-all">
                    Stop Losing Revenue
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* ROI Calculator */}
            {activeTab === 'roi' && (
              <motion.div
                key="roi"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Inputs */}
                <div className="bg-dark-900/80 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">ROI Calculator</h3>
                  <p className="text-dark-400 text-sm mb-8">See your potential return on AI automation investment</p>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <Users className="w-5 h-5 text-primary-400" />
                          Monthly Leads
                        </label>
                        <span className="text-3xl font-bold text-white">{monthlyLeads}</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={monthlyLeads}
                        onChange={(e) => setMonthlyLeads(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${(monthlyLeads - 20) / 480 * 100}%, #334155 ${(monthlyLeads - 20) / 480 * 100}%, #334155 100%)`
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <Target className="w-5 h-5 text-yellow-400" />
                          Current Conversion Rate
                        </label>
                        <span className="text-3xl font-bold text-white">{currentConversion}%</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="40"
                        value={currentConversion}
                        onChange={(e) => setCurrentConversion(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #eab308 0%, #eab308 ${(currentConversion - 5) / 35 * 100}%, #334155 ${(currentConversion - 5) / 35 * 100}%, #334155 100%)`
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-2 text-white font-medium">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          Average Ticket
                        </label>
                        <span className="text-3xl font-bold text-white">{formatCurrency(avgTicket)}</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="20000"
                        step="500"
                        value={avgTicket}
                        onChange={(e) => setAvgTicket(parseInt(e.target.value))}
                        className="w-full h-3 bg-dark-700 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #22c55e 0%, #22c55e ${(avgTicket - 500) / 19500 * 100}%, #334155 ${(avgTicket - 500) / 19500 * 100}%, #334155 100%)`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-green-500/10 to-dark-900/80 backdrop-blur border border-green-500/20 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Your ROI Projection</h3>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-dark-950/50 rounded-xl p-4 border border-white/5">
                        <p className="text-xs text-dark-400 mb-1">Current Monthly</p>
                        <p className="text-2xl font-bold text-white">{formatCurrency(currentMonthlyRevenue)}</p>
                      </div>
                      <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                        <p className="text-xs text-green-400 mb-1">Projected Monthly</p>
                        <p className="text-2xl font-bold text-green-400">{formatCurrency(projectedMonthlyRevenue)}</p>
                      </div>
                    </div>

                    <div className="bg-dark-950/50 rounded-xl p-5 border border-white/5">
                      <p className="text-sm text-dark-400 mb-1">Monthly Revenue Increase</p>
                      <p className="text-4xl font-bold text-green-400">+{formatCurrency(monthlyIncrease)}</p>
                    </div>

                    <div className="bg-green-500/10 rounded-xl p-5 border border-green-500/20">
                      <p className="text-sm text-green-400 mb-1">Annual Revenue Increase</p>
                      <p className="text-5xl font-bold text-green-500">+{formatCurrency(annualIncrease)}</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/20 to-primary-500/20 rounded-xl p-5 border border-green-500/30">
                      <p className="text-sm text-white mb-1">Projected ROI</p>
                      <p className="text-5xl font-bold gradient-text">{roi}%</p>
                    </div>
                  </div>

                  <a href="#cta" className="flex items-center justify-center gap-2 w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all">
                    Get My Custom ROI Analysis
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            )}

            {/* AI Readiness Audit */}
            {activeTab === 'audit' && (
              <motion.div
                key="audit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Questions */}
                <div className="bg-dark-900/80 backdrop-blur border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-2">AI Readiness Audit</h3>
                  <p className="text-dark-400 text-sm mb-8">Answer 5 quick questions to assess your automation potential</p>

                  <div className="space-y-6">
                    {/* Question 1 */}
                    <div>
                      <label className="block text-white font-medium mb-3">How often do you miss customer calls?</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'never', label: 'Never' },
                          { value: 'rarely', label: 'Rarely' },
                          { value: 'sometimes', label: 'Sometimes' },
                          { value: 'often', label: 'Often' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAuditAnswers({ ...auditAnswers, missedCalls: opt.value })}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              auditAnswers.missedCalls === opt.value
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 2 */}
                    <div>
                      <label className="block text-white font-medium mb-3">Average response time to new leads?</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { value: 'instant', label: 'Under 5 min' },
                          { value: '1-4hours', label: '1-4 hours' },
                          { value: 'sameday', label: 'Same day' },
                          { value: 'nextday', label: 'Next day+' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAuditAnswers({ ...auditAnswers, responseTime: opt.value })}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              auditAnswers.responseTime === opt.value
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 3 */}
                    <div>
                      <label className="block text-white font-medium mb-3">How do you handle follow-ups?</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'automated', label: 'Automated' },
                          { value: 'partial', label: 'Partial' },
                          { value: 'manual', label: 'Manual' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAuditAnswers({ ...auditAnswers, followUp: opt.value })}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              auditAnswers.followUp === opt.value
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 4 */}
                    <div>
                      <label className="block text-white font-medium mb-3">Do you ask for reviews after jobs?</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'always', label: 'Always' },
                          { value: 'sometimes', label: 'Sometimes' },
                          { value: 'rarely', label: 'Rarely' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAuditAnswers({ ...auditAnswers, reviews: opt.value })}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              auditAnswers.reviews === opt.value
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 5 */}
                    <div>
                      <label className="block text-white font-medium mb-3">How do customers book appointments?</label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { value: 'online', label: 'Online' },
                          { value: 'mixed', label: 'Mixed' },
                          { value: 'phone', label: 'Phone only' },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setAuditAnswers({ ...auditAnswers, scheduling: opt.value })}
                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                              auditAnswers.scheduling === opt.value
                                ? 'bg-primary-500 text-white'
                                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-primary-500/10 to-dark-900/80 backdrop-blur border border-primary-500/20 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Your AI Readiness Score</h3>

                  {/* Score Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          className="text-dark-700"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="url(#gradient)"
                          strokeWidth="12"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={553}
                          strokeDashoffset={553 - (553 * overallScore) / 100}
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#d946ef" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-white">{overallScore}</span>
                        <span className="text-dark-400 text-sm">out of 100</span>
                      </div>
                    </div>
                  </div>

                  {/* Score Breakdown */}
                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Call Handling', score: auditScores.missedCalls },
                      { label: 'Response Time', score: auditScores.responseTime },
                      { label: 'Follow-up System', score: auditScores.followUp },
                      { label: 'Review Collection', score: auditScores.reviews },
                      { label: 'Booking System', score: auditScores.scheduling },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-sm text-dark-400 w-32">{item.label}</span>
                        <div className="flex-1 h-2 bg-dark-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${item.score >= 70 ? 'text-green-400' : item.score >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {item.score}%
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Recommendation */}
                  <div className={`rounded-xl p-4 mb-6 ${
                    overallScore >= 70 ? 'bg-green-500/10 border border-green-500/20' :
                    overallScore >= 40 ? 'bg-yellow-500/10 border border-yellow-500/20' :
                    'bg-red-500/10 border border-red-500/20'
                  }`}>
                    <div className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 ${
                        overallScore >= 70 ? 'text-green-400' :
                        overallScore >= 40 ? 'text-yellow-400' : 'text-red-400'
                      }`} />
                      <div>
                        <p className="font-medium text-white">
                          {overallScore >= 70 ? 'Good Foundation' : overallScore >= 40 ? 'Room for Improvement' : 'High Priority'}
                        </p>
                        <p className="text-sm text-dark-400 mt-1">
                          {overallScore >= 70
                            ? 'Your business has solid basics. AI automation can take you to the next level.'
                            : overallScore >= 40
                            ? 'You\'re leaving money on the table. AI automation could significantly boost revenue.'
                            : 'Your business is losing significant revenue. Immediate automation is recommended.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a href="#cta" className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-bold rounded-xl transition-all">
                    Get My Full Assessment
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
