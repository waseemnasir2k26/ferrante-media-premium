import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Calculator, Target, ArrowRight } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#process' },
  {
    name: 'Calculators',
    href: '#revenue-calculator',
    dropdown: [
      { name: 'Revenue Leak Calculator', href: '#revenue-calculator', icon: Phone, desc: 'See how much you\'re losing' },
      { name: 'ROI Calculator', href: '#roi-calculator', icon: Calculator, desc: 'Calculate your potential ROI' },
      { name: 'AI Readiness Audit', href: '#ai-audit', icon: Target, desc: 'Assess your automation potential' },
    ]
  },
  { name: 'Industries', href: '#industries' },
  { name: 'Results', href: '#testimonials' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)

    // Handle calculator tab switching
    if (href.includes('calculator') || href.includes('audit')) {
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        element.click()
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-dark-950/50 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300">
              <span className="text-white font-bold text-xl font-display">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg font-display tracking-tight leading-tight">
                Ferrante Media
              </span>
              <span className="text-[10px] text-primary-400 font-semibold uppercase tracking-[0.2em]">
                AI Automation
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-dark-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 min-w-[280px] shadow-2xl shadow-black/50">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="flex items-start gap-3 px-4 py-3 text-sm rounded-xl hover:bg-white/5 transition-colors duration-200 group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                              <item.icon className="w-5 h-5 text-primary-400" />
                            </div>
                            <div>
                              <p className="font-medium text-white group-hover:text-primary-300 transition-colors">{item.name}</p>
                              <p className="text-xs text-dark-400 mt-0.5">{item.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-dark-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">(123) 456-7890</span>
            </a>
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-dark-900 bg-gradient-to-r from-gold-400 to-gold-500 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              <span className="relative z-10">Book Free Call</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-white bg-dark-800/50 rounded-xl border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-1 bg-dark-900/50 rounded-2xl p-3 border border-white/5">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-dark-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-200"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4" />}
                    </a>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-dark-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-primary-400" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="#cta"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 text-dark-900 font-bold rounded-xl"
                >
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
