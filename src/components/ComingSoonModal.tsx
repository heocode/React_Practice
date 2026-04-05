import { X, Zap } from 'lucide-react'
import { useEffect } from 'react'

interface Props {
  onClose: () => void
}

export default function ComingSoonModal({ onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-5">
          <Zap size={22} className="text-purple-500" />
        </div>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
          Payments coming soon
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          We're working on it! Billing will be available in the next release.
          Stay tuned — we'll notify you as soon as it's ready.
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-sm font-medium transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
