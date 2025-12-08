'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect shadow-2xl shadow-purple-500/10 border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400' : 'text-white'}`}>
                Preply
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              How It Works
            </a>
            <a
              href="#features"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className={`font-semibold transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-yellow-300'
              }`}
            >
              FAQ
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  : 'bg-white text-purple-600 hover:bg-yellow-300'
              }`}
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#how-it-works"
                className={`font-semibold ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#features"
                className={`font-semibold ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className={`font-semibold ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className={`font-semibold ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold w-full"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
