import { motion } from 'framer-motion'
import {
  Home,
  Sun,
  Leaf,
  Thermometer,
  Zap,
  Droplets,
  Sparkles,
  PaintBucket,
  Wrench,
  Shield,
  Bug,
  Waves,
  ArrowRight
} from 'lucide-react'

const industries = [
  {
    icon: Home,
    name: 'General Contractors',
    description: 'Remodelers & custom home builders'
  },
  {
    icon: Sun,
    name: 'Roofing & Solar',
    description: 'Installation and repair services'
  },
  {
    icon: Leaf,
    name: 'Landscaping',
    description: 'Landscaping & hardscaping pros'
  },
  {
    icon: Thermometer,
    name: 'HVAC',
    description: 'Heating, cooling & ventilation'
  },
  {
    icon: Zap,
    name: 'Electrical',
    description: 'Residential & commercial electrical'
  },
  {
    icon: Droplets,
    name: 'Plumbing',
    description: 'Plumbing & drain services'
  },
  {
    icon: Sparkles,
    name: 'Cleaning',
    description: 'Cleaning & restoration services'
  },
  {
    icon: PaintBucket,
    name: 'Painting',
    description: 'Interior & exterior painters'
  },
  {
    icon: Wrench,
    name: 'Appliance Repair',
    description: 'Home appliance specialists'
  },
  {
    icon: Shield,
    name: 'Security',
    description: 'Smart home & security systems'
  },
  {
    icon: Bug,
    name: 'Pest Control',
    description: 'Pest management services'
  },
  {
    icon: Waves,
    name: 'Pool & Spa',
    description: 'Pool maintenance & installation'
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[128px]" />
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
            Industries We Serve
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Built For </span>
            <span className="gradient-text">Premium Home Service</span>
            <span className="text-white"> Providers</span>
          </h2>
          <p className="subheading">
            Our AI automation systems are specifically designed for home service
            businesses that demand excellence.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full bg-dark-900/50 border border-white/5 rounded-2xl p-6 hover:border-primary-500/30 hover:bg-dark-900/80 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-colors duration-300">
                  <industry.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-dark-500">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-dark-900/50 border border-white/10 rounded-2xl">
            <p className="text-dark-300">
              <span className="text-white font-semibold">Don't see your industry?</span>
              {' '}We customize our automation for any home service business.
            </p>
            <a href="#cta" className="btn-primary text-sm py-3 group">
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
