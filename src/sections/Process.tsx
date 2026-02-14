import { motion } from 'framer-motion'
import { Settings, Target, Bot, Rocket, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Settings,
    title: 'AI System Installation',
    description: 'We analyze your business and deploy a customized AI automation system tailored to your specific needs and workflows.',
    details: [
      'Custom workflow design',
      'CRM integration setup',
      'AI training on your business',
      'Pipeline configuration'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    icon: Target,
    title: 'Lead Generation Activation',
    description: 'Our AI-powered funnels and traffic systems start capturing and qualifying high-intent leads around the clock.',
    details: [
      'Landing page deployment',
      'Lead capture forms',
      'Traffic system activation',
      'Conversion optimization'
    ],
    color: 'from-primary-500 to-blue-500'
  },
  {
    number: '03',
    icon: Bot,
    title: '24/7 AI Response Engine',
    description: 'Your AI assistant engages every lead instantly with personalized conversations, booking appointments automatically.',
    details: [
      'Instant lead response',
      'AI-powered conversations',
      'Automated follow-ups',
      'Smart appointment booking'
    ],
    color: 'from-accent-500 to-primary-500'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Booked Jobs Delivered',
    description: 'Qualified appointments land on your calendar while you focus on what you do best — delivering exceptional service.',
    details: [
      'Qualified appointments',
      'Calendar integration',
      'Customer notifications',
      'Revenue growth tracking'
    ],
    color: 'from-pink-500 to-accent-500'
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 mb-6">
            How It Works
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">From Setup To </span>
            <span className="gradient-text">Booked Revenue</span>
            <span className="text-white"> In 4 Steps</span>
          </h2>
          <p className="subheading">
            Our proven process takes you from overwhelmed business owner to
            automated revenue machine.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-pink-500/50 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number Circle (Center) */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-primary-500/30`}>
                    <span className="text-xl font-bold text-white font-display">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                  <div className={`${index % 2 === 1 ? '' : 'lg:ml-auto'} max-w-md`}>
                    {/* Mobile Number */}
                    <div className={`lg:hidden w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                      <span className="text-lg font-bold text-white font-display">{step.number}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 font-display">
                      {step.title}
                    </h3>
                    <p className="text-dark-400 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className={`space-y-3 ${index % 2 === 1 ? '' : 'lg:ml-auto'}`}>
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-3 ${index % 2 === 1 ? '' : 'lg:flex-row-reverse'}`}
                        >
                          <CheckCircle className={`w-5 h-5 text-primary-400 flex-shrink-0`} />
                          <span className="text-dark-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="relative bg-dark-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-dark-400 uppercase tracking-widest mb-2">Step {step.number}</p>
                        <p className="text-lg font-semibold text-white">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <a href="#cta" className="btn-gold group">
            <span>Start Your Automation Journey</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
