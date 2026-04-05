import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center px-6">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/8 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center">
        <p className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 leading-none mb-6">
          404
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
          Page not found
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
