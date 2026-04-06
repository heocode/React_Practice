import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Check, Zap } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import ComingSoonModal from '../components/ComingSoonModal'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and personal sites.',
    cta: 'Get started',
    ctaTo: '/signup',
    highlight: false,
    features: [
      '1 project',
      'Up to 10 pages',
      'Basic components library',
      'Export to HTML/CSS',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    description: 'For professionals who need more power and flexibility.',
    cta: 'Start free trial',
    ctaTo: '/signup',
    highlight: true,
    badge: 'Most popular',
    features: [
      'Unlimited projects',
      'Unlimited pages',
      'Full component library',
      'Export to Next.js + Tailwind',
      'Custom domain',
      'AI-generated themes',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams that need advanced features and dedicated support.',
    cta: 'Contact sales',
    ctaTo: 'mailto:sales@reweb.so',
    highlight: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'SSO / SAML',
      'Custom component imports',
      'SLA & uptime guarantee',
      'Dedicated account manager',
      'Custom integrations',
    ],
  },
]

const faqItems = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. You can cancel your subscription at any time from your account settings. No questions asked.',
  },
  {
    q: 'Do you offer a free trial for Pro?',
    a: 'Yes, the Pro plan comes with a 14-day free trial. No credit card required.',
  },
  {
    q: 'What happens to my projects if I downgrade?',
    a: 'Your projects remain accessible in read-only mode. You can export them at any time.',
  },
  {
    q: 'Is there a student or non-profit discount?',
    a: "Yes! Reach out to us at hello@reweb.so and we'll set you up with a discount.",
  },
]

const btnClass = (highlight: boolean) =>
  `w-full text-center py-2.5 rounded-xl text-sm font-medium transition-colors mb-8 ${
    highlight
      ? 'bg-purple-500 hover:bg-purple-600 text-white'
      : 'border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300'
  }`

export default function PricingPage() {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [activeSlide, setActiveSlide] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Start on Pro (index 1)
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const card = el.children[1] as HTMLElement
    if (card) {
      el.scrollLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2
    }
  }, [])

  const handleScroll = useCallback(() => {
    const el = sliderRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement
      const cardCenter = c.offsetLeft + c.offsetWidth / 2
      const dist = Math.abs(center - cardCenter)
      if (dist < minDist) { minDist = dist; closest = i }
    })
    setActiveSlide(closest)
  }, [])

  const handlePlanClick = (
    e: React.MouseEvent,
    ctaTo: string,
  ) => {
    if (user && !ctaTo.startsWith('mailto')) {
      e.preventDefault()
      setShowModal(true)
    }
  }

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-24 min-h-screen flex flex-col">

      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}

      {/* Header */}
      <section className="py-4 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium mb-5">
            <Zap size={12} />
            Simple pricing
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-5">
            Build more, pay less
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="w-full max-w-6xl mx-auto px-6 py-8">
        {/* Mobile slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pt-4 pb-4 -mx-6 px-6 scrollbar-hide"
        >
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col snap-center shrink-0 w-[85vw] ${
                plan.highlight
                  ? 'border-purple-500/50 bg-purple-500/5 dark:bg-purple-500/8 shadow-xl shadow-purple-500/10'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">/{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 min-h-[2.5rem]">{plan.description}</p>
              </div>

              {plan.ctaTo.startsWith('mailto') ? (
                <a href={plan.ctaTo} className={btnClass(plan.highlight)}>
                  {plan.cta}
                </a>
              ) : (
                <Link
                  to={plan.ctaTo}
                  state={{ from: '/pricing' }}
                  onClick={e => handlePlanClick(e, plan.ctaTo)}
                  className={btnClass(plan.highlight)}
                >
                  {plan.cta}
                </Link>
              )}

              <ul className="space-y-3 my-auto">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check size={15} className="text-purple-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = sliderRef.current
                if (!el) return
                const card = el.children[i] as HTMLElement
                el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' })
              }}
              className={`rounded-full transition-all ${
                activeSlide === i
                  ? 'w-5 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-600'
              }`}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-purple-500/50 bg-purple-500/5 dark:bg-purple-500/8 shadow-xl shadow-purple-500/10'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">/{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 min-h-[2.5rem]">{plan.description}</p>
              </div>

              {plan.ctaTo.startsWith('mailto') ? (
                <a href={plan.ctaTo} className={btnClass(plan.highlight)}>
                  {plan.cta}
                </a>
              ) : (
                <Link
                  to={plan.ctaTo}
                  state={{ from: '/pricing' }}
                  onClick={e => handlePlanClick(e, plan.ctaTo)}
                  className={btnClass(plan.highlight)}
                >
                  {plan.cta}
                </Link>
              )}

              <ul className="space-y-3 my-auto">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <Check size={15} className="text-purple-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-100 dark:border-zinc-800 py-24">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqItems.map(item => (
              <div key={item.q} className="border-b border-zinc-100 dark:border-zinc-800 pb-6">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{item.q}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
