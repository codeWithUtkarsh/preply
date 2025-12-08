'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'Successfully joined the waitlist! We\'ll notify you when we launch.' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection and try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 animate-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl float-animation"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500 rounded-full opacity-20 blur-3xl float-animation" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-400/20 border border-yellow-400 rounded-full">
            <p className="text-yellow-300 font-semibold">🚀 Coming Soon</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Watching.<br />
            <span className="text-yellow-300">Start Learning.</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            AI-powered flashcards and quizzes that appear while you watch any educational video.
          </p>

          {/* Pain Points Section */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">Sound Familiar?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-base">You watch a 1-hour lecture but can't remember the key concepts</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-base">You zone out halfway through and miss important information</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-base">You spend hours rewatching just to find one specific explanation</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white text-base">You have no idea what you actually learned until the exam</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Question */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Would you be happy to try a solution that fixes this?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Join our waitlist and be the first to experience AI-powered active learning!
            </p>
          </div>

          {/* Email capture form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={loading}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-yellow-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 pulse-glow"
              >
                {loading ? 'Joining...' : 'Join Waitlist →'}
              </button>
            </div>
            {message && (
              <div className={`mt-3 p-3 rounded-lg ${message.type === 'success' ? 'bg-green-500/20 border border-green-400' : 'bg-red-500/20 border border-red-400'}`}>
                <p className={`text-sm ${message.type === 'success' ? 'text-green-100' : 'text-red-100'}`}>
                  {message.text}
                </p>
              </div>
            )}
            {!message && (
              <p className="text-sm text-blue-100 mt-3">Join 1,000+ people on the waitlist • Be notified at launch</p>
            )}
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#how-it-works"
              className="px-6 py-3 text-white hover:text-yellow-300 font-semibold transition-colors duration-200"
            >
              See How It Works →
            </a>
          </div>

          {/* Product Preview */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                <div className="text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-2xl font-bold mb-2">Product Preview Coming Soon</p>
                  <p className="text-blue-200 text-sm mt-2 max-w-md mx-auto">We're building something amazing! Join the waitlist to get exclusive early access and see Preply in action.</p>
                </div>
              </div>
              {/* Simulated flashcard overlay */}
              <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs transform rotate-2">
                <p className="text-sm font-semibold text-purple-900 mb-2">Coming Soon:</p>
                <p className="text-xs text-gray-700">AI-generated quizzes & flashcards during video playback</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">3x</div>
              <div className="text-sm text-blue-100 mt-1">Better Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">60%</div>
              <div className="text-sm text-blue-100 mt-1">Less Study Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">AI-Powered</div>
              <div className="text-sm text-blue-100 mt-1">Smart Learning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">Early 2025</div>
              <div className="text-sm text-blue-100 mt-1">Launching Soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
