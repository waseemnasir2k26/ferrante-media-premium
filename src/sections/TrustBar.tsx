import { motion } from 'framer-motion'

const partners = [
  { name: 'GoHighLevel', logo: 'GHL' },
  { name: 'Make.com', logo: 'MAKE' },
  { name: 'Zapier', logo: 'ZAPIER' },
  { name: 'OpenAI', logo: 'OPENAI' },
  { name: 'Twilio', logo: 'TWILIO' },
  { name: 'Stripe', logo: 'STRIPE' },
]

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-dark-400 uppercase tracking-widest">
            Powered By Industry-Leading Technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex items-center gap-2 px-6 py-3 bg-dark-900/50 border border-white/5 rounded-xl hover:border-primary-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-400">{partner.logo.slice(0, 2)}</span>
                </div>
                <span className="text-sm font-semibold text-dark-300 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-dark-950 flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white">{i}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-dark-300">
              <span className="text-white font-semibold">500+</span> businesses trust us
            </div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-gold-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-dark-300">
              <span className="text-white font-semibold">4.9/5</span> average rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
