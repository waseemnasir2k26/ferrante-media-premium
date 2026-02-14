import { motion } from 'framer-motion'
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Process', href: '#process' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#cta' },
  ],
  services: [
    { name: 'AI Automation', href: '#services' },
    { name: 'Lead Generation', href: '#services' },
    { name: 'CRM Setup', href: '#services' },
    { name: 'Revenue Optimization', href: '#services' },
  ],
  resources: [
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'Industries', href: '#industries' },
    { name: 'Blog', href: '#' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-8 bg-dark-950 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-2xl font-display">F</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-display">
                  Ferrante Media
                </span>
                <p className="text-xs text-primary-400 uppercase tracking-widest">
                  AI Automation
                </p>
              </div>
            </a>
            <p className="text-dark-400 leading-relaxed mb-6 max-w-md">
              The leader in AI-powered business automation for premium home service
              providers. We help you automate, scale, and grow effortlessly.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@ferrantemedia.com" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-primary-400" />
                hello@ferrantemedia.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-dark-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-primary-400" />
                (123) 456-7890
              </a>
              <div className="flex items-center gap-3 text-dark-400">
                <MapPin className="w-5 h-5 text-primary-400" />
                United States
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-dark-500 text-sm">
              © {new Date().getFullYear()} Ferrante Media. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-primary-500/30 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-dark-400" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-dark-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30 z-50"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  )
}
