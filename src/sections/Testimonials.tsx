import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp, Users, DollarSign } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'Owner, Elite HVAC Services',
    image: 'MR',
    quote: 'Ferrante Media transformed our business. We went from missing 30% of calls to capturing every single lead. Our revenue increased by 47% in just 3 months.',
    stats: { value: '+47%', label: 'Revenue Growth' },
    rating: 5
  },
  {
    name: 'Sarah Thompson',
    role: 'CEO, Thompson Roofing',
    image: 'ST',
    quote: 'The AI appointment booking is a game-changer. We save 25 hours per week on admin tasks, and our close rate jumped from 22% to 61%.',
    stats: { value: '25hrs', label: 'Saved Weekly' },
    rating: 5
  },
  {
    name: 'David Chen',
    role: 'Founder, Premium Plumbing Co.',
    image: 'DC',
    quote: 'I was skeptical about AI automation, but the results speak for themselves. Our customer satisfaction scores are at an all-time high, and we doubled our monthly bookings.',
    stats: { value: '2x', label: 'More Bookings' },
    rating: 5
  },
  {
    name: 'Jennifer Martinez',
    role: 'Owner, Sparkling Clean Services',
    image: 'JM',
    quote: 'The missed call text-back feature alone paid for the entire system within the first month. We recovered over $50,000 in lost leads.',
    stats: { value: '$50K', label: 'Recovered' },
    rating: 5
  },
]

const results = [
  { icon: TrendingUp, value: '300%', label: 'Average ROI' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: DollarSign, value: '$10M+', label: 'Revenue Generated' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-dark-900/30">
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
            Success Stories
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Trusted By </span>
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="subheading">
            See how home service providers are transforming their businesses
            with our AI automation systems.
          </p>
        </motion.div>

        {/* Results Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-6 bg-dark-950/50 border border-white/5 rounded-2xl"
            >
              <result.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold gradient-text font-display mb-1">
                {result.value}
              </div>
              <div className="text-sm text-dark-400">{result.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-dark-950/50 border border-white/5 rounded-3xl p-8 hover:border-primary-500/20 transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-500/20 absolute top-8 right-8" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-dark-200 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{testimonial.image}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-dark-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold gradient-text font-display">
                      {testimonial.stats.value}
                    </p>
                    <p className="text-xs text-dark-400">{testimonial.stats.label}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {['Google Partner', 'Facebook Partner', 'HubSpot Certified', 'GoHighLevel Expert'].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30" />
              <span className="text-sm font-medium text-dark-300">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
