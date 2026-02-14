import { motion } from 'framer-motion'
import {
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  BarChart3,
  Users,
  Star,
  Bell,
  Workflow,
  Bot,
  CreditCard,
  RefreshCw,
  ArrowRight,
  Wrench,
  Layers
} from 'lucide-react'

const coreServices = [
  {
    icon: Phone,
    title: 'AI Voice Agent',
    description: 'Your 24/7 AI receptionist answers calls, qualifies leads, and books appointments instantly.',
    tag: 'Most Popular',
    color: 'green'
  },
  {
    icon: MessageSquare,
    title: 'AI SMS Responder',
    description: 'Two-way AI conversations via text that handle inquiries and schedule jobs automatically.',
    tag: 'High Impact',
    color: 'primary'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated booking with confirmations, reminders, and no-show prevention built in.',
    tag: 'Essential',
    color: 'accent'
  },
]

const automationFeatures = [
  {
    icon: Bot,
    title: 'AI Sales Assistant',
    description: 'Handles objections, answers FAQs, and closes deals 24/7.'
  },
  {
    icon: Workflow,
    title: 'Pipeline Automation',
    description: 'Moves leads through your sales process automatically.'
  },
  {
    icon: Mail,
    title: 'Email Sequences',
    description: 'Drip campaigns that nurture leads while you work.'
  },
  {
    icon: Star,
    title: 'Review Generation',
    description: 'Automated 5-star review requests after every job.'
  },
  {
    icon: RefreshCw,
    title: 'Customer Reactivation',
    description: 'Win back past customers with re-engagement campaigns.'
  },
  {
    icon: Bell,
    title: 'Hot Lead Alerts',
    description: 'Instant notifications when high-value leads come in.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and ROI tracking for every channel.'
  },
  {
    icon: Users,
    title: 'Full CRM System',
    description: 'Complete customer management with history tracking.'
  },
  {
    icon: CreditCard,
    title: 'Payment Collection',
    description: 'Collect deposits and payments through automation.'
  },
]

const industries = [
  'HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Landscaping', 'Solar', 'Painting', 'Pest Control'
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-dark-900/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-semibold text-primary-400 uppercase tracking-wide">Complete Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
            <span className="text-white">Built Specifically for</span>
            <br />
            <span className="gradient-text">Home Service Domination</span>
          </h2>
          <p className="text-lg sm:text-xl text-dark-300 max-w-3xl mx-auto">
            Every tool, integration, and automation designed for HVAC, plumbing, roofing,
            and trade professionals who want to scale.
          </p>
        </motion.div>

        {/* Industry Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {industries.map((industry, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-xs font-medium text-dark-400 bg-dark-800/50 border border-white/5 rounded-full"
            >
              {industry}
            </span>
          ))}
        </motion.div>

        {/* Core Services - Featured */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-dark-900/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      service.color === 'green' ? 'bg-green-500/10' :
                      service.color === 'accent' ? 'bg-accent-500/10' :
                      'bg-primary-500/10'
                    }`}>
                      <service.icon className={`w-7 h-7 ${
                        service.color === 'green' ? 'text-green-400' :
                        service.color === 'accent' ? 'text-accent-400' :
                        'text-primary-400'
                      }`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.color === 'green' ? 'bg-green-500/10 text-green-400' :
                      service.color === 'accent' ? 'bg-accent-500/10 text-accent-400' :
                      'bg-primary-500/10 text-primary-400'
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-dark-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-dark-900/40 border border-white/5 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-5 h-5 text-primary-400" />
            <h3 className="text-lg font-bold text-white">Full Automation Toolkit</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-dark-800/30 border border-white/5 rounded-xl hover:border-primary-500/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                  <p className="text-xs text-dark-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#cta" className="btn-gold group">
            <span>Get Your Custom Demo</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#roi-calculator" className="btn-secondary group">
            <BarChart3 className="w-5 h-5 mr-2" />
            <span>Calculate Your ROI</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
