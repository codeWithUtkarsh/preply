'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [activeCard, setActiveCard] = useState(0)

  const painPoints = [
    {
      title: "Can't remember key concepts",
      description: "Watch a 1-hour lecture but retain almost nothing",
      color: "red",
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Zone out halfway through",
      description: "Lose focus and miss critical information",
      color: "orange",
      icon: (
        <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Waste hours rewatching",
      description: "Scrub through videos to find one explanation",
      color: "yellow",
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "No idea what you learned",
      description: "Only realize gaps when it's exam time",
      color: "purple",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % painPoints.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [painPoints.length])

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
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-20 blur-[120px] float-animation"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full opacity-20 blur-[120px] float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500 rounded-full opacity-10 blur-[100px] float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="slide-up text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-purple-500/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-300">Launching Early 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Learn 3x Faster
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
                From Any Video
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              No Ads, AI-powered adaptive learning and quizzes. Cut down your preparation time by 50%
              <span className="text-white font-semibold"> Never forget what you learn.</span>
            </p>

            {/* Quick Stats */}
            <div className="flex gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">3x</div>
                <div className="text-sm text-gray-500">Better Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">60%</div>
                <div className="text-sm text-gray-500">Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">10+</div>
                <div className="text-sm text-gray-500">On Waitlist</div>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
                <input
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
                <div className={`mt-4 p-4 rounded-xl ${message.type === 'success' ? 'glass-effect border border-green-400' : 'glass-effect border border-red-400'}`}>
                  <p className={`text-sm ${message.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>
                    {message.text}
                  </p>
                </div>
              )}
            </form>

            <p className="text-sm text-gray-500">
              Join 10+ learners • No credit card required • Early access
            </p>
          </div>

          {/* Right Column - Circular Rotating Carousel */}
          <div className="relative h-[550px] overflow-hidden">
            {/* Carousel Container */}
            <div className="relative h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                {painPoints.map((point, index) => {
                  // Calculate position in the rotation
                  const position = (index - activeCard + painPoints.length) % painPoints.length

                  // Determine visibility and position
                  let translateY = '0%'
                  let opacity = 0
                  let scale = 0.85
                  let zIndex = 0

                  if (position === 0) {
                    // Current card (center)
                    translateY = '0%'
                    opacity = 1
                    scale = 1
                    zIndex = 30
                  } else if (position === 1) {
                    // Next card (below)
                    translateY = '115%'
                    opacity = 0.6
                    scale = 0.85
                    zIndex = 20
                  } else if (position === painPoints.length - 1) {
                    // Previous card (above)
                    translateY = '-115%'
                    opacity = 0.6
                    scale = 0.85
                    zIndex = 20
                  } else {
                    // Hidden cards
                    translateY = position < painPoints.length / 2 ? '230%' : '-230%'
                    opacity = 0
                    scale = 0.7
                    zIndex = 0
                  }

                  return (
                    <div
                      key={index}
                      className="absolute left-0 right-0 transition-all duration-700 ease-in-out"
                      style={{
                        top: '50%',
                        transform: `translateY(calc(-50% + ${translateY})) scale(${scale})`,
                        opacity,
                        zIndex
                      }}
                    >
                      <div className={`glass-effect rounded-2xl p-6 border-2 h-[160px] flex flex-col justify-center ${
                        point.color === 'red' ? 'border-red-500/40' :
                        point.color === 'orange' ? 'border-orange-500/40' :
                        point.color === 'yellow' ? 'border-yellow-500/40' :
                        'border-purple-500/40'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            point.color === 'red' ? 'bg-red-500/20' :
                            point.color === 'orange' ? 'bg-orange-500/20' :
                            point.color === 'yellow' ? 'bg-yellow-500/20' :
                            'bg-purple-500/20'
                          }`}>
                            {point.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                            <p className="text-sm text-gray-400">{point.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {painPoints.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeCard
                      ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <a href="#features" className="flex flex-col items-center gap-2 group">
          <span className="text-sm text-gray-500 group-hover:text-purple-400 transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 group-hover:border-purple-500/60 flex items-start justify-center p-2 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
