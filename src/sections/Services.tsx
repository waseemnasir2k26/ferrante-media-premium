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
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'AI Conversational SMS',
    description: 'Two-way AI-powered conversations that qualify leads and book appointments automatically.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Intelligent calendar integration that books meetings when both parties are available.'
  },
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    description: 'Instantly respond to missed calls with personalized text messages to save every lead.'
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Drip campaigns and follow-up sequences that nurture leads while you focus on work.'
  },
  {
    icon: Bot,
    title: 'AI Sales Assistant',
    description: '24/7 AI assistant that answers questions, overcomes objections, and closes deals.'
  },
  {
    icon: Workflow,
    title: 'Pipeline Automation',
    description: 'Automated workflows that move leads through your sales process effortlessly.'
  },
  {
    icon: Star,
    title: 'Review Generation',
    description: 'Automated review requests that boost your reputation and attract more customers.'
  },
  {
    icon: RefreshCw,
    title: 'Customer Reactivation',
    description: 'Win back past customers with personalized re-engagement campaigns.'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Seamless payment collection integrated directly into your automation flows.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into your pipeline performance and ROI tracking.'
  },
  {
    icon: Users,
    title: 'CRM Management',
    description: 'Complete customer relationship management with full contact history.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get alerted on hot leads and important actions requiring your attention.'
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-dark-900/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 mb-6">
            Complete Automation Suite
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Everything You Need To </span>
            <span className="gradient-text">Automate & Scale</span>
          </h2>
          <p className="subheading">
            A complete AI-powered automation ecosystem built specifically for
            premium home service providers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full bg-dark-950/50 border border-white/5 rounded-2xl p-6 hover:border-primary-500/30 hover:bg-dark-900/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-400" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a href="#cta" className="btn-primary group">
            <span>See Full Feature List</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
