'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    // Add your email capture logic here
    alert('Thanks for signing up! We\'ll be in touch soon.')
    setEmail('')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl float-animation"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500 rounded-full opacity-20 blur-3xl float-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Watching.<br />
            <span className="text-yellow-300">Start Learning.</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            AI-powered flashcards and quizzes that appear while you watch any educational video
          </p>

          {/* Email capture form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Try Free
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-3">No credit card required • Process your first video free</p>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#demo"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-lg font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Watch 2-min Demo
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 text-white hover:text-yellow-300 font-semibold transition-colors duration-200"
            >
              See How It Works →
            </a>
          </div>

          {/* Video demo placeholder */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/5">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-lg">Watch Preply in Action</p>
                  <p className="text-blue-200 text-sm mt-2">See how AI transforms your learning experience</p>
                </div>
              </div>
              {/* Simulated flashcard overlay */}
              <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs transform rotate-2">
                <p className="text-sm font-semibold text-purple-900 mb-2">Quick Quiz:</p>
                <p className="text-xs text-gray-700">What is the main benefit of photosynthesis?</p>
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
              <div className="text-4xl font-bold text-yellow-300">500+</div>
              <div className="text-sm text-blue-100 mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300">10K+</div>
              <div className="text-sm text-blue-100 mt-1">Videos Processed</div>
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
