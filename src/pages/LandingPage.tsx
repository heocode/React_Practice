import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus, Minus, Zap, Code2, Layout, Sparkles } from 'lucide-react'

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    text: 'It practically solves every issue I have with Webflow and Framer. This is so much easier to use as a developer!',
    name: 'Jaiden Lee',
    handle: '@buildjaiden',
  },
  {
    text: 'This looks really freaking cool!!',
    name: 'James Q Quick',
    handle: '@jamesqquick',
  },
  {
    text: 'Absolutely love Reweb! Such a game-changer for building beautiful landing pages effortlessly.',
    name: 'Wayne',
    handle: '@wayne_dev',
  },
  {
    text: 'Amazing.',
    name: 'shadcn',
    handle: '@shadcn',
  },
  {
    text: 'This is awesome. Better than Framer/Wordpress as you can take the code and continue working on it instantly yourself.',
    name: 'soumya dot dev',
    handle: '@geekysrm',
  },
  {
    text: 'This is super cool! Very easy to use, and better than trying to mock things up in Figma.',
    name: 'Mike Knapp',
    handle: '@mikeee',
  },
  {
    text: 'I really have been missing this product for years. It feels like a much more natural way of working.',
    name: 'Ninjanordbo',
    handle: '@ninjanordbo',
  },
  {
    text: 'This is so tastefully built. Loving it.',
    name: 'Kabir Asani',
    handle: '@KabirAsani',
  },
  {
    text: 'This is my new favorite way of building projects quickly.',
    name: 'Paul Bratslavsky',
    handle: '@codingthirty',
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How is Reweb different than tools like Framer or Webflow?',
    a: 'Reweb exports real Next.js + Tailwind code that you own. Unlike Framer or Webflow, you\'re never locked into a proprietary platform — take the code and deploy anywhere.',
  },
  {
    q: 'What is the learning curve for Reweb?',
    a: 'If you already know React and Tailwind, Reweb feels instantly familiar. Most developers are productive within minutes, not days.',
  },
  {
    q: 'Is the generated code high quality?',
    a: 'Yes. We generate clean, idiomatic React/TypeScript with Tailwind and Shadcn UI. The output is production-ready and fully customizable.',
  },
  {
    q: 'Do you plan to add more sections and templates?',
    a: 'Absolutely. We ship new sections, blocks, and full-page templates regularly. Follow our roadmap to see what\'s coming next.',
  },
  {
    q: 'Can I import my own components?',
    a: 'Yes — Reweb integrates seamlessly with your existing component library. Import any React component and use it directly in the visual editor.',
  },
]

// ─── Features tabs ────────────────────────────────────────────────────────────
const features = [
  {
    id: 'visual',
    icon: <Layout size={18} />,
    title: 'Visual Builder',
    description: 'Edit Tailwind & Shadcn UI components with a visual builder and see your changes in real-time.',
  },
  {
    id: 'export',
    icon: <Code2 size={18} />,
    title: 'Code Export',
    description: 'Export a quality Next.js codebase. Customize without limits and host anywhere.',
  },
  {
    id: 'templates',
    icon: <Zap size={18} />,
    title: 'Pre-made templates',
    description: 'Get started quickly with beautifully designed blocks and templates.',
  },
  {
    id: 'themes',
    icon: <Sparkles size={18} />,
    title: 'AI-generated themes',
    description: 'Generate beautiful themes and color palettes from a prompt.',
  },
]

// ─── Accordion item ───────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
      >
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{q}</span>
        {open ? (
          <Minus size={16} className="shrink-0 text-purple-500" />
        ) : (
          <Plus size={16} className="shrink-0 text-zinc-400 dark:text-zinc-500" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

// ─── Avatar initials ──────────────────────────────────────────────────────────
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const colors = [
    'bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500',
    'bg-indigo-500', 'bg-orange-500', 'bg-teal-500', 'bg-red-500', 'bg-yellow-500',
  ]
  const idx = name.charCodeAt(0) % colors.length
  return (
    <div className={`w-10 h-10 rounded-full ${colors[idx]} flex items-center justify-center text-white text-sm font-semibold shrink-0`}>
      {initials}
    </div>
  )
}

// ─── App mockup ───────────────────────────────────────────────────────────────
function AppMockup() {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="mx-auto text-xs text-zinc-400 dark:text-zinc-500">reweb.so — Visual Builder</div>
      </div>
      {/* Content split */}
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-48 border-r border-zinc-100 dark:border-zinc-800 p-3 space-y-1.5">
          {['Hero', 'Features', 'Testimonials', 'Pricing', 'FAQ'].map(item => (
            <div
              key={item}
              className={`px-2.5 py-1.5 rounded-md text-xs font-medium cursor-default ${
                item === 'Hero'
                  ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                  : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Preview */}
        <div className="flex-1 p-4 bg-zinc-50/50 dark:bg-zinc-950/50">
          <div className="rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/10 border border-purple-500/20 p-6 mb-3">
            <div className="h-3 bg-purple-400/50 rounded w-3/4 mb-2" />
            <div className="h-3 bg-zinc-300/50 dark:bg-zinc-600/50 rounded w-1/2 mb-4" />
            <div className="h-8 bg-purple-500 rounded-lg w-28" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 rounded-lg bg-zinc-200/60 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState('visual')

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            The visual website builder
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400">
              for Next.js & Tailwind
            </span>
          </h1>

          <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Build at the speed of no-code. Export a Next.js, Tailwind and Shadcn UI app.
            Customize without limits.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-purple-500/20"
            >
              Build your site
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              View pricing →
            </Link>
          </div>

          {/* Tech logos row */}
          <div className="mt-10 flex items-center justify-center gap-6 text-zinc-400 dark:text-zinc-600">
            {['Next.js', 'React', 'Tailwind', 'TypeScript'].map(tech => (
              <span key={tech} className="text-xs font-medium uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>

          {/* App mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ── Visual editing section ───────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Visual editing, built for developers
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
              No need to learn new mental models and frameworks.
              It feels like editing code, but visually.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {[
                { title: 'Direct DOM editing', desc: 'Click any element on the canvas to select and edit it — just like in your browser devtools.' },
                { title: 'Tailwind-native', desc: 'Every change maps to real Tailwind classes. What you see is exactly what gets exported.' },
                { title: 'Live preview', desc: 'Your site updates instantly as you make changes. No refresh needed, no compilation delay.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-purple-500/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-900 p-6 font-mono text-sm overflow-hidden">
              <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
                <div><span className="text-purple-500">import</span> <span className="text-blue-400">&#123; Button &#125;</span> <span className="text-purple-500">from</span> <span className="text-green-400">&quot;@/components/ui/button&quot;</span></div>
                <div className="mt-3"><span className="text-purple-500">export</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Hero</span><span className="text-zinc-400">()</span> <span className="text-zinc-400">&#123;</span></div>
                <div className="ml-4"><span className="text-purple-500">return</span> <span className="text-zinc-400">(</span></div>
                <div className="ml-8 text-zinc-500"><span className="text-blue-300">&lt;section</span> <span className="text-green-300">className</span><span className="text-zinc-400">=</span><span className="text-orange-300">&quot;container flex flex-col gap-8 py-20&quot;</span><span className="text-blue-300">&gt;</span></div>
                <div className="ml-12 text-zinc-500"><span className="text-blue-300">&lt;h1</span> <span className="text-green-300">className</span><span className="text-zinc-400">=</span><span className="text-orange-300">&quot;font-bold text-4xl&quot;</span><span className="text-blue-300">&gt;</span></div>
                <div className="ml-16 text-zinc-300">Supercharge your workflow.</div>
                <div className="ml-12 text-zinc-500"><span className="text-blue-300">&lt;/h1&gt;</span></div>
                <div className="ml-12 text-zinc-500"><span className="text-blue-300">&lt;Button</span> <span className="text-green-300">size</span><span className="text-zinc-400">=</span><span className="text-orange-300">&quot;lg&quot;</span><span className="text-blue-300">&gt;</span>Get Started<span className="text-blue-300">&lt;/Button&gt;</span></div>
                <div className="ml-8 text-zinc-500"><span className="text-blue-300">&lt;/section&gt;</span></div>
                <div className="ml-4 text-zinc-400">)</div>
                <div className="text-zinc-400">&#125;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features tabs ────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-16">
            Build fast. Stay flexible.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Tabs list */}
            <div className="space-y-3">
              {features.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFeature(f.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    activeFeature === f.id
                      ? 'border-purple-500/40 bg-purple-500/5 dark:bg-purple-500/10'
                      : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-1 font-semibold ${
                    activeFeature === f.id
                      ? 'text-purple-500'
                      : 'text-zinc-900 dark:text-zinc-100'
                  }`}>
                    {f.icon}
                    {f.title}
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{f.description}</p>
                </button>
              ))}
            </div>

            {/* Preview panel */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-900 p-8 min-h-[280px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-500">
                  {features.find(f => f.id === activeFeature)?.icon}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {features.find(f => f.id === activeFeature)?.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                  {features.find(f => f.id === activeFeature)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              What people are saying
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Thousands of developers and teams love Reweb.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="break-inside-avoid border border-zinc-100 dark:border-zinc-800 rounded-xl p-5 bg-zinc-50 dark:bg-zinc-900"
              >
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t.name}</div>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500">{t.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">FAQ</h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Got other questions?{' '}
              <a href="https://discord.com" className="text-purple-500 hover:underline">
                Reach out in our Discord.
              </a>
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map(faq => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ───────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-zinc-100 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Code at the speed of no-code
          </h2>
          <p className="mt-5 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
            Build websites at the speed of no-code. Export a Next.js, Tailwind and Shadcn UI app.
            Customize without limits.
          </p>
          <Link
            to="/login"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-medium text-sm transition-colors shadow-lg shadow-purple-500/25"
          >
            Build your site
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
