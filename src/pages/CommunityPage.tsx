import { MessageCircle, Mail, Rss } from 'lucide-react'

function TwitterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-sky-500">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-500 dark:text-zinc-400">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const channels = [
  {
    icon: <MessageCircle size={22} className="text-indigo-500" />,
    name: 'Discord',
    description: 'Join thousands of developers building with Reweb. Ask questions, share projects, and get help in real-time.',
    cta: 'Join Discord',
    href: 'https://discord.com',
    accent: 'border-indigo-500/20 hover:border-indigo-500/40',
  },
  {
    icon: <TwitterIcon />,
    name: 'X / Twitter',
    description: 'Follow for product updates, tips, and community highlights. We post daily about design and development.',
    cta: 'Follow @reweb',
    href: 'https://twitter.com',
    accent: 'border-sky-500/20 hover:border-sky-500/40',
  },
  {
    icon: <GithubIcon />,
    name: 'GitHub',
    description: 'Browse our open-source components, report issues, and contribute to the project.',
    cta: 'View on GitHub',
    href: 'https://github.com',
    accent: 'border-zinc-300/50 dark:border-zinc-700/50 hover:border-zinc-400/50 dark:hover:border-zinc-600/50',
  },
  {
    icon: <Mail size={22} className="text-purple-500" />,
    name: 'Newsletter',
    description: 'Get the latest tutorials, feature announcements, and community spotlights delivered to your inbox every week.',
    cta: 'Subscribe',
    href: 'mailto:hello@reweb.so',
    accent: 'border-purple-500/20 hover:border-purple-500/40',
  },
  {
    icon: <YoutubeIcon />,
    name: 'YouTube',
    description: 'Watch tutorials, live-coding sessions, and product demos on our YouTube channel.',
    cta: 'Watch videos',
    href: 'https://youtube.com',
    accent: 'border-red-500/20 hover:border-red-500/40',
  },
  {
    icon: <Rss size={22} className="text-orange-500" />,
    name: 'Blog',
    description: 'Deep dives on design systems, Tailwind tips, and how we build Reweb — straight from the team.',
    cta: 'Read the blog',
    href: '#',
    accent: 'border-orange-500/20 hover:border-orange-500/40',
  },
]

const spotlights = [
  {
    title: 'Monthly showcase',
    description: 'Every month we feature the best projects built with Reweb. Submit yours for a chance to be featured.',
    emoji: '🏆',
  },
  {
    title: 'Office hours',
    description: 'Live Q&A sessions every Friday at 3pm UTC. Bring your questions, we\'ll debug together.',
    emoji: '🎙️',
  },
  {
    title: 'Bug bounty',
    description: 'Find a bug and get rewarded. Check our GitHub for open issues tagged "good first issue".',
    emoji: '🐛',
  },
]

export default function CommunityPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-24">

      {/* Header */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-500/8 dark:bg-purple-500/12 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-6">
          <h1 className="text-5xl font-bold tracking-tight mb-5">
            Join the community
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            Connect with thousands of developers building with Reweb.
            Share your work, ask questions, and help each other grow.
          </p>
        </div>
      </section>

      {/* Channels grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {channels.map(ch => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col p-6 rounded-2xl border bg-white dark:bg-zinc-900 transition-colors ${ch.accent}`}
            >
              <div className="mb-4">{ch.icon}</div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{ch.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">{ch.description}</p>
              <div className="mt-4 text-sm font-medium text-purple-500 group-hover:underline">
                {ch.cta} →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Spotlights */}
      <section className="border-t border-zinc-100 dark:border-zinc-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-10">Community programmes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {spotlights.map(s => (
              <div key={s.title} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                <div className="text-3xl mb-4">{s.emoji}</div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
