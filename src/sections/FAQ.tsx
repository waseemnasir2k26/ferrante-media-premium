import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can I see results from AI automation?',
    answer: 'Most clients see measurable improvements within the first 30 days. This includes increased lead capture rates, faster response times, and more booked appointments. The full system optimization typically shows maximum ROI within 60-90 days.'
  },
  {
    question: 'Do I need technical knowledge to use the system?',
    answer: 'Absolutely not. We handle all the technical setup, integration, and ongoing optimization. You get a simple dashboard to monitor results, and our team provides full training and 24/7 support. If you can use a smartphone, you can use our system.'
  },
  {
    question: 'What makes Ferrante Media different from other agencies?',
    answer: 'We specialize exclusively in home service businesses and use GoHighLevel\'s enterprise platform. Our AI systems are custom-built for your industry, not generic templates. Plus, we guarantee results with our 30-day money-back promise.'
  },
  {
    question: 'How does the AI handle customer conversations?',
    answer: 'Our AI is trained specifically for home service conversations. It can answer common questions, qualify leads based on your criteria, overcome objections, and book appointments directly into your calendar. For complex situations, it seamlessly hands off to your team.'
  },
  {
    question: 'What\'s included in the setup process?',
    answer: 'Everything. We audit your current systems, design custom workflows, set up your CRM, create automated sequences, train your AI assistant, integrate with your existing tools, and provide comprehensive training for your team. Setup takes 7 days.'
  },
  {
    question: 'Can I integrate with my existing tools and software?',
    answer: 'Yes! Our platform integrates with 1000+ apps including QuickBooks, ServiceTitan, Housecall Pro, Google Calendar, Stripe, and more. We\'ll connect everything during setup at no extra cost.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[128px]" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-400 mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>
          <h2 className="heading-lg mb-6">
            <span className="text-white">Got </span>
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="subheading">
            Everything you need to know about our AI automation services.
            Can't find what you're looking for? Book a free call.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 rounded-2xl text-left transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-dark-900/80 border border-primary-500/30'
                    : 'bg-dark-900/50 border border-white/5 hover:border-white/10'
                }`}
              >
                <span className={`text-lg font-semibold pr-8 ${
                  openIndex === index ? 'text-white' : 'text-dark-200'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index
                    ? 'bg-primary-500 text-white'
                    : 'bg-white/5 text-dark-400'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-dark-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">
            Still have questions?
          </p>
          <a href="#cta" className="btn-primary">
            Book a Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
