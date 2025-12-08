'use client'

import { useState } from 'react'

export default function CTASection() {
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
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Will this help you in your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              learning journey?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join 1,000+ learners who are waiting to transform how they learn from videos. Be the first to experience the future of active learning.
          </p>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-purple-500/30">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <label htmlFor="waitlist-email" className="text-white text-lg font-semibold text-left">
                  Get early access to Preply
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    id="waitlist-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={loading}
                    className="flex-1 px-6 py-4 rounded-xl glass-effect border border-purple-500/30 text-white text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed pulse-glow whitespace-nowrap"
                  >
                    {loading ? 'Joining...' : 'Join Waitlist →'}
                  </button>
                </div>
                {message && (
                  <div className={`mt-2 p-4 rounded-xl ${message.type === 'success' ? 'glass-effect border border-green-400' : 'glass-effect border border-red-400'}`}>
                    <p className={`text-sm ${message.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                      {message.text}
                    </p>
                  </div>
                )}
                {!message && (
                  <p className="text-sm text-gray-500 text-left">
                    🎁 Early access bonus • 🔔 Launch notifications • 💜 Special pricing
                  </p>
                )}
              </div>
            </form>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-gray-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JD</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-gray-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SM</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-gray-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AK</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-400 border-2 border-gray-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">RL</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-950 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+996</span>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-white font-semibold">1,000+ learners waiting</p>
                  <p className="text-sm text-gray-400">Join them today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
